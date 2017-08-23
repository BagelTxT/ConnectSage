import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
import { ConnectSageProvider } from '../../providers/connect-sage-api/connect-sage-api'

@Component({
  selector: 'page-mentor-list',
  templateUrl: 'mentor-list.html',
})
export class MentorListPage {
  path: String;
  mentors: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectSageProvider) {
    this.path = this.navParams.data
    this.provider.getMentors().then((data)=>{
      this.mentors = data;
      let tempMentor = []
      for(let i = 0; i < this.mentors.length; i++){
        if(this.mentors[i].path == this.path){
          tempMentor.push(this.mentors[i])
        }
      } 
      this.mentors = tempMentor;
    }
    )
  }

  openMentorProfiles(mentor) {
    this.navCtrl.push(MentorProfilePage, mentor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MentorListPage');
  }

}
