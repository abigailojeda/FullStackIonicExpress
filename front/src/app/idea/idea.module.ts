import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IdeaPageRoutingModule } from './idea-routing.module';

import { IdeaPage } from './idea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IdeaPage]
})
export class IdeaPageModule {}
