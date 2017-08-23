import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentorListPage } from './mentor-list';

@NgModule({
  declarations: [
    MentorListPage,
  ],
  imports: [
    IonicPageModule.forChild(MentorListPage),
  ],
  exports: [
    MentorListPage
  ]
})
export class MentorListPageModule {}
