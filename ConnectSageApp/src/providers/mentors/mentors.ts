import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MentorsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MentorsProvider {
	data: any;
  constructor(public http: Http) {
    console.log('Hello MentorsProvider Provider');
    this.data = null;
  }

  getMentors(){
  	if (this.data){
  		return Promise.resolve(this.data);
  	}
  	return new Promise(resolve => {
  		this.http.get('assets/data.json')
  			.map(res => res.json())
  			.subscribe(data => {
  				this.data = data;
  				resolve(this.data);
  			});
  	});
  }

  createMentor(mentor){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	this.http.post('https://corvids-coachcopy.herokuapp.com/api/mentors', JSON.stringify(mentor), {headers: headers})
  		.subscribe(res => {
  			console.log(res.json());
  		});
  }

	updatePendingMentee(mentorID, menteeID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

		let updateInfo = {
			mentorID: mentorID,
			menteeID: menteeID
		};

    this.http.post('https://corvids-coachcopy.herokuapp.com/api/acceptMentee', JSON.stringify(updateInfo), {headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

	deletePendingMentee(mentorID, menteeID) {
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
