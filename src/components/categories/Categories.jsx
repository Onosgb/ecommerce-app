import styled from "styled-components";
import { categories } from "../../data/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
