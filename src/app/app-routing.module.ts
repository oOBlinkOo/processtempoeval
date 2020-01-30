import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
