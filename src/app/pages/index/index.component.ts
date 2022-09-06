import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('selectWeek') selectWeek!: ElementRef<HTMLSelectElement>;
  week = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(HeaderComponent.arguments)
    
    // console.log(this.selectWeek.nativeElement.value);
  }

  changeWeek(){
    // this.week = this.selectWeek.nativeElement.value;
  }


}
