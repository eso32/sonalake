export default function HomeController($state) {
    'ngInject';

    const ctrl = this;
    ctrl.travel = {}

    ctrl.$onInit = () => {
        ctrl.travel = { originDate: ctrl.startDate, destDate: ctrl.endDate };
    }

    ctrl.updateTravel = (travel) => {
        console.log('got object! ', travel);
        ctrl.travel = Object.assign(ctrl.travel, travel);
    }

    ctrl.findFlights = () => {
        $state.go('home.flightList', {
            origin: ctrl.travel.origin.iata, 
            originDate: ctrl.travel.startDate, 
            dest: ctrl.travel.dest.iata, 
            destDate: ctrl.travel.endDate}
        )

    }

}
