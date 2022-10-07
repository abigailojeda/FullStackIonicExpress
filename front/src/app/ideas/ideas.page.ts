import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IdeaService } from '../services/idea.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage implements AfterViewInit {
  public ideas: any = [];
  constructor(private ideaService: IdeaService) {}

  ngAfterViewInit(): void {
    this.getAllIdeas();
  }

  ionViewWillEnter() {
    this.getAllIdeas();
  }

  getAllIdeas() {
    this.ideaService.getAllIdeas().subscribe((response) => {
      this.ideas = response;
    });
  }

  removeIdea(id) {
    if (window.confirm('Are you sure')) {
      this.ideaService.deleteIdea(id).subscribe(() => {
        console.log('¡Idea eliminada!');
        this.getAllIdeas();
      });
    }
  }
}
