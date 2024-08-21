import styled from 'styled-components';
import Imagem from './Imagem';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); //adciona borda no card
  background-color: #fff;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = ({ product }) => {
  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardContainer>
  );
};

export default Card;