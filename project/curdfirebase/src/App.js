import React from "react";
import Table from "./Table";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Mystate from "./Context/Mystate";



function App() {
  return (
    <Mystate>
      <Table />
    </Mystate>

  );
}

export default App;
