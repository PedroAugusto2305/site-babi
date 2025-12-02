import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import artistPortrait from "@/assets/foto-about.jpeg";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            Sobre a Artista
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <div className="md:w-1/3 w-full">
              <img
                src={artistPortrait}
                alt="Bárbara S. Gomes - Artista Contemporânea"
                className="w-full rounded-lg shadow-medium aspect-[3/4] object-cover object-[50%_20%]"
              />
            </div>

            <div className="md:w-2/3 w-full space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bárbara, é graduada em Artes Visuais e artista plástica há mais
                de 15 anos, seu trabalho é movido pela paixão de transformar
                sentimentos em arte.
              </p>

              <p>
                Acredita que cada obra deve refletir a essência do momento e,
                por isso, busca sempre entender as expectativas e desejos do
                cliente para que esta experiência seja única e especial!
              </p>

              <p>
                Cada pincelada é dedicada a transformar memórias preciosas em
                uma arte que contará essa história para sempre.
              </p>
            </div>
          </div>

          {/* <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Filosofia Artística
              </h2>
              <p>
                "A arte é uma forma de comunicação que transcende palavras.
                Através das cores e formas, busco expressar emoções universais e
                criar conexões autênticas com quem observa meu trabalho. Cada
                pincelada carrega uma intenção, cada cor conta uma história."
              </p>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Exposições Recentes
              </h2>
              <ul className="space-y-4">
                <li>
                  <strong className="text-foreground">2024</strong> - Exposição
                  Individual "Cores em Movimento", Galeria de Arte
                  Contemporânea, São Paulo
                </li>
                <li>
                  <strong className="text-foreground">2023</strong> - Coletiva
                  "Novos Olhares", Museu de Arte Moderna, Rio de Janeiro
                </li>
                <li>
                  <strong className="text-foreground">2023</strong> - Exposição
                  Internacional "Latin American Artists", Art Gallery Miami,
                  Estados Unidos
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
