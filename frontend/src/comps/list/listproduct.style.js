import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
min-height: 200px;
font-family: monospace;
padding: 20px;
margin-top: 1rem;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    /* padding: 20px; */
    margin-bottom: 30px;
`
export const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const Filter = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
export const FilterHeader = styled.h2`
font-family: -apple-system, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Select = styled.select`
padding: 7px 10px;
border: none;
outline: none;
border: 1px solid gray;
border-radius: 3px;
`
export const Option = styled.option`
padding: 7px 10px;
`