import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  url = "https://localhost:5001/api/Test/SendEmail";
  constructor(private client:HttpClient){}

    test (){
    let name = document.querySelector("#name") as HTMLInputElement;
      if(!name.value)
        return;
      const model = {
        RecipientEmail: "mehmetbdm@outlook.fr",
        RecipientFirstName: "test",
        Link: "test"
      }
      this.client.post(this.url, model).subscribe((data:any)=>{
        console.log(data);
        alert(data.desc);
      })
    }

  ngOnInit(): void {}

}
