import React from "react";
import { averageByRegionAndProperty } from "../utilities/calculations";
import { FishData } from "../types/fishdata";

interface NutritionTableProps {
  fishData: FishData[];
}

const NutritionTable: React.FC<NutritionTableProps> = ({ fishData }) => {
  const averageFat = Object.entries(
    averageByRegionAndProperty(fishData, "FatTotal")
  );

  const averageCalories = Object.entries(
    averageByRegionAndProperty(fishData, "Calories")
  );

  return (
    <div className='grid-container'>
      <div className='nutritionGrid'>
        <div className='grid-cell'>Region</div>
        <div className='grid-cell'>Average Fat</div>
        <div className='grid-cell'>Average Calories</div>
      </div>
      {/* TODO Refactor to just a single array for both values */}
      {averageFat.map((region, index) => {
        return (
          <div className='nutritionGrid' key={region[0] + region[1]}>
            <div className='grid-cell'>{region[0]}</div>
            <div className='grid-cell'>{region[1]}</div>
            <div className='grid-cell'>{averageCalories[index][1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NutritionTable;
