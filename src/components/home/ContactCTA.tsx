import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { buildWhatsAppLink } from '../../lib/utils';

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20">
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-balance sm:text-4xl">
          Seu carro, sua identidade. Vamos conversar sobre o próximo projeto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-silver-400">
          Fale agora com nosso time pelo WhatsApp ou solicite um orçamento detalhado pelo
          formulário de contato.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            href={buildWhatsAppLink('Olá! Gostaria de solicitar um orçamento.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no WhatsApp
          </Button>
          <Button size="lg" variant="secondary" href="/contato">
            <Phone className="h-4 w-4" />
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
