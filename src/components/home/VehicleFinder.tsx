import { VehicleSelector } from '../shared/VehicleSelector';
import { SectionHeading } from '../ui/SectionHeading';

export function VehicleFinder() {
  return (
    <section className="border-b border-ink-700 bg-ink-900 bg-carbon py-20">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="Busca rápida"
          title="Buscar por veículo"
          description="Selecione a marca e o modelo do seu carro para ver as peças compatíveis disponíveis."
          className="mx-auto"
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-ink-600 bg-ink-800 p-6 shadow-card sm:p-8">
          <VehicleSelector />
        </div>
      </div>
    </section>
  );
}
