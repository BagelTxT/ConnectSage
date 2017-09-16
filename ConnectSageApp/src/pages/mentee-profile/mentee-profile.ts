import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mentee-profile',
  templateUrl: 'mentee-profile.html',
})
export class MenteeProfilePage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenteeProfilePage');
  }

}
