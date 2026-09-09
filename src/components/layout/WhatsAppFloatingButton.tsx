import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/utils';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink('Olá! Vim pelo site e gostaria de mais informações.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-racing text-white shadow-glow transition-transform hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-racing/40" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
