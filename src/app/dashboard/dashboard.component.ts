



import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../shared/services.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit{
 StdForm: FormGroup;
 education: string[] = [

'Matric',
'Diploma',
'Intermediate',
'Graduate',
'Post Graduate',
];


constructor(private toastr: ToastrService ,private form: FormBuilder, private stdservices : ServicesService,
 private dialogRef : DialogRef<DashboardComponent>,
 @Inject(MAT_DIALOG_DATA) public data : any
 ){

 this.StdForm = this.form.group({

 firstname : new FormControl([""], [Validators.required]),
 lastname : new FormControl("", Validators.required),
email : new FormControl("", Validators.required),
dob: new FormControl("", Validators.required),
 education : new FormControl("", Validators.required),
 mobile : new FormControl("", Validators.required),
 address : new FormControl("", Validators.required),
 gender : new FormControl("", Validators.required)
 })

}



ngOnInit(): void {

this.StdForm.patchValue(this.data);

}

 onFormSubmit(){

 if(this.StdForm.valid){
 if(this.data){
 this.stdservices.updateStudent(this.data.id, this.StdForm.value).subscribe({
 next: (val: any) => {
  this.toastr.success("student updated succesful" , "Updated")
// alert('Student Details Updated');
this.dialogRef.close();
//this.app.getStudent();
},
 error: (err: any) =>{
 console.log(err);
}
 });
 }
 
 else{

this.stdservices.addStudent(this.StdForm.value)
 .subscribe({
  next: (val: any) => {
 this.toastr.success('student added succesfully', "Added");
 //alert('Student Added Sucessfulluy');
 console.log(this.StdForm);
this.dialogRef.close();


 },

error: (err: any) => {
console.log(err); 
 }
 });
}
}
}


}
