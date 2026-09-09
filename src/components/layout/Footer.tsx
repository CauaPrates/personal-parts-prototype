import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../ui/SocialIcons';
import { BrandMark } from '../ui/BrandMark';
import { TricolorAccent } from '../ui/TricolorAccent';

export function Footer() {
  return (
    <footer className="bg-ink-900">
      <TricolorAccent />
      <div className="container-px mx-auto max-w-7xl border-t border-ink-700 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-auto" withFlag={false} />
              <span className="text-chrome font-display text-lg font-bold uppercase tracking-wide2">
                Personal Parts
              </span>
            </span>
            <p className="mt-4 text-sm text-silver-400">
              Acessórios aerodinâmicos personalizados desde 1997. Design nacional, fabricação
              própria em fibra de vidro, PU e ABS.
            </p>
            <div className="mt-5 flex gap-3">
              {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded border border-ink-600 text-silver-400 hover:border-racing hover:text-racing-400"
                  aria-label="Rede social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-14 items-center rounded bg-silver-300 px-2.5">
                <img
                  src="/brand/selo-marca-brasil.png"
                  alt="Selo Troféu Marca Brasil"
                  className="h-10 w-auto"
                />
              </div>
              <p className="max-w-[9rem] text-[11px] leading-snug text-silver-400">
                Reconhecida com o Troféu Marca Brasil
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
              Institucional
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-silver-400">
              <li><Link to="/sobre" className="hover:text-white">Sobre a Personal Parts</Link></li>
              <li><Link to="/trabalhos" className="hover:text-white">Portfólio de trabalhos</Link></li>
              <li><Link to="/revenda" className="hover:text-white">Seja um lojista</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
              Catálogo
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-silver-400">
              <li><Link to="/produtos" className="hover:text-white">Todos os produtos</Link></li>
              <li><Link to="/produtos?categoria=cat-kits" className="hover:text-white">Kits aerodinâmicos</Link></li>
              <li><Link to="/produtos?categoria=cat-spoilers" className="hover:text-white">Spoilers</Link></li>
              <li><Link to="/produtos?categoria=cat-para-choques" className="hover:text-white">Para-choques</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide2 text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-silver-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-racing-400" />
                Rua das Oficinas, 1997 — São Paulo, SP
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-racing-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-racing-400" />
                contato@personalparts.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-silver-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Personal Parts. Desde 1997. Todos os direitos reservados.</span>
          <span>Protótipo de demonstração — dados e imagens ilustrativos.</span>
        </div>
      </div>
    </footer>
  );
}
