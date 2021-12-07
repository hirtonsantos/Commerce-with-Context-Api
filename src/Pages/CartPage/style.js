import styled from "styled-components"

// background-color: white;
// display: flex;
// height: 1020px;
// justify-content: center;

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Changa', sans-serif;
    main{
        width: 100%;
    }
`

export const Content = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BoxContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const Button = styled.button`
    width: 140px;
    cursor: pointer;
    height: 58px;
    font-weight: bold;
    font-size: 15px;
    background-color: ${(props) => (props.changeColor ?  "white" : "#FF2850")};
    color: ${(props) => (props.changeColor ?  "#FF2850" : "white")};
`

export const BoxButton = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    .button-conteiner{
        justify-content: space-around;
        align-items: center;
        display: flex;
        border-top: 5px solid black;
        height: 85px;
        width: 100%;
    }
`

export const BoxText = styled.div`
        width: 300px;
    height: 100px;
    /* border-bottom: 5px solid black; */
    display: flex;
    /* background-color: aliceblue; */
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h2{
        margin-bottom: 0px;
        margin-top: 2px;
    }
`

export const Section = styled.section`
    justify-content: end;
    display: flex;
    flex-direction: row;
    border-top: 5px solid black;
    /* width: 636PX; */
    WIDTH: 100%;
`

export const SectionBox = styled.div`
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    width: 636PX;
    align-items: center;
    margin: 20px;
    .PRICESSS{
        height: 100%;
        text-align: center;
        display: contents;
    }
`

export const BoxFigure = styled.div`
    width: 135px;
    background: none;
    img{
        width: 100%;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`