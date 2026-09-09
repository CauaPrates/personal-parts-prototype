import { AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-3xl flex-col items-center py-32 text-center">
      <AlertTriangle className="h-12 w-12 text-racing-400" />
      <h1 className="mt-6 font-display text-3xl font-bold text-white">Página não encontrada</h1>
      <p className="mt-3 text-silver-400">
        O conteúdo que você procura não existe ou foi removido.
      </p>
      <Button href="/" className="mt-8">
        Voltar para a home
      </Button>
    </div>
  );
}
