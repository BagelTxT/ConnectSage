import { Component,NgZone } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
//This page processes requests OF MENTEES
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-mentee-requests',
  templateUrl: 'mentee-requests.html',
})
export class MenteeRequestsPage {
    mentors: any;
    pendingMentors: any = [];
    pMentCopy: any = [];
    acceptedMentors: any = [];
    aMentCopy: any = [];
    userData: any;
    mentee: any;
    title_1 = false;
    title_2 = false;

    constructor(public _ngZone: NgZone,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
      public menteesService: MenteesProvider, public ModalController: ModalController) {

      this.menteesService.getMentees().then((data) => {
          this.mentee = data[0];

          if(this.mentee.pendingMentors > 0){
            this.title_1 = true;
          }
          if(this.mentee.acceptedMentors > 0){
            this.title_2 = true;
          }
          for( let mentor of this.mentee.pendingMentors){
            if(mentor.pic == "assets/profiles/mentors/Roberto_Sanchez.jpg"){
              setTimeout(() => { 
                let alert = this.alertCtrl.create({
                  title: 'Request Accepted',
                  subTitle: "Roberto Sanchez has accepted your request!",
                  buttons: ['Ok']
                });
                alert.present();
                this.swapMentor()
              }, 4000);
            }
          }

        });



    }

    ionViewDidLoad() {

    }
    swapMentor(){
      this._ngZone.run(()=>
        {
          var index = this.functiontofindIndexByKeyValue(this.mentee.pendingMentors, "pic", "assets/profiles/mentors/Roberto_Sanchez.jpg")
          console.log(index);
          if (index > -1) {
            this.mentee.pendingMentors.splice(index, 1);
          }
          console.log(this.mentee.pendingMentors);

          this.mentee.acceptedMentors.push({
            first_name: "Roberto",
            last_name: "Sanchez",
            pic: "assets/profiles/mentors/Roberto_Sanchez.jpg"
          })
        })

    }
    removeMentorrequest(mentor){
      
    }

    functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {
      
     for (var i = 0; i < arraytosearch.length; i++) {
      
     if (arraytosearch[i][key] == valuetosearch) {
     return i;
     }
     }
     return null;
     }
    deleteMentorRequest(mentor) {
      this.menteesService.deletePendingMentor("598172c2f36d2839ce8b9d1f", mentor._id);
      for (let i = 0; i < this.pendingMentors.length; i++) {
        if (this.pendingMentors[i]._id === mentor._id)
          this.pMentCopy.splice(i, 1);
      }
      this.pendingMentors = this.pMentCopy;
    }

    openMentorProfiles(mentor) {
      this.navCtrl.push(MentorProfilePage, mentor);
    }
  }

