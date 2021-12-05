import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { HomepageComponent } from './homepage.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent,
    children:[
      {
        path:'',
        component: CategoryComponent
      },
      {
        path:'productdetail/:id',
        component:ProductdetailComponent
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
