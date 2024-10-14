import React from "react";
import { useSearchParams } from "react-router-dom";
import NutritionTable from "../components/NutritionTable";
import FishCard from "../components/FishCard";
import { FishData } from "../types/fishdata";

interface RegionPageProps {
  data: FishData[];
}

const RegionPage: React.FC<RegionPageProps> = ({ data }) => {
  const [params] = useSearchParams();

  const regionName = params.get("type");

  const regionData = data.filter(
    (item) => item.NOAAFisheriesRegion === regionName
  );

  return (
    <div>
      <h4>This is a region page for the {regionName} region</h4>
      <NutritionTable fishData={regionData} nutritionProperty={"Calories"} />
      <NutritionTable fishData={regionData} nutritionProperty={"FatTotal"} />
      {regionData.map((item) => {
        return <FishCard fishData={item} />;
      })}
    </div>
  );
};

export default RegionPage;
