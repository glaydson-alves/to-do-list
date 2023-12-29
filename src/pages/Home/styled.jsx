import styled from "styled-components"

export const AddButton = styled.button `
    background-color: #6cf000;
    color: #000;
    height: 35px;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;

    &:hover{
        opacity: 0.8;
    }
`

export const Container = styled.div `
    background-color: #b752ff;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height: 400px;
    

    h1 {
        color: #fff;
    }
    input{
        width: 75%;
        height: 35px;
        border-radius: 5px;
        margin-top: 30px;
        outline: none;
        padding: 10px;
        border: none;
    }
`

export const Produto = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`
export const Lixeira = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;

`
