import "./App.css";
import { useState, useEffect } from "react";
import List from "./components/List";

//TODO FIGURE OUT WHY I HAVE TO HAVE data.data AND item.item
//TODO CLEAN UP UNUSED FILES AND FOLDERS
//TODO CLEAN UP UNUSED CLASSNAMES AND CSS

const BASE_URL = "https://swapi.dev/api/";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  const [type, setType] = useState("people");

  const getData = async (type = "people", query = 1) => {
    const param = typeof query === "string" ? "search" : "page";
    const URL = `${BASE_URL}${type}/?${param}=${query}`;
    console.log("URL = ", URL);
    try {
      const res = await fetch(`${BASE_URL}${type}/?${param}=${query}`, {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(type, query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="appContainer">
      <form className="search" onSubmit={handleSubmit}>
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            name="textInput"
            type="text"
            onChange={handleChange}
          />
        </div>
        <button className="searchBtn" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {!isLoading && <List data={data} />}
    </div>
  );
};

export default App;
