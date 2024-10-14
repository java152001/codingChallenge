import React from "react";
import { averageByRegionAndProperty } from "../utilities/calculations";
import { FishData, NutritionPropertyENUM } from "../types/fishdata";

interface NutritionTableProps {
  nutritionProperty: NutritionPropertyENUM;
  fishData: FishData[];
}

const NutritionTable: React.FC<NutritionTableProps> = ({
  fishData,
  nutritionProperty,
}) => {
  const average = Object.entries(
    averageByRegionAndProperty(fishData, nutritionProperty)
  );

  return (
    <>
      <h3>Here is a table</h3>
      {average.map((region) => {
        return (
          <h5 key={region[0] + region[1]}>
            {region[0]} has an average {nutritionProperty} count of {(region[1] as string)}
          </h5>
        );
      })}
    </>
  );
};

export default NutritionTable;
