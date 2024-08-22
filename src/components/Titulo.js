import styled from 'styled-components';



const Titulo = styled.h1`
  color: #333;
  font-size: 2rem; /* Tamanho maior para destacar o título */
  text-align: center;
  margin: 20px 0;
  font-family: "Edu VIC WA NT Beginner", cursive;
  &::after {
    content: "❤️";
    font-size: 1.5rem; 
    margin-left: 0.5rem; 
  }
`;

export default Titulo;
