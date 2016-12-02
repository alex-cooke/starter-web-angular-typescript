import 'angular-route';

export default (mod: ng.IModule) => {

    mod.config(["$routeProvider", '$locationProvider',
        ($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider) => {

            $routeProvider

                .when("/", {
                    template: '<home></home>'
                })

                .when("/a", {
                    template: '<page-a></page-a>'
                })

                .when("/b", {
                    template: '<page-b></page-b>'
                })

                .otherwise("/");

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false,
                rewriteLinks: true
            });

        }]);

}