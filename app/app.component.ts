import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid">
    <h1>Meal Tracker App</h1>
    <div class="row">
<div class="col-md-4 col-lg-4">
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
</div>
<div class="col-md-4 col-lg-4">
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>
</div>
<div class="col-md-4 col-lg-4">
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
</div>
</div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Hamburger.","Didn't get a soda or cheese on my burger!",654),
      new Task("Fries.", "I only ate half of them.", 365),
      new Task("Rosted Chicken","Ate all of it", 500),
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}