export default function FlightListController($state) {
    'ngInject';

    const ctrl = this;

    ctrl.$onInit = () => {
        console.log('parapams:', ctrl.getParams)
        ctrl.flights = ctrl.getParams.flights;
        ctrl.params = $state.params
        console.log(ctrl.params);
    }


}
