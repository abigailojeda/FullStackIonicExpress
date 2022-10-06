import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IdeaCreatePageRoutingModule } from './idea-create-routing.module';
import { IdeaCreatePage } from './idea-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IdeaCreatePage]
})
export class IdeaCreatePageModule {}
