'use client';

import { FormEvent, useState } from 'react';
import { CalendarDays, ChevronRight, Coins, Facebook, Gem, Heart, Instagram, Leaf, Mail, MapPin, Search, ShieldCheck, Truck, UserRound, Youtube } from 'lucide-react';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2400&q=92',
  palace: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=92',
  sherwani: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=92',
  indo: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=92',
  jodh: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=92',
  lehenga: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=92',
  gown: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=92',
};

const COLLECTIONS = [
  ['SHERWANI', 'Hand-embroidered\ngroom silhouettes', IMG.sherwani],
  ['INDO-WESTERN', 'Modern cuts,\nheritage detail', IMG.indo],
  ['JODHPURI', 'Brocade bandhgala\ntailoring', IMG.jodh],
  ['LEHENGA', 'Bridal zardozi and\nzari work', IMG.lehenga],
  ['GOWN', 'Reception couture\nwith trains', IMG.gown],
] as const;

export default function Site() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="rv-page">
      <div className="rv-topbar">
        <div className="rv-top-left"><MapPin size={13} /> <span>COMING SOON · UDAIPUR</span><b>|</b><span>BY THIS SEASON</span></div>
        <div className="rv-top-right"><Mail size={13} /> <span>Join the Royal List</span><b>|</b><span>Get 10% Off</span></div>
      </div>

      <header className="rv-header">
        <nav className="rv-nav rv-nav-left">
          <a className="active" href="#home">Home</a><a href="#collection">Collections</a><a href="#how">How It Works</a><a href="#about">About Us</a>
        </nav>
        <a href="#home" className="rv-logo"><img src="/logo.png" alt="The Royal Vastra" /></a>
        <nav className="rv-nav rv-nav-right">
          <a href="#occasions">Occasions</a><a href="#blog">Blog</a><a href="#contact">Contact</a><Search/><UserRound/><Heart/>
        </nav>
      </header>

      <section id="home" className="rv-hero">
        <div className="rv-hero-copy">
          <div className="rv-kicker">C O M I N G &nbsp; S O O N &nbsp; · &nbsp; U D A I P U R</div>
          <h1>ROYAL WARDROBES,<br /><span>ON RENT</span></h1>
          <p>Tradition for every occasion. Bridal lehengas, groom<br className="desktop" /> sherwanis, and reception couture — reserved for your<br className="desktop" /> celebration, returned when the last song ends.</p>
          <div className="rv-buttons"><a className="rv-btn primary" href="#collection">EXPLORE COLLECTIONS <ChevronRight /></a><a className="rv-btn ghost" href="#royal-list">JOIN THE ROYAL LIST</a></div>
        </div>
        <div className="rv-hero-side">TIMELESS<br />TRADITIONS<br />IN THE CITY OF<br />LAKES<i /></div>
      </section>

      <section className="rv-benefits">
        <Benefit icon={<Gem />} text={'PREMIUM\nCOLLECTION'} /><Benefit icon={<ShieldCheck />} text="CLEAN & SANITISED" /><Benefit icon={<CalendarDays />} text={'FLEXIBLE\nRENTAL PERIODS'} /><Benefit icon={<Truck />} text={'PAN INDIA\nDELIVERY'} /><Benefit icon={<Heart />} text="STYLIST SUPPORT" />
      </section>

      <section id="collection" className="rv-collection">
        <div className="rv-section-head"><div><div className="rv-small-title">T H E &nbsp; C O L L E C T I O N</div><h2>Five Ways to Wear the Occasion</h2></div><a href="#collection">VIEW ALL COLLECTIONS <ChevronRight /></a></div>
        <div className="rv-cards">{COLLECTIONS.map(([title, desc, image]) => <article className="rv-card" key={title}><img src={image} alt={title} /><div><h3>{title}</h3><p>{desc.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p><a href="#collection">EXPLORE <ChevronRight /></a></div></article>)}</div>
      </section>

      <section id="about" className="rv-why">
        <div className="rv-why-dark"><div className="rv-small-title">W H Y &nbsp; T H E &nbsp; R O Y A L &nbsp; V A S T R A</div><h2>Heritage, Without<br />the Price Tag</h2><p>Designer ethnic wear for life's special moments,<br />without the long-term commitment.</p><a className="rv-btn ghost" href="#about">OUR STORY <ChevronRight /></a></div>
        <div className="rv-why-grid"><Feature icon={<Gem />} title="Premium Collection" text="Couture-grade craftsmanship, curated piece by piece." /><Feature icon={<Coins />} title="Cost-Effective Fashion" text="Wear designer for a fraction of the buying price." /><Feature icon={<Leaf />} title="Sustainable Choice" text="One outfit, many celebrations – and far less waste." /><Feature icon={<CalendarDays />} title="For Every Occasion" text="Weddings, engagements, festivals and every function between." /></div>
      </section>

      <section id="royal-list" className="rv-access">
        <div className="rv-access-image"><div>SAME TRADITIONS<br /><span>NEW STORIES</span><i /></div></div>
        <div className="rv-form"><div className="rv-small-title">E A R L Y &nbsp; A C C E S S</div><h2>Join the Royal List</h2><p>Members receive a one-time 10% discount code for their first order.</p>
          <form onSubmit={submit}><div className="rv-form-row"><input aria-label="Full Name" placeholder="Full Name" required /><input aria-label="Email" placeholder="Email" type="email" required /></div><div className="rv-form-row"><input aria-label="Mobile Number" placeholder="+91   Mobile Number" /><select aria-label="Select an occasion" defaultValue=""><option value="" disabled>Select an occasion</option><option>Wedding</option><option>Reception</option><option>Engagement</option><option>Festival</option></select></div><button type="submit">{sent ? 'YOU’RE ON THE ROYAL LIST' : 'CLAIM MY 10% CODE'} <ChevronRight /></button></form>
        </div>
        <div className="rv-access-side">TRADITIONS<br />TODAY<br /><span>TOMORROW</span><br />ALWAYS</div>
      </section>

      <footer id="contact" className="rv-footer">
        <div className="rv-footer-main">
          <div className="rv-brand-foot"><img src="/logo.png" alt="The Royal Vastra" /><p>Tradition for every occasion.</p></div>
          <div><h4>QUICK LINKS</h4><a href="#home">Home</a><a href="#collection">Collections</a><a href="#how">How It Works</a><a href="#about">About Us</a><a href="#blog">Blog</a><a href="#contact">Contact</a></div>
          <div><h4>CONTACT</h4><p><MapPin /> Udaipur, Rajasthan</p><p><Mail /> sale@theroyalvastra.in</p><p>◎ &nbsp; www.theroyalvastra.com</p></div>
          <div><h4>FOLLOW US</h4><div className="rv-social"><Instagram /><Facebook /><span>℘</span><Youtube /></div></div>
        </div>
        <div className="rv-footer-bottom"><span>© 2026 The Royal Vastra. All rights reserved.</span><span>Privacy Policy &nbsp;&nbsp; | &nbsp;&nbsp; Terms &amp; Conditions</span></div>
      </footer>
    </main>
  );
}

function Benefit({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="rv-benefit">{icon}<span>{text.split('\n').map((x, i) => <span key={i}>{x}{i < text.split('\n').length - 1 && <br />}</span>)}</span></div>; }
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="rv-feature">{icon}<div><h3>{title}</h3><p>{text}</p></div></div>; }
