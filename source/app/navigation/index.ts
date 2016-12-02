class Controller implements ng.IController {

    build: string = settings.build;

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./index.html');

}

export default (module: ng.IModule) => {

    module.component('navigation', new Component());

};
