import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calories:</label>
      <input #newCalories>
      <button (click)="
        addClicked(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string,details: string ,calories: number) {
    var newTaskToAdd: Task = new Task(name,details,calories);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
