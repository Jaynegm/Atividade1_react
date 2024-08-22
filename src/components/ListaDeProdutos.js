import styled from 'styled-components';
import Card from './Card';
import Title from './Titulo';
import Description from './Descricao';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #ff8c61;
`;

const ListaDeProdutos = ({ products }) => {
  return (
    <div>
      <Title>Doceria da Cotinha</Title>
      <Description>Confira nossa seleção de produtos abaixo.</Description>
      <ProductsContainer>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ListaDeProdutos;

