🍔 Lanchonete Web App
Aplicação desenvolvida para uma lanchonete, com o objetivo de exibir o cardápio, gerenciar pedidos e oferecer uma experiência simples, intuitiva e responsiva para os clientes.

🚀 Tecnologias Utilizadas
⚛️ React – Biblioteca para construção da interface.

🔷 TypeScript – Tipagem estática para maior segurança e organização do código.

🎨 Bootstrap – Framework CSS para estilização rápida e responsiva.

🎯 Funcionalidades
✅ Visualização do cardápio com descrição, imagem e preço dos produtos.

✅ Adição de produtos ao carrinho.

✅ Controle de quantidade de produtos no carrinho.

✅ Cálculo automático do valor total do pedido.

✅ Remoção de produtos do carrinho.

✅ Layout totalmente responsivo, adaptado para desktop e mobile.

🏗️ Arquitetura do Projeto
csharp
/src
├── components      → Componentes reutilizáveis (Navbar, Cardápio, Produto, Carrinho)
├── context         → Contexto global para gerenciamento do carrinho
├── data            → Dados simulados do cardápio
├── hooks           → Hooks personalizados (ex.: useCart)
├── page            → Páginas principais (ex.: Home, Carrinho)
├── App.tsx         → Componente raiz da aplicação
├── main.tsx        → Ponto de entrada da aplicação
├── App.css         → Estilo global da aplicação
├── index.css       → Estilo base
└── vite-env.d.ts   → Declarações de tipos do Vite
🛠️ Como Rodar o Projeto Localmente
Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse a pasta do projeto:

cd nome-do-projeto
Instale as dependências:
Instalações nescessarias:
npm install
npm install react@latest react-dom@latest

Execute o servidor de desenvolvimento:

Acesse no navegador:
http://localhost:5173
🔥 Melhorias Futuras (Sugestões)
 Implementação de tela administrativa para cadastro de produtos.

🧑‍💻 Desenvolvido por
Vitor dos S.G.C
