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

const orderSchema= new Schema({
item:String,
price:Number,
});


const customerSchema=new Schema({
  name:String,
  orders:[
    {
      type:Schema.Types.ObjectId,
      ref:"Order"
    }
  ]
});

// customerSchema.pre("findOneAndDelete",async()=>{
//   console.log("PRE MIDDLEWARE")
// })

customerSchema.post("findOneAndDelete",async(customer)=>{
  if(customer.orders.length){
 let res=await Order.deleteMany({_id:{$in:customer.orders}});
 console.log(res);
  }

});


const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

const findCustomer=async()=>{
  let result=await Customer.find({}).populate("orders");
  console.log(result[0])  
}


const addCust=async()=>{
  let newCust=new Customer({
    name:"karan Arjun",
  });

  let newOrder=new Order({
    item:"Pan cake",
    price:250,
  })

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer")

}

// addCust();


const delCust=async()=>{
  let data=await Customer.findByIdAndDelete("697e66ed161f91c10e8afa33")
  console.log(data);

};

delCust();
//ise method se customer mai se delete to ho gaya but orders se delete nahio hoga 
