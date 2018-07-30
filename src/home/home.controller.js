export default function HomeController() {
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

}
