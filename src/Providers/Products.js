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
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9da06782ff3d4e86a52cace700a632a1_9366/jaqueta-hino-juventus-tiro.jpg",
  },
  {
    id: 2,
    description:
      "Na hora de se movimentar e partir para a ação, coloque suas coisas nesta bolsa de ginástica adidas da Juventus, junte os cordões e jogue-a sobre os ombros.",
    name: "Bolsa Juventus",
    price: 89.9,
    image:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ad1684fc9ffb4959a504ace700a98ac2_9366/bolsa-gym-sack-juventus.jpg",
  },
  {
    id: 3,
    description:
      "Seja na sala de musculação ou no gramado, os atletas da Juventus vestem esta calça de futebol adidas enquanto treinam para a próxima partida.",
    name: "Calça Treino",
    price: 249.99,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/da58014b91e44af19e50ac6400b3d69e_9366/Calca_Treino_Juventus_Human_Race_Branco_GK7789_21_model.jpg",
  },
  {
    id: 4,
    description:
      "Uma versão fora dos gramados das camisas usadas pelos jogadores no dia de jogo, esta camisa tem barra reta e escudo do clube costurado.",
    name: "Camisa Juventus",
    price: 199.99,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/72b621c3001445ed9f16ab1f00cfc960_9366/Camisa_Juventus_1_Branco_EI9900_01_laydown.jpg",
  },
  {
    id: 5,
    description:
      "Uma  das camisas usadas para a comemoração de um dos scudettos da vecchia signora, esta camisa tem como destaque o uso para celebrações.",
    name: "Camisa alternativa",
    price: 159.99,
    image:
      "https://static.netshoes.com.br/produtos/camisa-juventus-pre-jogo-2122-adidas-masculina/22/3ZP-0975-322/3ZP-0975-322_zoom1.jpg?",
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
