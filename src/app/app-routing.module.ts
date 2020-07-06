import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


const routes: Routes = [

  { path: 'padre-component', component: PadreComponent },
{ path: 'hijo-component', component: HijoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
