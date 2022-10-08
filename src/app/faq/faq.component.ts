import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements AfterViewInit {

  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    const questions = this.elementRef.nativeElement.querySelectorAll(".question__container");
    for (const question of questions) {
      question.addEventListener('click',()=>{

        for (const question2 of questions) {
          question2.children[0].children[0].style.color = "#fff";
          question2.children[1].style.display = "none";
          question2.children[0].children[1].children[0].style.transform = "rotate3d(0, 0, 0, 180deg)";
          question2.children[0].children[1].children[0].style.color = "#fff";
        }
        question.children[0].children[0].style.color = "#D12727";
        question.children[1].style.display = "flex";
        question.children[0].children[1].children[0].style.transform = "rotate3d(0, 0, 1, 180deg)";
        question.children[0].children[1].children[0].style.color = "#D12727";
      })
    }
  }

}
