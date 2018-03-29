import { Injectable } from '@angular/core';
import * as UUID from 'uuidjs';


@Injectable()
export class TasksService {

  tasks = [];
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify( this.tasks ) );
  }

  getTasks() {
    let tasks = localStorage.getItem('tasks'); 
    if (tasks) {
      this.tasks = JSON.parse( localStorage.getItem('tasks') );
    }
  }

  getTaskById(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if ( this.tasks[i].id === id ) {
        return this.tasks[i];
      }
    }
    return false;
  }

  add(name) {
    this.tasks.push({
      name: name,
      id: UUID.generate(),
      comments: []
    });
    this.saveTasks();
  }

  delete(id) {
    this.tasks = this.tasks.filter(el => el.id !== id );
    this.saveTasks();
  }

  addComment(id, text) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks[i].comments.push(text);
        this.saveTasks();
      }
    }
  }

  constructor() { }

}
