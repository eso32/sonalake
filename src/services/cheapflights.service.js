export const CheapFlightService = function($http) {
  'ngInject'
  
  this.getFlightsList = (params) => {
    let {origin, dest, originDate, destDate} = params;

    return $http.get(
      `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${origin}/to/${dest}/${originDate}/${destDate}/250/unique/?limit=15&offset-0`
    ).then( resp => resp.data);
  }
};
