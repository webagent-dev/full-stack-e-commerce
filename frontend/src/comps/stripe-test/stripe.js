import styled from 'styled-components'


 export const PayContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
 `
 export const  PayBtn = styled.div`
    width: 120px;
    height: 50px;
    border: 2px solid skyblue;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    background: skyblue;
    border-radius: 10px;
    font-weight: 700;
    font-family: cursive;
    font-size: 25px;
    color: whitesmoke;
    cursor: pointer;
 `


//  Sucess Styles 

export const SucessContainer = styled(PayContainer)`

`
 export const Content  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 `
 export const Text  = styled.h2`
    text-transform: uppercase;
    font-size: 30px;
    font-family: monospace;
    padding: 10px;
    color: skyblue;
 `
 export const Btn = styled(PayBtn)`
 background: green;
 border: 2px solid green;
    font-weight: 700;
    font-family: monospace;
    font-size: 20px;
    color: skyblue;
 `