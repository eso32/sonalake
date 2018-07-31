export default function DateWrapperController(AiportsService) {
    'ngInject';

    const ctrl = this;
    ctrl.originsList;

    ctrl.travel = { from: '', to: '' };

    ctrl.$onInit = () => {
        AiportsService.getAirportsList().then( data => {
            ctrl.airports = data.airports;
            ctrl.originsList = [...ctrl.airports];
            ctrl.destinationsList = [...ctrl.airports];
        });
    }

    ctrl.selectOrigin = (airport) => {

        ctrl.travel.from = airport;
        console.log('You have origin airport: ', airport);

        //updates list of destinations avaliable without of origin airport
        ctrl.destinationsList = [...ctrl.airports].filter(singleAirport => singleAirport.name !== airport.name);

        ctrl.updateTravel({ travel: { origin: airport } })
        console.log('dest list', ctrl.destinationsList);

    }

    ctrl.selectDestination = (airport) => {
        ctrl.travel.to = airport;
        console.log('You have destination airport: ', airport);

        //updates list of origins
        let tempList = [...ctrl.airports];
        ctrl.originsList = tempList.filter(singleAirport => singleAirport.name !== airport.name);

        ctrl.updateTravel({ travel: { dest: airport } })

    }
}