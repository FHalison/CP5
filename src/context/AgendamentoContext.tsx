import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

type Agendamento = {
  id: number
  nome: string
  modelo: string
  placa: string
  lavagem: string
}

type AgendamentoContextType = {
  agendamentos: Agendamento[]
  adicionarAgendamento: (agendamento: Omit<Agendamento, "id">) => void
  removerAgendamento: (id: number) => void
}

const AgendamentoContext = createContext<AgendamentoContextType | undefined>(
  undefined
)

export function AgendamentoProvider({ children }: { children: ReactNode }) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  function adicionarAgendamento(agendamento: Omit<Agendamento, "id">) {
    const novoAgendamento = {
      ...agendamento,
      id: Date.now(),
    }

    setAgendamentos([...agendamentos, novoAgendamento])
  }

  function removerAgendamento(id: number) {
    setAgendamentos(
      agendamentos.filter((agendamento) => agendamento.id !== id)
    )
  }

  return (
    <AgendamentoContext.Provider
      value={{
        agendamentos,
        adicionarAgendamento,
        removerAgendamento,
      }}
    >
      {children}
    </AgendamentoContext.Provider>
  )
}

export function useAgendamentos() {
  const context = useContext(AgendamentoContext)

  if (!context) {
    throw new Error(
      "useAgendamentos deve ser usado dentro de AgendamentoProvider"
    )
  }

  return context
}