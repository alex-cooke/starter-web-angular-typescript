import { ILogger } from '../../services/logger/logger';


class Controller implements ng.IController {

    static $inject = ['Logger'];

    constructor(protected logger: ILogger) {

    }

    $onInit() {
        this.logger.log('this is my first message');
    }
}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./index.html');

}


export default (module: ng.IModule) => {

    module.component('home', new Component());

};
