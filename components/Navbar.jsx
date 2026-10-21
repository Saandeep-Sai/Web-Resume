'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [['Home', '#top'], ['Projects', '#saras-work'], ['Skills', '#skills'], ['Education', '#education'], ['Achievements', '#achievements']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><a className="brand" href="#top" aria-label="Back to top">Turpu Saandeep Sai<span> · </span></a><nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-resume" href="#contact" onClick={() => setOpen(false)}>Let’s connect</a></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>;
}
