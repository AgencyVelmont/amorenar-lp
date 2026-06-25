import { createFileRoute } from "@tanstack/react-router";
import { INSTAGRAM_URL } from "@/data/siteContent";

export const Route = createFileRoute("/nova-monte-verde")({
  component: NovaMonteVerde,
});

function NovaMonteVerde() {
  return (
    <main className="min-h-screen bg-[#F6E8DC] px-5 py-10 text-[var(--ink)]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center">
        <a href="/" className="font-display text-3xl text-[var(--dark)] normal-case">
          AMORENAR
        </a>
        <section className="mt-20">
          <span className="tag-eyebrow">Nova Monte Verde</span>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl">Estamos chegando</h1>
          <p className="mt-7 max-w-xl [font-family:'Poppins',system-ui,sans-serif] text-lg leading-relaxed text-[var(--ink)]/72">
            Em breve, a experiência AMORENAR também estará disponível em Nova Monte Verde.
          </p>
          <p className="mt-4 max-w-xl [font-family:'Poppins',system-ui,sans-serif] text-sm leading-relaxed text-[var(--ink)]/62">
            Novidades sobre a abertura da agenda serão divulgadas pelo Instagram.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-[52px]"
            >
              Acompanhar no Instagram
            </a>
            <a href="/" className="btn-ghost min-h-[52px]">
              Voltar para o início
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
