import { useState, type FormEvent, type ReactNode } from 'react';
import { Handshake, TrendingUp, Truck, Headset } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { useToast } from '../context/ToastContext';

const BENEFICIOS = [
  {
    icon: TrendingUp,
    titulo: 'Margem competitiva',
    texto: 'Tabela diferenciada para lojistas, com reajuste conforme volume mensal.',
  },
  {
    icon: Truck,
    titulo: 'Logística nacional',
    texto: 'Envio para todo o Brasil com peças protegidas para transporte de longa distância.',
  },
  {
    icon: Headset,
    titulo: 'Suporte técnico dedicado',
    texto: 'Time técnico disponível para tirar dúvidas de instalação e compatibilidade.',
  },
  {
    icon: Handshake,
    titulo: 'Exclusividade por região',
    texto: 'Possibilidade de exclusividade territorial para lojistas com volume relevante.',
  },
];

type FormState = {
  nome: string;
  loja: string;
  telefone: string;
  email: string;
  cidade: string;
  mensagem: string;
};

const INITIAL: FormState = { nome: '', loja: '', telefone: '', email: '', cidade: '', mensagem: '' };

export function Revenda() {
  const [form, setForm] = useState<FormState>(INITIAL);
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
      showToast('Recebemos seu cadastro de revenda! Nosso time comercial vai entrar em contato em breve.');
      setForm(INITIAL);
    }, 900);
  }

  return (
    <div>
      <section className="border-b border-ink-700 bg-ink-900 py-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-balance sm:text-5xl">Seja um lojista Personal Parts</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-silver-400">
            Leve o catálogo de acessórios aerodinâmicos que mais cresce no país para a sua região.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-950 py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Vantagens" title="Por que revender Personal Parts" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFICIOS.map((b) => (
              <div key={b.titulo} className="rounded-lg border border-ink-700 bg-ink-800 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded bg-racing-50 text-racing-400">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{b.titulo}</h3>
                <p className="mt-2 text-sm text-silver-400">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-20">
        <div className="container-px mx-auto max-w-2xl">
          <SectionHeading align="center" eyebrow="Cadastro" title="Quero ser lojista" className="mx-auto" />
          <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-lg border border-ink-600 bg-ink-800 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo" required>
                <input
                  required
                  value={form.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  className={inputClasses}
                />
              </Field>
              <Field label="Nome da loja" required>
                <input
                  required
                  value={form.loja}
                  onChange={(e) => handleChange('loja', e.target.value)}
                  className={inputClasses}
                />
              </Field>
              <Field label="Telefone / WhatsApp" required>
                <input
                  required
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => handleChange('telefone', e.target.value)}
                  className={inputClasses}
                />
              </Field>
              <Field label="E-mail" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClasses}
                />
              </Field>
            </div>
            <Field label="Cidade / Estado" required>
              <input
                required
                value={form.cidade}
                onChange={(e) => handleChange('cidade', e.target.value)}
                className={inputClasses}
              />
            </Field>
            <Field label="Conte um pouco sobre sua loja">
              <textarea
                rows={4}
                value={form.mensagem}
                onChange={(e) => handleChange('mensagem', e.target.value)}
                className={inputClasses}
              />
            </Field>
            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar cadastro'}
            </Button>
          </form>
        </div>
      </section>
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
