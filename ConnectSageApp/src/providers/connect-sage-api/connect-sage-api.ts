import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectSageProvider {
  headers: Headers;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }



  getMajors(){
    return new Promise(resolve => {
                  // this.http.get('http://localhost:3000/api/majors')
                  this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/majors')
          			.map(res => res.json())
          			.subscribe(data => {
          				resolve(data);
          			});
          	});
  }

  getMentors(){
    return new Promise(resolve => {
        // this.http.get('http://localhost:3000/api/mentors')
        this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentors')
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            });
    });
    }

    getMentees(){
        return new Promise(resolve => {
            // this.http.get('http://localhost:3000/api/mentees')
            this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentees')
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    getConnections(){
      return new Promise(resolve => {
          this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections')
              .map(res => res.json())
              .subscribe(data => {
                  resolve(data);
              });
      });
    }

		createMentee(mentee){
			console.log("creating mentee")
			let menteeData = JSON.stringify({
					"age": mentee.age,
					"bio": mentee.bio,
					"dream_career": mentee.dream_career,
					"education": mentee.education,
					"first_name":mentee.first_name,
					"last_name":mentee.last_name,
					"password":mentee.password,
					"phone_number": mentee.phone_number,
					"username": mentee.username,
					"pic": "assets/profiles/unknown.jpg"
				});

			this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentees', menteeData,  { headers: this.headers })
			.subscribe(res => {
        console.log(res.json());
      });
		}

    createMentor(mentor){
			console.log("creating mentee");
			let mentorData = JSON.stringify({
					"age": mentor.age,
					"bio": mentor.bio,
					"dream_career": mentor.dream_career,
					"education": mentor.education,
					"first_name":mentor.first_name,
          "job_position": mentor.job_position,
					"last_name":mentor.last_name,
					"password":mentor.password,
          "major": mentor.major,
					"phone_number": mentor.phone_number,
					"username": mentor.username,
					"pic": "assets/profiles/unknown.jpg",
          "path": mentor.path
				});

			this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentors', mentorData,  { headers: this.headers })
			.subscribe(res => {
        console.log(res.json());
      });
		}

    makeConnection(menteeId, mentorId){
      console.log("creating connection");
			let mentorData = JSON.stringify({
					"mentor_id": mentorId,
					"mentee_id": menteeId
				});

			this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections', mentorData,  { headers: this.headers })
			.subscribe(res => {
        console.log(res.json());
      });
    }

    deleteConnection(connectionId){
      console.log("trying");
      this.http.delete('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections/' + connectionId).subscribe((res) => {
      console.log(res.json());
    });
    }

    acceptConnection(connectionId){    
    
    return new Promise(resolve => {

      this.http.put('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections/' + connectionId,{headers: this.headers}, null)
              .map(res => res.json())
              .subscribe(data => {
                  resolve(data);
              });
      });
    }
  }
