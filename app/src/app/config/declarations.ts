import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-copyComponent
import { copyComponent } from '../components/copyComponent/copy.component';
//CORE_REFERENCE_IMPORT-contactComponent
import { contactComponent } from '../components/contactComponent/contact.component';
//CORE_REFERENCE_IMPORT-newsComponent
import { newsComponent } from '../components/newsComponent/news.component';
//CORE_REFERENCE_IMPORT-gallaryComponent
import { gallaryComponent } from '../components/gallaryComponent/gallary.component';
//CORE_REFERENCE_IMPORT-beeComponent
import { beeComponent } from '../components/beeComponent/bee.component';
//CORE_REFERENCE_IMPORT-recruitmentComponent
import { recruitmentComponent } from '../components/recruitmentComponent/recruitment.component';
//CORE_REFERENCE_IMPORT-getinvolvedComponent
import { getinvolvedComponent } from '../components/getinvolvedComponent/getinvolved.component';
//CORE_REFERENCE_IMPORT-servicesComponent
import { servicesComponent } from '../components/servicesComponent/services.component';
//CORE_REFERENCE_IMPORT-homecontentComponent
import { homecontentComponent } from '../components/homecontentComponent/homecontent.component';
//CORE_REFERENCE_IMPORT-programmesComponent
import { programmesComponent } from '../components/programmesComponent/programmes.component';
//CORE_REFERENCE_IMPORT-aboutComponent
import { aboutComponent } from '../components/aboutComponent/about.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-copyComponent
copyComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contactComponent
contactComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-newsComponent
newsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-gallaryComponent
gallaryComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-beeComponent
beeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-recruitmentComponent
recruitmentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-getinvolvedComponent
getinvolvedComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-servicesComponent
servicesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homecontentComponent
homecontentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-programmesComponent
programmesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-aboutComponent
aboutComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: '', component: homecontentComponent},{path: 'programmes', component: programmesComponent},{path: 'about', component: aboutComponent},{path: 'main', component: homecontentComponent},{path: 'services', component: servicesComponent},{path: 'getinvolved', component: getinvolvedComponent},{path: 'recruitment', component: recruitmentComponent},{path: 'bee', component: beeComponent},{path: 'gallary', component: gallaryComponent},{path: 'news', component: newsComponent},{path: 'contact', component: contactComponent}]},{path: '', redirectTo: 'home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
