import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IdeaService } from '../services/idea.service';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.page.html',
  styleUrls: ['./idea.page.scss'],
})
export class IdeaPage implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private IdeaService: IdeaService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ideaForm: FormGroup;
  id: any;
  public idea: any;
  public editMode: boolean = false;

  ngOnInit() {
    this.getIdea(this.id);
    this.ideaForm = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  getIdea(id) {
    this.IdeaService.getIdea(id).subscribe((data) => {
      this.idea = data;
      this.ideaForm.setValue({
        title: data['title'],
        description: data['description'],
      });
    });
  }

  onSubmit() {
    if (!this.ideaForm.valid) {
      return false;
    } else {
      this.IdeaService.updateIdea(this.id, this.ideaForm.value).subscribe(
        () => {
          this.ideaForm.reset();
          this.router.navigate(['/ideas']);
        }
      );
      this.editMode = false;
    }
  }

  editModeOn() {
    this.editMode = true;
  }
}
