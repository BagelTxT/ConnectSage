import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';

import { UserDataProvider } from '../../providers/user-data/user-data';

@Component({
  selector: 'page-mentors',
  templateUrl: 'mentors.html',
})
export class MentorsPage {
  //Variables go right underneath the class declaration
  mentors: any;
  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mentorsService: MentorsProvider, public ModalController: ModalController, public userService: UserDataProvider) {
  }

  ionViewDidLoad() {
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors = data;
    });
    //this.userData = this.navParams.data;
    this.userData = this.userService.getInfo();
  }

  openMentorProfiles(mentor) {
    this.navCtrl.push(MentorProfilePage, { param1: mentor, param2: this.userData});
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage)
  }
}
