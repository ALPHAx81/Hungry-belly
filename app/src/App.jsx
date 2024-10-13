import { useState } from "react";
import styled from "styled-components";
const Base_URL = "http://localhost:9000";
const App = () => {
  
const[Data, setData]= useState(null);


const fetchFoodData = async () => {
  try{
    const response = await
  }

}




cd

    return (
    <Container>
      <TopContainer>
 < div className = "logo">
  <img src="/log.svg" alt="logo" />
</div>


<Search>

  <input placeholder= "search food items"/>

</Search>

      </TopContainer>
     <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
     </FilterContainer>

     <FoodCardContainer>
      <FoodCards></FoodCards>
     </FoodCardContainer>
       </Container>
    );
};

export default App;

const Container = styled.div`
max-width 1200px;
margin: 0 auto;
`;


const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

`;
const Search = styled.div`
    input {
        background-color: transparent;
        border: 1px solid red;
        border-radius: 5px;
        height: 40px;
        font-size: 20px;
        padding: 0 10px;
    }
`;
const FilterContainer= styled.section`
display: flex;
justify-content: center;
gap: 12px;

`;



const Button = styled.button`
background: #ff4343;
border-radius: 15px;
padding: 6px 12px;
border: none;
color: white;
 `;

 const FoodCardContainer= styled.section`
 height: calc(100vh - 220px);
 background-image:url("/bg.png");
 background-size: cover;
 `;
const FoodCards= styled.div``;