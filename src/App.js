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
        "title": "Tortinha de Doce de Leite",
        "description": "Feita com doce de leite mineiro",
        "imageUrl": "https://xamegobom.com.br/wp-content/uploads/2017/04/tortinha-de-doce-de-leite-com-nozes-1.jpg"
        },
        {
        "id": 7,
        "title": "Brigadeiro Tradicional",
        "description": "O tradicional é sempre o melhor",
        "imageUrl": "https://harald.com.br/wp-content/uploads/2020/04/briadeirogormet-melken-700x520-1.jpg"
        },
        {
        "id": 8,
        "title": "Brigadeiro de Paçoca",
        "description": "Se a paçoca por si já é perfeita, imagina em brigadeiro",
        "imageUrl": "https://revistamenu.com.br/wp-content/uploads/sites/24/2020/06/brigadeiro-pacoca-1.jpg"
        },
        {
        "id": 9,
        "title": "Brigadeiro de Churros",
        "description": "Nada melhor e mais tradicional que churros",
        "imageUrl": "https://harpersbazaar.uol.com.br/wp-content/uploads/2017/10/IMG_6891.jpg"
        
        },
        {
        "id": 10,
        "title": "Brigadeiro de Leite Ninho com Chocolate Belga",
        "description": "Ninho fica bom com tudo",
        "imageUrl": "https://www.nestleprofessional.com.br/sites/default/files/styles/np_recipe_full_desk/public/2022-06/brigadeiro-de-ninho-com-alpino.png?itok=3s1ppmCt"
        },
        {
        "id": 11,
        "title": "Brigadeiro de Maracujá",
        "description": "Para os amantes de citrícos",
        "imageUrl": "https://saboreiereceitas.com.br/thumbnails/brigadeiro-de-maracuja-delicioso-feito-com-a-polpa-e-sem-talhar-cris-doces-InybhM5Q-Rc.jpg"
        },
        {
        "id": 12,
        "title": "Produto 12",
        "description": "Descrição detalhada do produto 12.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 13,
        "title": "Produto 13",
        "description": "Descrição detalhada do produto 13.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 14,
        "title": "Produto 14",
        
        "description": "Descrição detalhada do produto 14.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 15,
        "title": "Produto 15",
        "description": "Descrição detalhada do produto 15.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 16,
        "title": "Produto 16",
        "description": "Descrição detalhada do produto 16.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 17,
        "title": "Produto 17",
        "description": "Descrição detalhada do produto 17.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 18,
        "title": "Produto 18",
        "description": "Descrição detalhada do produto 18.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        
        "id": 19,
        "title": "Produto 19",
        "description": "Descrição detalhada do produto 19.",
        "imageUrl": "https://via.placeholder.com/150"
        },
        {
        "id": 20,
        "title": "Produto 20",
        "description": "Descrição detalhada do produto 20.",
        "imageUrl": "https://via.placeholder.com/150"
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
