import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import artwork1 from "@/assets/quadro-01.jpg";
import artwork2 from "@/assets/quadro-02.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/quadro-03.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
import artwork7 from "@/assets/quadro-04.jpg";
import artwork8 from "@/assets/quadro-05.jpg";
import artwork9 from "@/assets/quadro-06.jpg";
import artwork10 from "@/assets/quadro-07.jpg";

type Category = "todos" | "casamento" | "parede" | "pet";

const artworks = [
  {
    id: 1,
    image: artwork1,
    title: "Geovana e Felipe",
    year: "Casa Arandella - São Sebastião/SP",
    dimensions: "40 × 50 cm",
    description: "Pintura em Casamento\nTinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 2,
    image: artwork2,
    title: "Cores Vibrantes",
    year: "2024",
    dimensions: "120 × 90 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 5,
    image: artwork5,
    title: "Tons Terrosos",
    year: "2024",
    dimensions: "90 × 120 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 7,
    image: artwork7,
    title: "Tons Terrosos",
    year: "2024",
    dimensions: "90 × 120 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 8,
    image: artwork8,
    title: "Tons Terrosos",
    year: "2024",
    dimensions: "90 × 120 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 9,
    image: artwork9,
    title: "Tons Terrosos",
    year: "2024",
    dimensions: "90 × 120 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
  {
    id: 10,
    image: artwork10,
    title: "Tons Terrosos",
    year: "2024",
    dimensions: "90 × 120 cm",
    description: "Tinta acrílica sobre tela",
    category: "casamento" as Category,
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "casamento", label: "Casamento" },
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");

  // Obra selecionada para o modal
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  const filteredArtworks =
    selectedCategory === "todos"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Galeria</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma coleção de obras que exploram emoção, cor e expressão através
              da arte contemporânea.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-6 py-3 rounded-lg transition-smooth font-medium ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* GALERIA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedArtwork(artwork)} // abre modal
              >
                <div className="relative overflow-hidden rounded-lg shadow-medium aspect-[4/5] mb-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                    <h3 className="text-primary-foreground text-xl font-semibold mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {artwork.year}
                    </p>
                    <p className="text-primary-foreground/80 text-sm">
                      {artwork.dimensions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL — Estilo igual ao modelo enviado */}
        {selectedArtwork && (
          <div
            className="
      fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]
      animate-[modalFadeIn_0.25s_ease-out]
    "
            onClick={() => setSelectedArtwork(null)}
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
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="
          w-full md:w-[48%] 
          rounded-xl shadow-lg object-cover
          max-h-[320px] md:max-h-none
        "
              />

              {/* INFORMAÇÕES */}
              <div className="flex flex-col w-full md:w-[52%] justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
                  {selectedArtwork.title}
                </h2>

                <div className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
                  {selectedArtwork.description && (
                    <p className="whitespace-pre-line">
                      {selectedArtwork.description}
                    </p>
                  )}

                  <p>
                    <strong className="font-semibold">Dimensões:</strong>{" "}
                    {selectedArtwork.dimensions}
                  </p>
                  <p>
                    <strong className="font-semibold">Ano:</strong>{" "}
                    {selectedArtwork.year}
                  </p>
                </div>

                <button
                  className="
            mt-6 self-start px-5 py-2 
            bg-primary text-white rounded-lg 
            hover:bg-primary/90 transition-all duration-200 text-base md:text-lg
          "
                  onClick={() => setSelectedArtwork(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Galeria;
