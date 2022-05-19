const { timestampFormat } = require("concurrently/src/defaults");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Please enter the price"],
    },
    resName: {
      type: String,
    },
    restaurant: {
      type: mongoose.Schema.ObjectId,
      ref: "Restaurant",
    },

    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    dishData: [
      new mongoose.Schema(
        {
          dish: {
            type: mongoose.Schema.ObjectId,
            ref: "Dish",
          },
          quantity: {
            type: Number,
            required: [true, "Please enter the quantity of the dish"],
          },
        },
        { _id: false }
      ),
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
