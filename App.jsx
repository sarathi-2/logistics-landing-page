import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Check, CheckCircle2,
  ChevronDown, Clock3, Globe2, Headphones, MapPin, Menu, PackageCheck,
  Route, ShieldCheck, Smartphone, Sparkles, Truck, Users, X, Zap, Star,
  Fuel, Navigation, CircleHelp, Mail, Phone, Instagram, Linkedin, Twitter
} from 'lucide-react'

const features = [
  { icon: Navigation, title: 'Live fleet visibility', text: 'See every vehicle in real time, follow routes, and keep your team one step ahead.', color: 'blue' },
  { icon: PackageCheck, title: 'Smarter delivery ops', text: 'Coordinate orders, assign drivers, and keep every shipment moving smoothly.', color: 'lime' },
  { icon: BarChart3, title: 'Insights that move you', text: 'Turn fleet activity into clear performance metrics and better decisions.', color: 'purple' },
  { icon: Fuel, title: 'Lower operating costs', text: 'Spot fuel waste, plan maintenance, and make every mile count.', color: 'orange' },
  { icon: Users, title: 'Driver-first workflows', text: 'Give your drivers simple tools and your dispatchers a calmer workday.', color: 'pink' },
  { icon: ShieldCheck, title: 'Reliable by design', text: 'Keep important updates, delivery records, and operational details together.', color: 'teal' },
]
const steps = [
  ['01', 'Connect your fleet', 'Add vehicles, drivers, and delivery details in one simple workspace.'],
  ['02', 'Plan every route', 'Assign jobs and map efficient routes for each delivery run.'],
  ['03', 'Track and improve', 'Follow progress live and use performance insights to improve each day.'],
]
const testimonials = [
  { quote: 'RoutePilot gave our dispatch team the visibility we were missing. We spend less time chasing updates and more time delivering.', name: 'Priya Raman', role: 'Operations Lead, SwiftCart', initials: 'PR' },
  { quote: 'The interface is refreshingly simple. Our drivers picked it up quickly, and our customers get clearer delivery updates.', name: 'Daniel Brooks', role: 'Founder, Northline Freight', initials: 'DB' },
  { quote: 'We finally have one place to understand fleet performance. It has made our daily planning feel much more in control.', name: 'Meera Shah', role: 'Fleet Manager, MoveWell', initials: 'MS' },
]
const plans = [
  { name: 'Starter', price: '29', desc: 'For small teams getting moving.', features: ['Up to 5 vehicles', 'Live location tracking', 'Basic delivery management', 'Email support'] },
  { name: 'Growth', price: '79', desc: 'For growing, busy operations.', popular: true, features: ['Up to 25 vehicles', 'Advanced route planning', 'Driver performance insights', 'Maintenance reminders', 'Priority support'] },
  { name: 'Scale', price: 'Custom', desc: 'For complex fleets at scale.', features: ['Unlimited vehicles', 'Custom workflows', 'Advanced analytics', 'Dedicated onboarding', 'Priority assistance'] },
]

function Logo() {
  return <a href="#home" className="brand" aria-label="RoutePilot home"><span className="brand-mark"><Route size={21} strokeWidth={2.7} /></span><span>routepilot<span className="brand-dot">.</span></span></a>
}
function Button({ children, variant = 'primary', href = '#pricing', onClick, className = '' }) {
  return <a href={href} onClick={onClick} className={`button button-${variant} ${className}`}>{children}</a>
}
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Platform', '#features'], ['How it works', '#how-it-works'], ['Customers', '#testimonials'], ['Pricing', '#pricing']]
  return <header className="navbar">
    <div className="container nav-inner">
      <Logo />
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-cta" href="#pricing" onClick={() => setOpen(false)}>Get started <ArrowRight size={16}/></a>
      </nav>
      <div className="nav-actions"><a href="#pricing" className="nav-login">Log in</a><Button href="#pricing" className="nav-cta">Get started <ArrowUpRight size={16}/></Button></div>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}

