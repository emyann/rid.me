import { Component, OnInit } from '@angular/core';
// unable to understand why I have to point to the index file, while it's not necessary for models
import {TasksRepositoryService} from  '../shared/repositories/index';
import {MdButton} from '@angular2-material/button';
import {MdList} from '@angular2-material/list';
import {MdInput} from '@angular2-material/input';
import {TaskFormComponent} from '../tasks/task-form';
import {TasksListComponent} from '../tasks/tasks-list';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MdButton, MdList, MdInput, TaskFormComponent,TasksListComponent],
})
export class HomeComponent implements OnInit {
  tasks: any;

  constructor(private tasksRepository: TasksRepositoryService) { }

  ngOnInit() {
     this.tasks = this.tasksRepository.getAll();
  }

  removeTask(task) {
    this.tasksRepository.remove(task);
  }

}
