import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { useState, type CSSProperties } from "react";
import {
  INSTAGRAM_URL,
  buildLocationWhatsappUrl,
  experienceBenefits,
  faqs,
  images,
  locations,
  navLinks,
  services,
} from "@/data/siteContent";
import { localMediaFiles } from "@/data/localMediaManifest";

export const Route = createFileRoute("/")({
  component: Index,
});

const cityHref = "#escolher-cidade";
const rachelPhotoSrc = "/assets/rachel.png";
const rachelInstagramUrl = "https://www.instagram.com/rachelshereh?igsh=OWd0amUxOGd1eDJk";
const videoExtensions = new Set(["mp4", "webm", "mov"]);

const mediaItems = localMediaFiles.slice(0, 9).map((src) => {
  const extension = src.split(".").pop()?.toLowerCase() ?? "";
  const fileName =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "") ?? "AMORENAR";

  return {
    id: src,
    src,
    type: videoExtensions.has(extension) ? "video" : "image",
    alt: `Registro AMORENAR ${fileName.replace(/[-_]+/g, " ")}`,
  };
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileNav, setMobileNav] = useState(false);

  const novaBandeirantesUrl = buildLocationWhatsappUrl(locations.novaBandeirantes);

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground lg:pb-0">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--bg-soft)_88%,transparent)] border-b border-border/60">
        <div className="container-page flex h-16 items-center justify-between">
          <a
            href="#inicio"
            className="font-display text-2xl font-semibold text-[var(--dark)] normal-case"
          >
            AMORENAR
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--dark)]/75 hover:text-[var(--bronze)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href={cityHref} className="hidden sm:inline-flex btn-primary !py-3 !px-5 text-sm">
            Escolher cidade
          </a>
          <button
            aria-label="Abrir menu"
            className="lg:hidden p-2 rounded-md text-[var(--dark)]"
            onClick={() => setMobileNav((value) => !value)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {mobileNav ? (
                <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" />
              ) : (
                <>
                  <path d="M4 7h16" strokeWidth="2" />
                  <path d="M4 12h16" strokeWidth="2" />
                  <path d="M4 17h16" strokeWidth="2" />
                </>
              )}
            </svg>
          </button>
        </div>
        {mobileNav && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container-page py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNav(false)}
                  className="py-3 px-1 text-[var(--dark)] border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <a href={cityHref} onClick={() => setMobileNav(false)} className="btn-primary mt-4">
                Escolher minha cidade
              </a>
            </nav>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="hero-main relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={
          {
            "--hero-image": `url(${images.hero})`,
            "--hero-desktop-image": `url(${images.heroDesktop})`,
          } as CSSProperties
        }
      >
        <div className="container-page relative flex min-h-[560px] items-center">
          <div className="max-w-[560px]">
            <span className="tag-eyebrow">Especialista em bronzeamento feminino</span>
            <h1 className="mt-6 text-4xl font-medium leading-[1.05] text-[#43261F] sm:text-5xl lg:text-6xl">
              A marquinha que valoriza sua beleza e desperta sua confiança
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5F4338]">
              Uma experiência feminina, personalizada e criada para você se sentir ainda mais
              bonita.
            </p>
            <p className="mt-5 text-sm font-medium text-[#8F6C5E]">
              Nova Bandeirantes e Nova Monte Verde-MT
            </p>
            <a href={cityHref} className="btn-primary mt-9 min-h-[52px]">
              Escolher minha cidade
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF3ED] py-[72px] lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.48fr)] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[460px]">
              <div
                className="absolute -inset-4 rounded-[36px] border border-[var(--bronze)]/14"
                aria-hidden
              />
              <img
                src={rachelPhotoSrc}
                alt="Rachel, profissional responsável pela AMORENAR"
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[32px] object-cover shadow-[0_24px_80px_-44px_rgba(61,36,28,0.48)]"
              />
            </div>
            <div>
              <span className="tag-eyebrow">Por trás da AMORENAR</span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">Conheça a Rachel</h2>
              <div className="mt-6 space-y-5 [font-family:'Poppins',system-ui,sans-serif] text-base leading-relaxed text-[var(--ink)]/72">
                <p>
                  Rachel é a profissional responsável pela AMORENAR e conduz cada atendimento com
                  cuidado, atenção e delicadeza.
                </p>
                <p>
                  Seu trabalho é pensado para mulheres que desejam realçar sua beleza, se sentir
                  mais confiantes e viver uma experiência de bronzeamento personalizada.
                </p>
                <p>
                  Na AMORENAR, todos os detalhes importam: da escolha da marquinha ao cuidado
                  durante o atendimento.
                </p>
              </div>
              <p className="mt-8 rounded-[24px] border border-[var(--bronze)]/18 bg-white/72 px-6 py-5 [font-family:'Poppins',system-ui,sans-serif] text-base font-medium leading-relaxed text-[var(--dark)] shadow-[0_18px_55px_-44px_rgba(61,36,28,0.35)]">
                Atendimento feminino, personalizado e com atenção aos detalhes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={cityHref} className="btn-primary min-h-[52px]">
                  Escolher minha cidade
                </a>
                <a
                  href={rachelInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost min-h-[52px] bg-white/60"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  Ver Instagram da Rachel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[72px] lg:py-32">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="tag-eyebrow">Experiência AMORENAR</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Seu momento de beleza e cuidado
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]/70">
              Cada atendimento é pensado para proporcionar conforto, privacidade e uma marquinha que
              valorize o seu corpo.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {experienceBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 border-t border-[var(--bronze)]/25 pt-5"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-[var(--bronze)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="[font-family:'Poppins',system-ui,sans-serif] text-sm text-[var(--ink)]/78">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#F6E8DC] py-[72px] lg:py-36">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="tag-eyebrow">Nossas experiências</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Duas formas de viver a experiência <span className="normal-case">AMORENAR</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]/70">
              Conheça as experiências disponíveis e descubra qual combina com o resultado que você
              deseja.
            </p>
          </div>
          <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-28">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`grid items-center gap-8 lg:gap-16 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.42fr)] ${
                  index === 1 ? "lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.48fr)]" : ""
                }`}
              >
                <div className={`relative ${index === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="absolute -inset-3 rounded-[2rem] border border-[var(--bronze)]/20"
                    aria-hidden
                  />
                  <img
                    src={service.image}
                    alt={`${service.title} AMORENAR`}
                    className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_18px_50px_-36px_rgba(61,36,28,0.45)]"
                  />
                </div>
                <div className={`relative ${index === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-6 h-px w-24 bg-[var(--bronze)]/45" aria-hidden />
                  <div
                    className="font-display text-7xl leading-none text-[var(--bronze)]/20 sm:text-8xl"
                    aria-hidden
                  >
                    {service.number}
                  </div>
                  <p className="mt-2 [font-family:'Poppins',system-ui,sans-serif] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--bronze)]">
                    Serviço {service.number}
                  </p>
                  <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{service.title}</h3>
                  <p className="mt-5 max-w-xl [font-family:'Poppins',system-ui,sans-serif] text-base leading-relaxed text-[var(--ink)]/72">
                    {service.description}
                  </p>
                  <ul className="mt-7 space-y-3 [font-family:'Poppins',system-ui,sans-serif] text-sm text-[var(--ink)]/78">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[var(--bronze)]/35 text-[var(--bronze)]">
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-xl text-center [font-family:'Poppins',system-ui,sans-serif] text-sm text-[var(--ink)]/60">
            Na próxima etapa, você poderá escolher sua cidade e consultar os horários disponíveis.
          </p>
        </div>
      </section>

      <section id="resultados" className="py-[72px] lg:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="tag-eyebrow">Momentos AMORENAR</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Resultados, experiências e bastidores reais
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]/70">
              Veja um pouco da experiência AMORENAR através de registros reais do atendimento,
              resultados e bastidores.
            </p>
          </div>
          {mediaItems.length > 0 ? (
            <div className="amorenar-mosaic mt-14">
              {mediaItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`amorenar-mosaic-card amorenar-mosaic-card-${(index % 9) + 1}`}
                >
                  {item.type === "video" ? (
                    <div className="relative h-full">
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-14 max-w-xl rounded-[24px] border border-[var(--bronze)]/14 bg-white p-8 text-center shadow-[0_20px_60px_-46px_rgba(61,36,28,0.35)]">
              <p className="[font-family:'Poppins',system-ui,sans-serif] text-sm leading-relaxed text-[var(--ink)]/68">
                Adicione fotos e vídeos em assets/videos para exibir o mosaico AMORENAR.
              </p>
            </div>
          )}
          <div className="mt-10 flex justify-center">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Instagram className="h-4 w-4" aria-hidden />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="escolher-cidade" className="bg-[#F6E8DC] py-[72px] lg:py-36">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="tag-eyebrow">Cidades</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Onde você deseja ser atendida?
            </h2>
            <p className="mt-5 text-lg text-[var(--ink)]/70">Escolha sua cidade para continuar.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[var(--bronze)]/25 bg-[var(--bg-soft)] p-7 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl lg:text-4xl">{locations.novaBandeirantes.name}</h3>
                <span className="rounded-full bg-[var(--rose)] px-4 py-2 [font-family:'Poppins',system-ui,sans-serif] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bronze)]">
                  {locations.novaBandeirantes.status}
                </span>
              </div>
              <p className="mt-6 max-w-md [font-family:'Poppins',system-ui,sans-serif] text-sm leading-relaxed text-[var(--ink)]/70">
                Consulte os horários disponíveis e agende diretamente com a Rachel.
              </p>
              <a
                href={novaBandeirantesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 min-h-[52px] w-full sm:w-auto"
              >
                Agendar em Nova Bandeirantes
              </a>
            </article>
            <article className="rounded-[2rem] border border-[var(--bronze)]/18 bg-transparent p-7 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl lg:text-4xl">{locations.novaMonteVerde.name}</h3>
                <span className="rounded-full border border-[var(--bronze)]/25 px-4 py-2 [font-family:'Poppins',system-ui,sans-serif] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bronze)]">
                  {locations.novaMonteVerde.status}
                </span>
              </div>
              <p className="mt-6 max-w-md [font-family:'Poppins',system-ui,sans-serif] text-sm leading-relaxed text-[var(--ink)]/70">
                Estamos preparando a experiência AMORENAR para receber você em Nova Monte Verde.
              </p>
              <a
                href={locations.novaMonteVerde.path}
                className="btn-ghost mt-8 min-h-[52px] w-full sm:w-auto"
              >
                Quero ser avisada
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="duvidas" className="py-[72px] lg:py-32">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <span className="tag-eyebrow">Dúvidas</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-b border-[var(--bronze)]/18">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="[font-family:'Poppins',system-ui,sans-serif] font-medium text-[var(--dark)]">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl text-[var(--bronze)] transition-transform ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="pb-5 [font-family:'Poppins',system-ui,sans-serif] text-sm leading-relaxed text-[var(--ink)]/72">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--muted)]/45 py-[72px] lg:py-32">
        <div className="container-page text-center">
          <span className="tag-eyebrow">Agendamento</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            Pronta para viver essa experiência?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--ink)]/70">
            Escolha sua cidade e consulte a disponibilidade.
          </p>
          <a href={cityHref} className="btn-primary mt-8 min-h-[52px]">
            Escolher minha cidade
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="container-page flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-2xl text-[var(--dark)] normal-case">AMORENAR</div>
            <p className="mt-2 text-[var(--ink)]/62">Especialista em bronzeamento feminino</p>
          </div>
          <div className="flex gap-5 text-[var(--ink)]/65">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--bronze)]"
            >
              Instagram
            </a>
            <a href="#inicio" className="hover:text-[var(--bronze)]">
              Voltar ao topo
            </a>
          </div>
        </div>
      </footer>

      <a
        href={cityHref}
        className="btn-primary fixed bottom-5 left-5 right-5 z-40 min-h-[52px] shadow-xl lg:hidden"
      >
        Escolher minha cidade
      </a>
    </div>
  );
}
