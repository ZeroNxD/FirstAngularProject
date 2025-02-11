import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Disini yang akan terjadi proses CRUDnya (nanti untuk functionnya kita tinggal inject ke componentnya aja.)
  ListEmployees: Array<Employee> = [
  {
    EmployeeID: 1,
    Nama : "Testing",
    NIK : '1234567890987654321', 
    Email : 'Tes123@gmail.com', 
    Gender : 'Male',
    Address : 'Jalan dimana saja',
    DOB : new Date(),
    POB : 'Pekanbaru',
    Religion : 'Buddha',
    Height : 170, 
    Weight : 85, 
    TypeBlood : 'A+', 
    Status : 'Single',
    KidsNumber : 0,
    Division : 'INTI',
    Company : 'UNIAIR Cargo',
    Roles : 'Internship'
  },

  {
    EmployeeID: 2,
    Nama : "HelloWorld",
    NIK : '0987654321234567890', 
    Email : 'HelloWorld@gmail.com', 
    Gender : 'Female',
    Address : 'Jalan dimana saja dan kapan saja',
    DOB : new Date("Feb 08 2024"),
    POB : 'Pekanlama',
    Religion : 'Islam',
    Height : 190, 
    Weight : 90, 
    TypeBlood : 'B-', 
    Status : 'Married',
    KidsNumber : 3,
    Division : 'INTI',
    Company : 'UNIAIR Cargo',
    Roles : 'Full-Time Manager'
  },
];

  constructor() { }

  validateEmployee(employee: Employee): string | null {
    // Sekedar Validasi atas input yang disubmit oleh user.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const bloodTypeRegex = /^(A|B|AB|O)[+-]$/;
    const validReligions = ['Islam', 'Christian', 'Catholic', 'Buddha', 'Hindu', 'Konghucu'];
    const validStatus = ['Single', 'Married', 'Divorced'];
  
    if (!employee.Nama || employee.Nama.trim() === '') return "Name is required.";
    const duplicatedName = this.ListEmployees.some(e => e.Nama === employee.Nama && e.EmployeeID !== employee.EmployeeID);
    if(duplicatedName){
      return "Name Should be Unique"
    }
    if (!employee.NIK || !/^\d{10,19}$/.test(employee.NIK)) return "NIK should be numeric and 10-19 characters long.";
    const duplicatedNIK = this.ListEmployees.some(e => e.NIK === employee.NIK && e.EmployeeID !== employee.EmployeeID);
    if(duplicatedNIK){
      return "NIK Should be Unique"
    }
    if (!employee.Email || !emailRegex.test(employee.Email)) return "Invalid email format.";
    const duplicatedEmail = this.ListEmployees.some(e => e.Email === employee.Email && e.EmployeeID !== employee.EmployeeID);
    if(duplicatedEmail){
      return "Email Should be Unique"
    }
    if (!employee.Gender || !['Male', 'Female'].includes(employee.Gender)) return "Gender must be Male or Female.";
    if (!employee.Address || employee.Address.trim() === '') return "Address is required.";
    if (!employee.DOB) return "Date of Birth is required.";
    const dob = new Date(employee.DOB);
    if (isNaN(dob.getTime())) return "Invalid Date of Birth.";
    if (dob > new Date()) return "Date of Birth cannot be in the future.";
    if (!employee.POB || employee.POB.trim() === '') return "Place of Birth is required.";
    if (!employee.Religion || !validReligions.includes(employee.Religion)) {
      return "Please select a valid religion.";
    }
    if (employee.Height == null || employee.Height < 120 || employee.Height > 250) return "Height must be between 120 cm and 250 cm.";
    if (employee.Weight == null || employee.Weight < 30 || employee.Weight > 200) return "Weight must be between 30 kg and 200 kg.";
    if (!employee.TypeBlood || !bloodTypeRegex.test(employee.TypeBlood)) return "TypeBlood must be A+, A-, B+, B-, AB+, AB-, O+, or O-.";
    if (!employee.Status || !validStatus.includes(employee.Status)) {
      return "Please select a valid marital status.";
    }
    if (!employee.Division || employee.Division.trim() === '') return "Division is required.";
    if (!employee.Company || employee.Company.trim() === '') return "Company is required.";
    if (!employee.Roles || !['Internship', 'Full-Time Manager', 'Part-Time', 'Contract'].includes(employee.Roles)) {
      return "Roles must be a valid predefined role.";
    }
    
    return null;
  }

  getEmployees(): Observable<Employee[]>{
    // ini ngereturn List Employee yang bisa kita observasi/kita cek gitu
    return of(this.ListEmployees);
  }

  createEmployees(employee: Employee): string{
    const ValidationError = this.validateEmployee(employee);
    if(ValidationError){
      return ValidationError;
    }

    // Bagian kita ngecreate data employeenya.
    employee.EmployeeID = this.ListEmployees.length > 0 ? Math.max(...this.ListEmployees.map(e => e.EmployeeID)) + 1 : 1;
    this.ListEmployees.push(employee);
    return "Employee Created Successfully"
  }

  updateEmployees(id: number, updatedData : Employee): string{
    const ValidationError = this.validateEmployee(updatedData);
    if(ValidationError){
      return ValidationError;
    }

    // Cari Datanya based on index employee yang dipilih
    const EmployeeIndex = this.ListEmployees.findIndex(e => e.EmployeeID === id);
    if(EmployeeIndex !== -1){
      // Kalau ketemu index employeenya tinggal diupdate data Employeenya.
      this.ListEmployees[EmployeeIndex] = updatedData;
      return "Employee Updated Successfully";
    }
    return "Employee Data Not Found!"
  }

  deleteEmployees(id: number): string {
    const EmployeeIndex = this.ListEmployees.findIndex(e => e.EmployeeID === id);
    if(EmployeeIndex !== -1){
      // Bagian delete si Employeenya dari List.
      this.ListEmployees.splice(EmployeeIndex, 1);
      return "Employee deleted successfully!";
    }
    return "Employee Data Not Found!"
  }
}
