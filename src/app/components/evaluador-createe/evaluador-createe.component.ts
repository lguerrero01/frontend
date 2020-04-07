import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { EvaluadorModel } from 'src/app/models/evaluador.model';


@Component({
  selector: 'app-employee-create',
  templateUrl: './evaluador-createe.component.html',
  styleUrls: ['./evaluador-createe.component.css']
})

export class EvaluadorCreateeComponent implements OnInit {
  selectEstado: string = '';
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Adminm'];
  tipo: string;
  clientes: string[];
  ubicaciones: Array<string[]>;
  clientesEstadales: string[];
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


  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    let tipoAlcance: EvaluadorModel;
    tipoAlcance.firstName = this.employeeForm.value['firstName'];
    tipoAlcance.lastName = this.employeeForm.value['lastName'];
    tipoAlcance.position = this.employeeForm.value['position'];
    tipoAlcance.type = this.employeeForm.value['type'];
    tipoAlcance.ratio.tipoAlcance = this.tipo;


    this.submitted = true;
    console.log(this.employeeForm);
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

  tipoNacional(e: MatButtonToggleChange) {


    this.tipo = e.value;
    if (e.value === "nacional") {
      this.clientes = ['empresa1', 'empresa2', 'empresa3'];
      this.selectEstado = '';
    } else {
      this.clientes = ['carabobo', 'apure', 'merida'];
    }

  }

  listaEstados(e) {
    this.selectEstado = e.value;
    console.log(e.value);
    this.clientesEstadales = ['clientes', 'cliente hemny prostituta', 'cliente 2'];


  }

  ubicacionesClientes(e) {
    this.ubicaciones = [['zona industrial'], ['guacara'], ['guigue']];
  }
}