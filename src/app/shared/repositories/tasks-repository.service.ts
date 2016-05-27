import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Task} from '../models';
@Injectable()
export class TasksRepositoryService {
  tasks: FirebaseListObservable<Task[]>;

  constructor(af: AngularFire) {
    this.tasks = af.list('/tasks');
  }

  create(task) {
    return this.tasks.push(task);
  }

  update(task) {
    let taskValue = Object.assign({}, task);
    delete taskValue.$key;
    this.tasks.update(task.$key, taskValue);
  }

  remove(task){
    this.tasks.remove(task.$key);
  }

  getAll() {
    return this.tasks;
  }

}
