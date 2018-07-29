import moment from 'moment';

export default function DateWrapperController($scope, airportCode) {
  'ngInject';

  const ctrl = this;

  ctrl.travel = { from: '', to: '' };

  ctrl.$onInit = () => {
    ctrl.airports = airportCode.mock.airports;
    console.log('airports in date-wrapper ', ctrl.airports);
    ctrl.airportFiltered = [...ctrl.airports];
  }

  ctrl.selectOrigin = (airport) => {

    ctrl.travel.from = airport;
    console.log('You have origin airport: ', airport);

    ctrl.airportsSec = [...ctrl.airports];
    ctrl.airportFiltered = ctrl.airportsSec.filter(singleAirport => singleAirport.name !== airport);

    // if (angular.equals(airport, ctrl.travel.to) && ctrl.travel.to) {
    //   alert('cant do bro');
    //   return
    // }

  }

  ctrl.selectDestination = (airport) => {
    ctrl.travel.to = airport;
    console.log('You have destination airport: ', airport);
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
