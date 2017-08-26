import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';
import { MentorRequestsPage } from '../mentor-requests/mentor-requests';

import { MentorsProvider } from '../../providers/mentors/mentors';
// import { MenteesProvider } from '../../providers/mentees/mentees';
import { ConnectSageProvider } from '../../providers/connect-sage-api/connect-sage-api';
// import { AuthService } from '../../providers/auth-service';

//IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  loading: Loading;
  registerCredentials = {
    first_name: '',
    last_name: '',
    hobbies:'',
    username: '',
    password: '',
    phone_number: '',
    job_position: '',
    education: '',
    dream_career: '',
    age: '',
    bio: '',
    path: ''
  };
  activeButton: any;
  role: string;
  paths: any;
  path: string;
  constructor(public navCtrl: NavController, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public mentorService: MentorsProvider, public connectSageProvider: ConnectSageProvider) {
    this.connectSageProvider.getMajors().then((data)=>{
      this.paths=data;
    });
  }

  signUp() {
    console.log(this.registerCredentials)
    if (this.role == "Mentee") {
      this.connectSageProvider.createMentee(this.registerCredentials);
      this.navCtrl.setRoot(MajorsPage)
  }else {
    this.registerCredentials.path = this.path;
    this.connectSageProvider.createMentor(this.registerCredentials);
     this.navCtrl.setRoot(MentorRequestsPage);
  }
  }
}
