import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicStorageModule } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';
import { MentorsPage } from '../pages/mentors/mentors';
import { MentorProfilePage } from '../pages/mentor-profiles/mentor-profiles';
import { MajorsPage } from '../pages/majors/majors';
import { SearchPage } from'../pages/search/search';
import { SignUpPage } from '../pages/signup/signup';
import { MentorRequestsPage } from '../pages/mentor-requests/mentor-requests';
import { MenteeRequestsPage } from '../pages/mentee-requests/mentee-requests';
import { EditPage } from'../pages/edit/edit';
import { RequestPage }from '../pages/request/request';
import { MentorListPage } from '../pages/mentor-list/mentor-list'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';
import { MenteesProvider } from '../providers/mentees/mentees';
import { UserDataProvider } from '../providers/user-data/user-data';
import {ConnectSageProvider} from '../providers/connect-sage-api/connect-sage-api' 

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MentorsPage,
    MajorsPage,
    SearchPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    RequestPage,
    MentorRequestsPage,
    MenteeRequestsPage,
    MentorListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MentorsPage,
    MajorsPage,
    MajorsPage,
    SearchPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    RequestPage,
    MentorRequestsPage,
    MenteeRequestsPage,
    MentorListPage,
    TabsPage
  ],
  providers: [
    SMS,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MentorsProvider,
    MenteesProvider,
    UserDataProvider,
    ConnectSageProvider
  ]
})
export class AppModule {}
