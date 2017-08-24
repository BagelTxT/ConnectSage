import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Platform } from 'ionic-angular';
import { SearchPage } from '../search/search';

import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mentor-profiles',
  templateUrl: 'mentor-profiles.html',
})
export class MentorProfilePage {
  mentor: any;
  mentors: any = [];
  parameter1: any;
  userData: any;
  sendMessage: any;
  mentee: any;
  text = {
    "number": "",
    "message": "",
  };
  disable = false;

  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public mentorsService: MentorsProvider, public ModalController: ModalController, private smsVar: SMS, public menteesService: MenteesProvider) {
    platform.ready().then(() => {
    });
    this.mentor = this.navParams.data;
    this.menteesService.getMentees().then((data) => {
      this.mentee = data[0];
      if(this.mentee.pendingMentors.length > 0){
        for (let pending of this.mentee.pendingMentors){
          console.log(pending)
          if(pending.pic == this.mentor.pic){
            this.disable = true;
            break
          }
        }
      }
    });
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage);
  }

  sendRequest() {
    this.disable = true;
    this.menteesService.pushMentor(this.mentor);
    var msg = "Your request to connect with " + this.mentor.first_name + ' ' + this.mentor.last_name + " has been sent.";
    let alert = this.alertCtrl.create({
      title: 'Request Sent',
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

  acceptRequest() {
    this.mentorsService.updatePendingMentee(this.mentor._id, '598172c2f36d2839ce8b9d1f');
  }

  sendSMS() {
    this.sendMessage = 'Hi ' + this.mentor.first_name + ' my name is';
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
    }
    this.smsVar.send(this.mentor.phone_number, this.sendMessage, options)
      .then(() => {
        
      }, () => {
        
      });
  }

}
