Organização de Arquivos e Roteamento:

Tudo dentro da pasta pages se torna automaticamente uma rota.
O arquivo \_app é utilizado para aplicar configurações globais em todas as páginas, como componentes de layout.

Execução da Aplicação:

Para rodar a aplicação, usar o comando: npm run dev no ambiente de desenvolvimento.

Deploy da Aplicação:
Para realizar o deploy da aplicação, referências específicas sobre a renderização do lado do servidor (SSR) no Next.js são fornecidas.

Renderização do Lado do Servidor (SSR) no Next.js:

O React enfrenta problemas de SEO devido à não renderização imediata de dados dinâmicos, como em uma loja online.
APIs: No Next.js, a API é usada para criar rotas de servidor (server-side routes) que podem ser usadas para fornecer dados dinâmicos para suas páginas React durante o tempo de execução. Isso permite que você manipule lógica do lado do servidor, acesse bancos de dados e forneça dados dinâmicos para suas páginas antes que elas sejam renderizadas no cliente
Solução proposta: Utilização da função getServerSideProps para indicar que a página contém dados dinâmicos a serem pré-renderizados no lado do servidor.
Exemplo de uso da função getServerSideProps com uma variável de ambiente para a URL da API (olhar dynamic.tsx).

Variáveis de Ambiente:

Uso do prefixo NEXT_PUBLIC\_ para variáveis de ambiente que devem ser públicas no frontend.
No desenvolvimento, criar um arquivo .env.development.local na raiz do projeto para incluir variáveis de ambiente.
Variáveis de ambiente são necessárias para URLs absolutas no Next.js.
Ao realizar o deploy, é importante atualizar as variáveis de ambiente no serviço de hospedagem (por exemplo, Vercel).

Atualização de Variáveis de Ambiente no Vercel:

Para atualizar as variáveis de ambiente no Vercel, configurar em "Settings" e "Environment Variables".
Após a atualização, realizar um novo deploy para que as alterações entrem em vigor.
Observações Adicionais:

Ao criar variáveis de ambiente, usar NEXT_PUBLIC\_ no lugar de REACT_APP para variáveis disponíveis publicamente na aplicação.

Vantagens do Next.js ao lidar com variáveis de ambiente que não são públicas e ao executar no lado do servidor.

Referência Específica a Arquivo:

Indicação para verificar o arquivo dynamic.tsx para mais detalhes.

Páginas Estáticas (SSG) no Next.js:

A renderização estática é realizada de forma estática, diferente da renderização do lado do servidor (SSR).
Utilização da função getStaticProps indica ao Next.js que a página terá dados dinâmicos obtidos durante o build e disponibilizados no HTML estático gerado.

Benefícios da Construção de Páginas Estáticas:

A construção de páginas estáticas oferece muitos benefícios e é adequada para casos de uso em que o conteúdo dinâmico é atualizado com uma frequência não tão alta.
Possibilidade de realizar um novo build quando houver atualizações, mesmo em casos de baixa frequência de atualização.

Incremental Static Regeneration (ISR):

O ISR (Incremental Static Regeneration) é um recurso do Next.js que permite atualizar páginas estáticas após o build.
Adicionar a propriedade "revalidate" na função getStaticProps habilita o ISR.
A propriedade "revalidate" define o tempo em segundos para revalidação da página estática e atualização dos dados.

Exemplo Prático do ISR:

Ao abrir a página, um valor gerado estaticamente é recebido.
Atualizações repetidas mantêm esse valor inalterado no cliente, enquanto os dados do lado do cliente são atualizados a cada recarga.
Após o tempo definido em "revalidate" (10 segundos no exemplo), o valor gerado estaticamente é atualizado, trazendo uma hora mais recente.
Essas informações destacam a capacidade do Next.js de lidar com páginas estáticas e oferecem uma solução, o ISR, para casos em que é necessário atualizar o conteúdo estático de forma incremental, mantendo SEO e desempenho ao renderizar páginas no servidor.

Criando APIs no Next.js

Objetivo:

Criar rotas de API no Next.js.
Simular um banco de dados para a aplicação.

Roteiro:

Criar rotas de API em Next.js.
Simular retorno de uma lista de produtos em "/api/products".
Utilizar uma pasta chamada "products" com um arquivo "[id].ts" para rota dinâmica "/api/products/id".
Obter o id da propriedade query da requisição.
Utilizar um find para encontrar o produto no array disponibilizado pelo "database.json".

Estrutura de Arquivos:

Pasta: pages
Arquivo: [id].ts (em "products" folder) - Rota dinâmica para "/api/products/id".
Arquivo: products.ts - Rota "/api/products".
Pasta: products
Arquivo: database.json - Simulação de banco de dados com array de produtos.
Fluxo de Funcionamento:

Acesso a "/api/products" retorna lista de produtos simulados.
Acesso a "/api/products/id" retorna produto específico com base no id da requisição.

Uso do fallback no retorno das funções get para realizar o fetch dos dados da api:

O parâmetro fallback em getStaticPaths é uma opção que determina o comportamento do Next.js ao lidar com caminhos que não foram pré-renderizados no momento da construção da aplicação. Ele aceita três valores principais: false, true, e 'blocking'.

fallback: false:

Se fallback for definido como false, qualquer caminho que não esteja pré-renderizado no momento da construção resultará em um erro 404. Ou seja, se um usuário acessar um caminho que não foi pré-renderizado, ele receberá uma página 404 (não encontrada). Essa é uma escolha adequada quando você sabe que todos os caminhos possíveis podem ser gerados antecipadamente.

Se fallback for definido como true, os caminhos que não foram pré-renderizados no momento da construção não resultarão em um erro 404. Em vez disso, o Next.js permitirá a renderização no lado do servidor (SSR) da página, no momento em que o usuário acessa o caminho pela primeira vez. Durante esse processo, o conteúdo será gerado e armazenado em cache para futuras solicitações. Isso é útil quando você deseja gerar páginas sob demanda, mas ainda quer pré-renderizar a maioria delas antecipadamente.

O valor 'blocking' é semelhante a true, mas com uma diferença crucial. Se fallback for definido como 'blocking', o Next.js ainda permitirá a renderização no lado do servidor (SSR) da página no momento da solicitação, mas, ao contrário de true, ele aguardará que a geração da página seja concluída antes de responder à solicitação. Isso é útil quando você deseja gerar conteúdo sob demanda, mas deseja que o usuário aguarde até que a geração esteja concluída antes de ver a página.
