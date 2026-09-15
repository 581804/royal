'use client';

import { useState } from 'react';
import { ArrowRight, CalendarDays, Instagram, Mail, MapPin, Leaf, Coins, Crown } from 'lucide-react';

const COLLECTIONS = [
  { name: 'SHERWANI', description: 'Hand-embroidered groom silhouettes', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90' },
  { name: 'INDO-WESTERN', description: 'Modern cuts, heritage detail', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=90' },
  { name: 'JODHPURI', description: 'Brocade bandhgala tailoring', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=90' },
  { name: 'LEHENGA', description: 'Bridal zardozi and zari work', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=90' },
  { name: 'GOWN', description: 'Reception couture with trains', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1400&q=90' },
];

export default function Site() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <main className="royalReference">
      <header className="referenceHero" id="home">
        <img src="/logo.png" alt="The Royal Vastra" className="referenceLogo" />
        <p className="eyebrow">COMING SOON · UDAIPUR</p>
        <h1>ROYAL WARDROBES,<br />ON RENT</h1>
        <p className="heroIntro">Tradition for every occasion. Bridal lehengas, groom sherwanis and<br className="desktop" /> reception couture — reserved for your celebration, returned when the last song ends.</p>
        <div className="seasonLine">BY THIS SEASON</div>
      </header>

      <section className="referenceSection collections" id="collections">
        <div className="sectionHeading"><p>THE COLLECTION</p><h2>Five Ways to Wear the Occasion</h2><span /></div>
        <div className="referenceCards">
          {COLLECTIONS.slice(0, 4).map((item) => <CollectionCard key={item.name} item={item} />)}
          <CollectionCard item={COLLECTIONS[4]} wide />
        </div>
      </section>

      <section className="referenceSection why" id="about">
        <div className="sectionHeading"><p>WHY THE ROYAL VASTRA</p><h2>Heritage, Without the Price Tag</h2><span /></div>
        <div className="whyGrid">
          <Why icon={<Crown />} title="Premium Collection" text="Couture-grade craftsmanship, curated piece by piece." />
          <Why icon={<Coins />} title="Cost-Effective Fashion" text="Wear designer for a fraction of the buying price." />
          <Why icon={<Leaf />} title="Sustainable Choice" text="One outfit, many celebrations — far less waste." />
          <Why icon={<CalendarDays />} title="For Every Occasion" text="Weddings, engagements, festivals and every function between." />
        </div>
      </section>

      <section className="referenceSection royalList" id="royal-list">
        <div className="sectionHeading"><p>EARLY ACCESS</p><h2>Join the Royal List</h2><span /></div>
        <p className="royalListIntro">Members receive a one-time 10% discount code for their first order.</p>
        <div className="joined">PEOPLE HAVE JOINED</div>
        <form className="royalForm" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Full Name<input required name="name" autoComplete="name" /></label>
          <label>Email<input required name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Mobile Number<input name="phone" autoComplete="tel" /></label>
          <label>Occasion<select name="occasion" defaultValue=""><option value="" disabled>Select an occasion</option><option>Wedding</option><option>Engagement</option><option>Reception</option><option>Festival</option><option>Other</option></select></label>
          <button type="submit">{sent ? 'YOU’RE ON THE LIST' : 'CLAIM MY 10% CODE'} <ArrowRight size={14} /></button>
        </form>
      </section>

      <footer className="referenceFooter" id="contact">
        <div className="footerRule" />
        <div className="footerGrid">
          <div className="footerBrand"><img src="/logo.png" alt="The Royal Vastra" /><p>Tradition for every occasion.</p></div>
          <div><p className="footerKicker">CONTACT</p><p><MapPin /> Udaipur, Rajasthan</p><p><Mail /> sale@theroyalvastra.in</p><p>www.theroyalvastra.com</p></div>
          <div><p className="footerKicker">FOLLOW</p><p><Instagram /> Instagram</p><p>f&nbsp;&nbsp; Facebook</p></div>
        </div>
        <div className="copyright">© 2026 The Royal Vastra. All rights reserved.</div>
      </footer>
    </main>
  );
}

function CollectionCard({ item, wide = false }: { item: typeof COLLECTIONS[number]; wide?: boolean }) {
  return <article className={`referenceCard ${wide ? 'wide' : ''}`}><img src={item.image} alt={item.name} /><div><h3>{item.name}</h3><p>{item.description}</p></div></article>;
}

function Why({ icon, title, text }: { icon: any; title: string; text: string }) {
  return <article className="whyItem"><div className="whyIcon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}
