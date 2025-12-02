import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-2xl font-bold mb-2">Bárbara S. Gomes</p>
            <p className="text-sm opacity-80">Artista Visual</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="mailto:contato@babidelicat.com.br"
              className="hover:opacity-80 transition-smooth flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">contato@babidelicat.com.br</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-smooth"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Bárbara S. Gomes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
