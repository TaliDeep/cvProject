import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changecolorOfMail();
    this.changecolorOfNumber();
    this.changecolorOfAddress();
  }

  private changecolorOfMail () {
    var first = document.getElementById('description-mail');
    var sec = document.getElementsByClassName('fa')[0] as HTMLElement;
    if (sec != null) {
      first.onmouseover = () => {
        sec.style.color = '#2196F3';  
      }
      first.onmouseleave = () => {
        sec.style.color = 'white';  
      }
    }
  }

  private changecolorOfNumber () {
    var first = document.getElementById('description-number');
    var sec = document.getElementsByClassName('fa')[1] as HTMLElement;
    if (sec != null) {
      first.onmouseover = () => {
        sec.style.color = '#2196F3';  
      }
      first.onmouseleave = () => {
        sec.style.color = 'white';  
      }
    }
  }

  private changecolorOfAddress () {
    var first = document.getElementById('description-address');
    var sec = document.getElementsByClassName('fa')[2] as HTMLElement;
    if (sec != null) {
      first.onmouseover = () => {
        sec.style.color = '#2196F3';  
      }
      first.onmouseleave = () => {
        sec.style.color = 'white';  
      }
    }
  }
}
