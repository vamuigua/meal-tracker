import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="childSelectedTask.name">
      </div>
      <div>
        <label>Enter Details:</label>
        <input [(ngModel)]="childSelectedTask.details">
      </div>
      <div>
        <label>Enter Calories:</label>
        <input [(ngModel)]="childSelectedTask.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
