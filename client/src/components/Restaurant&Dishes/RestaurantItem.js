import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";
import authContext from "../../context/auth/authContext";

const RestaurantItem = ({ restaurant }) => {
  const { _id, name, address, contactNumber, description, cuisine } =
    restaurant;

  const {
    user: { role },
  } = useContext(authContext);

  const resContext = useContext(ResContext);
  const { setRestaurant } = resContext;

  const onEdit = () => {
    setRestaurant(restaurant);
  };

  return (
    <div id="my-card" className="card  darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">{name}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {address}, {contactNumber}
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {cuisine}
          </p>
        </blockquote>
        <div className="">
          <div className="activator btn-floating pink right">
            <i className="material-icons center">vertical_align_top</i>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="card-links" style={{ justifyContent: "space-between" }}>
          <Link className="white-text" to={`/res/${_id}`}>
            View Dishes
          </Link>
          <a
            id="add"
            className="btn transparent"
            href="#restaurant"
            style={{ outline: "1px solid pink" }}
            onClick={onEdit}
          >
            Edit
            <i className="large material-icons right">mode_edit</i>
          </a>
        </div>
      </div>
      <div className="card-reveal grey lighten-4">
        <span className="card-title" style={{ fontWeight: 500 }}>
          About
          <i className="material-icons right">close</i>
        </span>
        <p className="flow-text" style={{ fontSize: "1.3rem" }}>
          {description}
        </p>
      </div>

      {role === "restaurant" && (
        <Link to={`/res/${_id}/orders`}>
          <a
            className="waves-effect waves-light pink btn"
            style={{ width: "100%" }}
          >
            View Orders
          </a>
        </Link>
      )}
    </div>
  );
};

RestaurantItem.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantItem;
