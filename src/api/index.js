import axios from "axios"
const url = "https://covid19.mathdro.id/api"

export const getStatistics = async (country) => {
    let new_url = url

    if (country) {
        new_url = `${url}/countries/${country}`
    }
    try {
        const fetchedData = await axios.get(new_url)
        const data = fetchedData.data
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
    } catch (err) {
        console.log(err)
    }

}

export const getDailyData = async () => {
    try {
        const fetchedData = await axios.get(`${url}/daily`)
        const data = fetchedData.data
        return data.map(({ confirmed, deaths, reportDate: date }) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date,
        }))
    } catch (err) {
        console.log(err)
    }

}

export const getCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name)
    } catch (err) {
        console.log(err)
    }
}
