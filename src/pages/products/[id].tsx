import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import { ProductType, fetchProduct, fetchProducts } from "@/services/products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";

//Ele está usando o getStaticProps, pois queremos pegar o produto com base no seu id na api dinâmica e também porque é um dado que não vai ser atualizado frequentemente, sendo assim justifica o uso do getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const product = await fetchProduct(id);
    return {
      props: { product },
    };
  }

  //Quando não queremos passar props como retorno, nesse caso podemos realizar um redirect para página products, colocando o atributo permanente false porque não queremos que seja permanente e que o usúario possa navegar pelo site.
  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
};
//getStaticPaths (serve para dizer quais rotas serão pre-renderizadas) é usada em conjunto com o getStaticProps em rotas dinâmicas para que o Next.js saiba quais são todos as rotas possíveis. Só precisamos retornar aqui uma propriedade paths, que é um array de objetos contendo uma propriedade params, que é um objeto com todos os parâmetros da rota. Também utilizamos a propriedade fallback: false para dizer que se o id não for encontrado o Next.js pode retornar uma página com erro 404, ou seja, não há nenhum fallback nesse caso:
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product) => {
    //Essa estrutura de retorno é o que  o getStaticPaths espera retornar
    //Dentro de params que é um objeto é onde vamos colocar as rotas dinâmicas
    //Precisa ser em string
    return { params: { id: product.id.toString() } };
  });

  //Esse fallback serve para dizer ao Next que nesse caso não queremos nenhuma ação  de reserva pro next realizar quando ele não encontrar o produto.
  return {
    paths,
    fallback: false,
  };
};

const Product: NextPage = (props: {
  children?: ReactNode;
  product?: ProductType;
}) => {
  return (
    <>
      <Head>
        <title>{props.product!.name}</title>
        <meta name="description" content={props.product!.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        <ProductDetails product={props.product!} />
      </Container>
    </>
  );
};

export default Product;
