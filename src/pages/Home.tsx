import React from 'react'
import NutritionTable from "../components/NutritionTable";
import { FishData } from '../types/fishdata';

interface HomePageProps {
    data: FishData[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div className='container'>
      <h1>ABR Fishy Emporium</h1>
      <h3>Region health data at a glance</h3>
      {data && (
        <div>
          <NutritionTable fishData={data} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
