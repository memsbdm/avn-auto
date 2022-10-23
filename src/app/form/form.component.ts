import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  phone:any
  email:any
  car:any
  message:any
  name:any
  url = "https://avn-auto-email.azurewebsites.net/api/Test/SendEmail";
  // url = "https://localhost:44339/api/Test/SendEmail";
  constructor(private client:HttpClient){}

    submitForm(){
    if(!this.name){
      return;
    }

     const model = {
       RecipientEmail: "mehmetbdm@outlook.fr",
       Name: this.name,
       Phone: this.phone,
       Mail:this.email,
       Infos: this.car,
       Msg: this.message,
      }
      this.client.post(this.url, model).subscribe((data:any)=>{
        console.log(data);
        alert(data.desc);
      })
    }

  ngOnInit(): void {}

}
