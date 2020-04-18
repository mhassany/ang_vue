import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
  { path: 'todo', component: TodoAppComponent },
  { path: 'completed', component: TodoAppComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', component: TodoAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
