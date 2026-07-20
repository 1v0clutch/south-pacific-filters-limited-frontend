import { MapPin } from 'lucide-react'
import logo from '../assets/brand/logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

const productLinks = [
  { label: 'Panel Filters', href: '#' },
  { label: 'Pocket Filters', href: '# '},
  { label: 'HEPA Filters', href: '#' },
  { label: 'Carbon Filters', href: '#' },
  { label: 'HVAC Filters', href: '#' },
  { label: 'Holding Frames', href: '#' },
]

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-text-inverse)] text-[var(--color-text-muted-on-dark)]"
    >
      <div className="container-fd mx-auto px-[32px] lg:px-[64px] py-[48px]">
        <div className="grid grid-cols-1 gap-[48px] sm:grid-cols-2 lg:grid-cols-6 lg:gap-[32px]">

          {/* Brand/Intro */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-[16px] cursor-pointer no-underline">
              <img src={logo} alt="" className="h-[85px] w-[85px] object-contain" />
              <span className="text-[24px] leading-[32px] font-bold text-[var(--color-text-on-dark)]">South Pacific Filters</span>
            </a>
            <p className="mt-[24px] text-[16px] leading-[30px] text-[var(--color-text-muted-on-dark)] max-w-[320px]">
              Leading clean air solutions for industry, healthcare, and commercial facilities across the South Pacific.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="m-0 text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[var(--color-text-on-dark)] font-['Inter',_sans-serif]">
              Quick links
            </h3>
            <ul className="list-none m-0 mt-[18px] p-0 flex flex-col gap-[12px]">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Catalogue", href: "#catalogue" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="m-0 text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[var(--color-text-on-dark)] font-['Inter',_sans-serif]">
              Products
            </h3>
            <ul className="list-none m-0 mt-[18px] p-0 flex flex-col gap-[12px]">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="m-0 text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[var(--color-text-on-dark)] font-['Inter',_sans-serif]">
              Socials
            </h3>
            <ul className="list-none m-0 mt-[18px] p-0 flex flex-col gap-[12px]">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-[12px] min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]"
                >
                  <FaFacebookF className="w-[16px] h-[16px]" aria-hidden="true" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-[12px] min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]"
                >
                  <FaInstagram className="w-[16px] h-[16px]" aria-hidden="true" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="m-0 text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[var(--color-text-on-dark)] font-['Inter',_sans-serif]">
              Location
            </h4>
            <ul className="list-none m-0 mt-[18px] p-0 flex flex-col gap-[12px]">
              <li>
                <a className="inline-flex items-center gap-[12px] min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]">
                  <MapPin className="w-[16px] h-[16px]" aria-hidden="true" />
                  Manila, Philippines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-[32px] border-t border-white/20 pt-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] font-['Inter',_sans-serif]"
        >
          <p className="m-0">
            &copy; {new Date().getFullYear()} South Pacific Filters Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer