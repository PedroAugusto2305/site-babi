import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import  logo  from "@/assets/babidelicatprojetopnng-12.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "md:bg-transparent bg-background"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain" // ← ajuste o tamanho aqui
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              activeClassName="text-foreground"
            >
              Início
            </NavLink>
            <NavLink
              to="/galeria"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              activeClassName="text-foreground"
            >
              Galeria
            </NavLink>
            <NavLink
              to="/sobre"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              activeClassName="text-foreground"
            >
              Sobre
            </NavLink>
            <NavLink
              to="/contato"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              activeClassName="text-foreground"
            >
              Contato
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2"
                activeClassName="text-foreground"
              >
                Início
              </NavLink>
              <NavLink
                to="/galeria"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2"
                activeClassName="text-foreground"
              >
                Galeria
              </NavLink>
              <NavLink
                to="/sobre"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2"
                activeClassName="text-foreground"
              >
                Sobre
              </NavLink>
              <NavLink
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2"
                activeClassName="text-foreground"
              >
                Contato
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
