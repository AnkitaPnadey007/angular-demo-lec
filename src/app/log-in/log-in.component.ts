import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  studentProfileForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentProfileForm = this.formBuilder.group
    ({
      name: ['',Validators.required],
      email: [''],
      address: this.formBuilder.group
      ({
        city: [''],
        state: ['']
      })
    });
  }

  // using FormGroup
  // studentProfileForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl('')
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });




  onSubmit() {
    console.log(this.studentProfileForm.value);
  
  }
  }



