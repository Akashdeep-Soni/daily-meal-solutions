import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";
import Spinner from "../layout/Spinner";
import OrderItem from "../Orders/OrderItem";

const RestaurantOrders = () => {
  const params = useParams();

  const resContext = useContext(ResContext);
  const { orders, getAllResOrders, loading } = resContext;

  useEffect(() => {
    getAllResOrders(params.id);
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (orders && orders.length === 0 && !loading) {
    return <h4>No orders has been placed. Please check again later.</h4>;
  } else {
    return (
      <>
        <div className="card pink darken-4">
          <div className="card-content white-text">
            <div className="flow-text center">Restaurant Orders</div>
          </div>
          <br />
        </div>
        <div className="section-grid-2">
          {orders &&
            orders.length > 0 &&
            orders.map((order) => <OrderItem key={order._id} order={order} />)}
        </div>
      </>
    );
  }
};

export default RestaurantOrders;
