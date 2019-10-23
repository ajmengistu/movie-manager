import { NgModule } from '@angular/core';

import { MoviemanagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MoviemanagerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MoviemanagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MoviemanagerSharedCommonModule {}
