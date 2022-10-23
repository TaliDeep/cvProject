import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private showTopBar: any = true;

  constructor() { }

  ngOnInit(): void {
    this.showTopBar = window.innerWidth;
    console.log(this.showTopBar);
    
  }

}
