import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
    employeeService = inject(EmployeeService);
    employeeList = signal<Array<Employee>>([]);
  
    ngOnInit(): void {
        console.log(this.employeeService.ListEmployees);
        this.loadEmployees();
    }

    loadEmployees(){
      this.employeeList.set(this.employeeService.ListEmployees);
    }

    deleteEmployee(id: number): void {
      const confirmDelete = confirm("Are you sure you want to delete this data??");
      if (confirmDelete){
        const result = this.employeeService.deleteEmployees(id);
        alert(result);
        this.loadEmployees();
      }
    }
}
