import {Component, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    const navbarLinks = this.elementRef.nativeElement.querySelectorAll('nav a');
    for (const link of navbarLinks) {
      link.addEventListener('click', ()=>{
        for (const allLinks of navbarLinks) {
          allLinks.style.borderBottom = 'none';
          allLinks.style.color = '#fff';
        }
        link.style.borderBottom = '2px solid #D12727';
        link.style.color = '#D12727';
      });
    }
  }
}
