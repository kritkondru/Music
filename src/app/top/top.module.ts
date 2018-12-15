import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopPage } from './top.page';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {
    path: '',
    component: TopPage
  },
  {
    path: ':id',
    component: SongsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopPage, SongsComponent]
})
export class TopPageModule {}
