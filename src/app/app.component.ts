import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesService } from './shared/services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConfirmComponent } from './confirm/confirm.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';





@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']

})

export class AppComponent implements OnInit{

IsWait :boolean=true;



 displayedColumns: string[] = [

 'id',
 'firstname',
 'lastname',
 'email',
 'dob',
 'education',
 'mobile',
'address',
 'action'
 ];


 dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator! : MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor(private spinner: NgxSpinnerService, private _dialog:MatDialog, private stdService : ServicesService, private toastr:ToastrService){}




 openAddEditForm(){
const DialogRef = this._dialog.open(DashboardComponent);
 this.getStudent();

 }






ngOnInit(): void {
this.getStudent();
 }

 
 getStudent(){
 this.spinner.show()
this.stdService.getStudent().subscribe({
next: (res) => {
  setTimeout(() => {
    this.spinner.hide();
  }, 2000);
  // this.IsWait=true;
  // setTimeout(() => {
  //   this.IsWait=false
  // }, 2000);

 this.dataSource = new MatTableDataSource(res);
 this.dataSource.sort = this.sort;
 this.dataSource.paginator = this.paginator;
  console.log(res);
 },
error : console.log,
 })
 } 




//  deleteStudent(id : number){
// this.stdService.deleteStudent(id).subscribe({
// next : (res) =>{
//   this.toastr.success("student deleted succesfully","Deleted")
//   //alert('Student Deleted')
//   this.getStudent();

// },
// error:console.log,
// });
// }




 updateStudent(data: any){
this._dialog.open(DashboardComponent,{
data,
 })
}


 openConfirmationDialog(id:number): void {
const dialogRef = this._dialog.open(ConfirmComponent);
dialogRef.afterClosed().subscribe(result => {
if (result) {
  this.stdService.deleteStudent(id).subscribe({
    next : (res) =>{
      this.toastr.success("student deleted succesfully","Deleted")
      //alert('Student Deleted')
      this.getStudent();
    
    },
    error:console.log,
    });
}
});
 }


 
 applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();
if (this.dataSource.paginator) {
 this.dataSource.paginator.firstPage();
}
}

}
