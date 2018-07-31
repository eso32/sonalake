export const AiportsService = function($http) {
  'ngInject'
  this.getAirportsList = () => {
    return $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/').then(resp => resp.data);
  }
  
};
