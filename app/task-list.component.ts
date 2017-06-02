import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="above">Show High Calorie Foods</option>
      <option value="below">Show Lower Calorie Foods</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness; let i = index">
      <task-display [task]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      <button (click)="removeButtonHasBeenClicked(i)">Remove</button>
<hr>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  removeButtonHasBeenClicked(itemToRemove){
      this.childTaskList.splice(itemToRemove,1);
      console.log(itemToRemove);
  }
}