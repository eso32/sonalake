export default function AirportSelectorController() {
    'ngInject'

    const ctrl = this;

    ctrl.$onChanges = (changes) => {
        if (!ctrl.airports) return;
        ctrl.airportsList = [...ctrl.airports];
    }

    ctrl.chooseCity = (airport) => {
        ctrl.searchBy = airport.name;
        ctrl.showPane = false;
        ctrl.selectAirport({ airport });
    }

    ctrl.onInputChange = (search) => {
        ctrl.showPane = true;
        if (search.length === 0) ctrl.selectAirport({ airport: '' });
    }
}
