import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTodolistComponent } from './customer-todolist/customer-todolist.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerListComponent
  },
  {
    path:'customerstodolist',
    component:CustomerTodolistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
