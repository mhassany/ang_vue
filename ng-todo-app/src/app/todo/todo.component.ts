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

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

}
