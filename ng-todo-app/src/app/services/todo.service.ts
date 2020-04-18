import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public activeTab = 'todo';

  constructor() { }
}
