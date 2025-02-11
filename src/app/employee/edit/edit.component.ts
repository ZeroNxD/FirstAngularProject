import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Employee } from '../../model/employee.type';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  employee: Employee = {
    EmployeeID: 0,
    Nama: '',
    NIK: '',
    Email: '',
    Gender: '',
    Address: '',
    DOB: new Date(),
    POB: '',
    Religion: '',
    Height: 0,
    Weight: 0,
    TypeBlood: '',
    Status: '',
    KidsNumber: 0,
    Division: '',
    Company: '',
    Roles: ''
  };
  
  message: string = '';

  constructor() {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('EmployeeID');
    console.log(id);
    if (id){
      this.loadEmployee(parseInt(id, 10));
    }
  }

  loadEmployee(id: number): void{
    const FoundEmployee = this.employeeService.ListEmployees.find(e => e.EmployeeID === id);
    console.log(FoundEmployee);
    if (FoundEmployee){
      this.employee = {... FoundEmployee};
    } else {
      alert('Employee Not Found!');
      this.router.navigate(['/CRUD'])
    }
  }

  updateEmployee(): void {
    if (this.employee) {
      const response = this.employeeService.updateEmployees(this.employee.EmployeeID, this.employee);
      if (response === "Employee Updated Successfully") {
        this.router.navigate(['/CRUD']);
      } else {
        this.message = response;
      }
    } else {
      this.message = "Failed to update employee: No employee data found.";
    }
  }

  allowNumbersOnly(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
