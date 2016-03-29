var React = require('react');
var PropTypes = React.PropTypes;
var DayItem = require('./DayItem');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  }
}

function ForecastUI(props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function(item) {
          return <DayItem key={item.dt} day={item} handleClick={props.handleClick.bind(null, item)}  />
        })}
      </div>
    </div>
  )
}

function Forecast(props) {
  return (
    <div>
      {
        props.isLoading === true
        ? <div>Loading</div>
        : <ForecastUI
            city={props.city}
            forecast={props.forecastData}
            handleClick={props.handleClick} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;