function DashboardPreview() {
  return <div className="visual-wrap">
    <div className="visual-glow" />
    <div className="floating-tag tag-top"><span className="pulse-dot" /> All systems operational</div>
    <div className="dashboard">
      <div className="dash-top"><div className="dash-brand"><span className="mini-mark"><Route size={14}/></span> Fleet overview</div><span className="live-label">● LIVE</span></div>
      <div className="dash-greeting"><div><span className="dash-eyebrow">MONDAY, OCTOBER 13</span><h3>Your fleet at a glance</h3></div><span className="avatar">JD</span></div>
      <div className="metric-row">
        <div className="metric"><span>Active vehicles</span><strong>128 <small>↗ 12%</small></strong><div className="mini-bars">{[35,55,43,70,50,78,60,90,72,100,82,95].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div>
        <div className="metric"><span>On-time delivery</span><strong>96.8<small>%</small></strong><div className="progress"><i style={{width:'96.8%'}}/></div><em>+4.2% this month</em></div>
      </div>
      <div className="map-card">
        <div className="map-head"><div><strong>Live fleet map</strong><span>Tracking 128 vehicles</span></div><span className="map-filter">Today <ChevronDown size={13}/></span></div>
        <div className="map-art">
          <svg viewBox="0 0 500 205" role="img" aria-label="Illustrated route map with delivery vehicle markers" preserveAspectRatio="xMidYMid slice">
            <path d="M-10 35 C65 55 82 5 145 28 S222 76 282 43 S390 5 515 44" className="road road-wide"/>
            <path d="M-20 160 C65 125 98 185 160 143 S245 94 300 128 S415 188 520 143" className="road road-wide"/>
            <path d="M68 -10 C95 45 63 77 115 110 S185 160 172 225 M245 -10 C225 45 272 72 248 105 S222 165 275 220 M390 -5 C355 42 390 85 367 117 S388 170 420 210" className="road"/>
            <path d="M30 184 C110 160 120 92 212 99 S315 145 367 93 S420 45 480 60" className="route-line"/>
            <circle cx="30" cy="184" r="7" className="pin-start"/><circle cx="480" cy="60" r="7" className="pin-end"/>
            <g transform="translate(205 88)"><circle r="17" className="truck-halo"/><circle r="11" className="truck-pin"/><path d="M-6 -4h8v7h-8z M2 -1h4l3 4v3H2z" fill="#fff"/></g>
            <g transform="translate(365 92)"><circle r="13" className="truck-halo"/><circle r="8" className="truck-pin"/><path d="M-4 -3h5v5h-5z M1 -1h3l2 2v2H1z" fill="#fff"/></g>
            <g transform="translate(115 112)"><circle r="6" className="small-pin"/></g>
          </svg>
          <span className="map-location loc-a"><MapPin size={12}/> Chennai Hub</span><span className="map-location loc-b"><Truck size={12}/> RP-204</span>
        </div>
      </div>
      <div className="dash-bottom"><div className="dash-activity-icon"><PackageCheck size={17}/></div><div><strong>Delivery completed</strong><span>Order #RP-2084 · 2 min ago</span></div><span className="activity-status">On time</span></div>
    </div>
    <div className="floating-tag tag-bottom"><div className="tag-icon"><Zap size={17} fill="currentColor"/></div><div><strong>24% faster</strong><span>average route planning</span></div><ArrowUpRight size={17} className="tag-arrow"/></div>
  </div>
}

function Hero() {
  return <section className="hero section-anchor" id="home"><div className="container hero-grid">
    <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-icon"><Sparkles size={13}/></span> THE SMARTER WAY TO DELIVER <span className="eyebrow-line"/></div>
      <h1>Every mile,<br/>made <span className="headline-accent">smarter.</span></h1>
      <p className="hero-text">One powerful platform to track your fleet, simplify deliveries, and keep your entire operation moving forward.</p>
      <div className="hero-actions"><Button href="#pricing">Start your free trial <ArrowRight size={17}/></Button><Button variant="outline" href="#how-it-works"><span className="play-icon">▶</span> See how it works</Button></div>
      <div className="hero-proof"><div className="avatar-stack"><span>AR</span><span>JM</span><span>SK</span><span>+</span></div><div><div className="stars">★★★★★ <b>4.9/5</b></div><span className="proof-caption">Loved by 2,000+ logistics teams</span></div></div>
    </div>
    <DashboardPreview/>
  </div><div className="hero-bottom container"><span>BUILT FOR TEAMS THAT KEEP THE WORLD MOVING</span><div className="client-logos"><b><Globe2 size={17}/> northstar</b><b><Zap size={16}/> swift<span>cart</span></b><b><PackageCheck size={18}/> parcel<span>pro</span></b><b><Truck size={18}/> MOVEWELL</b><b><Route size={17}/> track<span>wise</span></b></div></div></section>
}

function SectionHeading({ eyebrow, title, text, centered = true }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div className="section-eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
function About() {
  return <section className="about section-pad" id="about"><div className="container about-grid">
    <div className="about-visual"><div className="about-orbit orbit-one"/><div className="about-orbit orbit-two"/><div className="about-icon-main"><Route size={49}/></div><div className="orbit-node node-one"><Truck size={20}/></div><div className="orbit-node node-two"><MapPin size={20}/></div><div className="orbit-node node-three"><PackageCheck size={20}/></div><div className="about-stat"><span className="stat-spark">✳</span><div><strong>1.2M+</strong><span>deliveries tracked</span></div></div></div>
    <div className="about-copy"><div className="section-eyebrow">MEET ROUTEPILOT</div><h2>Less guesswork.<br/><span>More getting there.</span></h2><p>Logistics can be complicated. Managing it shouldn't be. RoutePilot brings your vehicles, people, and deliveries together in one clear view—so you can focus on what matters: moving business forward.</p><div className="about-points"><div><CheckCircle2/><span><b>One connected workspace</b><small>Everything your team needs, in sync.</small></span></div><div><CheckCircle2/><span><b>Decisions backed by data</b><small>Know what's working and where to improve.</small></span></div></div><a className="text-link" href="#features">Explore the platform <ArrowRight size={17}/></a></div>
  </div></section>
}

function Features() {
  return <section className="features section-pad section-anchor" id="features"><div className="container"><SectionHeading eyebrow="BUILT FOR THE REAL WORLD" title={<>Your whole operation.<br/><span>One clear picture.</span></>} text="The tools you need to run a more connected, efficient, and dependable fleet."/><div className="feature-grid">{features.map(({icon:Icon,title,text,color},i)=><article className={`feature-card feature-${color}`} key={title}><div className="feature-icon"><Icon size={22}/></div><span className="feature-index">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#pricing" aria-label={`Learn about ${title}`}><ArrowUpRight size={18}/></a></article>)}</div></div></section>
}

function HowItWorks() {
  return <section className="how section-pad section-anchor" id="how-it-works"><div className="container"><SectionHeading eyebrow="SIMPLE FROM DAY ONE" title={<>From scattered to <span>seamless.</span></>} text="Get your team on the same route in three straightforward steps."/><div className="steps-grid">{steps.map(([num,title,text],i)=><article className="step-card" key={num}><div className="step-top"><span className="step-num">{num}</span>{i===0?<Users/>:i===1?<Route/>:<BarChart3/>}</div><div className="step-connector"><span/></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="how-cta"><span><span className="cta-check"><Check size={14}/></span> No complicated setup. No guesswork.</span><Button href="#pricing">See plans that fit <ArrowRight size={16}/></Button></div></div></section>
}

function Testimonials() {
  return <section className="testimonials section-pad section-anchor" id="testimonials"><div className="container"><SectionHeading eyebrow="GOOD WORDS, REAL RESULTS" title={<>Don't just take <span>our word.</span></>} text="Teams like yours are already finding a better way to move."/><div className="testimonial-grid">{testimonials.map((t,i)=><article className="testimonial-card" key={t.name}><div className="quote-mark">“</div><div className="testimonial-stars">★★★★★</div><p className="quote">{t.quote}</p><div className="reviewer"><div className={`review-avatar avatar-${i}`}>{t.initials}</div><div><strong>{t.name}</strong><span>{t.role}</span></div><CheckCircle2 className="verified" size={17}/></div></article>)}</div></div></section>
}

function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [notice, setNotice] = useState('')
  const choosePlan = (name) => setNotice(`${name} plan selected — thanks! Our team will help you find the right fit.`)
  return <section className="pricing section-pad section-anchor" id="pricing"><div className="container"><SectionHeading eyebrow="STRAIGHTFORWARD PRICING" title={<>A plan for every <span>next step.</span></>} text="Start small, scale when you're ready. No surprise fees."/><div className="billing-switch"><span className={!annual?'billing-active':''}>Monthly</span><button className={`switch ${annual?'switch-on':''}`} aria-label="Toggle annual billing" aria-pressed={annual} onClick={()=>setAnnual(!annual)}><span/></button><span className={annual?'billing-active':''}>Yearly <b>Save 20%</b></span></div>
    <div className="pricing-grid">{plans.map((p)=><article key={p.name} className={`price-card ${p.popular?'price-popular':''}`}>{p.popular&&<div className="popular-label"><Sparkles size={13}/> MOST POPULAR</div>}<div className="price-plan">{p.name}</div><p className="price-desc">{p.desc}</p><div className="price-value">{p.price==='Custom'?<strong>Let's talk</strong>:<><span className="currency">$</span><strong>{annual?Math.round(Number(p.price)*.8):p.price}</strong><span className="per">/ vehicle / mo</span></>}</div>{p.price!=='Custom'&&<p className="billed">{annual?'Billed annually':'Billed monthly'} · cancel anytime</p>}<button className={`button ${p.popular?'button-primary':'button-price-outline'}`} onClick={()=>choosePlan(p.name)}>{p.price==='Custom'?'Talk to sales':'Choose '+p.name} <ArrowRight size={16}/></button><div className="plan-divider"/><span className="included">WHAT'S INCLUDED</span><ul>{p.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul></article>)}</div>
    {notice&&<div className="plan-notice" role="status"><CheckCircle2 size={17}/>{notice}<button onClick={()=>setNotice('')} aria-label="Dismiss message"><X size={15}/></button></div>}
    <p className="pricing-note"><ShieldCheck size={15}/> All plans include secure cloud access and regular product updates. <a href="mailto:hello@routepilot.example">Questions? Talk to us.</a></p>
  </div></section>
}

function Footer() {
  const [email,setEmail] = useState('')
  const [subscribed,setSubscribed] = useState(false)
  const submit = (e) => { e.preventDefault(); if(email.trim()){setSubscribed(true)} }
  return <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-brand-col"><Logo/><p>Helping logistics teams move with more clarity, confidence, and control.</p><div className="socials"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://twitter.com/" aria-label="Twitter"><Twitter size={17}/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17}/></a></div></div><div className="footer-links"><div><h4>Platform</h4><a href="#features">Fleet tracking</a><a href="#features">Delivery management</a><a href="#features">Analytics</a><a href="#how-it-works">How it works</a></div><div><h4>Company</h4><a href="#about">About us</a><a href="#testimonials">Customer stories</a><a href="#pricing">Pricing</a><a href="mailto:hello@routepilot.example">Contact</a></div><div><h4>Get in touch</h4><a href="mailto:hello@routepilot.example"><Mail size={15}/> hello@routepilot.example</a><a href="tel:+18005550182"><Phone size={15}/> +1 (800) 555-0182</a><span className="footer-location"><MapPin size={15}/> Built for teams everywhere</span></div></div><div className="newsletter"><span className="newsletter-kicker">THE ROUTEPILOT ROUNDUP</span><h3>A little more clarity,<br/>straight to your inbox.</h3><p>Practical ideas for smoother operations.</p><form onSubmit={submit}><input type="email" value={email} onChange={e=>{setEmail(e.target.value);setSubscribed(false)}} placeholder="Your work email" aria-label="Your work email" required/><button aria-label="Subscribe"><ArrowRight size={17}/></button></form>{subscribed&&<span className="subscribe-success" role="status"><CheckCircle2 size={14}/> You're on the list. Thanks!</span>}</div></div><div className="footer-bottom"><span>© 2026 RoutePilot, Inc. All rights reserved.</span><div><a href="#home">Privacy</a><a href="#home">Terms</a><a href="#home">Cookie preferences</a></div><a href="#home" className="back-top">Back to top <ArrowUpRight size={14}/></a></div></div></footer>
}

function App() {
  return <><Navbar/><main><Hero/><About/><Features/><HowItWorks/><Testimonials/><Pricing/><section className="final-cta"><div className="container final-cta-inner"><div><span className="section-eyebrow">YOUR NEXT MILE STARTS HERE</span><h2>Ready to move<br/>your business forward?</h2><p>Meet the calmer, clearer way to manage your fleet.</p></div><Button href="#pricing">Let's get moving <ArrowRight size={17}/></Button><div className="final-orb orb-a"/><div className="final-orb orb-b"/></div></section></main><Footer/></>
}
export default App
