import mongoose from 'mongoose';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/royal_vastra';
const categories = [
  ['Sherwani','Hand-embroidered groom silhouettes'],
  ['Indo-Western','Modern cuts, heritage detail'],
  ['Jodhpuri','Brocade bandhgala tailoring'],
  ['Lehenga','Bridal zardozi and zari work'],
  ['Gown','Reception couture with trains']
];
const products = [
  ['Ivory Royal Sherwani','Sherwani','/demo/sherwani.jpg',2999],
  ['Midnight Indo-Western','Indo-Western','/demo/indo-western.jpg',2499],
  ['Royal Blue Jodhpuri','Jodhpuri','/demo/jodhpuri.jpg',2299],
  ['Crimson Bridal Lehenga','Lehenga','/demo/lehenga.jpg',4999],
  ['Champagne Reception Gown','Gown','/demo/gown.jpg',3999]
];

async function main(){
  await mongoose.connect(uri);
  await Category.deleteMany({});
  await Product.deleteMany({});
  await Category.insertMany(categories.map(([name,description]:[string,string],i)=>({name,description,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),sortOrder:i+1})));
  await Product.insertMany(products.map(([name,category,image,rentalPrice]:[string,string,string,number],i)=>({name,category,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),description:'Couture-grade ethnic wear curated for special moments.',image,imageType:'local',rentalPrice,deposit:1000,available:true,featured:true,sortOrder:i+1})));
  console.log('Seeded Royal Vastra');
  await mongoose.disconnect();
}
main().catch(e=>{console.error(e);process.exit(1)});
