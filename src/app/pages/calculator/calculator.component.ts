import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  @ViewChild('minhadiv') minhadiv! : ElementRef;
  @ViewChild('neon') neon! : ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ligarCalc(){ 
    this.neon.nativeElement.setAttribute('class','text-white bg-gray-900 p-8 rounded-3xl shadow-calculator animate-neon duration-300')
  }  
}

// buttons: any = [];

// @ViewChild('btoff') btoff! : ElementRef<HTMLButtonElement>;
// @ViewChild('bton') btOn! : ElementRef<HTMLButtonElement>;




// this.buttons = this.meubutton.nativeElement.querySelectorAll('button');

// this.buttons.array.forEach((element: any) => {
//     element.addEventListener("click", (e:any) => {
//       console.log(e);
//     })
// });

    // this.buttons = this.meubutton.nativeElement.querySelectorAll('button');