type HomePageData = {
  SpeciesName: string;
  NOAAFisheriesRegion: string;
  Calories: number | null;
  FatTotal: number | null;
  Servings: number | null;
};

export const dataByFisheryRegion = (data): HomePageData[] => {
  return data.map((item) => {
    return {
      SpeciesName: item.SpeciesName,
      NOAAFisheriesRegion: item.NOAAFisheriesRegion,
      Calories: Number(item.Calories),
      // This is a string in grams, removing the gram portion and converting to float
      FatTotal: parseFloat(item.FatTotal.split(" ")[0]),
      Servings: Number(item.Servings),
    };
  });
};

export const averageByRegionAndProperty = (data, property) => {
  const regionCounts = {};

  // Creates an object sorting data by Region, with value being an array of all calories or fat for that region

  data.forEach((item) => {
    if (item[property]) {
      if (!regionCounts[item.NOAAFisheriesRegion]) {
        if (property === "Calories") {
          regionCounts[item.NOAAFisheriesRegion] = [Number(item[property])];
        } else {
          regionCounts[item.NOAAFisheriesRegion] = [
            parseFloat(item[property].split(" ")[0]),
          ];
        }
      } else {
        if (property === "Calories") {
          regionCounts[item.NOAAFisheriesRegion].push(Number(item[property]));
        } else {
          regionCounts[item.NOAAFisheriesRegion].push(
            parseFloat(item[property].split(" ")[0])
          );
        }
      }
    }
  });

  // takes our object of regions and all counts, then calculates the average of all of those counts and sets the new value of our object, rounded to 2 decimals
  for (let key in regionCounts) {
    regionCounts[key] = (
      regionCounts[key].reduce((a, b) => a + b) / regionCounts[key].length
    ).toFixed(2);
  }

  return regionCounts;
};

//export default { dataByFisheryRegion, averageByRegionAndProperty }
