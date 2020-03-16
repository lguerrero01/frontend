import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './evaluador-list.component.html',
  styleUrls: ['./evaluador-list.component.css']
})

export class EvaluadorListComponent implements OnInit {

  Employee: any = [];

  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit() { }

  readEmployee() {
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data;
    })
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
      }
      )
    }
  }

} 
