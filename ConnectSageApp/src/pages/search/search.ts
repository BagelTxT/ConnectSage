import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeItems();
  }
itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  initializeItems() {
    this.items = [
      'Jennifer Marston',
      'Jordan Martinez',
      'Fredrick Casmarias',
      'Michael Furey',
      'Biology',
      'Engineering',
      'Math',
      'Graphics',
      'Physics',
      'Theater'
      ];

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
   } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
}
}

  


