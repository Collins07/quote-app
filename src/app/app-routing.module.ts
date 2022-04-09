import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {path:"", redirectTo:"form", pathMatch:"full"},
  {path:"form", component:FormComponent},
  {path:"quote", component:QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
