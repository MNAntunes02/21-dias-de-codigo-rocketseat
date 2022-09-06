import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  arr: any = []; 

  @ViewChild('btstar') box! : ElementRef<HTMLInputElement>;

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


}
