webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_list_mentor_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MajorsPage = (function () {
    function MajorsPage(navCtrl, navParams, menu, userService, provider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.provider = provider;
        menu.enable(true);
        this.provider.getMajors().then(function (data) {
            _this.majors = data;
            console.log(_this.majors[0]);
            var i = 0;
            _this.splitMajors = [];
            for (var i_1 = 0; i_1 < _this.majors.length; i_1 += 2) {
                var tempArray = [];
                tempArray.push(_this.majors[i_1]);
                if (i_1 + 1 == _this.majors.length) {
                    _this.splitMajors.push(tempArray);
                    break;
                }
                tempArray.push(_this.majors[i_1 + 1]);
                _this.splitMajors.push(tempArray);
            }
        });
    }
    MajorsPage.prototype.openPage = function (major) {
        console.log(major);
        // this.navCtrl.push(MentorListPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mentor_list_mentor_list__["a" /* MentorListPage */], major);
    };
    return MajorsPage;
}());
MajorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-majors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/majors/majors.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Career Paths</ion-title>\n\n    <!-- <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true">\n      <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-grid>\n\n    <ion-row *ngFor="let majorList of splitMajors" >\n      <ion-col *ngFor="let major of majorList" col-6><img src = "{{major.image}}" (click)="openPage(major.major)" align="middle">\n      <h2 ALIGN=CENTER style="font-size:18px;">{{major.major}}</h2>\n      </ion-col>\n    </ion-row>\n\n    \n  </ion-grid>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/majors/majors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MajorsPage);

//# sourceMappingURL=majors.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectSageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectSageProvider = (function () {
    function ConnectSageProvider(http) {
        this.http = http;
    }
    ConnectSageProvider.prototype.getMajors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:8080/api/majors')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ConnectSageProvider.prototype.getMentors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:8080/api/mentors')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return ConnectSageProvider;
}());
ConnectSageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ConnectSageProvider);

//# sourceMappingURL=connect-sage-api.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentees_mentees__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MentorRequestsPage = (function () {
    function MentorRequestsPage(alertCtrl, navCtrl, navParams, mentorsService, ModalController, menteesService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.menteesService = menteesService;
        this.pendingMentees = [];
        this.pMentCopy = [];
        this.acceptedMentees = [];
        this.aMentCopy = [];
        this.menteesService.getMentees().then(function (data) {
            console.log("requests");
            _this.mentees = data;
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Request Accepted',
                    subTitle: "Roberto Sanchez has accepted your request!",
                    buttons: ['Ok']
                });
                alert.present();
            }, 100);
        });
    }
    MentorRequestsPage.prototype.ionViewDidLoad = function () {
        // for (let mentee of this.mentees) {
        //   console.log(mentee.username);
        //   if (mentee.pendingMentors.includes(this.userData._id)) {
        //     this.pendingMentees.push(mentee);
        //     this.pMentCopy.push(mentee);
        //   } else if (mentee.acceptedMentors.includes(this.userData._id)) {
        //     this.acceptedMentees.push(mentee);
        //     this.aMentCopy.push(mentee);
        //   }
        // }
    };
    MentorRequestsPage.prototype.deleteMentorRequest = function (mentee) {
        this.mentorsService.deletePendingMentee(this.userData._id, mentee._id);
        for (var i = 0; i < this.pendingMentees.length; i++) {
            if (this.pendingMentees[i]._id === mentee._id)
                this.pMentCopy.splice(i, 1);
        }
        this.pendingMentees = this.pMentCopy;
    };
    MentorRequestsPage.prototype.acceptMentee = function (mentee) {
        this.mentorsService.updatePendingMentee(this.userData._id, mentee._id);
        this.acceptedMentees.push(mentee);
        this.aMentCopy.push(mentee);
    };
    MentorRequestsPage.prototype.openMenteeProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    return MentorRequestsPage;
}());
MentorRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentor-requests',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-requests/mentor-requests.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Pending</ion-item-divider>\n    \n    <ion-item  *ngFor="let pending of pendingMentees" (click)="openMenteeProfiles(pending)">{{pending.first_name}} {{pending.last_name}}<img class="adder" (click)="acceptMentee(pending)" src = "assets/images/greenPlus.png" align="left">\n      <img class="deleter"  src = "assets/images/redX.png" align="right">\n    </ion-item>\n\n    <ion-item-divider color="light">Accepted</ion-item-divider>\n    <ion-item *ngFor="let accepted of acceptedMentees" (click)="openMenteeProfiles(accepted)">{{accepted.first_name}} {{accepted.last_name}}<ion-icon name="text" item-end></ion-icon></ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-requests/mentor-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_mentees_mentees__["a" /* MenteesProvider */]])
], MentorRequestsPage);

