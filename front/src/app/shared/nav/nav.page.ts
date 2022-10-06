import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  public logo:string='./assets/shapes.svg'
  constructor() { }

  ngOnInit() {
  }

}
