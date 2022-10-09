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
    section.addEventListener('mousemove', (event)=>{
      if (window.innerWidth >= 1000) {
        let nbImg = Math.round(event.clientX / window.innerWidth * 100 / 2 + 1);
        bgContainer.style.backgroundImage = `url("../assets/landing/${nbImg}.png")`
      }
      else {
        bgContainer.style.backgroundImage = `url("../assets/car.gif")`;
      }
    })
  }

}
