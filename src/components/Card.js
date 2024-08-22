import styled from 'styled-components';
import Image from './Imagem';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #faa275;
  border-color: #d00000;
  text-align: center;
  
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #000000;
  font-family:"Poppins", sans-serif;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #000000;
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
