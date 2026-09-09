import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { listaMarcas, modelosDaMarca } from '../../mocks/veiculos';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type VehicleSelectorProps = {
  variant?: 'full' | 'compact';
  onNavigate?: () => void;
};

const selectClasses =
  'w-full appearance-none rounded border border-ink-500 bg-ink-900 px-4 py-3 text-sm text-white focus:border-racing focus:outline-none disabled:opacity-40';

export function VehicleSelector({ variant = 'full', onNavigate }: VehicleSelectorProps) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const navigate = useNavigate();

  const modelos = marca ? modelosDaMarca(marca) : [];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (marca) params.set('marca', marca);
    if (modelo) params.set('modelo', modelo);
    navigate(`/produtos?${params.toString()}`);
    onNavigate?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex gap-3',
        variant === 'full' ? 'flex-col sm:flex-row' : 'flex-col',
      )}
    >
      <select
        value={marca}
        onChange={(e) => {
          setMarca(e.target.value);
          setModelo('');
        }}
        className={selectClasses}
        aria-label="Marca do veículo"
      >
        <option value="">Marca</option>
        {listaMarcas.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        className={selectClasses}
        disabled={!marca}
        aria-label="Modelo do veículo"
      >
        <option value="">{marca ? 'Modelo' : 'Selecione a marca primeiro'}</option>
        {modelos.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <Button type="submit" size={variant === 'full' ? 'lg' : 'md'} className="shrink-0">
        <Search className="h-4 w-4" />
        Buscar peças
      </Button>
    </form>
  );
}
