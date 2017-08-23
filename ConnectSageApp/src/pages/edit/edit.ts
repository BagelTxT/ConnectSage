import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenteesProvider } from '../../providers/mentees/mentees';
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
  constructor(public menteesService: MenteesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.menteesService.getMentees().then((data) => {
      console.log(data);
      this.data = data[0];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }


}
