import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviemanagerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

import { JhMaterialModule } from 'app/shared/jh-material.module';
@NgModule({
  imports: [JhMaterialModule, MoviemanagerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhMaterialModule, MoviemanagerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviemanagerSharedModule {
  static forRoot() {
    return {
      ngModule: MoviemanagerSharedModule
    };
  }
}
