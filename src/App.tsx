import { useState } from 'react'
import { ArrowRight, CalendarDays, Clock3, Flame, Instagram, Menu, ShoppingBag, Star, Users, X } from 'lucide-react'

const menuItems = [
  { name: 'Fire-Grilled Ribs', category: 'Chef’s choice', price: '$24', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85' },
  { name: 'Smoky Chicken', category: 'Signature', price: '$18', image: 'https://images.unsplash://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85' },
  { name: 'Loaded Flame Burger', category: 'Popular', price: '$16', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
  { name: 'Charred Veggie Bowl', category: 'Fresh grill', price: '$15', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85' },
]

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Spicy Grills home"><span className="brand-mark"><Flame size={20} fill="currentColor" /></span><b>SPICY</b><em>GRILLS</em></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Visit Us</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button bag" aria-label="Cart" onClick={() => setCartCount(0)}><ShoppingBag size={20}/>{cartCount > 0 && <span>{cartCount}</span>}</button>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          <a className="reserve-button" href="#reserve">Reserve a table</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <div className="eyebrow"><span />Fire. Flavor. Feeling.</div>
          <h1>GRILL BIG.<br/><i>TASTE BOLDER.</i></h1>
          <p>Open-fire cooking meets fearless flavor. Every plate is crafted to turn a meal into a moment.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">Explore the menu <ArrowRight size={18}/></a>
            <a className="text-button" href="#reserve"><span><CalendarDays size={16}/></span> Book a table</a>
          </div>
        </div>
        <div className="hero-stat"><b>4.9</b><div><div className="stars">★★★★★</div><span>from 1,200+ guests</span></div></div>
        <a className="scroll-cue" href="#story"><span>Scroll to discover</span><i /></a>
      </section>

      <section className="story" id="story">
        <div className="section-label">01 — Our story</div>
        <div className="story-copy">
          <h2>WHERE FLAME<br/>MEETS <i>SOUL.</i></h2>
          <p>We believe great food should feel alive. Our chefs blend smoked spices, local ingredients, and the ancient art of grilling to create plates with real character.</p>
          <a href="#experience" className="underlink">Discover our kitchen <ArrowRight size={16}/></a>
        </div>
        <div className="story-image-wrap">
          <img src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1100&q=85" alt="Chef grilling meat over open flames" />
          <div className="year-badge"><b>EST.</b><strong>2014</strong></div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading"><div><div className="section-label">02 — The menu</div><h2>CROWd FAVORITES.</h2></div><a className="underlink" href="#reserve">View full menu <ArrowRight size={16}/></a></div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.name} style={{'--delay': `${index * .08}s`} as React.CSSProperties}>
              <div className="card-image"><img src={item.image} alt={item.name}/><button aria-label={`Add ${item.name} to order`} onClick={() => setCartCount(c => c + 1)}>+</button></div>
              <div className="card-meta"><span>{item.category}</span><strong>{item.price}</strong></div>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-image" />
        <div className="experience-copy"><div className="section-label">03 — The experience</div><h2>MORE THAN<br/>A <i>MEAL.</i></h2><p>Live-fire energy, warm hospitality, and a soundtrack made for lingering. Come for dinner. Stay for the feeling.</p><div className="features"><div><Users/><b>Good company</b><span>Made for sharing</span></div><div><Clock3/><b>Open daily</b><span>11:00 AM — 11:00 PM</span></div></div></div>
      </section>

      <section className="reserve" id="reserve">
        <div><div className="section-label">Your table is waiting</div><h2>LET’S TURN UP<br/>THE HEAT.</h2></div>
        <form onSubmit={(e) => e.prevent.preventDefault()}>
          <label><span>Date</span><input type="date" aria-label="Reservation date" /></label>
          <label><span>Guests</span><select aria-label="Number of guests"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label>
          <button type="submit" className="primary-button">Find a table <ArrowRight size={18}/></button>
        </form>
      </section>

      <footer id="contact">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Flame size={20} fill="currentColor" /></span><b>SPICY</b><em>GRILLS</em></a>
        <div><strong>Visit</strong><p>184 Ember Avenue<br/>Downtown District</p></div>
        <div><strong>Contact</strong><p>hello@spicygrills.com<br/>+1 555 014 0188</p></div>
        <a className="social" href="#" aria-label="Instagram"><Instagram/></a>
        <p className="copyright">© 2026 Spicy Grills</p>
      </footer>
    </main>
  )
}

export default App
