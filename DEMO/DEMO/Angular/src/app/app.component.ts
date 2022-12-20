import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { MobileService } from './mobile.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private ms:MobileService,private Http:HttpClient){

  }

  mobiles=null;
  
  output!: any;
  

getData(){
this.ms.fetchMobiles().subscribe((x)=>{this.output=x});
}
  formHeader ="Add mobile";
  mobileName ="";
  price!:any;
  ram!:any;
  storage!:any;
  showForm= false;
  id= null;

  ngOnInit(): void {
      this.getMobiles() ;
      this.getData(); 
  }

  getMobiles(){
    this.ms.fetchMobiles().subscribe(
      (data: any)=>{
        this.mobiles = data

      },
      (error)=>{
        console.log("error")
      }
    )  
  }

  deleteMobile(id: any){
    console.log(53,id)
    this.ms.deleteMobile(id).subscribe(
      (res)=>{

        this.getMobiles()

      }
    )
  }

  openForm(data: any){
    this.clearForm();
    this.showForm = true;
    if(data){
      this.mobileName = data.name;
      this.price = data.price;
      this.ram = data.ram;
      this.storage = data.storage;
      this.id =data.id;
      this.formHeader = "Edit Mobile"
    }
    else{
      this.id =null;
      this.formHeader ="Add Mobile"

    }
  }

  closeForm(){
    this.showForm = false;
    this.clearForm()
  }

  clearForm(){
    this.mobileName ="null";
    this.price = "null";
    this.ram = null;
    this.storage = null

  }

  saveMobile(){

    this.showForm =false;

    let  body = {
      name:this.mobileName,
      price:this.price,
      ram:this.ram,
      storage:this.storage
    }

    this.ms.putMobile(body).subscribe({
      next: (res)=>{
        console.log(res)
        this.getMobiles()
        // this.output = res;
    },
    error: (err) =>{
      console.log(err)
    }



    // if(this.id){
    //   body['id'] =this.id;
    //   this.ms.putMobile(body).subscribe(
    //     (res)=>{
    //       this.getMobiles()
    //     },
        
    //   )
    // }

    // else{
    //   this.ms.postMobile(body).subscribe(
    //     (res)=>{
    //       this.getMobiles()
    //     },
    //   )
    // }

  })
  
}


}







