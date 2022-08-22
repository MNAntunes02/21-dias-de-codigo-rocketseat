import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-animated',
  templateUrl: './button-animated.component.html',
  styleUrls: ['./button-animated.component.css']
})
export class ButtonAnimatedComponent implements OnInit {
  
  arr: any = []; 

  @ViewChild('btstar') box! : ElementRef<HTMLInputElement>;
  @ViewChild('bgstar') bgstar! : ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      let aux = 1;
      while (aux < 2 || aux > 15){
        aux = Math.floor(Math.random() * 100);
      }
      this.arr[i] = aux;
    }
    console.log(this.arr)
  }

  estrelarBg(){
    this.box.nativeElement.checked ? 
      this.bgstar.nativeElement.setAttribute('class','flex') 
      : this.bgstar.nativeElement.setAttribute('class','hidden');  
  }


}
