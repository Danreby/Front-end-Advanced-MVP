# FloriCult

**Arranjos frescos — MVP Front-end (PUC‑RIO)**

> Catálogo e-commerce de floricultura criado como projeto para a disciplina *Front‑End Avançado*. Objetivo: demonstrar boas práticas de React (componentização, roteamento, UX e acessibilidade) em um MVP simples e reutilizável.

---

## Visão rápida

* App: catálogo de flores com páginas públicas (Home, Shop, Product, About, Contact) e tratamento de rota 404.
* Foco: experiência do usuário, componentes reutilizáveis e arquitetura limpa com Context API.
* Idiomas: Português e Inglês (suporte básico).

---

## Principais funcionalidades

* Navegação com **React Router v6** (rotas dinâmicas, navegação programática).
* Componentes reutilizáveis: `Card`, `EmptyState`, `Toast`, `Tooltip`, `LoadingSpinner`.
* Sistema de notificação global via **Context API** (toasts com helpers: success, error, warning).
* Busca em tempo real no catálogo (Shop) e paginação/recomendações simples na Product Page.
* Validações e feedback visual em formulários (Contact) — foco em micro‑interações e acessibilidade.
* Layout responsivo com **Tailwind CSS** e transições com **Framer Motion**.

---

## Stack

* React 18 + Vite
* React Router v6
* Tailwind CSS
* Framer Motion
* Context API (state global)
* JavaScript (ES6+)

---

## Quick start

```bash
git clone https://github.com/Danreby/Front-end-Advanced-MVP.git
cd Front-end-Advanced-MVP

npm install

npm run dev
```

Build e deploy:

```bash
npm run build
npm run deploy 
```

---

## Estrutura (breve)

```
src/
├── context/        # ToastContext, outros contexts
├── pages/          # Home, Shop, ProductDetail, About, Contact, NotFound
├── components/     # NavBar, Carousel, LoadingScreen, common/*
├── hooks/          # useCarousel, useToast (helpers)
├── App.jsx
└── main.jsx
```

---

## Exemplos úteis

**Usando o Toast (Context)**

```jsx
import { useToast } from 'src/context/ToastContext'

function MyComponent(){
  const { success, error } = useToast()

  const handleSave = async () => {
    try{
      success('Salvo com sucesso')
    }catch(e){
      error('Não foi possível salvar')
    }
  }
}
```

**Rota de produto (useParams)**

`/product/:productId` — recupere `productId` com `useParams()` para buscar/filtrar o produto.

---

## Boas práticas aplicadas

* Componentes pequenos e reutilizáveis;
* Separação de responsabilidades (UI vs lógica);
* Feedback imediato (toasts, estados de loading/disabled);
* Acessibilidade básica (alt em imagens, foco em formulários);
* Estrutura preparada para adicionar API real no futuro.

---

## Como contribuir / testes locais

* Abra uma issue descrevendo o que quer alterar.
* Fork → branch com nome claro (`feat/`, `fix/`) → PR com descrição e prints.
* Mantenha o estilo do projeto (Tailwind + pequenas animações).

---

## Personalização rápida

* Cores e tokens: `tailwind.config.js` — altere `colors.primary`/`secondary`.
* Produtos estáticos: editar o array `PRODUCTS` usado nas páginas (ex.: `src/pages/ProductDetailPage.jsx`).
* Idiomas: strings localizadas estão em objetos nos componentes (procure por `texts` ou `i18n`).

---

## Autor

**Bernardo Santos Rolim** — desenvolvedor front‑end

* GitHub: @Danreby
* Portfólio: [https://danreby.github.io/danreby-portifolio/](https://danreby.github.io/danreby-portifolio/)