//# sourceMappingURL=mentor-requests.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MentorsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MentorsProvider = (function () {
    function MentorsProvider(http) {
        this.http = http;
        console.log('Hello MentorsProvider Provider');
        this.data = null;
    }
    MentorsProvider.prototype.getMentors = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    MentorsProvider.prototype.createMentor = function (mentor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/mentors', JSON.stringify(mentor), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    MentorsProvider.prototype.updatePendingMentee = function (mentorID, menteeID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var updateInfo = {
            mentorID: mentorID,
            menteeID: menteeID
        };
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/acceptMentee', JSON.stringify(updateInfo), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    MentorsProvider.prototype.deletePendingMentee = function (mentorID, menteeID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var updateInfo = {
            mentorID: mentorID,
            menteeID: menteeID
        };
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/deletePendingMentee', JSON.stringify(updateInfo), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return MentorsProvider;
}());
MentorsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MentorsProvider);

//# sourceMappingURL=mentors.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mentees_mentees__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MentorProfilePage = (function () {
    function MentorProfilePage(alertCtrl, navCtrl, navParams, platform, mentorsService, ModalController, smsVar, menteesService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.smsVar = smsVar;
        this.menteesService = menteesService;
        this.mentors = [];
        this.text = {
            "number": "",
            "message": "",
        };
        this.disable = false;
        platform.ready().then(function () {
        });
        this.mentor = this.navParams.data;
        this.menteesService.getMentees().then(function (data) {
            _this.mentee = data[0];
            if (_this.mentee.pendingMentors.length > 0) {
                for (var _i = 0, _a = _this.mentee.pendingMentors; _i < _a.length; _i++) {
                    var pending = _a[_i];
                    console.log(pending);
                    if (pending.pic == _this.mentor.pic) {
                        _this.disable = true;
                        break;
                    }
                }
            }
        });
    }
    MentorProfilePage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    MentorProfilePage.prototype.sendRequest = function () {
        this.disable = true;
        this.menteesService.pushMentor(this.mentor);
        var msg = "Your request to connect with " + this.mentor.first_name + ' ' + this.mentor.last_name + " has been sent.";
        var alert = this.alertCtrl.create({
            title: 'Request Sent',
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    MentorProfilePage.prototype.acceptRequest = function () {
        this.mentorsService.updatePendingMentee(this.mentor._id, '598172c2f36d2839ce8b9d1f');
    };
    MentorProfilePage.prototype.sendSMS = function () {
        this.sendMessage = 'Hi ' + this.mentor.first_name + ' my name is';
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
                //intent: '' // Sends sms without opening default sms app
            }
        };
        this.smsVar.send(this.mentor.phone_number, this.sendMessage, options)
            .then(function () {
        }, function () {
        });
    };
    return MentorProfilePage;
}());
MentorProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentor-profiles',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-profiles/mentor-profiles.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> \n      <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <img class="user1"[src]="mentor.pic">\n  <br>\n  <h1 style="font-size:24px;">{{mentor.first_name}} {{mentor.last_name}}</h1>\n  <p style="font-size:24px;">Education: {{mentor.education}} {{mentor.major}} </p>\n  <p style="font-size:24px;">Age: {{mentor.age}}\n    <p style="font-size:20px;">About: {{mentor.bio}}</p>\n    <ion-row>\n      <ion-col width-50 style="text-align: center">\n        <button center ion-button (click)="sendRequest()" [disabled] ="disable"> Request Connection</button>\n      </ion-col>\n    </ion-row>\n    <!-- <button ion-button (click)="openMap()">See Location</button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-profiles/mentor-profiles.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_5__providers_mentees_mentees__["a" /* MenteesProvider */]])
], MentorProfilePage);

