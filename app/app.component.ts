import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Type into inputs and watch objects update</h3>
             <h3>Add to List button works ONLY if there is a name (required field).</h3>
  
   
               <form [formGroup]="myform" (submit)="addToList(myform.value)">
                      <label>Name</label>
                      <input type="text" formControlName="name"><br>
                      <label>City</label>
                      <input type="text" formControlName="city"><br>
                      <label>Country</label>
                      <input type="text" formControlName="country"><br>
                      <button>Add to List</button>
              </form>
              
              <p>myform.value = {{myform.value | json}}</p>
              
  
              <h3 *ngIf="list.length">LIST</h3>
              
              <app-child-component *ngFor = "let item of list" [childProp]="item"
                (emitter)="delete($event)">
              </app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  

  list = [];
  
  addToList(formObj) {if (this.myform.valid) {this.list.push(formObj);} }

  delete(obj) {this.list = this.list.filter(e => e != obj);}

  constructor() {
    let fb = new FormBuilder();
 
    this.myform = fb.group({
      name: ['', Validators.required],
      city: [''],
      country: ['']
    });
  }
  
}
