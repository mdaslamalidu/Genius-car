import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SuccessPayment = () => {
  const [order, setOrder] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  console.log(transactionId);

  useEffect(() => {
    fetch(`http://localhost:5000/order/by_paymentId/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [transactionId]);
  return (
    <div>
      <h2>Successfully paid Congrats!!</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{order.serviceName}</th>
              <td>{order.price}</td>
              <td>{order.address}</td>
              <td>{order.transactionId}</td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn btn-primary ml-auto mt-5 block print:hidden"
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
