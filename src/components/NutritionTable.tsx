import React from 'react'
import { averageByRegionAndProperty } from '../utilities/calculations'

const NutritionTable = ({ fishData, nutritionProperty }) => {

    //console.log(fishData)

    const average = Object.entries(averageByRegionAndProperty(fishData, nutritionProperty))

    console.log(average)

    return (
        <>
            <h3>Here is a table</h3>
            {
                average.map(region => {
                    return (
                        <h5 key={region[0] + region[1]}>{region[0]} has an average {nutritionProperty} count of {region[1]}</h5>
                    )
                })
            }
        </>
    )
}

export default NutritionTable