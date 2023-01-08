import React, { useEffect, useState } from "react";

const OrdersCart = ({ order, handleDelete, handleUpdate }) => {
  const { _id, serviceName, price, customer, phone, service, status } = order;
  const [orderSurvices, setOrderSurvices] = useState({});

  useEffect(() => {
    fetch(
      `https://genius-car-server-virid-three.vercel.app/services/${service}`
    )
      .then((res) => res.json())
      .then((data) => setOrderSurvices(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-20 h-20">
              {orderSurvices?.img && (
                <img
                  src={orderSurvices?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersCart;
