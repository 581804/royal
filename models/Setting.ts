import mongoose,{Schema,models} from 'mongoose';
const SettingSchema=new Schema({key:{type:String,unique:true},value:Schema.Types.Mixed},{timestamps:true});
export const Setting=models.Setting||mongoose.model('Setting',SettingSchema);
