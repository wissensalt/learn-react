import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };

  const minus = () => {
    setValue(value - 1);
  };

  return (
      <div className="container m-auto">
        <div className="row">
          <h1 className="text-center">{value}</h1>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-primary col-3 m-3" onClick={add}>(+) Add</button>
          <button className="btn btn-danger col-3 m-3" onClick={minus}>(-) Minus</button>
        </div>
      </div>
  );
};

export default App;
