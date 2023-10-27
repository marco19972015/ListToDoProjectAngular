import { KeyValue } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  // Create a property to store instance of user input
  taskTask1: string = ""
  // this is what I will show in an *ngfor loop in the view
  userInputs: Array<string> = [];
  // Use ViewChild to access the input element using a template reference
  @ViewChild('taskInput') taskInput: ElementRef | undefined
  // Store user inputs 
  storeUserInputs: Array<string> = [];
  // Create the map 
  userMapInputs: Map<any, any> = new Map()

  ngOnInit(): void {
    // we call the method here and return the current instance
    this.loadInputs()
  }

  // get the user input using viewChild
  getUserInput() {
    this.taskTask1 = this.taskInput?.nativeElement.value;
    return this.taskTask1;
  } 

  // add to the array 
  addToArray(){
    this.userInputs.push(this.getUserInput());
    return this.userInputs;
  }

  // safe input into localStorage
  saveInputsIntoLocalStorage() {
    this.addToArray().forEach((item, index) => {
      // for every itteration set the index and item to localStorage
      localStorage.setItem(JSON.stringify(index), JSON.stringify(item))
    })
  }

  // THE ISSUE OF MULTIPLE COPIES OF THE SAME ARRAY BEING DISPLAYED IS COMING FROM HERE 
  // WE PROB HAVE TO ADD A CONDITIONAL STATEMENT
  // if index already exists then place the new item
  loadInputs() {
      Object.keys(localStorage).forEach((key) =>{
        console.log(localStorage.getItem(key));
        let itemIndex = JSON.stringify(localStorage.getItem(key))
        let stringIndex = JSON.parse(itemIndex)
        // remove the quotations that come in from turning it into a string
        stringIndex = stringIndex.slice(1, -1)
        this.storeUserInputs.push(stringIndex)
    });

    this.storeUserInputs.forEach((value, index) => {
      this.userMapInputs.set(value, index)
      console.log(this.userMapInputs);
    })

  
  }

  sortItems() {
    
  }




  clearAll(){
    localStorage.clear();
    
  }

  deleteInputs() {
    this.storeUserInputs = [];
  }


 
}