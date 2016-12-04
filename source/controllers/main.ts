class Controller implements ng.IController {

    message : string = 'Hello, World!';

}

export default (app: ng.IModule) => {

    app.controller('main', Controller);

};
