// Se você precisa de dados dinâmicos que não podem ser gerados estaticamente no momento da construção, é comum criar APIs para fornecer esses dados.
//A função principal da API no Next.js é permitir a construção de aplicações React que precisam de funcionalidades do lado do servidor.

import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //Ta pegando o banco de dandos que foi criado na raíz da pasta, e transformando em uma API
  //Ta disponibilizando o banco de dados em api
  res.status(200).json(products);
}
