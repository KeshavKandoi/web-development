const mongoose=require("mongoose");
const {Schema}=mongoose;


async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")

}



main()
.then(()=>{
console.log("successful")
})
.catch((error)=>{
console.log(error)
})


/* ================= SCHEMAS ================= */

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

/* ================= MODELS ================= */

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

/* ================= ADD ORDERS ================= */

// const addOrders = async () => {
//   const res = await Order.insertMany([
//     { item: "Samosa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Pizza", price: 120 },
//   ]);
//   console.log("Orders added:", res);
// };

//  addOrders();

//  Run addOrders() only once
//  After that, comment it and run addCustomer()


/* ================= ADD CUSTOMER ================= */

const addCustomer = async () => {
  const cust1 = new Customer({
    name: "Rahul Kumar",
  });

  const order1 = await Order.findOne({ item: "Chips" });
  const order2 = await Order.findOne({ item: "Pizza" });

  cust1.orders.push(order1._id);
  cust1.orders.push(order2._id);

  const result = await cust1.save();
  console.log("Customer saved:", result);
};

 addCustomer();

