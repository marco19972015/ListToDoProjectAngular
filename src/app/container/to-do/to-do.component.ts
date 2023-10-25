import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  // The funcitonality that I want to incorperate in this component
  // I want to get the input from the user
  // I want to store that in an array 
  // I want to itterate through that array as we input new strings 

  // Create a property to store instance of user input
  taskTask1: string = ""

  // Create an emptyArray to store user all the user inputs
  emptyArray: Array<string> = []

  // Use ViewChild to access the input element using a template reference
  @ViewChild('taskInput') taskInput: ElementRef | undefined

  // Method to post the
  taskCompleted() {
    this.taskTask1 = this.taskInput?.nativeElement.value;
    this.emptyArray.push(this.taskTask1)
    console.log(this.emptyArray);
    

  }
}
