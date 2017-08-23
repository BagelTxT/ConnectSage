import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenteesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MenteesProvider {
  data: any;
  mentee = [
    {
      "acceptedMentors":[],
      "age":12,
      "bio":"I like to play clash of clans on my phone. A also love design; I am pretty exprienced with photoshop and figma",
      "dream_career":"Ux Designer for Tech Company",
      "education":"Currently in Highschool",
      "first_name":"Alexander",
      "last_name":"Watley",
      "password":"g00gle13",
      "pendingMentors":[],
      "phone_number":"12133009188",
      "username":"Alexander_Watley",
      "pic": "assets/profiles/mentees/Alexander_Watley.png"
    }
  ]
  constructor(public http: Http) {
    console.log('Hello MenteesProvider Provider');
    this.data = null;
  }

  getMentees() {
    if(this.data){
      console.log("already exists");
      return Promise.resolve(this.data);
    }else{
      this.data = this.mentee;
      return Promise.resolve(this.data);
    }

    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    // return new Promise(resolve => {
    //   this.http.get('https://corvids-coachcopy.herokuapp.com/api/mentees')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.data = data;
    //       resolve(this.data);
    //     });
    // });
  }

  createMentee(mentee) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/mentees', JSON.stringify(mentee), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
    }
  pushMentor(mentor){
    var data = {
      first_name : mentor.first_name,
      last_name : mentor.last_name,
      pic : mentor.pic
    }
    this.data[0].pendingMentors.push(data);
    console.log(this.data[0]);
  }

    
  addPendingMentor(menteeID, mentorID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let updateInfo = {
      menteeID: menteeID,
      mentorID: mentorID
      // mentee_username: "iamkostakis",
      // mentor_username: "mentorID"
    };

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/addPendingMentor', JSON.stringify(updateInfo), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

  deletePendingMentor(menteeID, mentorID) {
		let headers = new Headers();
    headers.append('Content-Type', 'application/json');

		let updateInfo = {
			mentorID: mentorID,
			menteeID: menteeID
		};

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/deletePendingMentee', JSON.stringify(updateInfo), {headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

}
