import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MentorsProvider } from '../../providers/mentors/mentors';
import { MenteeProfilePage } from '../mentee-profile/mentee-profile';
import { MenteesProvider } from '../../providers/mentees/mentees';
import { MentorProfilePage } from '../mentor-profiles/mentor-profiles';
import { AlertController } from 'ionic-angular';
import {ConnectSageProvider} from '../../providers/connect-sage-api/connect-sage-api';

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
  user: any;
  connections: any;

  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
    public mentorsService: MentorsProvider, public ModalController: ModalController, public menteesService: MenteesProvider, private provider: ConnectSageProvider) {
      this.user = this.navParams.data;
      this.loadMentees();
      
  }

  ionViewDidLoad() {

  }

  loadMentees(){
     this.provider.getConnections().then((data)=>{
        this.pendingMentees = [];
        this.connections  = data;
        for(let connection of this.connections){
          if(connection.mentor_id == this.user._id){
            if(connection.accepted){
              this.aMentCopy.push(connection.mentee_id)
            } else{
              this.pMentCopy.push(connection.mentee_id)
            }
          }
        }

        this.provider.getMentees().then((data)=>{
          this.mentees = data;
          for(let mentee of this.mentees){
            for(let menteeId of this.aMentCopy){
              if(mentee._id == menteeId){
                this.acceptedMentees.push(mentee);
              }
            }
            for(let menteeId of this.pMentCopy){
              if(mentee._id == menteeId){
                this.pendingMentees.push(mentee);
              }
            }
          }
        });
      })
  }

  loadAcceptedMentees(){
     this.provider.getConnections().then((data)=>{
       this.acceptedMentees = [];
       this.aMentCopy = [];
        this.connections  = data;
        for(let connection of this.connections){
          if(connection.mentor_id == this.user._id){
            if(connection.accepted){
              this.aMentCopy.push(connection.mentee_id)
            }
          }
        }

        this.provider.getMentees().then((data)=>{
          this.mentees = data;
          for(let mentee of this.mentees){
            for(let menteeId of this.aMentCopy){
              if(mentee._id == menteeId){
                this.acceptedMentees.push(mentee);
              }
            }
          }
        });
      })
  }

  deleteMentorRequest(mentee) {
    console.log("hi");
    let mentorId = this.user._id;
    let menteeId = mentee._id;

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

    for (let i = 0; i < this.pendingMentees.length; i++) {
       if (this.pendingMentees[i]._id === mentee._id){
         this.pendingMentees.splice(i, 1);
       }
     }

  }

  acceptMentee(mentee) {
    console.log('accepting')
    let mentorId = this.user._id;
    let menteeId = mentee._id;

    for(let connection of this.connections){
      console.log("looping");
      if(connection.mentor_id == mentorId && connection.mentee_id == menteeId){
        console.log("accepting");
        this.provider.acceptConnection(connection._id).then((data)=>{
          this.loadAcceptedMentees();
        });
        break;
      } else{
        console.log(connection.mentor_id + "   " + mentorId);
        console.log(connection.mentee_id + "   " + menteeId);
      }
    }

    for (let i = 0; i < this.pendingMentees.length; i++) {
       if (this.pendingMentees[i]._id === mentee._id){
         this.pendingMentees.splice(i, 1);
       }
     }
    
  }

  openMenteeProfiles(mentor) {
    this.navCtrl.push(MenteeProfilePage, mentor);
  }
}
