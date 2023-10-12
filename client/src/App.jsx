import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useState to store backend data coming in from api on the server, initiate with an empty array
  const [backendData, setBackendData] = useState({});

  // useEffect to create an 'effect' which will be the fetching of data from the api
  useEffect(() => {
    // fetch function that targets the '/api' defined in index.js on the server
    fetch("/api")
      .then(
        // response is a  variable for that data coming which we are then parsing into json
        response => response.json()
      )
      .then(
        // taking the now json data and storing its value to be used
        data => {
          // where the set function in useState is used to store the data into the backendData variable
          setBackendData(data);
        }
      );
  }, []); // empty array tells the fetch api to only run on the first render of componenet

  return (
      <div>
          {console.log(backendData)}
          {typeof backendData.dogs === "undefined" ? (
            
            <p> Loading... </p>
          ) : (
            backendData.dogs.map((dog, i) => (<p key={i}> {dog} </p>))
          )}
      </div>
  );
}

export default App;
