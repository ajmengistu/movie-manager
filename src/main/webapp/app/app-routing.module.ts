import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
// import { DEBUG_INFO_ENABLED } from 'app/app.constants';

// Load all the routes from navbarRoute:Route and errorRoute:Route[] into
// LAYOUT_ROUTES:Route[].
const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

// Valid routes with /admin/[route-name] that are children of
// admin route will provide their own route rules
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#MoviemanagerAdminModule'
  },
  ...LAYOUT_ROUTES
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // Uncomment to see Debuging info in Browser console.
      // { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class MoviemanagerAppRoutingModule {}
