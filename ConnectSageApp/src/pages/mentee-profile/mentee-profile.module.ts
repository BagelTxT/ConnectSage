import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenteeProfilePage } from './mentee-profile';

@NgModule({
  declarations: [
    MenteeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MenteeProfilePage),
  ],
  exports: [
    MenteeProfilePage
  ]
})
export class MenteeProfilePageModule {}
