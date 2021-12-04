import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 300px;
  height: 100px;
  position: absolute;
  right: -148px;
  top: 50px;
  display: ${(props) => (props.showCart ?  "flex" : "none")};

  :after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid white;
    bottom: 100px;
    left: 40%;
  }
`;
