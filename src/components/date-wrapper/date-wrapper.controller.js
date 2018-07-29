import moment from 'moment';

export default function DateWrapperController($scope, airportCode) {
  'ngInject';

  const ctrl = this;

  ctrl.originsList;
  ctrl.destinationsList;

  ctrl.travel = { from: '', to: '' };

  ctrl.$onInit = () => {
    ctrl.airports = airportCode.mock.airports;
    ctrl.originsList = [...ctrl.airports];
    ctrl.destinationsList = [...ctrl.airports];
    // ctrl.airportFiltered = [...ctrl.airports];
  }

  ctrl.selectOrigin = (airport) => {

    // ctrl.travel.from = airport;
    console.log('You have origin airport: ', airport);

    //updates list of destinations avaliable without of origin airport
    tempList = [...ctrl.airports];
    ctrl.destinationsList = tempList.filter(singleAirport => singleAirport.name !== airport);

    // if (angular.equals(airport, ctrl.travel.to) && ctrl.travel.to) {
    //   alert('cant do bro');
    //   return
    // }

  }

  ctrl.selectDestination = (airport) => {
    ctrl.travel.to = airport;
    console.log('You have destination airport: ', airport);

    //updates list of origins
    empList = [...ctrl.airports];
    ctrl.originsList = tempList.filter(singleAirport => singleAirport.name !== airport);

  }

  $scope.$watch('$ctrl.startDate', () => {
    if (moment(this.startDate) > moment(this.endDate)) {
      this.endDate = moment(this.startDate).add(2, 'd').toDate();
    }
  });

  $scope.$watch('$ctrl.endDate', () => {
    if (moment(this.endDate) < moment(this.startDate)) {
      this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
    }
  });
}
