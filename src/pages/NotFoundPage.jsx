import { useLocation, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { EmptyState } from '../components/common/EmptyState';

export default function NotFoundPage(){
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="min-h-[60vh] p-6 max-w-6xl mx-auto flex items-center justify-center">
      <RevealOnScroll>
        <EmptyState
          icon="404"
          title="Página não encontrada"
          description={`Desculpe, a página "${location.pathname}" não existe em nosso site. Clique no botão abaixo para voltar à página inicial.`}
          action={
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
            >
              Voltar ao Início
            </button>
          }
        />
      </RevealOnScroll>
    </section>
  )
}
