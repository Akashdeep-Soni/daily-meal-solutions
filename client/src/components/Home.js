import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Home = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  });

  return (
    <div id="showcase" style={{ margin: "0 -1rem" }}>
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">
              Daily Meal{" "}
              <span className="amber-text text-lighten-4">Solutions</span>
            </h2>
            <p className="flow-text teal-text">
              Join us to enjoy the delicious meal.
            </p>
            <p className="lead">
              Order now to get the food delivered at your doorstep.
            </p>
          </div>
          <div className="card-action">
            <div className="card-links">
              <a href="/register" className=" #0E6B58 btn btn-large">
                Register
              </a>
              <a href="/login" className="0E6B58 btn btn-large">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
