# Anotações do Curso de Next.js 14
Este repositório contém todas as lições e materiais relacionados à seção de roteamento do curso.

Sobre o Repositório
Este repositório tem como objetivo fornecer uma documentação prática e detalhada dos conceitos de roteamento em Next.js 14, incluindo exemplos e anotações das principais funcionalidades. As lições abordam desde o básico até conceitos mais avançados, permitindo uma compreensão completa do sistema de roteamento do Next.js.


## Parte 1: Roteamento

### 1. Definição de Rotas
  - Em Next.js, rotas são criadas automaticamente com base na estrutura de arquivos dentro do diretório `app` (ou `pages` para versões anteriores).
  - Cada arquivo JavaScript ou TypeScript em `app` representa uma rota.

### 2. Páginas e Layouts

- **Páginas:**
  - Cada componente de página no diretório `app` representa uma rota.
  - Exemplo: `app/about/page.js` cria a rota `/about`.

- **Layouts:**
  - Layouts permitem definir uma estrutura comum para várias páginas.
  - Utilizar `app/layout.js` para definir um layout que envolve páginas.
  - Layouts são aplicados em múltiplas páginas e podem incluir cabeçalhos, rodapés, etc.

### 3. Rotas Dinâmicas

- **Criação de Rotas Dinâmicas:**
  - Utilizar colchetes `[param]` para criar rotas dinâmicas.
  - Exemplo: `app/posts/[id]/page.js` cria uma rota dinâmica para `/posts/:id`.

- **Rotas Dinâmicas Aninhadas:**
  - Organizar rotas dinâmicas com subpastas e arquivos.
  - Exemplo: `app/users/[userId]/posts/[postId]/page.js` para uma rota aninhada.

### 4. Grupos de Rotas

- **Grupos de Rotas:**
    - **Usando colchetes**: agrupar rotas usando colchetes em pastas para aplicar uma estrutura de URL. Exemplo: `app/dashboard/[section]/page.js` permite `/dashboard/:section`.
    - **Usando parênteses**: para organizar rotas e layouts em grupos sem afectar a url. Exemplo: `app/(admin)/dashboard/page.js` cria uma rota `/dashboard` dentro do grupo `(admin)`.
    
### 5. Link e Navegação

- **Componente `Link`:**
  - Utilizar o componente `Link` para navegação entre páginas.
  - Exemplo:
    ```jsx
    import Link from 'next/link';

    function Navigation() {
      return (
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      );
    }
    ```

- **Navegação Programática:**
  - Usar `router.push` e `router.replace` para navegação programática.
  - Exemplo:
    ```jsx
    import { useRouter } from 'next/router';

    function RedirectButton() {
      const router = useRouter();

      return (
        <button onClick={() => router.push('/home')}>
          Go to Home
        </button>
      );
    }
    ```

### 6. Tratamento de Erros em Rotas

- **Páginas de Erro:**
  - Criar páginas de erro personalizadas para códigos de status como 404 e 500.
  - Exemplo: `app/404/page.js` para uma página 404 personalizada.

- **Tratamento de Erros:**
  - Implementar lógica para lidar com erros específicos dentro de rotas dinâmicas.
  - Exemplo: Exibir mensagens de erro ou páginas de fallback.

### 7. Rotas Paralelas e Interceptações

- **Rotas Paralelas:**
  - Utilizar rotas paralelas para renderizar múltiplos componentes em uma única página.
  - Exemplo: `app/dashboard/page.js` e `app/dashboard/notifications/page.js` para exibir notificações paralelas.

- **Interceptação de Rotas:**
  - Interceptar e manipular rotas antes de serem exibidas.
  - Exemplo: Usar interceptadores para lógica de autenticação ou redirecionamentos.

### 8. Manipuladores de Rotas e Middleware

- **Manipuladores de Rotas:**
  - Definir manipuladores para alterar o comportamento das rotas, como parâmetros de consulta ou autenticação.
  - Exemplo: Manipular os parâmetros da URL para filtrar conteúdo.

- **Middleware:**
  - Utilizar middleware para lógica que deve ser executada em todas ou algumas rotas.
  - Exemplo: `middleware.ts` para autenticação ou validação de requisições.
