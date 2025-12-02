import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Instagram, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numeroDaArtista = "5512991636297"; // <<< ALTERE AQUI

    const texto = `Olá! Sou o(a) ${nome} e cheguei até você pelo seu site.

    ${mensagem}

    Obrigado(a) por me receber por aqui!`;


    const url = `https://wa.me/${numeroDaArtista}?text=${encodeURIComponent(
      texto
    )}`;

    // abre WhatsApp
    window.open(url, "_blank");

    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contato</h1>
            <p className="text-lg text-muted-foreground">
              Entre em contato para aquisições, comissões ou colaborações
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 shadow-medium">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      WhatsApp
                    </label>
                    <Input
                      id="phone"
                      required
                      placeholder="(11) 99999-9999"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Conte-me sobre seu interesse..."
                      rows={6}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    />
                  </div>

                  {/* Botão */}
                  <Button
                    type="submit"
                    className="w-full gradient-accent text-primary-foreground hover:opacity-90 transition-smooth"
                    size="lg"
                  >
                    Enviar Mensagem via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info lateral */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contato@babidelicat.com.br"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        contato@babidelicat.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Instagram</h3>
                      <a
                        href="https://instagram.com/babidelicat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        @babidelicat
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Localização</h3>
                      <p className="text-muted-foreground">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-4">
                  Horário de Atendimento
                </h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Responderei sua mensagem em até 48 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
