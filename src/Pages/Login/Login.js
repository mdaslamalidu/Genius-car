import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://genius-car-server-virid-three.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("geniusToken", data.token);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-12 my-9">
        <div className="text-center lg:text-left w-1/2 py-5">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2 py-12">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Genius?{" "}
            <Link className="text-orange-500 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
