import { GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json());

  return {
    props: {
      staticData,
    },
    /*Isso faz com que ele revalide os dados da página em um determinado tempo absoluto independendo se você está recarregando a página ou não. Bateu o tempo ele renderiza novamente o daddo */
    revalidate: 10,
  };
};

const Static: NextPage = (props: {
  children?: ReactNode;
  staticData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideDate] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("/api/hello").then((res) => res.json());
    setClientSideDate(data);
  };

  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <Row>
        <Col>
          {/*Apesar de ser gerado de forma estática, esses dados atualizarão sempre que acontece a build ou com ISR */}
          <h3>Gerado estaticamente durante o build:</h3>
          <h2>{props.staticData?.timestamp.toString()}</h2>
        </Col>

        <Col>
          <h3>Gerado no cliente:</h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Static;
