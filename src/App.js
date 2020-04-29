import React, { Component } from 'react'
import { Chart, Card, CountrySelector } from './components'
import styles from './App.module.css'
import { getStatistics } from './api'
import coronaImage from './images/image.png'
import stayHome from './images/stay-home.jpg'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: {},
      country: ''
    }
  }

  async componentDidMount() {
    const data = await getStatistics()

    this.setState({
      results: data
    })
  }

  handleCountryChange = async (country) => {
    const data = await getStatistics(country)

    this.setState({
      results: data,
      country: country
    })
  }

  render() {
    const { results, country } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.imageCovid} src={coronaImage} alt='COVID-19' />
          <img className={styles.imageStayHome} src={stayHome} alt='COVID-19' />
        </div>
        <Card data={results} />
        <CountrySelector CountrySelect={this.handleCountryChange} />
        <Chart data={results} country={country} />
      </div>
    )
  }
}
export default App
