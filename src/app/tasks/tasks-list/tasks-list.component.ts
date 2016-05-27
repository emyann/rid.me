import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES,MdListItem} from '@angular2-material/list';
import {Task} from '../../shared/models/index';
import {TasksRepositoryService} from  '../../shared/repositories/index';


@Component({
  moduleId: module.id,
  selector: 'app-tasks-list',
  templateUrl: 'tasks-list.component.html',
  styleUrls: ['tasks-list.component.css'],
  directives: [MdButton, MD_LIST_DIRECTIVES, MdListItem],
})
export class TasksListComponent implements OnInit {
  tasks: any;
  completedTasks:any;
  
  constructor(private tasksRepository: TasksRepositoryService) {}

  ngOnInit() {
     this.tasks = this.tasksRepository.getAll();
  }

  completeTask(task) {
    task.status = 'completed';
    this.tasksRepository.update(task);
  }

  removeTask(task) {
    this.tasksRepository.remove(task);
  }

}
