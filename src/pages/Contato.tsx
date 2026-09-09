import { useState, type FormEvent, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { PartVisual } from '../components/ui/PartVisual';
import { useToast } from '../context/ToastContext';
import { buildWhatsAppLink } from '../lib/utils';

type FormState = { nome: string; telefone: string; email: string; mensagem: string };

export function Contato() {
  const [searchParams] = useSearchParams();
  const assunto = searchParams.get('assunto');
  const [form, setForm] = useState<FormState>({
    nome: '',
    telefone: '',
    email: '',
    mensagem: assunto === 'pintura-personalizada'
      ? 'Olá! Tenho interesse no serviço de pintura personalizada.'
      : '',
  });
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast('Mensagem enviada! Nosso time responde em até 1 dia útil.');
      setForm({ nome: '', telefone: '', email: '', mensagem: '' });
    }, 900);
  }

  return (
    <div className="container-px mx-auto max-w-7xl py-14">
      <SectionHeading
        eyebrow="Contato"
        title="Fale com a Personal Parts"
        description="Formulário de orçamento, WhatsApp direto ou visita presencial na fábrica — você escolhe."
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-ink-600 bg-ink-800 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" required>
              <input
                required
                value={form.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                className={inputClasses}
              />
            </Field>
            <Field label="Telefone" required>
              <input
                required
                type="tel"
                value={form.telefone}
                onChange={(e) => handleChange('telefone', e.target.value)}
                className={inputClasses}
              />
            </Field>
          </div>
          <Field label="E-mail" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={inputClasses}
            />
          </Field>
          <Field label="Mensagem" required>
            <textarea
              required
              rows={5}
              value={form.mensagem}
              onChange={(e) => handleChange('mensagem', e.target.value)}
              className={inputClasses}
            />
          </Field>
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>

        <div className="space-y-6">
          <div className="aspect-[16/10] overflow-hidden rounded-lg border border-ink-700">
            <PartVisual seed="mapa-sp" className="h-full w-full" />
          </div>

          <div className="space-y-4 rounded-lg border border-ink-700 bg-ink-800 p-6">
            <InfoRow icon={MapPin}>Rua das Oficinas, 1997 — São Paulo, SP</InfoRow>
            <InfoRow icon={Phone}>(11) 99999-9999</InfoRow>
            <InfoRow icon={Mail}>contato@personalparts.com.br</InfoRow>
            <InfoRow icon={Clock}>Seg. a sex., 9h às 18h · Sáb., 9h às 13h</InfoRow>
          </div>

          <a
            href={buildWhatsAppLink('Olá! Vim pelo site e gostaria de mais informações.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded bg-racing px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide2 text-white hover:bg-racing-600"
          >
            <MessageCircle className="h-4 w-4" />
            Falar agora no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

const inputClasses =
  'w-full rounded border border-ink-500 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-silver-400 focus:border-racing focus:outline-none';

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide2 text-silver-400">
        {label} {required && <span className="text-racing-400">*</span>}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, children }: { icon: typeof MapPin; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm text-silver-300">
      <Icon className="h-4 w-4 shrink-0 text-racing-400" />
      {children}
    </div>
  );
}
