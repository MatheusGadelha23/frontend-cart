# Meus Produtos

Um aplicativo de gerenciamento de produtos com funcionalidade de carrinho de compras, permitindo aos usuários adicionar, remover e visualizar produtos de forma intuitiva.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Vue.js**: Um framework JavaScript progressivo para construção de interfaces de usuário.
- **Vue Router**: Para gerenciamento de rotas e navegação entre páginas.
- **Axios**: Para realizar requisições HTTP de forma simples e eficaz.
- **Vue Toast Notification**: Para exibir notificações de toast ao usuário.
- **Tailwind CSS**: Um framework CSS para estilização e design responsivo.

## Requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/MatheusGadelha23/frontend-cart.git
   cd frontend-cart
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Variáveis de Ambiente**

   O projeto utiliza variáveis de ambiente para configurar a URL da API. Para isso, você deve criar uma cópia do arquivo `env_example`renomeando como `.env` na raiz do projeto.

   ### Exemplo de Arquivo `.env`

   Faça uma cópia do arquivo `env_example`renomeando como `.env` na raiz do projeto:

   ```plaintext
   VUE_APP_API_URL=http://localhost:3000/api
   ```

   Certifique-se de que o valor da variável `VUE_APP_API_URL` aponte para a URL correta da sua API.

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run serve
   ```

5. **Abra o navegador** e acesse `http://localhost:8080` para ver o aplicativo em funcionamento.

## Uso

Após iniciar o aplicativo, você pode realizar as seguintes ações:

- **Adicionar Produtos**: Clique no botão "Adicionar ao Carrinho" para adicionar produtos ao carrinho.
- **Visualizar Carrinho**: Clique no ícone do carrinho para abrir a visualização do carrinho.
- **Remover Produtos**: Na visualização do carrinho, você pode remover produtos clicando no botão de remoção.