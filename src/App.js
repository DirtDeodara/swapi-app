import "./App.css";
import { useState, useEffect } from "react";
import List from "./components/List";

//TODO FIGURE OUT WHY I HAVE TO HAVE data.data AND item.item
//TODO CLEAN UP UNUSED FILES AND FOLDERS

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (type, page = 1) => {
    try {
      const res = await fetch(`https://swapi.dev/api/${type}/?page=${page}`, {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData("people", 1);
  }, []);

  return <div className="App">{!isLoading && <List data={data} />}</div>;
};

export default App;
