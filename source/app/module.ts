import * as ng from 'angular';

export default () : ng.IModule => {

    return ng.module('app', [
        'ngRoute'
    ]);

};
