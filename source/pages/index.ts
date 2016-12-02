import pageB from './pageB';
import pageA from './pageA';
import home from './home';

export default (module: ng.IModule) => {

    home(module);
    pageA(module);
    pageB(module);

}