//# sourceMappingURL=mentor-profiles.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteeRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//This page processes requests OF MENTEES

var MenteeRequestsPage = (function () {
    function MenteeRequestsPage(_ngZone, alertCtrl, navCtrl, navParams, menteesService, ModalController) {
        var _this = this;
        this._ngZone = _ngZone;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menteesService = menteesService;
        this.ModalController = ModalController;
        this.pendingMentors = [];
        this.pMentCopy = [];
        this.acceptedMentors = [];
        this.aMentCopy = [];
        this.title_1 = false;
        this.title_2 = false;
        this.menteesService.getMentees().then(function (data) {
            _this.mentee = data[0];
            if (_this.mentee.pendingMentors > 0) {
                _this.title_1 = true;
            }
            if (_this.mentee.acceptedMentors > 0) {
                _this.title_2 = true;
            }
            for (var _i = 0, _a = _this.mentee.pendingMentors; _i < _a.length; _i++) {
                var mentor = _a[_i];
                if (mentor.pic == "assets/profiles/mentors/Roberto_Sanchez.jpg") {
                    setTimeout(function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Request Accepted',
                            subTitle: "Roberto Sanchez has accepted your request!",
                            buttons: ['Ok']
                        });
                        alert.present();
                        _this.swapMentor();
                    }, 4000);
                }
            }
        });
    }
    MenteeRequestsPage.prototype.ionViewDidLoad = function () {
    };
    MenteeRequestsPage.prototype.swapMentor = function () {
        var _this = this;
        this._ngZone.run(function () {
            var index = _this.functiontofindIndexByKeyValue(_this.mentee.pendingMentors, "pic", "assets/profiles/mentors/Roberto_Sanchez.jpg");
            console.log(index);
            if (index > -1) {
                _this.mentee.pendingMentors.splice(index, 1);
            }
            console.log(_this.mentee.pendingMentors);
            _this.mentee.acceptedMentors.push({
                first_name: "Roberto",
                last_name: "Sanchez",
                pic: "assets/profiles/mentors/Roberto_Sanchez.jpg"
            });
        });
    };
    MenteeRequestsPage.prototype.removeMentorrequest = function (mentor) {
    };
    MenteeRequestsPage.prototype.functiontofindIndexByKeyValue = function (arraytosearch, key, valuetosearch) {
        for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
        return null;
    };
    MenteeRequestsPage.prototype.deleteMentorRequest = function (mentor) {
        this.menteesService.deletePendingMentor("598172c2f36d2839ce8b9d1f", mentor._id);
        for (var i = 0; i < this.pendingMentors.length; i++) {
            if (this.pendingMentors[i]._id === mentor._id)
                this.pMentCopy.splice(i, 1);
        }
        this.pendingMentors = this.pMentCopy;
    };
    MenteeRequestsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    return MenteeRequestsPage;
}());
MenteeRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentee-requests',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentee-requests/mentee-requests.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mentor Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light" class="title-request">Pending</ion-item-divider>\n\n    <ion-item *ngFor="let pending of mentee.pendingMentors" (click)="openMentorProfiles(pending)">{{pending.first_name}} {{pending.last_name}}\n      <img class="deleter" (click)="deleteMentorRequest(pending)" src="assets/images/redX.png" align="right">\n    </ion-item>\n\n    <ion-item-divider color="light" class="title-request">Accepted</ion-item-divider>\n\n    <ion-item *ngFor="let accepted of mentee.acceptedMentors">{{accepted.first_name}} {{accepted.last_name}}\n      <ion-icon name="text" item-end></ion-icon>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentee-requests/mentee-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MenteeRequestsPage);

