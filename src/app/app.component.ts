import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//Pages
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase'; // Big change from '* as firebase'.

export const firebaseConfig = {
    apiKey: "AIzaSyCSr0DvUfhvAwoPcgDnAjtShVPokvQrOoE",
    authDomain: "agilemoves-fb09d.firebaseapp.com",
    databaseURL: "https://agilemoves-fb09d.firebaseio.com",
    storageBucket: "agilemoves-fb09d.appspot.com"
};

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = LoginPage;
  

  constructor(platform: Platform) {
    firebase.initializeApp(firebaseConfig);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
