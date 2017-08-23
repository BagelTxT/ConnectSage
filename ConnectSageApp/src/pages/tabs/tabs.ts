import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MajorsPage } from '../majors/majors';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = 'Tab1Page';
	tab2Root = 'Tab2Page';
	myIndex: number;

  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.myIndex = navParams.data.tabIndex || 0;
  }
}
