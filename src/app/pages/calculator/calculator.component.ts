import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  // @ViewChild('minhadiv') minhadiv! : ElementRef;
  @ViewChild('neon') neon! : ElementRef;
  @ViewChildren('gridButtons') gridButtons!: QueryList<ElementRef>;

  previous:string = "";
  current:string = "";
  op:string = ""

  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {

    console.log(this.gridButtons);

  }

  returnValue(button: any){
    
    let x:number;
    let y:number;
    console.log(button)

    if(button > -1 && button < 10 || button == '.'){
      if(button == 0 || button == '.'){
        //não ter mais de uma vírgula no número
        if(button == '.'){
          this.current.includes('.') ? "" : this.current += button;
        }
        //não escrever 0 a esquerda
        if (button == 0) {
          this.current == "" ? this.current = "" : this.current += button;
        } 
      }else{
        //casos gerais
        this.current = this.current + button;
      }
    }else{
      if(this.previous != ""){

        if(button == "="){

          let result: number = 0;
          let x = +this.previous;
          let y = +this.current;

          switch (this.op) {
            case "+":
                result = x + y;
              break;
            case "-":
                result = x + y;
              break;
            case "/":
                result = x + y;
              break;
            case "*":
                result = x + y;
              break;
            case "%":
                result = x % y;
                break;
            case "ce":
                this.current = "";
                return;
                break;    
            default:

              break;
          }
                
          this.current = result.toString();
          this.previous = "";
          this.op = "";
          return  
        }
      }else{

        if (button == "ce") {
          this.current = "";
          return
        }
        this.previous = this.current;
        this.op = button;
        this.current = "";
      }
    }
  }

  ligarCalc(){ 

    this.current = "";
    this.previous = "";
    this.op = "";

    this.neon.nativeElement.setAttribute('class','text-white bg-gray-900 p-6 rounded-3xl shadow-calculator animate-neon duration-300')
  }  
}
