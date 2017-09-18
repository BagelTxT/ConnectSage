import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MentorsPage } from '../mentors/mentors';
// import { SearchPage } from '../search/search';
import {ConnectSageProvider} from '../../providers/connect-sage-api/connect-sage-api';
import { MentorListPage } from '../mentor-list/mentor-list'

import { UserDataProvider } from '../../providers/user-data/user-data';

@Component({
  selector: 'page-majors',
  templateUrl: 'majors.html',
})
export class MajorsPage {
  majors: any;
  splitMajors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController, public userService: UserDataProvider, public provider: ConnectSageProvider) {
    menu.enable(true);

   this.provider.getMajors().then((data)=>{
     this.majors=data;
      console.log(this.majors[0]);
       this.splitMajors = []
       for(let i = 0; i < this.majors.length; i+=2){
          let tempArray = [];
          tempArray.push(this.majors[i])
          if(i + 1 == this.majors.length){
            this.splitMajors.push(tempArray)
            break;
          }
          tempArray.push(this.majors[i+1])
          this.splitMajors.push(tempArray)
      }

   }
   )

}

  openPage(major){
    console.log(major)
    // this.navCtrl.push(MentorListPage)
    this.navCtrl.push(MentorListPage, major)
  }
}
