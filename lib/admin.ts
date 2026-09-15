import {cookies} from 'next/headers'; export async function isAdmin(){return (await cookies()).get('rv_admin')?.value==='1'}
