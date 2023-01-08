import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrdersCart from "./OrdersCart";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://genius-car-server-virid-three.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setOrders(data);
        }
      })
      .catch((err) => console.error(err));
  }, [user?.email, logout]);

  const handleDelete = (id) => {
    // const procced = window.confirm("Are you want to delete the product");
    // if (procced) {
    fetch(`https://genius-car-server-virid-three.vercel.app/orders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const filter = orders.filter((odr) => odr._id !== id);
          setOrders(filter);
          alert("delete successfully");
        }
    });
  };

  const handleUpdate = (id) => {
    fetch(`https://genius-car-server-virid-three.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h3>You Have {orders.length} orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <button>Delete</button>
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersCart
                order={order}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                key={order._id}
              ></OrdersCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
