# Byte for Bite

- **Glossário:**
    - **O que é possível com o Byte for Bite?**
    - **🛠 Tecnologias Utilizadas**
    - **Diagrama do banco de dados**
    - **App em funcionamento:**
    - **Como rodar este projeto no seu computador?**
    - **Contribuição**

## O que é possível com o Byte for Bite?

Byte for Bite é uma aplicação web de receitas. Nela, o usuário tem acesso à centenas de receitas e drinks de forma prática e rápida.

**Caso queira acessar o app oficial, basta acessar [Byte-for-bite](https://frontend-production-a0e7.up.railway.app/)**.

- **Neste app, o usuário pode:**
    - Criar uma conta ou fazer login com a opção de utilizar o login com sua conta Google.
    - Filtrar receitas por Meals ou Drinks e, dentro destas opções, filtrar por categoria.
    - Pesquisar uma receitas pelo nome, por ingredientes ou pela primeira letra.
    - Favoritar uma receita e ter acesso a uma página com as receitas favoritas.
    - Ver a página de detalhes da receita.
    - Iniciar uma receita, onde é possível dar check nos ingredientes conforme a receita vai sendo feita.
    - Sair de uma receita em progresso e voltar posteriormente, mantendo os ingredientes já marcados. As receitas em progresso possuem uma marcação pra identifica-las.
    - Ao marcar todos os ingredientes, é possível finalizar a receita, o que leva o usuário para a página de receitas finalizadas.
    - Acessar a página de perfil e ter acesso ao número de receitas já feitas, favoritadas e em progresso.
    - Trocar a foto de perfil
    - Navegar pelo aplicativo voltando para página inicial ou para a página anterior através do menu de navegação

## **🛠** Tecnologias Utilizadas

- **Front-end:**
    - **React** - Biblioteca JavaScript para construção de interfaces de usuário declarativas e componentizadas.
    - **TypeScript**  - Superset JavaScript que adiciona tipagem estática opcional ao JavaScript.
    - **Styled-components** - Biblioteca para estilização de componentes React utilizando CSS-in-JS.
    - **React-router-dom** - Biblioteca para roteamento de páginas em aplicativos React.
    - **React Icons** - Conjunto de ícones React para diversas bibliotecas de ícones populares.
    - **React Testing Library** - Utilitários para testar componentes React de forma mais eficaz.
    - **Vite** - Ferramenta de construção de front-end para desenvolvimento rápido.
    - **Vitest** - Estrutura de teste completa para aplicativos JavaScript/TypeScript, com suporte para Jest, Mocha e Cypress.
    - **Stylelint** - Linter para CSS/SCSS para ajudar a manter um código CSS consistente.
    - **Framer-motion** - Biblioteca para animações fluidas e interativas em componentes React.
    - **OAuth Google** - Biblioteca para autenticação OAuth com o Google em aplicativos React.
    - **Sweetalert2** - ****Biblioteca para criar modais e alertas customizados com JavaScript.
- **Back-end:**
    
    ### **Bibliotecas de Desenvolvimento (DevDependencies):**
    
    - **chai** (v4.3.6): Uma biblioteca de asserção que torna os testes mais legíveis e expressivos.
    - **chai-http** (v4.3.0): Extensão para Chai que fornece funcionalidades de teste HTTP.
    - **eslint** (v7.32.0): Uma ferramenta de linting para identificar e reportar padrões problemáticos no código
    - **mocha** (v9.2.1): Um framework de teste para Node.js, usado para escrever testes assíncronos.
    - **nodemon** (v2.0.15): Uma ferramenta utilizada para monitorar alterações nos arquivos e reiniciar automaticamente o servidor.
    - **sequelize-cli** (v6.3.0): Uma ferramenta de linha de comando para o ORM Sequelize, utilizada para gerenciar bancos de dados.
    - **sinon** (v11.1.1): Uma biblioteca de simulação para testes em JavaScript.
    - **typescript** (v4.4.4): Uma linguagem de programação que estende o JavaScript adicionando tipos estáticos opcionais.
    
    ### **Bibliotecas de Produção (Dependencies):**
    
    - **bcryptjs** (v2.4.3): Uma biblioteca para hash de senhas baseada no algoritmo bcrypt.
    - **cors** (v2.8.5): Um pacote que fornece um middleware Express para habilitar o CORS com várias opções.
    - **express** (v4.17.1): Um framework web para Node.js que simplifica o desenvolvimento de aplicativos da web e APIs.
    - **jest** (v27.4.3): Uma estrutura de teste JavaScript com foco na simplicidade.
    - **jsonwebtoken** (v8.5.1): Uma implementação de JSON Web Tokens (JWT) em JavaScript.
    - **mysql2** (v3.0.0): Um driver MySQL para Node.js, fornecendo uma implementação de baixo nível do protocolo MySQL.
    - **sequelize** (v6.25.5): Um ORM Node.js para bancos de dados SQL, que suporta PostgreSQL, MySQL, SQLite e outros.

## **Diagrama ER e Entidades** do banco de dados

- **Diagrama do database de Meals:**
    
    ![meal_driagram.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/meal_driagram.png)
    
- **Diagrama do database de Drinks:**
    
    ![drink_diagram.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/drink_diagram.png)
    

## App em funcionamento:

O aplicativa foi criado pensando primeiro em dispositivos mobile (mobile first), mas também recebeu sua versão para tablets e desktops.

### Mobile:

![iPhone-13-PRO-localhost.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/iPhone-13-PRO-localhost.png)

![iPhone-13-PRO-localhost (1).png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/iPhone-13-PRO-localhost_(1).png)

---

### Desktop:

![Macbook-Air-localhost.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/Macbook-Air-localhost.png)

---

![Macbook-Air-localhost (1).png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/Macbook-Air-localhost_(1).png)

---

## Como rodar este projeto no seu computador?

Para rodar este projeto localmente, é necessário atender alguns requisitos.

- **Pré-requisitos:**
    - Ter no mínimo 10GB livres no seu sistema.
    - Ter o Git instalado em seu terminal. **[link](https://github.com/git-guides/install-git)**
    - Ter uma chave SSH atrelada à sua conta no GitHub. [**link**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
    - Ter o Docker instalado em sua máquina na versão mais recente. Para instalar o Docker, acesse este [**link**](https://www.docker.com/).
    

**Para rodar o projeto localmente, siga estes passos:**

Clone o projeto

```bash
# Com SSH
$ git clone git@github.com:Wesleyhmendes/Byte-for-Bite.git

# Com HTTP
$ git clone https://github.com/Wesleyhmendes/Byte-for-Bite.git
```

Mude para a pasta raiz:

```bash
$ cd Byte-for-Bite/app
```

Faça o `build` da aplicação pelo Docker:

```bash
$ docker-compose up -d --build
```

Para rodar os testes:

```bash
# pasta frontend
$ npm run test

#pasta backend
$ npm run test

```

Para verificar a cobertura dos testes:

 

```bash
#pasta frontend
$ npm run coverage

#pasta backend
$ npm run test:coverage
```

**Após os containers serem criados, basta acessar em seu navegador o endereço:**
`http://localhost:3000`

<aside>
⚠️ Existe um arquivo `.env.example` na pasta frontend e na backend. Nele, você pode ver quais variáveis de ambiente são utilizadas no projeto.
Crie um arquivo `.env` com essas mesmas variáveis e atribua os valores que achar desejar.

</aside>

---

## **Contribuição**

**Leonardo Defendi Prado - [GitHub](https://github.com/leonardodefendi)**

**Felipe Cadena - [GitHub](https://github.com/felipeCadena)**

---

## Autores

![foto-perfil-amarela.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/foto-perfil-amarela.png)

### **Wesley Mendes** **[🚀](https://emojiterra.com/pt/foguete/)**

Desenvolvedor Web Full Stack | Java | Next.js | Node.js | TypeScript | MySql | PostgreSQL | Python

[**Linkedin**](https://www.linkedin.com/in/wesley-mendes/)

Email: wesleymendes123321@gmail.com

![1697576847994.png](Byte%20for%20Bite%200a8a24c240174fd6997b2b532ddae5ea/1697576847994.png)

### **Gabriel Muniz Ferreira**

Desenvolvedor Full- Stack | React.JS | TypeScript | Redux | Node.JS | MySQL | Metodologias Ágeis

[**Linkedin**](https://www.linkedin.com/in/gabriel-muniz-dev/)

Email: [gabrielmfd@gmail.com](mailto:gabrielmfd@gmail.com)

**[GitHub](https://github.com/GabrielMunizz)**