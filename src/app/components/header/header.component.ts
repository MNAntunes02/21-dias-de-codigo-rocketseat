import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  // public userId = {};

  // constructor( private route: ActivatedRoute ) {
  //     this.route.params.subscribe(params => this.userId = params);
      
  // }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => this.userId = params);
  //   console.log(this.userId);
  // }

  @ViewChild('selectWeek') selectWeek!: ElementRef<HTMLSelectElement>;

  week:string = '';


  constructor() {}

  ngOnInit(): void{
   
  }


  changeWeek(){
    this.week = this.selectWeek.nativeElement.value;
  }

  getWeek(): string{
    return this.week;
  }


}
