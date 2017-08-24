import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConnectSageProvider} from '../../providers/connect-sage-api/connect-sage-api';
/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  data:any;
  loaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ConnectSageProvider) {
    this.loaded = false;
    this.provider.getMentees().then((data) => {
      console.log(data);
      this.data = data[0];
      console.log(this.data.first_name)
      this.loaded = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }


}
