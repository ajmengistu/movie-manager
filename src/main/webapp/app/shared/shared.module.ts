import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviemanagerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MoviemanagerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MoviemanagerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviemanagerSharedModule {
  static forRoot() {
    return {
      ngModule: MoviemanagerSharedModule
    };
  }
}
