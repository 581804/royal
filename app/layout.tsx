import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'The Royal Vastra | Royal Wardrobes on Rent',description:'Premium ethnic wear rental for weddings, receptions and every celebration.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
