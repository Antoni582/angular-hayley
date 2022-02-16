import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navToggle:boolean = false;
  dataVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log("this button works");
    if (!this.dataVisible) {
      this.dataVisible = true;
      this.navToggle = true;
    } else {
      this.dataVisible = false;
      this.navToggle = false;
    }
  }

  handleMenuItemClick() {
    if (this.dataVisible) {
      this.dataVisible = false;
      this.navToggle = false;
    }
  }

}
