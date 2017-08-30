import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { MentorRequestsPage } from '../mentor-requests/mentor-requests';
import { SignUpPage } from '../signup/signup';
import { Storage } from '@ionic/storage';

import { ConnectSageProvider } from '../../providers/connect-sage-api/connect-sage-api';

//IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mentors: any;
  mentees: any;
  loading: Loading;
  user: any;
  registerCredentials = { username: 'Alexander_Watley', password: 'g00gle13' };

  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController
    , public connectSageProvider: ConnectSageProvider, private storage: Storage) {
      // let user;
      // storage.get('user').then((val) => {
      //   user = val;
      //   if(user != null){
      //     this.registerCredentials == user;
      //     this.login();
      //   }
      // });


    this.connectSageProvider.getMentors().then((data) => {
      this.mentors = data;
    });
    this.connectSageProvider.getMentees().then((data) => {
      this.mentees = data;
    });
   }

  public createAccount() {
    this.nav.push(SignUpPage);
  }

  public login() {
    for(let mentor of this.mentors){
      if(mentor.username === this.registerCredentials.username && mentor.password === this.registerCredentials.password) {
        this.storage.set('user', mentor);
        this.storage.get('user').then((val) => {
          console.log(val);
        });
        this.user = mentor;
        this.nav.setRoot(MentorRequestsPage, this.user);
        break;
      }
    }
    for(let mentee of this.mentees){
      if(mentee.username === this.registerCredentials.username && mentee.password === this.registerCredentials.password) {
        this.storage.set('user', mentee);
        this.storage.get('user').then((val) => {
          console.log(val);
        });
        this.user = mentee;
        this.nav.setRoot(MajorsPage, this.user);

        break;
      }
    }

  }
}
