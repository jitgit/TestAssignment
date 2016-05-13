function AccountsController($scope, accountService) {
    $scope.rows = accountService.getData();
    $scope.totals = {
        name: '',
        marketValue: 0,
        cash: 0,
        legend: 'none'
    };

    $scope.rows.forEach(function(row) {
        $scope.totals.marketValue += row.marketValue;
        $scope.totals.cash += row.cash;
    });


    $scope.addAccount = function() {
        $scope.rows.push({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'cyan'
        });
    };
}
module.exports = AccountsController;
