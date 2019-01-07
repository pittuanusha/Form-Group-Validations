import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { __values } from 'tslib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentForm:FormGroup;
  
  title = 'taskFour';
//   student:any[]=[
// {"firstName":rama }
// //   ]
// countries:any[]=[
//   {
//     'name':'india'
//   },{'name':'usa'},
//   {'name':'uk'}
// ]
firstName:string;
lastName:string;
location:string;
gender:string;
student:any[];
ngOnInit()
{
  this.studentForm = this.fb.group({
    firstName:"",
    lastName:"",
    location:"",
    gender:"",
  
  });
 this.student=([{"firstName":"rama","lastName":"p","location":"guntur","gender":"male"},
 {"firstName":"sitha","lastName":"p","location":"chirala","gender":"female"},
 
 {"firstName":"githa","lastName":"k","location":"hyderabad","gender":"male"}
])


}
constructor(private  fb:FormBuilder)
{

}


 onSubmit():void 
 {
  console.log(this.studentForm.value);

 }
//  student=[
//   {"firstName":"rama","lastName":"p","location":"guntur","gender":"male" }
// ]

 Display(index){
  // let f1="";
  // let f2="";
  // let f3="";
  // let f4="";
  alert(index)
  // console.log(this.student);
  let data=this.student;
// for (let i = 0; i < data.length; i++) 
//   {
// f1=f1+data[i].firstName+",";
// f2=f2+data[i].lastName+",";
// f3=f3+data[i].location+",";

// console.log(data[i].firstName);
// console.log(data[i].lastName);
// console.log(data[i].location);

this.studentForm.controls["firstName"].patchValue(data[index].firstName);
this.studentForm.controls["lastName"].patchValue(data[index].lastName);
this.studentForm.controls["location"].patchValue(data[index].location);
this.studentForm.controls["gender"].patchValue(data[index].gender);
}
// 
// this.studentForm.controls["lastName"].patchValue(f2);
// this.studentForm.controls["location"].patchValue(f3);

  //  alert(this.studentForm.controls["lastName"].value)

 funDisplay()
 {
alert(this.studentForm.controls["firstName"].value);
}

}
