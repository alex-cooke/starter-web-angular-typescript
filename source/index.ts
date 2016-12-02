import navigation from './app/navigation';
import module from './app/module';
import routes from './app/routes';
import pages from './pages';

let app = module();
navigation(app);
routes(app);
pages(app);


//  CSS
require('./index.scss');
