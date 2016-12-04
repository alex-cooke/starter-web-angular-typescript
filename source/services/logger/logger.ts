export interface ILogger {
    messages: string[];
    log: (message: string) => void;
}

class Service implements ILogger {

    messages: string[] = [];

    log = (message: string) => {
        this.messages.push(message);
    }

}

export default (module: ng.IModule) => {

    module.service('Logger', Service);

};
