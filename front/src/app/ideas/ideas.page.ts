import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage implements OnInit {

  public ideas:any = [];
  constructor(private ideaService:IdeaService) { }

  ngOnInit() {
    this.getAllIdeas();
  }

  getAllIdeas(){
    this.ideaService.getAllIdeas().subscribe(response=>{
      this.ideas = response;
    })
  }

}
