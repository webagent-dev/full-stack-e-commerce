import React from 'react';
import { Container, Title, FilterContainer, Filter, Select, Option, FilterHeader} from './singleproduct.style'
function SingleProduct() {
  return (
  <Container>
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter>
            <FilterHeader>Filter Products:</FilterHeader>
            <Select>
              <Option  Selected> Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option Selected> Size</Option>
              <Option>XS</Option>
              <Option>Black</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
          <FilterHeader>Sorts Products:</FilterHeader>
          <Select>
            <Option selected>Newest</Option>
            <Option> Price (asc)</Option>
            <Option> Price (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
  </Container>
  )
}

export default SingleProduct;
