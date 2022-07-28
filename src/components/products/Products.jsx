import styled from "styled-components";
import { popularProducts } from "../../data/data";
import ProductItem from "./ProductItem";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
    </Container>
  );
};

export default Products;
