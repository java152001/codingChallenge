import React from 'react'
import NutritionTable from "../components/NutritionTable";
import { FishData } from '../types/fishdata';

interface HomePageProps {
    data: FishData[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div className='container'>
      <h1>Welcome to the App</h1>
      {data && (
        <div>
          <NutritionTable fishData={data} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
