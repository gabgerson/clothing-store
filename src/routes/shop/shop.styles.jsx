import styled from 'styled-components';


// this doesn't seem like a necessary style page
// there is no element with .products-contianer
// making it a styled component for practice
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`




// .products-container {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 10px;
//     row-gap: 50px;
// }