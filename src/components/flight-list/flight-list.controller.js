export default function FlightListController($state) {
    'ngInject';

    const ctrl = this;

    ctrl.$onInit = () => {
        ctrl.flights = ctrl.getParams.data.flights;
        ctrl.params = $state.params
        console.log(ctrl.params);
    }


}
