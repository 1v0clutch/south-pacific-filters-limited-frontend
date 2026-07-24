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
      className="bg-(--color-text-inverse) text-(--color-text-muted-on-dark)"
    >
      <div className="container-fd mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">

          {/* Brand/Intro */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-4 cursor-pointer no-underline">
              <img src={logo} alt="" className="h-21.25 w-21.25 object-contain" />
              <span className="text-[24px] leading-8 font-bold text-(--color-text-on-dark)">South Pacific Filters</span>
            </a>
            <p className="mt-6 text-[16px] leading-7.5 text-(--color-text-muted-on-dark) max-w-[320px]">
              Leading clean air solutions for industry, healthcare, and commercial facilities across the South Pacific.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="m-0 text-[12px] leading-4 tracking-wider font-bold uppercase text-(--color-text-on-dark) font-['Inter',sans-serif]">
              Quick links
            </h3>
            <ul className="list-none m-0 mt-4.5 p-0 flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Catalogue", href: "#catalogue" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center min-h-8 text-[14px] leading-5 text-(--color-text-muted-on-dark) no-underline transition-colors duration-150 hover:text-(--color-text-on-dark) cursor-pointer font-['Inter',sans-serif]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="m-0 text-[12px] leading-4 tracking-wider font-bold uppercase text-(--color-text-on-dark) font-['Inter',sans-serif]">
              Products
            </h3>
            <ul className="list-none m-0 mt-4.5 p-0 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center min-h-8 text-[14px] leading-5 text-(--color-text-muted-on-dark) no-underline transition-colors duration-150 hover:text-(--color-text-on-dark) cursor-pointer font-['Inter',sans-serif]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="m-0 text-[12px] leading-4 tracking-wider font-bold uppercase text-(--color-text-on-dark) font-['Inter',sans-serif]">
              Socials
            </h3>
            <ul className="list-none m-0 mt-4.5 p-0 flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-3 min-h-11 text-[14px] leading-5 text-(--color-text-muted-on-dark) no-underline transition-colors duration-150 hover:text-(--color-text-on-dark) cursor-pointer font-['Inter',sans-serif]"
                >
                  <FaFacebookF className="w-4 h-4" aria-hidden="true" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-3 min-h-11 text-[14px] leading-5 text-(--color-text-muted-on-dark) no-underline transition-colors duration-150 hover:text-(--color-text-on-dark) cursor-pointer font-['Inter',sans-serif]"
                >
                  <FaInstagram className="w-4 h-4" aria-hidden="true" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="m-0 text-[12px] leading-4 tracking-wider font-bold uppercase text-(--color-text-on-dark) font-['Inter',sans-serif]">
              Location
            </h4>
            <ul className="list-none m-0 mt-4.5 p-0 flex flex-col gap-3">
              <li>
                <a className="inline-flex items-center gap-[12px] min-h-[32px] text-[14px] leading-[20px] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer font-['Inter',_sans-serif]">
                  <MapPin className="w-[16px] h-[16px]" aria-hidden="true" />
                  Auckland, New Zealand
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-8 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] leading-5 text-(--color-text-muted-on-dark) font-['Inter',sans-serif]"
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