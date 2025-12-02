import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import artwork1 from "@/assets/quadro-01.jpg";
import artwork2 from "@/assets/quadro-02.jpg";
import artwork3 from "@/assets/quadro-03.jpg";

const featuredWorks = [
  {
    id: 1,
    image: artwork1,
    title: "Expressão em Azul",
    description: "Pintura em Casamento\nTinta acrílica sobre tela",
    dimensions: "40 × 50 cm",
    year: "2024",
  },
  {
    id: 2,
    image: artwork2,
    title: "Cores Vibrantes",
    description: "Tinta acrílica sobre tela",
    dimensions: "120 × 90 cm",
    year: "2024",
  },
  {
    id: 3,
    image: artwork3,
    title: "Formas Orgânicas",
    description: "Tinta acrílica sobre tela",
    dimensions: "90 × 120 cm",
    year: "2023",
  },
];

export const FeaturedWorks = () => {
  const navigate = useNavigate();

  // Obra selecionada (modal)
  const [selectedWork, setSelectedWork] = useState<any>(null);

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Obras em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore uma seleção de obras vibrantes e emocionais que capturam a essência da arte contemporânea.
          </p>
        </div>

        {/* Grid de obras */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredWorks.map((work, index) => (
            <div
              key={work.id}
              className="group cursor-pointer transition-smooth hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedWork(work)} // ← ABRE MODAL
            >
              <div className="relative overflow-hidden rounded-lg shadow-medium aspect-[4/5]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <h3 className="text-primary-foreground text-xl font-semibold">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver galeria completa */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/galeria")}
            variant="outline"
            size="lg"
            className="transition-smooth hover:bg-accent hover:text-accent-foreground"
          >
            Ver Galeria Completa
          </Button>
        </div>
      </div>

      {/* MODAL - mesmo padrão da galeria */}
      {selectedWork && (
        <div
          className="
            fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]
            animate-[modalFadeIn_0.25s_ease-out]
          "
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="
              bg-white rounded-2xl shadow-2xl p-6 md:p-10 
              max-w-5xl w-[92%] 
              flex flex-col md:flex-row gap-8 md:gap-12
              transition-all duration-300
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGEM */}
            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              className="
                w-full md:w-[48%] 
                rounded-xl shadow-lg object-cover
                max-h-[320px] md:max-h-none
              "
            />

            {/* INFORMAÇÕES */}
            <div className="flex flex-col w-full md:w-[52%] justify-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
                {selectedWork.title}
              </h2>

              <div className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                {selectedWork.description && (
                  <p className="whitespace-pre-line">
                    {selectedWork.description}
                  </p>
                )}

                <p><strong className="font-semibold">Dimensões:</strong> {selectedWork.dimensions}</p>
                <p><strong className="font-semibold">Ano:</strong> {selectedWork.year}</p>
              </div>

              {/* Botão que vai para a galeria */}
              <Button
                className="mt-6 self-start px-6 py-2.5 text-base md:text-lg"
                onClick={() => navigate("/galeria")}
              >
                Ver na Galeria
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
