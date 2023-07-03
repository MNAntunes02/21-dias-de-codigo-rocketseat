import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hellowworld',
  templateUrl: './hellowworld.component.html',
  styleUrls: ['./hellowworld.component.css']
})
export class HellowworldComponent implements OnInit , AfterViewInit{

  @ViewChild('hello') hello!: ElementRef<HTMLParagraphElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    gsap.to(this.hello.nativeElement, {duration: 3, text: "Hello World!", ease: "none"});
  }

}
