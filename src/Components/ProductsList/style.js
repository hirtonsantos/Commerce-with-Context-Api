import styled from "styled-components";

// AQUI SERIA O CARRINHO APARECENDO
// export const Content = styled.div`
//     background-color: #f5f5f5;
//     display: flex;
//     display: ${(props) => (props.show ?  "flex" : "none")};
//     flex-direction: column;
//     width: 606px;
//     height: 100%;
//     margin-right: 30px;
// `

export const Conteiner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
