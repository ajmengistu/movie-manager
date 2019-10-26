import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { MoviemanagerAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
  module['hot'].accept();
}

// PURPOSE of this file: app.main.ts: similar to MAIN() in JAVA or C
// This purpose of this class is to bootstrap this app. It loads
// everything and the start up of the app.

// Sets MoviemanagerAppModule is the root module for boostrapping
// MoviemanagerAppModule -> bootstrap:[JhiComponent] -> finds selector
// of the bootstrapped component JhiComponent in DOM and initializes
// the component.
// Bootstrapping:
platformBrowserDynamic()
  .bootstrapModule(MoviemanagerAppModule, { preserveWhitespaces: true })
  .then(success => console.log(`Application started`))
  .catch(err => console.error(err));
