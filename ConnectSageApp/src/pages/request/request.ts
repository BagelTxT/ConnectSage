import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
/**
 * Generated class for the RequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
mentors: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mentorsService: MentorsProvider, public ModalController: ModalController) {
  }

  ionViewDidLoad(){
    this.mentorsService.getMentors().then((data) => {
      console.log(data);
      this.mentors = data;
    });
  }
  openMentorProfiles(mentor) {
    this.navCtrl.push(MentorProfilePage, mentor);
  }
}
