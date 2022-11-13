import { useState, useEffect } from "react";
import "./App.css";
import Customers from "./componenets/Customers";
import ShopCounter from "./componenets/ShopCounter";
import Clock from "./componenets/Clock";
import Chart from "./componenets/Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  let [goods, setGoods] = useState(0);
  let [toys, setToys] = useState(0);
  let [parfume, setParfume] = useState(0);
  let [electro, setElectro] = useState(0);
  let numOfCustomers = goods + toys + parfume + electro;
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const setZero = () => {
    setGoods(0);
    setToys(0);
    setParfume(0);
    setElectro(0);
  };
  return (
    <div className="App">
      <Row>
        <Col>
          {" "}
          <Customers numOfCustomers={numOfCustomers} />
        </Col>
        <Col>
          {" "}
          <Chart
            goods={goods}
            toys={toys}
            parfume={parfume}
            electro={electro}
          />
        </Col>
      </Row>

      <Clock dateState={dateState} />
      <Row>
        <Col>
          <ShopCounter
            setZero={setZero}
            name="Domácí potřeby"
            counter={goods}
            setAddCustomer={setGoods}
            max={40}
            dateState={dateState}
          />
        </Col>
        <Col>
          <ShopCounter
            setZero={setZero}
            name="Hračky"
            counter={toys}
            setAddCustomer={setToys}
            max={20}
            dateState={dateState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ShopCounter
            name="Parfémy"
            setZero={setZero}
            counter={parfume}
            setAddCustomer={setParfume}
            max={10}
            dateState={dateState}
          />
        </Col>
        <Col>
          <ShopCounter
            setZero={setZero}
            name="Elektro"
            counter={electro}
            setAddCustomer={setElectro}
            max={50}
            dateState={dateState}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
