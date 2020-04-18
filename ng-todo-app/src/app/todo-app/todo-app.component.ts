import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.less'],
})
export class TodoAppComponent implements OnInit {
  constructor(public service: TodoService) { }

  ngOnInit(): void { }
}
