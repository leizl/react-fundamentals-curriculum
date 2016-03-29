var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecast;

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function() {
    this.requestData(this.props.routeParams.city)
  },
  componentWillReceiveProps: function(nextProps) {
    this.requestData(nextProps.routeParams.city)
  },
  requestData: function(city) {
    getForecast(city)
      .then(function(forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        })
      }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    );
  }
});

module.exports = ForecastContainer;