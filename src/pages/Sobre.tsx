import gustavo from "../assets/gustavo_recortado.png"
import pedro from "../assets/pedro_recortado.png"
import halison from "../assets/Halison.jpeg"

export default function Sobre() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold tracking-widest uppercase mb-2">
            Nossa equipe
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Sobre nós
          </h1>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Conheça os integrantes responsáveis pelo desenvolvimento do projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600 transition hover:-translate-y-1">
            <img
              src={gustavo}
              alt="Gustavo Santos"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-red-600"
            />

            <h2 className="text-2xl font-bold mb-2">
              Gustavo Santos
            </h2>

            <p className="text-zinc-600">
              RM: 572560
            </p>
          </div>

          <div className="bg-white text-black rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600 transition hover:-translate-y-1">
            <img
              src={pedro}
              alt="Pedro Vinicius"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-red-600"
            />

            <h2 className="text-2xl font-bold mb-2">
              Pedro Vinicius
            </h2>

            <p className="text-zinc-600">
              RM: 573299
            </p>
          </div>

          <div className="bg-white text-black rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600 transition hover:-translate-y-1">
            <img
              src={halison}
              alt="Francisco Halison Marques Teixeira"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-red-600"
            />

            <h2 className="text-2xl font-bold mb-2">
              Francisco Halison Marques Teixeira
            </h2>

            <p className="text-zinc-600">
              RM: 573616
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}