export type Employee = {
    EmployeeID: number;
    Nama : string;
    NIK : string; // Validasi Angka
    Email : string; // Validasi Email
    Gender : string; 
    Address : string;
    DOB : Date;
    POB : string;
    Religion : string;
    Height : number;
    Weight : number;
    TypeBlood : string; // Validasi 1 Huruf
    Status : string;
    KidsNumber : number;
    Division : string;
    Company : string;
    Roles : string;
}