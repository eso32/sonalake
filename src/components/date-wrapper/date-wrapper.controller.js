import moment from 'moment';

export default function DateWrapperController($scope, $filter) {
  'ngInject';
  const ctrl = this;

  // $scope.$watch('$ctrl.startDate', () => {
  //   if (moment(this.startDate) > moment(this.endDate)) {
  //     this.endDate = moment(this.startDate).add(2, 'd').toDate();
  //   }
  // });

  // $scope.$watch('$ctrl.endDate', () => {
  //   if (moment(this.endDate) < moment(this.startDate)) {
  //     this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
  //   }
  // });

  this.updateStartTime = (time) => {
    ctrl.startDate = time;

    let startDate = $filter('date')(time, 'yyyy-MM-dd');

    ctrl.updateTravel({ travel: { startDate } });

    if (moment(this.startDate) > moment(this.endDate)) {
      this.endDate = moment(this.startDate).add(2, 'd').toDate();
      ctrl.updateEndTime(ctrl.endDate);
    }
  }

  this.updateEndTime = (time) => {
    ctrl.endDate = time;

    let endDate = $filter('date')(time, 'yyyy-MM-dd');
    ctrl.updateTravel({ travel: { endDate } });

    if (moment(this.endDate) < moment(this.startDate)) {
      this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
      ctrl.updateStartTime(ctrl.startDate);
    }
  }

}
