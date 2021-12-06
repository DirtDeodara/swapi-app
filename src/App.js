import "./App.css";
import { useState, useEffect } from "react";
import List from "./components/List";
import starwarsLogo from "./starwars.jpeg";

const BASE_URL = "https://swapi.dev/api/people/";
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const [heightArray, setHeightArray] = useState([]);
  const [massArray, setMassArray] = useState([]);
  const [avgHeight, setAvgHeight] = useState();
  const [avgMass, setAvgMass] = useState();

  const getData = async (query = page) => {
    const param = typeof query === "string" ? "search" : "page";

    try {
      const res = await fetch(`${BASE_URL}?${param}=${query}`, {
        method: "GET",
      });
      const data = await res.json();
      setData(data);

      const list = data.results;
      list.forEach((result) => {
        if (result.height !== "unknown") {
          let height = parseInt(result.height);
          setHeightArray((prevState) => [...prevState, height]);
        }
        if (result.mass !== "unknown") {
          let mass = parseInt(result.mass);
          setMassArray((prevState) => [...prevState, mass]);
        }
      });
    } catch {
      console.error("It's a trap!");
    } finally {
      if (heightArray.length > 0) {
        setAvgHeight(heightArray.reduce(reducer) / heightArray.length);
      }
      if (massArray.length > 0) {
        setAvgMass(massArray.reduce(reducer) / massArray.length);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page, avgMass, avgHeight]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(query);
  };

  const handleTextChange = (e) => {
    setQuery(e.target.value);
  };

  const incrementPagenNum = () => {
    setPage((prevState) => prevState + 1);
  };
  const decrementPagenNum = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="appContainer">
      {!isLoading && (
        <>
          <img
            className="starwarsLogo"
            src={starwarsLogo}
            alt="starwars logo"
          />
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="field">
              <input
                className="input"
                name="textInput"
                type="text"
                placeholder="Search for your favorite character"
                onChange={handleTextChange}
              />
            </div>
            <button className="searchBtn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div>
            <button
              className="pagination"
              onClick={decrementPagenNum}
              disabled={page === 1}
            >
              prev page
            </button>
            <button
              className="pagination"
              onClick={incrementPagenNum}
              disabled={data.count / page < 10}
            >
              next page
            </button>
          </div>
          <div className="pageNumber">{page}</div>
          <List data={data} />
          <div className="averages">
            <div>Average weight: {avgHeight}</div>
            <div>Average weight: {avgMass}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
