import mongoose,{Schema,models} from 'mongoose';
const CategorySchema=new Schema({name:{type:String,required:true},slug:{type:String,unique:true},description:String,image:String,sortOrder:{type:Number,default:0}},{timestamps:true});
export const Category=models.Category||mongoose.model('Category',CategorySchema);
