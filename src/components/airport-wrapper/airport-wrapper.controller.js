export default function DateWrapperController(airportCode) {
    'ngInject';

    const ctrl = this;

    ctrl.originsList;
    ctrl.destinationsList = [];

    ctrl.travel = { from: '', to: '' };

    ctrl.$onInit = () => {
        ctrl.airports = airportCode.mock.airports;
        ctrl.originsList = [...ctrl.airports];
        ctrl.destinationsList = [...ctrl.airports];
        // ctrl.airportFiltered = [...ctrl.airports];
    }

    ctrl.selectOrigin = (airport) => {

        ctrl.travel.from = airport;
        console.log('You have origin airport: ', airport);

        //updates list of destinations avaliable without of origin airport
        ctrl.destinationsList = [...ctrl.airports].filter(singleAirport => singleAirport.name !== airport);

        // if (angular.equals(airport, ctrl.travel.to) && ctrl.travel.to) {
        //   alert('cant do bro');
        //   return
        // }

        console.log('dest list', ctrl.destinationsList);

    }

    ctrl.selectDestination = (airport) => {
        ctrl.travel.to = airport;
        console.log('You have destination airport: ', airport);

        //updates list of origins
        let tempList = [...ctrl.airports];
        ctrl.originsList = tempList.filter(singleAirport => singleAirport.name !== airport);

    }
}