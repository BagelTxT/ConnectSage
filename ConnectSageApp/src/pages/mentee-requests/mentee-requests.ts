import { Component,NgZone } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
import {ConnectSageProvider} from '../../providers/connect-sage-api/connect-sage-api';
//This page processes requests OF MENTEES
@Component({
  selector: 'page-mentee-requests',
  templateUrl: 'mentee-requests.html',
})
export class MenteeRequestsPage {
    mentors: any;
    connections: any;
    pendingMentors: any = [];
    pMentCopy: any = [];
    acceptedMentors: any = [];
    aMentCopy: any = [];
    userData: any;
    mentee: any;

    constructor(public _ngZone: NgZone,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
      public menteesService: MenteesProvider, public ModalController: ModalController, private provider: ConnectSageProvider) {

        this.provider.getConnections().then((data) =>{
          this.mentee = this.navParams.data;
          this.connections = data;
          // console.log(this.connections[0]);

          let acceptedMentorIds = [];
          let pendingMentorIds = [];

          for(let i = 0; i < this.connections.length; i++){
            if(this.connections[i].mentee_id == this.mentee._id){
              if(this.connections[i].accepted){
                  acceptedMentorIds.push(this.connections[i].mentor_id);
              } else{
                  pendingMentorIds.push(this.connections[i].mentor_id);
              }
            }
          }

          this.provider.getMentors().then((data) =>{
            this.mentors = data;
            for(let mentor of this.mentors){
              for(let acceptedMentorId of acceptedMentorIds){
                if(acceptedMentorId == mentor._id){
                  this.acceptedMentors.push(mentor);
                }
              }

              for(let pendingMentorId of pendingMentorIds){
                if(pendingMentorId == mentor._id){
                  this.pendingMentors.push(mentor);
                }
              }
            }
          })


        })

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
    let mentorId = mentor._id;
    let menteeId = this.mentee._id;

    for(let connection of this.connections){
      console.log("looping");
      if(connection.mentor_id == mentorId && connection.mentee_id == menteeId){
        console.log("Deleting");
        this.provider.deleteConnection(connection._id);
        break;
      } else{
        console.log(connection.mentor_id + "   " + mentorId);
        console.log(connection.mentee_id + "   " + menteeId)
      }
    }

    for (let i = 0; i < this.pendingMentors.length; i++) {
       if (this.pendingMentors[i]._id === mentor._id){
         this.pendingMentors.splice(i, 1);
       }
     }
    }

    openMentorProfiles(mentor) {
      this.navCtrl.push(MentorProfilePage, mentor);
    }
  }
