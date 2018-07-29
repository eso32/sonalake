export default function AirportSelectorController() {
    'ngInject'

    const ctrl = this;

    ctrl.$onChanges = (changes) => {
        console.log('changes: ', changes);
        ctrl.airportsList = [...ctrl.airports];
    }

    ctrl.chooseCity = (airportName) => {
        ctrl.searchBy = airportName;
        ctrl.showPane = false;
        ctrl.onSelect(airportName);
    }

    ctrl.onSelect = (airport) => {
        ctrl.selectAirport({ airport });
    }

}
