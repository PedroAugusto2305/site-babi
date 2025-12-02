import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    text: "Foi tudo perfeito. Ela me respondeu rápido, garantimos a data, me fez confiar nela de olhos fechados e valeu a pena!! Ficou impecável, mto além do que eu sonhei ❤️ meu momento eternizado…",
    author: "Alana",
    role: "Enviado em 27/11/2025",
  },
  {
    id: 2,
    text: "Bárbara e sua equipe fizeram um trabalho impecável! Com o nosso quadro e também com as aquarelas dos convidados. Todos ficaram apaixonados. Realmente eternizaram o nosso dia da melhor maneira possível!",
    author: "Marina",
    role: "Enviado em 24/11/2025",
  },
  {
    id: 3,
    text: "A Barbara aceitou todas nossas ideias e eternizou um dos momentos mais importantes do nosso em arte, além disso incluiu pós cerimônia vários itens que eram importantes para nós de alguma forma, incluindo nossos doguinhos rs. Ótima profissional!",
    author: "Victoria",
    role: "Enviado em 18/11/2025",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Depoimentos</h2>
          <p className="text-lg text-muted-foreground">O que dizem sobre meu trabalho</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 shadow-soft transition-smooth hover:shadow-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
