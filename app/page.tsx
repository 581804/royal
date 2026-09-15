import {connectDB} from '@/lib/db'; import {Product} from '@/models/Product'; import {Category} from '@/models/Category'; import Site from '@/components/Site';
export const dynamic='force-dynamic';
export default async function Home(){
 let products:any[]=[],categories:any[]=[]; try{await connectDB();products=await Product.find({featured:true}).sort({sortOrder:1}).lean();categories=await Category.find().sort({sortOrder:1}).lean();}catch{}
 return <Site products={JSON.parse(JSON.stringify(products))} categories={JSON.parse(JSON.stringify(categories))}/>;
}
