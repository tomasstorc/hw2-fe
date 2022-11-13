import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";

type ShopProps = {
  name: string;
  counter: number;
  setAddCustomer: any;
  max: number;
  dateState: Date;
  setZero: () => void;
};

function ShopCounter({
  name,
  counter,
  setAddCustomer,
  max,
  dateState,
  setZero,
}: ShopProps) {
  let closeHour = dateState.getHours();

  useEffect(() => {
    setInterval(() => {
      if (closeHour < 6 || closeHour >= 22) setZero();
    }, 5000);
  });

  return (
    <div className="container">
      <h1 className="shop-heading">{name}</h1>
      <Row>
        <Col>
          <p>Aktuální počet zákazníků</p>
        </Col>
        <Col>
          <p className={counter >= max ? "warning" : ""}>{counter}</p>
        </Col>
        <Col>
          <button
            className="button"
            disabled={counter >= max || closeHour < 6 || closeHour >= 22}
            onClick={() => {
              setAddCustomer((prevState: any) => prevState + 1);
            }}
          >
            +1
          </button>
        </Col>
        {counter >= max && (
          <p className="warning">byl dosažen maximální počet zákazníků</p>
        )}
        {(closeHour < 6 || closeHour >= 22) && (
          <p className="warning">Zavřeno do 6:00</p>
        )}
      </Row>
    </div>
  );
}

export default ShopCounter;
