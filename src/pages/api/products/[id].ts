import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../database.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //Rotas dinâmicas
  //Obtendo o parãmetro "id" das rotas
  //Dentro desse query você pode pegar qualquer parâmetro que você estiver estabelecido (use o nome do parâmetro)
  const { id } = req.query;

  //Isso daqui é uma API para retornar o produto em específico com base no id da rota.
  const product = products.find((product) => product.id === Number(id));
  res.status(200).json(product);
}
