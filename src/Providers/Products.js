import { useContext, useState } from "react";
import { createContext } from "react/cjs/react.development";

export const CatalogueContext = createContext();

export const CatalogueProvider = ({ children }) => {

const [catalogue, setCatalogue] = useState([
  {
    id: 1,
    description:
      "O que mais importa é que os onze jogadores sejam um único time. Esta jaqueta confere à equipe um visual padronizado antes do pontapé inicial.",
    name: "Jaqueta Juventus",
    price: 299.99,
    image:
      "https://images.tcdn.com.br/img/img_prod/638286/jaqueta_juventus_fc_2021_climalite_4997_1_57164f201631ef6311f458ac58faeb48.jpg",
  },
  {
    id: 2,
    description:
      "Na hora de se movimentar e partir para a ação, coloque suas coisas nesta bolsa de ginástica adidas da Juventus, junte os cordões e jogue-a sobre os ombros.",
    name: "Bolsa Juventus",
    price: 89.9,
    image:
      "https://imgcentauro-a.akamaihd.net/900x900/95421602/mochila-do-juventus-img.jpg",
  },
  {
    id: 3,
    description:
      "Seja na sala de musculação ou no gramado, os atletas da Juventus vestem esta calça de futebol adidas enquanto treinam para a próxima partida.",
    name: "Calça Treino",
    price: 249.99,
    image:
      "https://thumblr.uniid.it/product/211260/8db2c1278f8b.jpg",
  },
  {
    id: 4,
    description:
      "Uma versão fora dos gramados das camisas usadas pelos jogadores no dia de jogo, esta camisa tem barra reta e escudo do clube costurado.",
    name: "Camisa Juventus 21/22",
    price: 199.99,
    image:
      "https://imgcentauro-a.akamaihd.net/900x900/96455051/camisa-juventus-i-21-22-adidas-masculina-img.jpg",
  },
  {
    id: 5,
    description:
      "Uma  das camisas usadas para a comemoração de um dos scudettos da vecchia signora, esta camisa tem como destaque o uso para celebrações.",
    name: "Camisa alternativa",
    price: 159.99,
    image:
      "https://imgcentauro-a.akamaihd.net/900x900/M0HD5003/camisa-pre-jogo-do-juventus-adidas-masculina-img.jpg",
  },
  {
    id: 6,
    description:
      "Esta jaqueta de apresentação adidas mantém os jogadores da Juventus confortáveis enquanto encaram a imprensa.",
    name: "Casaco apresentação",
    price: 259.99,
    image:
      "https://static.netshoes.com.br/produtos/jaqueta-apresentacao-juventus-adidas/58/3ZP-2683-158/3ZP-2683-158_zoom1.jpg?ts=1630133653&",
  },
]);

  // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  // criar a lógica para remover
  const removeFromCatalogue = (id) => {
    const index = catalogue.map((item) => item.id).indexOf(Number(id))
    catalogue.splice(index,index+1)
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogueContext);
