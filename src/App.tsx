import { useState, useEffect } from 'react'
import { fetchFish } from './utilities/fetchFish'
import { dataByFisheryRegion, averageByRegionAndProperty } from './utilities/calculations'
import './App.css'

function App() {

  const [fishData, setFishData] = useState()

  useEffect(() => {
    const getFish = async () => {
      const fishInfo = await fetchFish()
      setFishData(fishInfo)
      averageByRegionAndProperty(fishInfo, 'FatTotal')
    }
    getFish()
  }, [])

  return (
    <>
      <h1>Welcome to the App</h1>
    </>
  )
}

export default App
