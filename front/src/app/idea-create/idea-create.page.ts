import { Component, OnInit, NgZone  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { IdeaService } from '../services/idea.service';
@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.page.html',
  styleUrls: ['./idea-create.page.scss'],
})
export class IdeaCreatePage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private IdeaService : IdeaService,
    private router: Router,
    private zone: NgZone
  ) { }
  ideaForm : FormGroup;
  
  ngOnInit() {
    this.ideaForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  onSubmit() {
    if (!this.ideaForm.valid) {
      return false;
    } else {
      this.IdeaService.createIdea(this.ideaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.ideaForm.reset();
            this.router.navigate(['/ideas']);
          })
        });
    }
}
}
