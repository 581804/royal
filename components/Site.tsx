'use client';
import { useState } from 'react';
import { Instagram, Facebook, MapPin, Mail, Globe2, Crown, IndianRupee, Leaf, CalendarDays } from 'lucide-react';

const FALLBACK = [
  { name: 'Sherwani', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=88', description: 'Hand-embroidered groom silhouettes' },
  { name: 'Indo-Western', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=88', description: 'Modern cuts, heritage detail' },
  { name: 'Jodhpuri', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=88', description: 'Brocade bandhgala tailoring' },
  { name: 'Lehenga', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=88', description: 'Bridal zardozi and zari work' },
  { name: 'Gown', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1400&q=88', description: 'Reception couture with trains' },
];

export default function Site({ products, categories }: { products: any[]; categories: any[] }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const items = products.length ? products : FALLBACK;
  const cats = categories.length ? categories.slice(0, 5).map((c: any, i: number) => ({ ...FALLBACK[i], ...c })) : FALLBACK;

  return (
    <main className="pdfSite">
      <section className="heroPdf" id="home">
        <div className="brandFrame"><img src="/logo.png" alt="The Royal Vastra" /></div>
        <p className="eyebrow">COMING SOON · UDAIPUR</p>
        <h1>ROYAL WARDROBES,<br />ON RENT</h1>
        <p className="heroLead">Tradition for every occasion. Bridal lehengas, groom sherwanis and<br className="desktop" /> reception couture — reserved for your celebration, returned when the last<br className="desktop" /> song ends.</p>
        <div className="seasonLine">BY THIS SEASON</div>
      </section>

      <section className="collectionPdf" id="collections">
        <div className="sectionKicker">THE COLLECTION</div>
        <h2>Five Ways to Wear the Occasion</h2>
        <div className="thinRule" />
        <div className="collectionGrid">
          {cats.map((c: any, i: number) => (
            <article className={`collectionCard ${i === 4 ? 'wide' : ''}`} key={c.name}>
              <img src={items[i % items.length]?.image || FALLBACK[i].image} alt={c.name} />
              <div className="collectionCaption"><h3>{c.name}</h3><p>{c.description || FALLBACK[i].description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="whyPdf" id="about">
        <div className="sectionKicker">WHY THE ROYAL VASTRA</div>
        <h2>Heritage, Without the Price Tag</h2>
        <div className="whyGridPdf">
          <Why icon={<Crown />} title="Premium Collection" text="Couture-grade craftsmanship, curated piece by piece." />
          <Why icon={<IndianRupee />} title="Cost-Effective Fashion" text="Wear designer for a fraction of the buying price." />
          <Why icon={<Leaf />} title="Sustainable Choice" text="One outfit, many celebrations — far less waste." />
          <Why icon={<CalendarDays />} title="For Every Occasion" text="Weddings, engagements, festivals and every function between." />
        </div>
      </section>

      <section className="earlyPdf" id="royal-list">
        <div className="sectionKicker">EARLY ACCESS</div>
        <h2>Join the Royal List</h2>
        <p>Members receive a one-time 10% discount code for their first order.</p>
        <div className="joined">PEOPLE HAVE JOINED</div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Full Name<input required /></label>
          <label>Email<input required type="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
          <label>Mobile Number<input /></label>
          <label>Occasion<select defaultValue=""><option value="" disabled>Select an occasion</option><option>Wedding</option><option>Engagement</option><option>Reception</option><option>Festival</option></select></label>
          <button type="submit">{sent ? 'YOU’RE ON THE LIST' : 'CLAIM MY 10% CODE'}</button>
        </form>
      </section>

      <footer className="footerPdf" id="contact">
        <div className="footerRule" />
        <div className="footerGrid">
          <div className="footerBrand"><img src="/logo.png" alt="The Royal Vastra" /><p>Tradition for every occasion.</p></div>
          <div><div className="footerKicker">CONTACT</div><p><MapPin /> Udaipur, Rajasthan</p><p><Mail /> sale@theroyalvastra.in</p><p><Globe2 /> www.theroyalvastra.com</p></div>
          <div><div className="footerKicker">FOLLOW</div><p><Instagram /> Instagram</p><p><Facebook /> Facebook</p></div>
        </div>
        <div className="copyright">© 2026 The Royal Vastra. All rights reserved.</div>
      </footer>
    </main>
  );
}

function Why({ icon, title, text }: { icon: any; title: string; text: string }) {
  return <div className="whyItem"><div className="whyIcon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}
