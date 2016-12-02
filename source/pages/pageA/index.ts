class Controller implements ng.IController {

}

class Component implements ng.IComponentOptions {

    controller = Controller;
    template = require('./index.html');
}

export default (module: ng.IModule) => {

    module.component("pageA", new Component());
    
}