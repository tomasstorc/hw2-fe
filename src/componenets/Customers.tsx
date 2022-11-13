import React from "react";

type CustomersProps = {
  numOfCustomers: number;
};

const Customers = ({ numOfCustomers }: CustomersProps) => {
  return (
    <div>
      <h1>Celkový počet nakupujících</h1>
      <p>{numOfCustomers}</p>
    </div>
  );
};

export default Customers;
