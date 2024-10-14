import { FishData, NutritionPropertyENUM } from "../types/fishdata";

export const averageByRegionAndProperty = (
  data: FishData[],
  property: NutritionPropertyENUM
) => {
  const regionCounts: { [key: string]: string | number[] } = {};

  // Creates an object sorting data by Region, with value being an array of all calories or fat for that region

  data.forEach((item) => {
    if (item[property] && typeof item.NOAAFisheriesRegion === "string") {
      if (!regionCounts[item.NOAAFisheriesRegion]) {
        if (property === "Calories") {
          regionCounts[item.NOAAFisheriesRegion] = [Number(item[property])];
        } else {
          // If the property is TotalFat, will need to split to remove the grams and get just the number
          regionCounts[item.NOAAFisheriesRegion] = [
            parseFloat(item[property].split(" ")[0]),
          ];
        }
      } else {
        if (property === "Calories") {
          (regionCounts[item.NOAAFisheriesRegion] as number[]).push(
            Number(item[property])
          );
        } else {
          // If the property is TotalFat, will need to split to remove the grams and get just the number
          (regionCounts[item.NOAAFisheriesRegion] as number[]).push(
            parseFloat(item[property].split(" ")[0])
          );
        }
      }
    }
  });

  // takes our object of regions and all counts, then calculates the average of all of those counts and sets the new value of our object, rounded to 2 decimals
  for (let key in regionCounts) {
    if (Array.isArray(regionCounts[key])) {
      regionCounts[key] = (
        regionCounts[key].reduce((a, b) => a + b) / regionCounts[key].length
      ).toFixed(2);
    }
  }

  return regionCounts;
};
