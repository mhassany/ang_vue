import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.less'],
})
export class TodoAppComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public service: TodoService) { }

  ngOnInit(): void {
    const url = this.route.snapshot.url.join('/');
    if (['todos', 'completed'].indexOf(url)) {
      this.service.tab = url as any;
      this.service.reload();
    }
  }
}
