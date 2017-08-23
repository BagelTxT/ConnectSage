import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-mentor-requests',
  templateUrl: 'mentor-requests.html',
})
export class MentorRequestsPage {
  mentees: any;
  pendingMentees: any = [];
  pMentCopy: any = [];
  acceptedMentees: any = [];
  aMentCopy: any = [];
  userData: any;
  
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
    public mentorsService: MentorsProvider, public ModalController: ModalController, public menteesService: MenteesProvider) {
      this.menteesService.getMentees().then((data) => {
        console.log("requests");
        this.mentees = data;


        setTimeout(() => { 
          let alert = this.alertCtrl.create({
            title: 'Request Accepted',
            subTitle: "Roberto Sanchez has accepted your request!",
            buttons: ['Ok']
          });
          alert.present();
        }, 100);
    });
  }

  ionViewDidLoad() {


    // for (let mentee of this.mentees) {
    //   console.log(mentee.username);
    //   if (mentee.pendingMentors.includes(this.userData._id)) {
    //     this.pendingMentees.push(mentee);
    //     this.pMentCopy.push(mentee);
    //   } else if (mentee.acceptedMentors.includes(this.userData._id)) {
    //     this.acceptedMentees.push(mentee);
    //     this.aMentCopy.push(mentee);
    //   }
    // }


  }

  deleteMentorRequest(mentee) {
    this.mentorsService.deletePendingMentee(this.userData._id, mentee._id);
    for (let i = 0; i < this.pendingMentees.length; i++) {
      if (this.pendingMentees[i]._id === mentee._id)
        this.pMentCopy.splice(i, 1);
    }
    this.pendingMentees = this.pMentCopy;
  }

  acceptMentee(mentee) {
    this.mentorsService.updatePendingMentee(this.userData._id, mentee._id);
    this.acceptedMentees.push(mentee);
    this.aMentCopy.push(mentee);
  }

  openMenteeProfiles(mentor) {
    this.navCtrl.push(MentorProfilePage, mentor);
  }
}
