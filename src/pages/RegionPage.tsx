import React, {useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import NutritionTable from "../components/NutritionTable";
import { fetchFish } from "../utilities/fetchFish";
import FishCard from "../components/FishCard";
import { FishData } from "../types/fishdata";

interface RegionPageProps {
  data: FishData[];
}

const RegionPage: React.FC<RegionPageProps> = ({ data }) => {

  const [params] = useSearchParams();

  // if we land here but don't have the data as a prop, will fetch it.
  useEffect(() => {
    const fetchData = async () => {
      const fishData = await fetchFish()
      data = fishData
    }
    if (!data) {
      fetchData()
    }
  }, [])

  const regionName = params.get("type");

  const regionData = data.filter(
    (item) => item.NOAAFisheriesRegion === regionName
  );

  return (
    <div className='container'>
      {/* TODO Add a Check to see if the region is one we have data for and render an error page if not */}
      <h4>This is a region page for the {regionName} region</h4>
      <NutritionTable fishData={regionData} />
      <div className='cards-container'>
      {regionData.map((item) => {
        return <FishCard fishData={item} />;
      })}
      </div>
    </div>
  );
};

export default RegionPage;
