export const fetchFish = async () => {
    const response = await fetch('http://localhost:5001/gofish?apikey=abrradiology')

    const data = await response.json()

    return data

    // TODO: Add Error Handling for failed fetch to fail gracefully
}