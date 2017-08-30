import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Nav, NavParams, Platform, MenuClose, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';
import { Storage } from '@ionic/storage';
import { UserDataProvider } from '../providers/user-data/user-data';

import { MentorRequestsPage } from'../pages/mentor-requests/mentor-requests';
import { MenteeRequestsPage } from'../pages/mentee-requests/mentee-requests';
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login';
import { MenteesProvider } from '../providers/mentees/mentees';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl
  rootPage:any = LoginPage;
  mentorName: any;
  user: any;
  firstEntry: boolean;

  constructor(private ngZone:NgZone, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public mentorsService: MentorsProvider, public userService: MenteesProvider,  private storage: Storage) {
    storage.get('user').then((val) => {
      this.user = val;
      console.log(this.user);
    });

    storage.get('user')


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.hideSplashScreen(splashScreen);

    });
    this.firstEntry = true;
  }

  print(){
    console.log("good")
    console.log(this.user);
  }

  ionViewDidEnter(){
    console.log("DID ENTER");
    this.storage.get('user').then((val) => {
      this.user = val;
      console.log(this.user);
    });
  }
  setRoot() {
    this.storage.set('user', null);
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
    this.user = null;
  }

  openRequestPage(){
    this.navCtrl.push(MenteeRequestsPage);
  }

  openEditPage(){
    this.navCtrl.push(EditPage);
  }

  updateUser(){
    if(this.firstEntry){
    console.log("User has been updated!");
    this.ngZone.run(()=>{
      this.storage.get('user').then((val) => {


        this.user = val;
        console.log(this.user);
      });
    })
  }
  }

  deleteUser(){
    this.user = null;
  }

  hideSplashScreen(splashScreen) {
    if (splashScreen) {
    setTimeout(() => {
    splashScreen.hide();
    }, 100);
    }
  }

}
