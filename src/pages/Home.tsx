import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 border-b border-red-600">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-500 font-semibold tracking-widest uppercase mb-3">
            Lava-Rápido
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cuidado completo para o seu carro
          </h1>

          <p className="text-zinc-300 text-lg max-w-3xl mx-auto mb-6">
            No nosso lava-rápido, seu veículo recebe atenção, limpeza e cuidado
            em cada detalhe. Atendemos desde carros compactos até SUVs, sempre
            com rapidez, qualidade e bom acabamento.
          </p>

          <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
            Seja para manter o carro limpo durante a semana ou dar aquela
            renovada no visual, oferecemos opções de lavagem simples, completa e
            premium para diferentes necessidades.
          </p>

          <Link
            to="/agendamentos"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Fazer agendamento
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Nossos serviços</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Escolha a melhor opção para o seu veículo e mantenha a limpeza com
            praticidade e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <h3 className="text-2xl font-bold mb-3">
              Lavagem Simples
            </h3>

            <p className="text-zinc-400">
              Ideal para a rotina do dia a dia. Limpeza externa rápida e
              eficiente para deixar o carro com aparência renovada.
            </p>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <h3 className="text-2xl font-bold mb-3">
              Lavagem Completa
            </h3>

            <p className="text-zinc-400">
              Inclui limpeza externa e interna, trazendo mais conforto,
              organização e melhor apresentação do veículo.
            </p>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <h3 className="text-2xl font-bold mb-3">
              Lavagem Premium
            </h3>

            <p className="text-zinc-400">
              Para quem busca um cuidado mais detalhado, com atenção especial ao
              acabamento e à conservação do automóvel.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Cuidado para o carro do dia a dia
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto">
            Hatch, sedan ou SUV: cada veículo recebe o mesmo cuidado, seja um
            carro compacto para a rotina, um sedan familiar ou um SUV usado na
            cidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
              alt="Carro hatch"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Hatch compacto
              </h3>

              <p className="text-zinc-400">
                Perfeito para carros de uso diário, econômicos e práticos para
                quem enfrenta a rotina da cidade.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
              alt="Carro sedan"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Sedan
              </h3>

              <p className="text-zinc-400">
                Ideal para veículos usados no dia a dia, viagens e rotina
                familiar, com limpeza externa e interna.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-lg border border-zinc-800 border-t-4 border-red-600">
            <img
              src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"
              alt="SUV compacto"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                SUV compacto
              </h3>

              <p className="text-zinc-400">
                Também cuidamos de SUVs compactos, mantendo a limpeza interna e
                externa com atenção aos detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Por que escolher nosso lava-rápido?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-l-4 border-red-600">
            <h3 className="text-xl font-bold mb-2">
              Atendimento rápido
            </h3>

            <p className="text-zinc-400">
              Agilidade no serviço para facilitar sua rotina sem abrir mão da
              qualidade.
            </p>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-l-4 border-red-600">
            <h3 className="text-xl font-bold mb-2">
              Qualidade na limpeza
            </h3>

            <p className="text-zinc-400">
              Trabalhamos com cuidado nos detalhes para entregar um resultado
              limpo e bem apresentado.
            </p>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-lg border border-zinc-800 border-l-4 border-red-600">
            <h3 className="text-xl font-bold mb-2">
              Praticidade no agendamento
            </h3>

            <p className="text-zinc-400">
              Faça seu agendamento de forma simples e acompanhe os veículos
              aguardando lavagem.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}