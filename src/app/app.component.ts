import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormBuilder]
})
export class AppComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      datePicker     : [ null ],
      datePickerTime : [ null ],
      monthPicker    : [ null ],
      rangePicker    : [ [] ],
      rangePickerTime: [ [] ],
      timePicker     : [ null ]
    });
  }
}