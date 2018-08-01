export default function HomeController($state) {
    'ngInject';

    const ctrl = this;

    ctrl.$onInit = () => {
        ctrl.travel = {
            origin: undefined, 
            startDate: undefined, 
            dest: undefined, 
            endDate: undefined
        };
    }

    ctrl.updateTravel = (travel) => {
        console.log('got object! ', travel);
        ctrl.travel = Object.assign(ctrl.travel, travel);
    }

    ctrl.findFlights = (travel) => {

        console.log('validation: ', ctrl.validateTravelObject(travel));

        if(!ctrl.validateTravelObject(travel)) {
            ctrl.notify = true;
            return
        }

        ctrl.notify = false;

        $state.go('home.flightList', {
            origin: travel.origin.iata, 
            originDate: travel.startDate, 
            dest: travel.dest.iata, 
            destDate: travel.endDate}
        )

    }

    ctrl.validateTravelObject = (travel) => {
        let travelKeys = Object.keys(travel);

        if(travelKeys.find( key => !travel[key])) return false;

        return true;
    }

}
