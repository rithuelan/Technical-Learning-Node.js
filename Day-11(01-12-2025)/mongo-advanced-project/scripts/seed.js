require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/product.model');
const Warehouse = require('../models/warehouse.model');
const User = require('../models/user.model');
const Order = require('../models/order.model');

(async () => {
  await connectDB(process.env.MONGO_URI);
  console.log('Seeding DB...');
  await Promise.all([Product.deleteMany({}), Warehouse.deleteMany({}), User.deleteMany({}), Order.deleteMany({})]);

  const wh1 = await Warehouse.create({ name: 'Mumbai WH', location: { city: 'Mumbai', country: 'IN' }});
  const wh2 = await Warehouse.create({ name: 'Delhi WH', location: { city: 'Delhi', country: 'IN' }});

  const products = [];
  for (let i=0;i<200;i++){
    products.push({ sku: 'SKU-'+i, name: 'Product '+i, category: i%3?'electronics':'general', price: Math.round(Math.random()*10000), warehouseIds: [ (i%2)?wh1._id:wh2._id ] });
  }
  const inserted = await Product.insertMany(products);

  // add inventory
  for (let p of inserted.slice(0,50)){
    await Warehouse.findByIdAndUpdate( (p.warehouseIds[0]), { $push: { inventory: { productId: p._id, qty: Math.floor(Math.random()*100) } }});
  }

  const user = await User.create({ name: 'Demo User', email: 'demo@example.com' });

  await Order.create({ userId: user._id, items: [{ productId: inserted[0]._id, qty: 2, priceAtOrder: inserted[0].price }], warehouseId: wh1._id });

  console.log('Seeding complete');
  process.exit(0);
})();
