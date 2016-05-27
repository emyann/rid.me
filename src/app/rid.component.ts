import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {TasksRepositoryService} from './shared/repositories/index';

@Component({
  moduleId: module.id,
  selector: 'rid-app',
  templateUrl: 'rid.component.html',
  styleUrls: ['rid.component.css'],
  directives: [
    MdButton, MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://project-5117325276653364798.firebaseio.com'),
    ROUTER_PROVIDERS,
    TasksRepositoryService
    ]
})
@Routes([
  {path: '/home', component: HomeComponent}
])
export class RidAppComponent {
  title = 'Welcome on rid.me!';
}
