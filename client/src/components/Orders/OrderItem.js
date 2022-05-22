import React, { useContext } from "react";
import PropTypes from "prop-types";
import authContext from "../../context/auth/authContext";

const OrderItem = ({ order }) => {
  console.log(order);
  const {
    amount,
    resName,
    dishData,
    user: { name, email },
  } = order;

  const {
    user: { role },
  } = useContext(authContext);

  return (
    <div id="order-item" className="card pink darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">Amount: ₹{amount}</div>
        {role === "restaurant" && (
          <div className="flow-text center">
            Ordered by: {name} | {email}
          </div>
        )}
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {resName}
          </p>
        </blockquote>
      </div>
      <div className="card-action">
        <span
          style={{ width: "100%" }}
          className="activator btn pink center"
          data-target={order._id}
        >
          View Order
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Your Order<i className="material-icons right">close</i>
        </span>
        <ul className="collection">
          {dishData.map(
            (data) =>
              data.quantity > 0 && (
                <li key={data.dish._id} className="collection-item">
                  {data.dish.name}
                  <div className="secondary-content"> Qty: {data.quantity}</div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderItem;
