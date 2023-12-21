Organização de Arquivos e Roteamento:

Tudo dentro da pasta pages se torna automaticamente uma rota.
O arquivo \_app é utilizado para aplicar configurações globais em todas as páginas, como componentes de layout.

Execução da Aplicação:

Para rodar a aplicação, usar o comando: npm run dev no ambiente de desenvolvimento.

Deploy da Aplicação:

Para realizar o deploy da aplicação, referências específicas sobre a renderização do lado do servidor (SSR) no Next.js são fornecidas.
Renderização do Lado do Servidor (SSR) no Next.js:

O React enfrenta problemas de SEO devido à não renderização imediata de dados dinâmicos, como em uma loja online.
Solução proposta: Utilização da função getServerSideProps para indicar que a página contém dados dinâmicos a serem pré-renderizados no lado do servidor.
Exemplo de uso da função getServerSideProps com uma variável de ambiente para a URL da API.

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