//# sourceMappingURL=mentee-requests.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(menteesService, navCtrl, navParams) {
        var _this = this;
        this.menteesService = menteesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menteesService.getMentees().then(function (data) {
            console.log(data);
            _this.data = data[0];
        });
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/edit/edit.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title>{{data.first_name}}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> \n      <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<img class = "user1" [src] = "data.pic">\n\n<!-- <ion-input style= "font-size:24px;" type="text" placeholder="Name: Jordy Martinez" name="First Name"></ion-input>\n<ion-input style= "font-size:24px;" type="text" placeholder="Education: High School Diploma(In Progress)" name="First Name"></ion-input>\n<ion-input style= "font-size:24px;" type="text" placeholder="age: 17" name="First Name"></ion-input>\n<ion-input style= "font-size:24px;" type="text" placeholder="About: born Hawthrone, California in 2001. Loves soccer and computer programming." name="First Name"></ion-input> -->\n<p><b>Age:</b> {{data.age}}</p>\n<p><b>Education:</b> {{data.education}}</p>\n<p><b>Dream Job:</b> {{data.dream_career}}</p>\n<p><b>Bio:</b> {{data.bio}}</p>\n\n  <ion-row>\n     <ion-col width-50 style="text-align: center">\n  <button center ion-button>Save Changes</button>\n     </ion-col>\n  </ion-row>\n\n  <!-- <button ion-button (click)="openMap()">See Location</button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__majors_majors__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mentees_mentees__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { AuthService } from '../../providers/auth-service';
//IonicPage()
var LoginPage = (function () {
    function LoginPage(nav, alertCtrl, loadingCtrl, mentorsService, menteesService, userService) {
        var _this = this;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mentorsService = mentorsService;
        this.menteesService = menteesService;
        this.userService = userService;
        this.registerCredentials = { username: 'Alexander_Watley', password: 'g00gle13' };
        this.mentorsService.getMentors().then(function (data) {
            _this.mentors = data;
        });
        this.menteesService.getMentees().then(function (data) {
            _this.mentees = data;
        });
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.login = function () {
        for (var _i = 0, _a = this.mentors; _i < _a.length; _i++) {
            var mentor = _a[_i];
            if (mentor.username === this.registerCredentials.username && mentor.password === this.registerCredentials.password) {
                this.userService.login(mentor);
                this.user = mentor;
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__["a" /* MentorRequestsPage */], this.user);
                break;
            }
        }
        for (var _b = 0, _c = this.mentees; _b < _c.length; _b++) {
            var mentee = _c[_b];
            if (mentee.username === this.registerCredentials.username && mentee.password === this.registerCredentials.password) {
                this.userService.login(mentee);
                this.user = mentee;
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__majors_majors__["a" /* MajorsPage */], this.user);
                break;
            }
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/images/productLogo.png">\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="Username" [(ngModel)]="registerCredentials.username" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid" (click) = "login()">Login</button>\n          <!-- <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> -->\n        </ion-col>\n      </ion-row>\n      \n    </form>\n    <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n    \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentorListPage = (function () {
    function MentorListPage(navCtrl, navParams, provider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.path = this.navParams.data;
        this.provider.getMentors().then(function (data) {
            _this.mentors = data;
            var tempMentor = [];
            for (var i = 0; i < _this.mentors.length; i++) {
                if (_this.mentors[i].path == _this.path) {
                    tempMentor.push(_this.mentors[i]);
                }
            }
            _this.mentors = tempMentor;
        });
    }
    MentorListPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    MentorListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MentorListPage');
    };
    return MentorListPage;
}());
MentorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentor-list',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-list/mentor-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n          \n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{path}}</ion-title>\n        <ion-buttons end>\n          <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n          </button>\n          </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content padding>\n    <div *ngFor="let mentor of mentors">\n        <ion-card class="cardcolor" (click)="openMentorProfiles(mentor)" *ngIf="(mentor.path == path)">\n          <ion-card-content>\n            <ion-grid>\n              <ion-row class="row">\n                <ion-col col-4>\n                    <img [src]="mentor.pic" class="mentor-pic">\n                </ion-col>\n                <ion-col col-8>\n                    <h2 class="mentor-list">{{mentor.first_name}} {{mentor.last_name}}</h2>\n                    <p >{{mentor.major}} </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n          </ion-card>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentor-list/mentor-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MentorListPage);

//# sourceMappingURL=mentor-list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__majors_majors__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mentees_mentees__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AuthService } from '../../providers/auth-service';
//IonicPage()
var SignUpPage = (function () {
    function SignUpPage(navCtrl, nav, alertCtrl, loadingCtrl, mentorService, menteeService) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mentorService = mentorService;
        this.menteeService = menteeService;
        this.registerCredentials = {
            first_name: '',
            last_name: '',
            hobbies: '',
            username: '',
            password: '',
            phone_number: '',
            job_position: '',
            education: '',
            dream_career: '',
            age: '',
            bio: ''
        };
    }
    SignUpPage.prototype.signUp = function () {
        console.log(this.registerCredentials);
        if (this.role == "Mentee") {
            this.menteeService.createMentee(this.registerCredentials);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__majors_majors__["a" /* MajorsPage */]);
        }
        else {
            this.mentorService.createMentor(this.registerCredentials);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__["a" /* MentorRequestsPage */]);
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/signup/signup.html"*/'<!-- <ion-header>\n  <ion-navbar color="primary"></ion-navbar>\n</ion-header> -->\n<ion-content class="signup-content" padding>\n  <ion-navbar transparent></ion-navbar>\n  <div class="signup-box">\n    <form #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="First Name:" name="First Name" [(ngModel)]="registerCredentials.first_name" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name:" name="Last Name" [(ngModel)]="registerCredentials.last_name" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Phone Number:" name="Phone Number" [(ngModel)]="registerCredentials.phone_number" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Age:" name="Age" [(ngModel)]="registerCredentials.age" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Username:" name="Username" [(ngModel)]="registerCredentials.username" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Password:" name="Password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n            <ion-input type="text" placeholder="Hobbies:" name="Hobbies" [(ngModel)]="registerCredentials.hobbies" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Dream Career:" name="Dream Career" [(ngModel)]="registerCredentials.dream_career" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Current Job Position:" name="Current Job Position" [(ngModel)]="registerCredentials.job_position"\n                required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Education:" name="Education" [(ngModel)]="registerCredentials.education" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Bio:" name="Bio" [(ngModel)]="registerCredentials.bio" required></ion-input>\n            </ion-item>\n            <br>\n\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-item>\n        <ion-label>Role</ion-label>\n        <ion-select [(ngModel)]="role" name="role">\n          <ion-option value="Mentee">Mentee</ion-option>\n          <ion-option value="Mentor">Mentor</ion-option>\n\n        </ion-select>\n      </ion-item>\n      <ion-row>\n        <ion-col class="signup-col" col align="center">\n            <button color (click)="signUp()" ion-button color="light" large outline class="submit-btn" type="submit" [disabled]="!registerForm.form.valid">Sign Up</button>    \n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_mentees_mentees__["a" /* MenteesProvider */]])
], SignUpPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mentors_mentors__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_engineering_mentors_engineering_mentors__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_graphics_mentors_graphics_mentors__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_math_mentors_math_mentors__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_physics_mentors_physics_mentors__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_theater_mentors_theater_mentors__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mentor_profiles_mentor_profiles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_majors_majors__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mentor_requests_mentor_requests__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_mentee_requests_mentee_requests__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_edit__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_request_request__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mentor_list_mentor_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_mentees_mentees__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_user_data_user_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mentors_mentors__["a" /* MentorsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_engineering_mentors_engineering_mentors__["a" /* EngineeringMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_math_mentors_math_mentors__["a" /* MathMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_graphics_mentors_graphics_mentors__["a" /* GraphicsMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_physics_mentors_physics_mentors__["a" /* PhysicsMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_theater_mentors_theater_mentors__["a" /* TheaterMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_mentor_requests_mentor_requests__["a" /* MentorRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_mentor_list_mentor_list__["a" /* MentorListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mentors_mentors__["a" /* MentorsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_engineering_mentors_engineering_mentors__["a" /* EngineeringMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_math_mentors_math_mentors__["a" /* MathMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_graphics_mentors_graphics_mentors__["a" /* GraphicsMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_physics_mentors_physics_mentors__["a" /* PhysicsMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_theater_mentors_theater_mentors__["a" /* TheaterMentorsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_mentor_requests_mentor_requests__["a" /* MentorRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_mentor_list_mentor_list__["a" /* MentorListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_27__providers_mentors_mentors__["a" /* MentorsProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_mentees_mentees__["a" /* MenteesProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mentee_requests_mentee_requests__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_edit__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_mentees_mentees__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, mentorsService, userService) {
        var _this = this;
        this.mentorsService = mentorsService;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.hideSplashScreen(splashScreen);
            _this.userService.getMentees().then(function (data) {
                _this.data = data[0];
            });
        });
    }
    MyApp.prototype.setRoot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
    };
    MyApp.prototype.openRequestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */]);
    };
    MyApp.prototype.openEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_edit_edit__["a" /* EditPage */]);
    };
    // signOut(){
    //   this.navCtrl.setRoot(LoginPage)
    // }
    MyApp.prototype.setUserData = function (userData) {
        console.log("This user data is: ", userData);
    };
    MyApp.prototype.hideSplashScreen = function (splashScreen) {
        if (splashScreen) {
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n   <h2 *ngIf="data" ALIGN=CENTER style="font-size:25px;">{{data.first_name}}</h2> \n  \n  <img *ngIf="data" class = "user1-menu" [src]="data.pic">\n        \n        <button ion-button (click)="openRequestPage()" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        Mentors\n      </button>\n      <br>\n      <button ion-button (click)="setRoot()" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        Sign out\n      </button>\n        <br>\n      <button ion-button (click)="openEditPage()" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        View Profile\n      </button>\n     \n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content ></ion-nav>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_mentees_mentees__["a" /* MenteesProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MenteesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MenteesProvider = (function () {
    function MenteesProvider(http) {
        this.http = http;
        this.mentee = [
            {
                "acceptedMentors": [],
                "age": 12,
                "bio": "I like to play clash of clans on my phone. A also love design; I am pretty exprienced with photoshop and figma",
                "dream_career": "Ux Designer for Tech Company",
                "education": "Currently in Highschool",
                "first_name": "Alexander",
                "last_name": "Watley",
                "password": "g00gle13",
                "pendingMentors": [],
                "phone_number": "12133009188",
                "username": "Alexander_Watley",
                "pic": "assets/profiles/mentees/Alexander_Watley.png"
            }
        ];
        console.log('Hello MenteesProvider Provider');
        this.data = null;
    }
    MenteesProvider.prototype.getMentees = function () {
        if (this.data) {
            console.log("already exists");
            return Promise.resolve(this.data);
        }
        else {
            this.data = this.mentee;
            return Promise.resolve(this.data);
        }
        // if (this.data) {
        //   return Promise.resolve(this.data);
        // }
        // return new Promise(resolve => {
        //   this.http.get('https://corvids-coachcopy.herokuapp.com/api/mentees')
        //     .map(res => res.json())
        //     .subscribe(data => {
        //       this.data = data;
        //       resolve(this.data);
        //     });
        // });
    };
    MenteesProvider.prototype.createMentee = function (mentee) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/mentees', JSON.stringify(mentee), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    MenteesProvider.prototype.pushMentor = function (mentor) {
        var data = {
            first_name: mentor.first_name,
            last_name: mentor.last_name,
            pic: mentor.pic
        };
        this.data[0].pendingMentors.push(data);
        console.log(this.data[0]);
    };
    MenteesProvider.prototype.addPendingMentor = function (menteeID, mentorID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var updateInfo = {
            menteeID: menteeID,
            mentorID: mentorID
            // mentee_username: "iamkostakis",
            // mentor_username: "mentorID"
        };
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/addPendingMentor', JSON.stringify(updateInfo), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    MenteesProvider.prototype.deletePendingMentor = function (menteeID, mentorID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var updateInfo = {
            mentorID: mentorID,
            menteeID: menteeID
        };
        this.http.post('https://corvids-coachcopy.herokuapp.com/api/deletePendingMentee', JSON.stringify(updateInfo), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return MenteesProvider;
}());
MenteesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MenteesProvider);

//# sourceMappingURL=mentees.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    SearchPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    SearchPage.prototype.initializeItems = function () {
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
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <button ion-item *ngFor="let item of items"(click)="itemSelected(item)">\n    {{ item }}\n    </button>\n</ion-list> \n</ion-content>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MentorsPage = (function () {
    function MentorsPage(navCtrl, navParams, mentorsService, ModalController, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.userService = userService;
    }
    MentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
        //this.userData = this.navParams.data;
        this.userData = this.userService.getInfo();
    };
    MentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], { param1: mentor, param2: this.userData });
    };
    MentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return MentorsPage;
}());
MentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentors/mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Biology Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/mentors/mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */]])
], MentorsPage);

