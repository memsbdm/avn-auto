import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const section = document.querySelector('section') as HTMLElement;
    const bgContainer = document.querySelector('.container__right') as HTMLElement;

    for(let i=1; i<51; i++){
      setTimeout(()=>{
        bgContainer.style.backgroundImage = `url("../assets/landing/${i}.png")`
      },i*20)
    }

    section.addEventListener('mousemove', (event)=>{
      if (window.innerWidth >= 1000) {
        let nbImg = Math.round(Math.round(event.clientX / window.innerWidth * 100 / 2 + 1)/2);
        bgContainer.style.backgroundImage = `url("../assets/landing/${nbImg}.png")`
      }
      else {
        bgContainer.style.backgroundImage = `url("../assets/car.gif")`;
      }
    })
  }

}
