describe("AccountsController Test", function () {
    var scope, $location, createAccountsController;
    beforeEach(module('bullsfirst'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('test add account', function () {
        it("should have a message equal to 'Hello!'", function () {
            var $scope = {};
            var controller = $controller('AccountsController', { $scope: $scope});
            $scope.rows =[];
            $scope.addAccount();
            expect($scope.rows.length).to.equal(1);
        });
    });

});
