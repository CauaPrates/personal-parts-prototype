export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const WHATSAPP_NUMBER = '5511999999999';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orcamentoMessage(nomeProduto: string): string {
  return `Olá! Tenho interesse em solicitar um orçamento para: ${nomeProduto}.`;
}
