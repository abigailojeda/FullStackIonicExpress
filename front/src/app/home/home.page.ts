import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title:string='first idea';
  public description:string='this is the first idea';

  constructor(private router:Router) {}

  showIdeas(){
   this.router.navigateByUrl("/ideas")
  }
}
