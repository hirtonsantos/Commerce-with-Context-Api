import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 300px;
  height: auto;
  position: absolute;
  right: -148px;
  top: 50px;
  cursor: default;
  /* font-family: "Juventus Fans Regular"; */
  font-family: 'Changa', sans-serif;
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
    color: black;
    /* font-family: "Juventus Fans Regular"; */
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    span{
      color: #f44336;
    }
  }

  button{
    cursor: pointer;
    /* background-color: #f44336; */
    height: 50px;

      width: 100%;
    display: block;
    line-height: 35px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Changa';
    background-color: #ff2850;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
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
    justify-content: start;
    position: relative;
    }
  }
`;
