import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPayment = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  console.log(transactionId);
  return <div></div>;
};

export default SuccessPayment;
