import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public tab: 'todo' | 'completed' = 'todo';
  public data: Todo[] = [];
  public trash = false;

  constructor(private client: HttpClient) { }

  api(url: string) {
    return `http://localhost:8000/api/${url}`;
  }

  reload() {
    if (this.tab === 'todo') {
      this.todos().subscribe(resp => this.data = resp);
    } else if (this.tab === 'completed') {
      this.completed().subscribe(resp => this.data = resp);
    }
  }

  todos() {
    return this.client.get<Todo[]>(this.api('todo'));
  }

  completed() {
    return this.client.get<Todo[]>(this.api('todo/completed'));
  }

  add(todo: Todo) {
    return this.client.post(this.api('todo'), todo);
  }

  update(todo: Todo) {
    return this.client.put(this.api('todo/' + todo.id), todo);
  }

  destroy(id: number) {
    return this.client.delete(this.api('todo/' + id));
  }
}
