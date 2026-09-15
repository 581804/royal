import {NextResponse} from 'next/server'; import {connectDB} from '@/lib/db'; import {Category} from '@/models/Category'; import {isAdmin} from '@/lib/admin';
export const dynamic='force-dynamic';
export async function GET(){await connectDB();return NextResponse.json(await Category.find().sort({sortOrder:1}).lean());}
export async function POST(req:Request){if(!(await isAdmin()))return NextResponse.json({error:'Unauthorized'},{status:401}); await connectDB();const b=await req.json();b.slug=b.slug||b.name.toLowerCase().replace(/[^a-z0-9]+/g,'-');return NextResponse.json(await Category.create(b),{status:201});}
