import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-4 md:px-8 py-6 font-sans antialiased absolute z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white">

        <span className="font-semibold">EKAMJOT</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-gray-400 bg-neutral-300/20 hover:bg-neutral-300/30 px-4 py-2 rounded-3xl backdrop-blur-sm">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button 
              onClick={() => scrollToSection(link.id)}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop Resume Button */}
      <a href="https://drive.google.com/file/d/1nS9j9befEz5o567KvbKIsH9mhKR1qJuI/view?usp=sharing">
        <button className="hidden md:block text-gray-400 hover:text-white bg-neutral-300/20 hover:bg-neutral-300/30 px-4 py-2 rounded-3xl backdrop-blur-sm transition-all duration-200">
        Resume
      </button>
      </a>
      

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-2 hover:bg-neutral-300/20 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-neutral-900/95 backdrop-blur-lg rounded-2xl shadow-xl md:hidden">
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left text-gray-400 hover:text-white hover:bg-neutral-800/50 px-4 py-3 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-neutral-700">
              <button className="w-full text-gray-400 hover:text-white hover:bg-neutral-800/50 px-4 py-3 rounded-lg transition-all duration-200">
                <a href="https://drive.google.com/file/d/1nS9j9befEz5o567KvbKIsH9mhKR1qJuI/view?usp=sharing">Resume</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;