//# sourceMappingURL=mentors.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EngineeringMentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EngineeringMentorsPage = (function () {
    function EngineeringMentorsPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.path = this.navParams.get("path");
    }
    EngineeringMentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            _this.mentors = data;
            console.log(_this.mentors);
        });
    };
    EngineeringMentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    EngineeringMentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return EngineeringMentorsPage;
}());
EngineeringMentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-engineering-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/engineering-mentors/engineering-mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{path}}</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let mentor of mentors">\n  <ion-card  class="cardcolor" (click)="openMentorProfiles(mentor)" *ngIf="(mentor.path == path)">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row class="row">\n          <ion-col col-4>\n              <img [src]="mentor.pic" class="mentor-pic">\n          </ion-col>\n          <ion-col col-8>\n              <h2 style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n              <p >{{mentor.major}} </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/engineering-mentors/engineering-mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], EngineeringMentorsPage);

//# sourceMappingURL=engineering-mentors.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsMentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GraphicsMentorsPage = (function () {
    function GraphicsMentorsPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
    }
    GraphicsMentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
    };
    GraphicsMentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    GraphicsMentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return GraphicsMentorsPage;
}());
GraphicsMentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-graphics-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/graphics-mentors/graphics-mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Graphics Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/graphics-mentors/graphics-mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], GraphicsMentorsPage);

