import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConverterComponent } from './components/converter/converter.component';

const routes: Routes = [  
  { path: 'Converter', component: ConverterComponent },
  { path: 'About', component: AboutComponent },
  { path: '', component: ConverterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
