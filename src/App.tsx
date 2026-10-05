import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Agendamentos from "./pages/Agendamentos"
import Sobre from "./pages/Sobre"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AgendamentoProvider } from "./context/AgendamentoContext"

export default function App() {
  return (
    <AgendamentoProvider>
      <BrowserRouter>
        <Header />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendamentos" element={<Agendamentos />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </AgendamentoProvider>
  )
}