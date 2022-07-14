import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransporterComponent } from './setup/components/container/transporter/transporter.component';

const routes: Routes = [
  {path: 'transporters', component: TransporterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
