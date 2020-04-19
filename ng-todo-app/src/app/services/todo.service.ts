import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from "rxjs";

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
    let endpoint: Observable<Todo[]> = null;

    if (this.tab === 'todo') {
      endpoint = this.client.get<Todo[]>(this.api('todo'));
    } else if (this.tab === 'completed') {
      endpoint = this.client.get<Todo[]>(this.api('todo/completed'));
    }

    if (endpoint) {
      endpoint.subscribe((resp: any) => this.data = resp);
    }
  }

  add(todo: Todo) {
    return this.client.post(this.api('todo'), todo)
      .subscribe(resp => {
        this.reload();
        todo.label = '';
      });
  }

  update(todo: Todo) {
    return this.client.put(this.api('todo/' + todo.id), todo)
      .subscribe(resp => this.reload());
  }

  destroy(id: number) {
    return this.client.delete(this.api('todo/' + id))
      .subscribe(resp => this.reload());
  }
}
