import React, { useContext } from 'react';
import { Container, Title, FilterContainer, Filter, Select, Option, FilterHeader} from './listproduct.style'
import { AppContext } from '../../context/Appcontext'

function ListProduct() {
const {setFilter, setSort, filter } = useContext(AppContext)
const handleFilter = (e) =>{
  const value = e.target.value
  setFilter({
    ...filter,
    [e.target.name]: value
  })
}
  return (
  <Container>
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter>
            <FilterHeader>Filter Products:</FilterHeader>
            <Select name='color' onChange={handleFilter}>
              <Option  disabled> Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select  name='size'  onChange={handleFilter}>
              <Option disabled> Size</Option>
              <Option>xs</Option>
              <Option>s</Option>
              <Option>m</Option>
              <Option>l</Option>
              <Option>xl</Option>
            </Select>
          </Filter>
          <Filter>
          <FilterHeader>Sorts Products:</FilterHeader>
          <Select onChange={(e) =>  setSort(e.target.value)} >
            <Option value='newest'>Newest</Option>
            <Option value='asc'> Price (asc)</Option>
            <Option value='desc'> Price (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
  </Container>
  )
}

export default ListProduct;
