import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../model/employee.type';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employee: Employee = {
    EmployeeID: 0,
    Nama: '',
    NIK: '',
    Email: '',
    Gender: 'Male',
    Address: '',
    DOB: new Date(),
    POB: '',
    Religion: '',
    Height: 0,
    Weight: 0,
    TypeBlood: 'A+',
    Status: '',
    KidsNumber: 0,
    Division: '',
    Company: '',
    Roles: 'Internship'
  };

  message: string = '';

  saveEmployee() {
    const response = this.employeeService.createEmployees(this.employee);
    if(response === "Employee Created Successfully"){
      this.router.navigate(['/CRUD']);
    } else {
      this.message = response;
    }
  }

  allowNumbersOnly(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57){
      event.preventDefault();
    }
  }

  constructor(){}
  
  
}