//# sourceMappingURL=graphics-mentors.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathMentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MathMentorsPage = (function () {
    function MathMentorsPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
    }
    MathMentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
    };
    MathMentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    MathMentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return MathMentorsPage;
}());
MathMentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-math-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/math-mentors/math-mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Math Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/math-mentors/math-mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MathMentorsPage);

//# sourceMappingURL=math-mentors.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicsMentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhysicsMentorsPage = (function () {
    function PhysicsMentorsPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
    }
    PhysicsMentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
    };
    PhysicsMentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    PhysicsMentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return PhysicsMentorsPage;
}());
PhysicsMentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-physics-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/physics-mentors/physics-mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Physics Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/physics-mentors/physics-mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], PhysicsMentorsPage);

//# sourceMappingURL=physics-mentors.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheaterMentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheaterMentorsPage = (function () {
    function TheaterMentorsPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
    }
    TheaterMentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
    };
    TheaterMentorsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    TheaterMentorsPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    return TheaterMentorsPage;
}());
TheaterMentorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-theater-mentors',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/theater-mentors/theater-mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Theater Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/theater-mentors/theater-mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], TheaterMentorsPage);

//# sourceMappingURL=theater-mentors.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, mentorsService, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mentorsService.getMentors().then(function (data) {
            console.log(data);
            _this.mentors = data;
        });
    };
    RequestPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    return RequestPage;
}());
RequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request',template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/request/request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mentors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Pending</ion-item-divider>\n    <ion-item>Jennifer Marston</ion-item>\n    <ion-item>Jordan Martinez</ion-item>\n    <ion-item>Michael Furey</ion-item>\n    <ion-item-divider color="light">Accepted</ion-item-divider>\n    <ion-item (click)="openMentorProfiles(mentor)">Frederick Casmarias\n    <ion-icon name="text" item-end></ion-icon></ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/request/request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], RequestPage);

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'Tab1Page';
        this.tab2Root = 'Tab2Page';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Tab 1" tabIcon="home"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/txt_10/Desktop/ConnectSage/ConnectSageApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserDataProvider = (function () {
    function UserDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello UserDataProvider Provider');
    }
    UserDataProvider.prototype.login = function (profile) {
        //this.storage.set('userData', profile);
        this.userData = profile;
    };
    UserDataProvider.prototype.getInfo = function () {
        //return this.storage.get('userData');
        return this.userData;
    };
    UserDataProvider.prototype.logout = function (profile) {
        this.userData = null;
        //this.storage.remove('userData');
    };
    return UserDataProvider;
}());
UserDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserDataProvider);

//# sourceMappingURL=user-data.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map