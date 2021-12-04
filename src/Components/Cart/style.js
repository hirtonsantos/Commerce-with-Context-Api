import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 300px;
  height: auto;
  position: absolute;
  right: -148px;
  top: 50px;
  display: ${(props) => (props.showCart ?  "flex" : "none")};
  flex-direction: column;

  :after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid white;
    bottom: 230px;
    left: 40%;
  }

  h2 {
    font-size: 25px;
    padding-top: 10px;
    font-family: "Juventus Fans Regular";
    color: black;

    font-weight: bold;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
  }

  button{
    cursor: pointer;
    background-color: #f44336;
    height: 50px;
  }

  ul{
    width: 100%;
    /* height: 100%; */
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 15px;
    border-top: 1px solid #E8E8E8;
    li {
      text-align: left;
    min-height: 40px;
    display: flex;
    /* color: red; */
    line-height: 40px;
    margin: 0;
    padding: 10px 0;
    font-size: 15px;
    text-transform: uppercase;
    width: 100%;
    justify-content: space-evenly;
    position: relative;
    }
    
  }
`;
