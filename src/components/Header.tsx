import { Link } from "react-router-dom"
import { useAgendamentos } from "../context/AgendamentoContext"

export default function Header() {
  const { agendamentos } = useAgendamentos()

  return (
    <header className="bg-black text-white border-b border-red-600">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold">
          Lava<span className="text-red-600">Rápido</span>
        </h1>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            to="/agendamentos"
            className="hover:text-red-500 transition"
          >
            Agendamentos
          </Link>

          <Link
            to="/sobre"
            className="hover:text-red-500 transition"
          >
            Sobre
          </Link>

          <span className="bg-red-600 px-4 py-2 rounded-lg font-semibold">
            Aguardando: {agendamentos.length}
          </span>
        </div>
      </nav>
    </header>
  )
}