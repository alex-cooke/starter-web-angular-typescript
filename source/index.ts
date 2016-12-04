import services from './services';
import main from './controllers/main';
import navigation from './app/navigation';
import module from './app/module';
import routes from './app/routes/routes';
import pages from './pages';

let app = module();
navigation(app);
routes(app);
pages(app);
main(app);
services(app);

//  CSS
require('./index.scss');
