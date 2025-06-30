import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todoItems:Array<Todo> = [
    {
      title:'Grocery',
      id:0,
      userId:1,
      completed:false
    },
    {
      title:'Gym',
      id:1,
      userId:1,
      completed:false
    }
  ];
  constructor() { }
}
