Tudo que estiver dentro da páginas pages, vai automaticamente virar uma rota.
O arquivo \_app serve para quando queremos aplicar alguma coisas globalmente, em todas a páginas. Tudo o que for incluído nele será incluído em todas as outras
páginas, como por exemplo um componente de layout.

Para rodar a aplicação:
yarn dev no ambiente de desenvolvimento

Para realizar o deploy da aplicação:

Renderização do Lado do Servidor (SSR) no Next.js:

O REACT tem um problema de SEO grave, devido a por exemplo, uma loja não ter seus produtos renderizados logo de cara. Faz com que o SEO seja prejudicado
O site aparentaria estar vazio, o que machucaria o SEO das páginas.

Agora vamos ver uma possível solução para esse problema, a função getServerSideProps. Ao utilizá-la estaremos indicando que a página em questão contém dados dinâmicos que devem estar no HTML, portanto o Next.js irá renderizar previamente o HTML no lado do servidor com todos os dados. Vamos chamar a mesma API mas dessa vez com o getServerSideProps:

export const getServerSideProps: GetServerSideProps = async () => {
const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

return {
props: {
serverSideData
}
}
}

obs: sempre que for criar uma varíavel que você queira que seja pública no front-end use esse prefixo NEXT_PUBLIC\_ no nome da varíavel então: NEXT_PUBLIC_APIURL
Essa função tem que retornar um objeto que tem que ter as props que também é um objeto onde a gente vai passar o que quer ser retornado nesse serverSideData.
Repare que dessa vez estamos utilizando uma variável de ambiente para a url da API. Isso é porque nesse caso o Next.js só aceita URLs absolutas. Para incluir as variáveis de ambiente durante o desenvolvimento basta criar um arquivo “.env.development.local” na raiz do projeto. Ele já está sendo ignorado pelo .gitignore:

    Obs.: Repare que ao invés do tradicional REACT_APP_ usado com o create-react-app nós temos NEXT_PUBLIC_ para variáveis de ambiente disponíveis publicamente na aplicação. Como nossa aplicação também roda do lado do servidor isso permitiria termos variáveis de ambiente que não ficam públicas. Outra vantagem do Next.js.

obs: AO realizar o deploy é necessário atualiar essas varíaveis de ambiente, no vercel é possível fazer isso pelo proprio site em configurações e em enviroment variables. Porém é necessario um novo deploy para elas serem atualizadas e funcionarem. Então, no caso da vercel, você sobe o projeto pro github novamente. E assim que subirem pro github serão revertidas pela vercel.

Olhar dynamic.tsx

Páginas Estáticas (SSG) no NEXT.JS
Diferentemente da renderização do serverSide, essa renderização é de forma estática.
Parecido com o server side existe a função getStaticProps, que indica para o Next.js que essa página vai ter dados dinâmicos obtidos durante o build e então disponibilizados no HTML estático que será construído:
