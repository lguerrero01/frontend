import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './evaluador-createe.component.html',
  styleUrls: ['./evaluador-createe.component.css']
})

export class EvaluadorCreateeComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Adminm']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.employeeForm.get('position').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Evaluador successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/evaluador-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}