import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.less']
})
export class TodoAddComponent implements OnInit {

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(label: string) {
    const todo = new Todo();
    todo.label = label;
    todo.completed = false;

    this.service.add(todo).subscribe(
      (resp) => this.service.reload(),
      (err) => console.log(err)
    );
  }
}
