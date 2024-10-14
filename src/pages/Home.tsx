import React from 'react'
import NutritionTable from "../components/NutritionTable";
import { FishData } from '../types/fishdata';

interface HomePageProps {
    data: FishData[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <h1>Welcome to the App</h1>
      {data && (
        <div>
          <NutritionTable fishData={data} nutritionProperty={"Calories"} />
          <NutritionTable fishData={data} nutritionProperty={"FatTotal"} />
        </div>
      )}
    </>
  );
};

export default HomePage;
