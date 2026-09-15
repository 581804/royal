import mongoose, { Schema, models } from 'mongoose';
const ProductSchema = new Schema({
  name:{type:String,required:true}, slug:{type:String,required:true,unique:true}, category:{type:String,required:true},
  description:String, image:{type:String,required:true}, imageType:{type:String,enum:['local','url'],default:'url'},
  gallery:[String], rentalPrice:{type:Number,default:0}, deposit:{type:Number,default:0}, available:{type:Boolean,default:true}, featured:{type:Boolean,default:false}, sortOrder:{type:Number,default:0}
},{timestamps:true});
export const Product = models.Product || mongoose.model('Product',ProductSchema);
