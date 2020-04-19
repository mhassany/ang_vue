import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor(public service: TodoService) { }

  ngOnInit(): void {
  }

  update() {
    this.service.update(this.todo).subscribe(resp => this.service.reload());
  }

  destory() {
    this.service.destroy(this.todo.id).subscribe(resp => this.service.reload());
  }
}
