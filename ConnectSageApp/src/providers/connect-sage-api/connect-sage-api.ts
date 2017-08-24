import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectSageProvider {
	
  constructor(public http: Http) {
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


}
