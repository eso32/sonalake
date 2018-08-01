export default function FlightListController($state) {
    'ngInject';

    const ctrl = this;

    ctrl.$onInit = () => {
        ctrl.flights = ctrl.getParams.flights;
        ctrl.params = $state.params
    }
}
