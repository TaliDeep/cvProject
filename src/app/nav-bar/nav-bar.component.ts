import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }
  
  public scrollToTop () {
    var element = <HTMLInputElement> document.getElementById("home");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  public scrollToAbout () {
    var element = <HTMLInputElement> document.getElementById("about");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  public scrollToSkills () {
    var element = <HTMLInputElement> document.getElementById("skills");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  public scrollToExperiences () {
    var element = <HTMLInputElement> document.getElementById("experiences");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  scroll = (): void => {
    // console.log(window.scrollY);
    if(window.scrollY === 0){
      document.body.style.setProperty('--navbar-color', "#100e17");
    }else if(window.scrollY > 0){
      document.body.style.setProperty('--navbar-color', "#202026");
    }

    if(window.scrollY >= 0 && window.scrollY <= 389) {
      var element = <HTMLInputElement> document.getElementById("home1");
      if(!element.checked) {
        element.checked = true;
      }
    }

    if(window.scrollY >= 390 && window.scrollY <= 659) {
      var element = <HTMLInputElement> document.getElementById("about1");
      if(!element.checked) {
        element.checked = true;
      }
    }
  }
}
