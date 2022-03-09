import React, { useState, useContext } from 'react';
import { Container, Title, FilterContainer, Filter, Select, Option, FilterHeader} from './listproduct.style'
import {AppContext } from '../../context/Appcontext'

function ListProduct() {
  const { filter, setFilter, setSort, sort} = useContext(AppContext)
  const handleFilter = (e) => {
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
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select  name='size' onChange={handleFilter}>
              <Option disabled> Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
          <FilterHeader>Sorts Products:</FilterHeader>
          <Select onChange={(e) => setSort(e.target.value)}>
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
