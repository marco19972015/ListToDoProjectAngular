import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ToDoComponent } from './container/to-do/to-do.component';
import { CompletedComponent } from './container/completed/completed.component';
import { PriorityBreakdownComponent } from './container/priority-breakdown/priority-breakdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToDoComponent,
    CompletedComponent,
    PriorityBreakdownComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
