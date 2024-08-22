import React from 'react';
import ListaDeProdutos from './components/ListaDeProdutos';

const produtos = [
    {
        id: 1,
        title: "Tortinha de Limão",
        description: "Feita com suco de limão, leite ninho, massa podre e chantilli",
        imageUrl: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/5780910b0651d0b4d4406d271976cd4b.jpg"
      },
      {
        id: 2,
        title: "Tortinha de Morango",
        description: "Morangos Orgânicos, Creme de leite ninho e Massa podre",
        imageUrl: "https://cdn.casaeculinaria.com/wp-content/uploads/2024/05/04151858/Tortinha-de-morango-1.webp"
      },
      {
        "id": 3,
        "title": "Tortinha de Chocolate",
        "description": "Chocolate Belga",
        "imageUrl": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/698a63a133fdc1f6e32f8d8f1f16595a.jpg"
        },
        {
        "id": 4,
        "title": "Tortinha de Maracujá",
        "description": "Descrição detalhada do produto 4.",
        "imageUrl": "https://maravilhadesabor.com.br/wp-content/uploads/2024/02/Tortinha-de-Maracuja.jpg"
        },
        {
        
        "id": 5,
        "title": "Tortinha de Maçã",
        "description": "Maçãs, creme de leite ninho e canela",
        "imageUrl": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/af2841c2b81c77fe0a713d7bc7c2d659.jpg"
        },
        {
        "id": 6,
        "title": "Brigadeiro Tradicional",
        "description": "O tradicional é sempre o melhor",
        "imageUrl": "https://harald.com.br/wp-content/uploads/2020/04/briadeirogormet-melken-700x520-1.jpg"
        },
        {
        "id": 7,
        "title": "Brigadeiro de Paçoca",
        "description": "Se a paçoca por si já é perfeita, imagina em brigadeiro",
        "imageUrl": "https://revistamenu.com.br/wp-content/uploads/sites/24/2020/06/brigadeiro-pacoca-1.jpg"
        },
        {
        "id": 8,
        "title": "Brigadeiro de Churros",
        "description": "Nada melhor e mais tradicional que churros",
        "imageUrl": "https://harpersbazaar.uol.com.br/wp-content/uploads/2017/10/IMG_6891.jpg"
        
        },
        {
        "id": 9,
        "title": "Brigadeiro de Leite Ninho com Chocolate Belga",
        "description": "Ninho fica bom com tudo",
        "imageUrl": "https://www.nestleprofessional.com.br/sites/default/files/styles/np_recipe_full_desk/public/2022-06/brigadeiro-de-ninho-com-alpino.png?itok=3s1ppmCt"
        },
        {
        "id": 10,
        "title": "Brigadeiro de Maracujá",
        "description": "Para os amantes de citrícos",
        "imageUrl": "https://saboreiereceitas.com.br/thumbnails/brigadeiro-de-maracuja-delicioso-feito-com-a-polpa-e-sem-talhar-cris-doces-InybhM5Q-Rc.jpg"
        },
        {
        "id": 11,
        "title": "Brownie de Chocolate Branco com Matchá",
        "description": "Pensa em uma sobremesa deliciosa, é esse brownie",
        "imageUrl": "https://i.panelinha.com.br/i1/228-bk-3465-brownie-receita.webp"
        },
        {
        "id": 12,
        "title": "Brownie de Banana",
        "description": "Não tem coisa melhor do que um docinho que não te engorde, aproveita que esse é fitness",
        "imageUrl": "https://www.receiteria.com.br/wp-content/uploads/brownie-de-banana-fit-730x730.jpg"
        },
        {
        "id": 13,
        "title": "Brownie com Calda de Morango",
        "description": "Molhadinho e no ponto",
        "imageUrl": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/brownie-com-calda-de-morango-e1625151056895.jpg"
        },
        {
        "id": 14,
        "title": "Brownie de Doce Leite",
        "description": "Lembra daquele doce de leite mineiro? Aqui tem muito dele",
        "imageUrl": "https://www.frimesa.com.br/upload/image/recipe/frimesa-receita-brownie-de-doce-de-leite2-90-99.jpg"
        },
        {
        "id": 15,
        "title": "Brownie de Milho com Goiabada",
        "description": "Essa brownie é show",
        "imageUrl": "https://uploads.metroimg.com/wp-content/uploads/2020/07/16161640/Brownie-de-Milho-com-Goiabada.jpg"
        },
        {
        "id": 16,
        "title": "Canjica",
        "description": "No friozinho isso aqui fica bom demais",
        "imageUrl": "https://ligazap.com.br/wp-content/uploads/2024/07/Canjica-com-doce-de-leite-e-amendoim-1.jpg"
        },
        {
        "id": 17,
        "title": "Arroz Doce com Canela",
        "description": "Em festa junina ele fica caro, então aproveite",
        "imageUrl": "https://receitinhas.com.br/wp-content/uploads/2016/05/Arroz-Doce-foto-GettyImages-1024x683.jpg"
        },
        {
        "id": 18,
        "title": "Doce de Aboborá",
        "description": "Não há nada mais tradicional que ele",
        "imageUrl": "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1710-Doce-de-abo%E2%95%A0%C3%BCbora-com-cravo-e-canela.jpg"
        },
        {
          "id": 20,
          "title": "Pudim de Leite",
          "description": "Prato essencial de todo domingo",
          "imageUrl": "https://static.itdg.com.br/images/360-240/72ede3bd1eeadcc3abad84a304a8e1ab/shutterstock-1178179939.jpg"
          }
    ];

function App() {
  return (
    <div>
      <ListaDeProdutos products={produtos} />
    </div>
  );
}


export default App;

