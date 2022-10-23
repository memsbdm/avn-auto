import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const today = new Date().getDay();
    const firstDay = document.querySelector('.hours .left span:nth-of-type(1)') as HTMLElement;
    const secondDay = document.querySelector('.hours .left span:nth-of-type(2)') as HTMLElement;
    const thirdDay = document.querySelector('.hours .left span:nth-of-type(3)') as HTMLElement;
    const fourthDay = document.querySelector('.hours .left span:nth-of-type(4)') as HTMLElement;

    const firstHour = document.querySelector('.hours .right span:nth-of-type(1)') as HTMLElement;
    const secondHour = document.querySelector('.hours .right span:nth-of-type(2)') as HTMLElement;
    const thirdHour = document.querySelector('.hours .right span:nth-of-type(3)') as HTMLElement;
    const fourthHour = document.querySelector('.hours .right span:nth-of-type(4)') as HTMLElement;

    switch (today){
      case 0:
        fourthDay.style.color = '#D12727';
        fourthHour.style.color = '#D12727';
        break;
      case 5:
        secondDay.style.color = '#D12727';
        secondHour.style.color = '#D12727';
        break;
      case 6:
        thirdDay.style.color = '#D12727';
        thirdHour.style.color = '#D12727';
        break;
      default:
        firstDay.style.color = '#D12727';
        firstHour.style.color = '#D12727';
        break;
    }

  }

}
