import { useState } from "react"
import { useAgendamentos } from "../context/AgendamentoContext"

export default function Agendamentos() {
  const { agendamentos, adicionarAgendamento, removerAgendamento } =
    useAgendamentos()

  const [nome, setNome] = useState("")
  const [modelo, setModelo] = useState("")
  const [placa, setPlaca] = useState("")
  const [lavagem, setLavagem] = useState("Simples")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    adicionarAgendamento({
      nome,
      modelo,
      placa,
      lavagem,
    })

    setNome("")
    setModelo("")
    setPlaca("")
    setLavagem("Simples")
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-red-500 font-semibold tracking-widest uppercase mb-2">
            Agende sua lavagem
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agendamentos
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Preencha os dados do veículo e escolha o tipo de lavagem desejado.
            Seu agendamento será adicionado à fila de carros aguardando atendimento.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-800 border-t-4 border-red-600 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">
            Dados do agendamento
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Nome do cliente
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg outline-none focus:border-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Modelo do carro
              </label>

              <input
                type="text"
                placeholder="Ex: Civic, Corsa, Renegade"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg outline-none focus:border-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Placa
              </label>

              <input
                type="text"
                placeholder="ABC1D23"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg outline-none focus:border-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Tipo de lavagem
              </label>

              <select
                value={lavagem}
                onChange={(e) => setLavagem(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg outline-none focus:border-red-600"
              >
                <option value="Simples">Simples</option>
                <option value="Completa">Completa</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Agendar lavagem
          </button>
        </form>

        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">
                Carros aguardando
              </h2>

              <p className="text-zinc-400 mt-1">
                Veículos adicionados à fila de lavagem.
              </p>
            </div>

            <span className="bg-red-600 px-4 py-2 rounded-lg font-bold">
              {agendamentos.length}
            </span>
          </div>

          {agendamentos.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <p className="text-zinc-400">
                Nenhum carro aguardando lavagem no momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {agendamentos.map((agendamento) => (
                <div
                  key={agendamento.id}
                  className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800 border-l-4 border-red-600"
                >
                  <div className="flex justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {agendamento.modelo}
                      </h3>

                      <p className="text-zinc-400">
                        {agendamento.nome}
                      </p>
                    </div>

                    <span className="bg-zinc-800 text-red-500 px-3 py-1 rounded-lg h-fit text-sm font-semibold">
                      {agendamento.lavagem}
                    </span>
                  </div>

                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-zinc-400">
                      Placa
                    </p>

                    <p className="text-lg font-semibold">
                      {agendamento.placa}
                    </p>
                  </div>

                  <button
                    onClick={() => removerAgendamento(agendamento.id)}
                    className="mt-6 w-full border border-red-600 text-red-500 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
                  >
                    Excluir agendamento
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}