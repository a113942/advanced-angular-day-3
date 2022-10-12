import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ht-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('13'),
  });
  constructor() {}

  done() {
    console.log(this.form.value);
  }
}
