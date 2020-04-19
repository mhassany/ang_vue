import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.less']
})
export class TodoAddComponent implements OnInit {

  todo = new Todo();

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.service.add(this.todo).subscribe(
      (resp) => {
        this.todo = {} as any;
        this.service.reload();
      },
      (err) => console.log(err)
    );
  }
}
