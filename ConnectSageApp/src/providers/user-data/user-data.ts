import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class UserDataProvider {
  userData: any;
  constructor(public http: Http, public storage: Storage) {
    console.log('Hello UserDataProvider Provider');
  }

  login(profile) {
    //this.storage.set('userData', profile);
    this.userData = profile;
  }

  getInfo() {
    //return this.storage.get('userData');
    return this.userData;
  }

  logout(profile) {
    this.userData = null;
    //this.storage.remove('userData');
  }

}
