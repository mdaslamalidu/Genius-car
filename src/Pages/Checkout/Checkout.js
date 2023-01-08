import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const message = form.message.value;
    const phone = form.phone.value;
    const email = user?.email || "notregistered";

    const order = {
      service: _id,
      serviceName: title,
      price,
      message,
      email,
      customer: name,
      phone,
    };

    console.log(order);
    console.log("clicked");
    fetch("https://genius-car-server-virid-three.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("data added");
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Your Ordered Ordered is {title}</h1>
      <h4>Price {price}</h4>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full "
            defaultValue={user?.email}
          />
          <input
            type="text"
            name="postcode"
            placeholder="Your Postcode"
            className="input input-bordered w-full "
          />
          <select defaultValue="BDT" className="select select-accent w-full ">
            <option disabled selected>
              Select Currency.
            </option>
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-3"
          name="message"
          placeholder="Your Address"
        ></textarea>
        <input className="btn" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
