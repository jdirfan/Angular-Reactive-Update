import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateOnComponent } from './updateOn/updateOn.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'updateon', component: UpdateOnComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    UpdateOnComponent];
}

