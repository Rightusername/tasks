import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskslistComponent } from './taskslist/taskslist.component';
import { OpenedtaskComponent } from './openedtask/openedtask.component';

const routes: Routes = [
  { path: '', component: TaskslistComponent },
  { path: ':id', component: OpenedtaskComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
