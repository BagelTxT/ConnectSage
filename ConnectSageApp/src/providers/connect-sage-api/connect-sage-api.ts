import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectSageProvider {
	
  constructor(public http: Http) {
  }

  getMajors(){
    return new Promise(resolve => {
          		this.http.get('http://localhost:8080/api/majors')
          			.map(res => res.json())
          			.subscribe(data => {
          				resolve(data);
          			});
          	});
  }

  getMentors(){
    return new Promise(resolve => {
        this.http.get('http://localhost:8080/api/mentors')
            .map(res => res.json())
            .subscribe(data => {
                resolve(data);
            });
    });
}


}
