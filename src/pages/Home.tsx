import NutritionTable from "../components/NutritionTable";

const HomePage = ({ data }) => {
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
