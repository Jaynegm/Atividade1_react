// Hello.js
import React from 'react';
import ListaDeProdutos from './ListaDeProdutos';

const Hello = ({ produto }) => {
  return (
    <CardContainer>
      <Imagem src={produto.imageUrl} alt={produto.Titulo} />
      <Titulo>{produto.Titulo}</Titulo>
      <Descricao>{produto.Descricao}</Descricao>
    </CardContainer>
  );
};

export default Hello;