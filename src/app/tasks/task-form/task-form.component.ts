import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {MdButton} from '@angular2-material/button';
import {MdList} from '@angular2-material/list';
import {MdInput} from '@angular2-material/input';
import {Task} from '../../shared/models/index';
import {TasksRepositoryService} from  '../../shared/repositories/index';


@Component({
  moduleId: module.id,
  selector: 'app-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css'],
  directives: [MdButton, MdList, MdInput],
})
export class TaskFormComponent implements OnInit {
  task: Task= new Task();
  constructor(private tasksRepository: TasksRepositoryService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.tasksRepository.create(this.task);
    this.task = new Task();
  }

}
