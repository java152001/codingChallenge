import { useState, useEffect } from 'react'
import { fetchFish } from './utilities/fetchFish'
import { dataByFisheryRegion, averageByRegionAndProperty } from './utilities/calculations'
import NutritionTable from './components/NutritionTable'
import NavBar from './components/NavBar'
import RegionPage from './pages/RegionPage'
import HomePage from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  const [fishData, setFishData] = useState()
  const [regions, setRegions] = useState<Set<string>>()

  useEffect(() => {
    const getFish = async () => {
      const fishInfo = await fetchFish()
      setFishData(fishInfo)
      //averageByRegionAndProperty(fishInfo, 'FatTotal')
      // Create a set of all the regions to remove duplicates
      setRegions(new Set(fishInfo.map(item => item.NOAAFisheriesRegion)))
    }
    getFish()
  }, [])

  return (
    <>
      {regions &&
        // Turn our regions from a Set to an array
        <NavBar routes={Array.from(regions)} />
      }
      <Routes>
        <Route path='/' element={<HomePage data={fishData} />} />
        <Route path='/region' element={<RegionPage />} />
      </Routes>
    </>
  )
}

export default App
