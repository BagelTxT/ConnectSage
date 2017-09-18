webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        selector: 'page-search',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <button ion-item *ngFor="let item of items"(click)="itemSelected(item)">\n    {{ item }}\n    </button>\n</ion-list> \n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_list_mentor_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(109);
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
            _this.splitMajors = [];
            for (var i = 0; i < _this.majors.length; i += 2) {
                var tempArray = [];
                tempArray.push(_this.majors[i]);
                if (i + 1 == _this.majors.length) {
                    _this.splitMajors.push(tempArray);
                    break;
                }
                tempArray.push(_this.majors[i + 1]);
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
        selector: 'page-majors',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/majors/majors.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Career Paths</ion-title>\n\n    <!-- <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true">\n      <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-grid>\n\n    <ion-row *ngFor="let majorList of splitMajors" >\n      <ion-col *ngFor="let major of majorList" col-6><img src = "{{major.image}}" (click)="openPage(major.major)" align="middle">\n      <h2 ALIGN=CENTER style="font-size:18px;">{{major.major}}</h2>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/majors/majors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MajorsPage);

//# sourceMappingURL=majors.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
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

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentee_profile_mentee_profile__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentees_mentees__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
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
    function MentorRequestsPage(alertCtrl, navCtrl, navParams, mentorsService, ModalController, menteesService, provider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.menteesService = menteesService;
        this.provider = provider;
        this.pendingMentees = [];
        this.pMentCopy = [];
        this.acceptedMentees = [];
        this.aMentCopy = [];
        this.user = this.navParams.data;
        this.loadMentees();
    }
    MentorRequestsPage.prototype.ionViewDidLoad = function () {
    };
    MentorRequestsPage.prototype.loadMentees = function () {
        var _this = this;
        this.provider.getConnections().then(function (data) {
            _this.pendingMentees = [];
            _this.connections = data;
            for (var _i = 0, _a = _this.connections; _i < _a.length; _i++) {
                var connection = _a[_i];
                if (connection.mentor_id == _this.user._id) {
                    if (connection.accepted) {
                        _this.aMentCopy.push(connection.mentee_id);
                    }
                    else {
                        _this.pMentCopy.push(connection.mentee_id);
                    }
                }
            }
            _this.provider.getMentees().then(function (data) {
                _this.mentees = data;
                for (var _i = 0, _a = _this.mentees; _i < _a.length; _i++) {
                    var mentee = _a[_i];
                    for (var _b = 0, _c = _this.aMentCopy; _b < _c.length; _b++) {
                        var menteeId = _c[_b];
                        if (mentee._id == menteeId) {
                            _this.acceptedMentees.push(mentee);
                        }
                    }
                    for (var _d = 0, _e = _this.pMentCopy; _d < _e.length; _d++) {
                        var menteeId = _e[_d];
                        if (mentee._id == menteeId) {
                            _this.pendingMentees.push(mentee);
                        }
                    }
                }
            });
        });
    };
    MentorRequestsPage.prototype.loadAcceptedMentees = function () {
        var _this = this;
        this.provider.getConnections().then(function (data) {
            _this.acceptedMentees = [];
            _this.aMentCopy = [];
            _this.connections = data;
            for (var _i = 0, _a = _this.connections; _i < _a.length; _i++) {
                var connection = _a[_i];
                if (connection.mentor_id == _this.user._id) {
                    if (connection.accepted) {
                        _this.aMentCopy.push(connection.mentee_id);
                    }
                }
            }
            _this.provider.getMentees().then(function (data) {
                _this.mentees = data;
                for (var _i = 0, _a = _this.mentees; _i < _a.length; _i++) {
                    var mentee = _a[_i];
                    for (var _b = 0, _c = _this.aMentCopy; _b < _c.length; _b++) {
                        var menteeId = _c[_b];
                        if (mentee._id == menteeId) {
                            _this.acceptedMentees.push(mentee);
                        }
                    }
                }
            });
        });
    };
    MentorRequestsPage.prototype.deleteMentorRequest = function (mentee) {
        console.log("hi");
        var mentorId = this.user._id;
        var menteeId = mentee._id;
        for (var _i = 0, _a = this.connections; _i < _a.length; _i++) {
            var connection = _a[_i];
            console.log("looping");
            if (connection.mentor_id == mentorId && connection.mentee_id == menteeId) {
                console.log("Deleting");
                this.provider.deleteConnection(connection._id);
                break;
            }
            else {
                console.log(connection.mentor_id + "   " + mentorId);
                console.log(connection.mentee_id + "   " + menteeId);
            }
        }
        for (var i = 0; i < this.pendingMentees.length; i++) {
            if (this.pendingMentees[i]._id === mentee._id) {
                this.pendingMentees.splice(i, 1);
            }
        }
    };
    MentorRequestsPage.prototype.acceptMentee = function (mentee) {
        var _this = this;
        console.log('accepting');
        var mentorId = this.user._id;
        var menteeId = mentee._id;
        for (var _i = 0, _a = this.connections; _i < _a.length; _i++) {
            var connection = _a[_i];
            console.log("looping");
            if (connection.mentor_id == mentorId && connection.mentee_id == menteeId) {
                console.log("accepting");
                this.provider.acceptConnection(connection._id).then(function (data) {
                    _this.loadAcceptedMentees();
                });
                break;
            }
            else {
                console.log(connection.mentor_id + "   " + mentorId);
                console.log(connection.mentee_id + "   " + menteeId);
            }
        }
        for (var i = 0; i < this.pendingMentees.length; i++) {
            if (this.pendingMentees[i]._id === mentee._id) {
                this.pendingMentees.splice(i, 1);
            }
        }
    };
    MentorRequestsPage.prototype.openMenteeProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mentee_profile_mentee_profile__["a" /* MenteeProfilePage */], mentor);
    };
    return MentorRequestsPage;
}());
MentorRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentor-requests',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-requests/mentor-requests.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Pending</ion-item-divider>\n    <ion-item  *ngFor="let pending of pendingMentees" (click)="openMenteeProfiles(pending)">{{pending.first_name}} {{pending.last_name}}<img class="adder" (click)="acceptMentee(pending)" src = "assets/images/greenPlus.png" align="left">\n      <img class="deleter"  src = "assets/images/redX.png" (click)="deleteMentorRequest(pending)" align="right">\n    </ion-item>\n\n    <ion-item-divider color="light">Accepted</ion-item-divider>\n    <ion-item *ngFor="let accepted of acceptedMentees" (click)="openMenteeProfiles(accepted)">{{accepted.first_name}} {{accepted.last_name}}<ion-icon name="text" item-end></ion-icon></ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-requests/mentor-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MentorRequestsPage);

//# sourceMappingURL=mentor-requests.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteeRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
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
    function MenteeRequestsPage(_ngZone, alertCtrl, navCtrl, navParams, menteesService, ModalController, provider) {
        var _this = this;
        this._ngZone = _ngZone;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menteesService = menteesService;
        this.ModalController = ModalController;
        this.provider = provider;
        this.pendingMentors = [];
        this.pMentCopy = [];
        this.acceptedMentors = [];
        this.aMentCopy = [];
        this.provider.getConnections().then(function (data) {
            _this.mentee = _this.navParams.data;
            _this.connections = data;
            // console.log(this.connections[0]);
            var acceptedMentorIds = [];
            var pendingMentorIds = [];
            for (var i = 0; i < _this.connections.length; i++) {
                if (_this.connections[i].mentee_id == _this.mentee._id) {
                    if (_this.connections[i].accepted) {
                        acceptedMentorIds.push(_this.connections[i].mentor_id);
                    }
                    else {
                        pendingMentorIds.push(_this.connections[i].mentor_id);
                    }
                }
            }
            _this.provider.getMentors().then(function (data) {
                _this.mentors = data;
                for (var _i = 0, _a = _this.mentors; _i < _a.length; _i++) {
                    var mentor = _a[_i];
                    for (var _b = 0, acceptedMentorIds_1 = acceptedMentorIds; _b < acceptedMentorIds_1.length; _b++) {
                        var acceptedMentorId = acceptedMentorIds_1[_b];
                        if (acceptedMentorId == mentor._id) {
                            _this.acceptedMentors.push(mentor);
                        }
                    }
                    for (var _c = 0, pendingMentorIds_1 = pendingMentorIds; _c < pendingMentorIds_1.length; _c++) {
                        var pendingMentorId = pendingMentorIds_1[_c];
                        if (pendingMentorId == mentor._id) {
                            _this.pendingMentors.push(mentor);
                        }
                    }
                }
            });
        });
    }
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
        var mentorId = mentor._id;
        var menteeId = this.mentee._id;
        for (var _i = 0, _a = this.connections; _i < _a.length; _i++) {
            var connection = _a[_i];
            console.log("looping");
            if (connection.mentor_id == mentorId && connection.mentee_id == menteeId) {
                console.log("Deleting");
                this.provider.deleteConnection(connection._id);
                break;
            }
            else {
                console.log(connection.mentor_id + "   " + mentorId);
                console.log(connection.mentee_id + "   " + menteeId);
            }
        }
        for (var i = 0; i < this.pendingMentors.length; i++) {
            if (this.pendingMentors[i]._id === mentor._id) {
                this.pendingMentors.splice(i, 1);
            }
        }
    };
    MenteeRequestsPage.prototype.openMentorProfiles = function (mentor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */], mentor);
    };
    return MenteeRequestsPage;
}());
MenteeRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentee-requests',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentee-requests/mentee-requests.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mentor Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light" class="title-request">Pending</ion-item-divider>\n\n    <ion-item *ngFor="let pending of pendingMentors" (click)="openMentorProfiles(pending)">{{pending.first_name}} {{pending.last_name}}\n      <img class="deleter" (click)="deleteMentorRequest(pending)" src="assets/images/redX.png" align="right">\n    </ion-item>\n\n    <ion-item-divider color="light" class="title-request">Accepted</ion-item-divider>\n\n    <ion-item *ngFor="let accepted of acceptedMentors">{{accepted.first_name}} {{accepted.last_name}}\n      <ion-icon name="text" item-end></ion-icon>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentee-requests/mentee-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MenteeRequestsPage);

//# sourceMappingURL=mentee-requests.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
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
    function EditPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.data = this.navParams.data;
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/edit/edit.html"*/'<!-- View Profile Page -->\n<ion-header>\n\n  <ion-navbar color="primary" (Load)="enableBody()">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title>{{data.first_name}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<img class = "user1" [src] = "data.pic">\n\n<p><b>Age:</b> {{data.age}}</p>\n<p><b>Education:</b> {{data.education}}</p>\n<p><b>Dream Job:</b> {{data.dream_career}}</p>\n<p><b>Bio:</b> {{data.bio}}</p>\n\n  <ion-row>\n     <ion-col width-50 style="text-align: center">\n  <button center ion-button>Save Changes</button>\n     </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__majors_majors__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//IonicPage()
var LoginPage = (function () {
    function LoginPage(nav, alertCtrl, loadingCtrl, connectSageProvider, storage) {
        var _this = this;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.connectSageProvider = connectSageProvider;
        this.storage = storage;
        this.registerCredentials = { username: 'Alexander_Watley', password: 'g00gle13' };
        storage.set('user', null);
        this.connectSageProvider.getMentors().then(function (data) {
            _this.mentors = data;
        });
        this.connectSageProvider.getMentees().then(function (data) {
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
                this.storage.set('user', mentor);
                this.storage.get('user').then(function (val) {
                    console.log(val);
                });
                this.user = mentor;
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__["a" /* MentorRequestsPage */], this.user);
                break;
            }
        }
        for (var _b = 0, _c = this.mentees; _b < _c.length; _b++) {
            var mentee = _c[_b];
            if (mentee.username === this.registerCredentials.username && mentee.password === this.registerCredentials.password) {
                this.storage.set('user', mentee);
                this.storage.get('user').then(function (val) {
                    console.log(val);
                });
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/images/productLogo.png">\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="Username" [(ngModel)]="registerCredentials.username" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid" (click) = "login()">Login</button>\n          <!-- <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> -->\n        </ion-col>\n      </ion-row>\n      \n    </form>\n    <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n    \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mentor_profiles_mentor_profiles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
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
        selector: 'page-mentor-list',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-list/mentor-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{path}}</ion-title>\n      </ion-navbar>\n\n    </ion-header>\n\n\n<ion-content padding>\n    <div *ngFor="let mentor of mentors">\n        <ion-card class="cardcolor" (click)="openMentorProfiles(mentor)" *ngIf="(mentor.path == path)">\n          <ion-card-content>\n            <ion-grid>\n              <ion-row class="row">\n                <ion-col col-4>\n                    <img [src]="mentor.pic" class="mentor-pic">\n                </ion-col>\n                <ion-col col-8>\n                    <h2 class="mentor-list">{{mentor.first_name}} {{mentor.last_name}}</h2>\n                    <p >{{mentor.major}} </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n          </ion-card>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-list/mentor-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], MentorListPage);

//# sourceMappingURL=mentor-list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteeProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenteeProfilePage = (function () {
    function MenteeProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = this.navParams.data;
    }
    MenteeProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenteeProfilePage');
    };
    return MenteeProfilePage;
}());
MenteeProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentee-profile',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentee-profile/mentee-profile.html"*/'<!-- View Profile Page -->\n<ion-header>\n\n  <ion-navbar color="primary" (Load)="enableBody()">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title>{{data.first_name}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<img class = "user1" [src] = "data.pic">\n\n<p><b>Age:</b> {{data.age}}</p>\n<p><b>Education:</b> {{data.education}}</p>\n<p><b>Dream Job:</b> {{data.dream_career}}</p>\n<p><b>Bio:</b> {{data.bio}}</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentee-profile/mentee-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MenteeProfilePage);

//# sourceMappingURL=mentee-profile.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__majors_majors__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MenteesProvider } from '../../providers/mentees/mentees';

// import { AuthService } from '../../providers/auth-service';
//IonicPage()
var SignUpPage = (function () {
    function SignUpPage(navCtrl, nav, alertCtrl, loadingCtrl, mentorService, connectSageProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mentorService = mentorService;
        this.connectSageProvider = connectSageProvider;
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
            bio: '',
            path: ''
        };
        this.connectSageProvider.getMajors().then(function (data) {
            _this.paths = data;
        });
    }
    SignUpPage.prototype.signUp = function () {
        console.log(this.registerCredentials);
        if (this.role == "Mentee") {
            this.connectSageProvider.createMentee(this.registerCredentials);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__majors_majors__["a" /* MajorsPage */]);
        }
        else {
            this.registerCredentials.path = this.path;
            this.connectSageProvider.createMentor(this.registerCredentials);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mentor_requests_mentor_requests__["a" /* MentorRequestsPage */]);
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/signup/signup.html"*/'<!-- <ion-header>\n  <ion-navbar color="primary"></ion-navbar>\n</ion-header> -->\n<ion-content class="signup-content" padding>\n  <ion-navbar transparent></ion-navbar>\n  <div class="signup-box">\n    <form #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="First Name:" name="First Name" [(ngModel)]="registerCredentials.first_name" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name:" name="Last Name" [(ngModel)]="registerCredentials.last_name" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Phone Number:" name="Phone Number" [(ngModel)]="registerCredentials.phone_number" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Age:" name="Age" [(ngModel)]="registerCredentials.age" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Username:" name="Username" [(ngModel)]="registerCredentials.username" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Password:" name="Password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n            <ion-input type="text" placeholder="Hobbies:" name="Hobbies" [(ngModel)]="registerCredentials.hobbies" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Dream Career:" name="Dream Career" [(ngModel)]="registerCredentials.dream_career" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Current Job Position:" name="Current Job Position" [(ngModel)]="registerCredentials.job_position"\n                required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Education:" name="Education" [(ngModel)]="registerCredentials.education" required></ion-input>\n            </ion-item>\n            <br>\n            <ion-item>\n              <ion-input type="text" placeholder="Bio:" name="Bio" [(ngModel)]="registerCredentials.bio" required></ion-input>\n            </ion-item>\n            <br>\n            <div *ngIf="role == \'Mentor\'">\n            <ion-item >\n              <ion-input type="text" placeholder="Major:" name="Major" [(ngModel)]="registerCredentials.major" required></ion-input>\n            </ion-item>\n            <br />\n          </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="role == \'Mentor\'">\n      <ion-item>\n        <ion-label>Path</ion-label>\n        <ion-select [(ngModel)]="path" name="path">\n          <ion-option *ngFor="let path of paths" value={{path.major}}>{{path.major}}</ion-option>\n\n        </ion-select>\n      </ion-item>\n      <br />\n    </div>\n      <ion-item>\n        <ion-label>Role</ion-label>\n        <ion-select [(ngModel)]="role" name="role">\n          <ion-option value="Mentee">Mentee</ion-option>\n          <ion-option value="Mentor">Mentor</ion-option>\n\n        </ion-select>\n      </ion-item>\n      <ion-row>\n        <ion-col class="signup-col" col align="center">\n            <button color (click)="signUp()" ion-button color="light" large outline class="submit-btn" type="submit" [disabled]="!registerForm.form.valid">Sign Up</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]])
], SignUpPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectSageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    ConnectSageProvider.prototype.getMajors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // this.http.get('http://localhost:3000/api/majors')
            _this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/majors')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ConnectSageProvider.prototype.getMentors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // this.http.get('http://localhost:3000/api/mentors')
            _this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentors')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ConnectSageProvider.prototype.getMentees = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // this.http.get('http://localhost:3000/api/mentees')
            _this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentees')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ConnectSageProvider.prototype.getConnections = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ConnectSageProvider.prototype.createMentee = function (mentee) {
        console.log("creating mentee");
        var menteeData = JSON.stringify({
            "age": mentee.age,
            "bio": mentee.bio,
            "dream_career": mentee.dream_career,
            "education": mentee.education,
            "first_name": mentee.first_name,
            "last_name": mentee.last_name,
            "password": mentee.password,
            "phone_number": mentee.phone_number,
            "username": mentee.username,
            "pic": "assets/profiles/unknown.jpg"
        });
        this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentees', menteeData, { headers: this.headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConnectSageProvider.prototype.createMentor = function (mentor) {
        console.log("creating mentee");
        var mentorData = JSON.stringify({
            "age": mentor.age,
            "bio": mentor.bio,
            "dream_career": mentor.dream_career,
            "education": mentor.education,
            "first_name": mentor.first_name,
            "job_position": mentor.job_position,
            "last_name": mentor.last_name,
            "password": mentor.password,
            "major": mentor.major,
            "phone_number": mentor.phone_number,
            "username": mentor.username,
            "pic": "assets/profiles/unknown.jpg",
            "path": mentor.path
        });
        this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/mentors', mentorData, { headers: this.headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConnectSageProvider.prototype.makeConnection = function (menteeId, mentorId) {
        console.log("creating connection");
        var mentorData = JSON.stringify({
            "mentor_id": mentorId,
            "mentee_id": menteeId
        });
        this.http.post('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections', mentorData, { headers: this.headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConnectSageProvider.prototype.deleteConnection = function (connectionId) {
        console.log("trying");
        this.http.delete('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections/' + connectionId).subscribe(function (res) {
            console.log(res.json());
        });
    };
    ConnectSageProvider.prototype.acceptConnection = function (connectionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put('http://ec2-18-220-10-98.us-east-2.compute.amazonaws.com:3000/api/connections/' + connectionId, { headers: _this.headers }, null)
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mentors_mentors__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mentor_profiles_mentor_profiles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mentee_profile_mentee_profile__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_majors_majors__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mentor_requests_mentor_requests__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mentee_requests_mentee_requests__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_request_request__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mentor_list_mentor_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_mentees_mentees__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_data_user_data__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mentors_mentors__["a" /* MentorsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mentee_profile_mentee_profile__["a" /* MenteeProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mentor_requests_mentor_requests__["a" /* MentorRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_mentor_list_mentor_list__["a" /* MentorListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mentors_mentors__["a" /* MentorsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_majors_majors__["a" /* MajorsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mentor_profiles_mentor_profiles__["a" /* MentorProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mentee_profile_mentee_profile__["a" /* MenteeProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mentor_requests_mentor_requests__["a" /* MentorRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_mentor_list_mentor_list__["a" /* MentorListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_mentors_mentors__["a" /* MentorsProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_mentees_mentees__["a" /* MenteesProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mentee_requests_mentee_requests__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_edit_edit__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_mentees_mentees__ = __webpack_require__(43);
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
    function MyApp(ngZone, platform, statusBar, splashScreen, mentorsService, userService, storage) {
        var _this = this;
        this.ngZone = ngZone;
        this.mentorsService = mentorsService;
        this.userService = userService;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.hideSplashScreen(splashScreen);
        });
        this.firstEntry = true;
    }
    MyApp.prototype.print = function () {
        console.log("good");
        console.log(this.user);
    };
    MyApp.prototype.setRoot = function () {
        this.storage.set('user', null);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
        this.user = null;
    };
    MyApp.prototype.openRequestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_mentee_requests_mentee_requests__["a" /* MenteeRequestsPage */], this.user);
    };
    MyApp.prototype.openEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_edit_edit__["a" /* EditPage */], this.user);
    };
    MyApp.prototype.updateUser = function () {
        var _this = this;
        if (this.firstEntry) {
            console.log("User has been updated!");
            this.ngZone.run(function () {
                _this.storage.get('user').then(function (val) {
                    _this.user = val;
                    console.log(_this.user);
                });
            });
        }
    };
    MyApp.prototype.deleteUser = function () {
        this.user = null;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/app/app.html"*/'<ion-menu [content]="content" (ionOpen)="updateUser()">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding *ngIf="user != null">\n   <h2 ALIGN=CENTER style="font-size:25px;">{{user.first_name}}</h2>\n  <img class = "user1-menu" [src]="user.pic">\n\n        <button ion-button (click)="openRequestPage()" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        Mentors\n      </button>\n      <br>\n      <button ion-button (click)="setRoot();" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        Sign out\n      </button>\n        <br>\n      <button ion-button (click)="openEditPage()" class="sidemenubutton" align="CENTER" style="display: block; margin: auto;" menuClose >\n        View Profile\n      </button>\n\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content ></ion-nav>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mentor_profiles_mentor_profiles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(109);
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
        selector: 'page-mentors',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentors/mentors.html"*/'<ion-header>\n<ion-navbar color="primary">\n      \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Biology Mentors</ion-title>\n    <ion-buttons end>\n      <button (click)="openSearchPage()" ion-button clear="true"> <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let mentor of mentors" class="cardcolor">\n    <ion-card-content>\n  <!--For this, we push the whole mentor object instead of just an idea-->\n  <img  src="assets/images/user1.svg" (click)="openMentorProfiles(mentor)" align="left">\n  <br>\n  <!-- <img class="greenos" src = "assets/images/greeno.png" align="right"> -->\n  <h2 ALIGN=CENTER style="font-size:25px;">{{mentor.first_name}} {{mentor.last_name}}</h2>\n  <p ALIGN=CENTER style="font-size:20px;">{{mentor.major}} </p>\n    </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentors/mentors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */]])
], MentorsPage);

//# sourceMappingURL=mentors.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mentor_profiles_mentor_profiles__ = __webpack_require__(44);
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
        selector: 'page-request',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/request/request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mentors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Pending</ion-item-divider>\n    <ion-item>Jennifer Marston</ion-item>\n    <ion-item>Jordan Martinez</ion-item>\n    <ion-item>Michael Furey</ion-item>\n    <ion-item-divider color="light">Accepted</ion-item-divider>\n    <ion-item (click)="openMentorProfiles(mentor)">Frederick Casmarias\n    <ion-icon name="text" item-end></ion-icon></ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/request/request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], RequestPage);

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Tab 1" tabIcon="home"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mentors_mentors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mentees_mentees__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SMS } from '@ionic-native/sms';







var MentorProfilePage = (function () {
    function MentorProfilePage(provider, alertCtrl, navCtrl, navParams, platform, mentorsService, ModalController, menteesService, storage) {
        var _this = this;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.mentorsService = mentorsService;
        this.ModalController = ModalController;
        this.menteesService = menteesService;
        this.storage = storage;
        this.mentors = [];
        this.text = {
            "number": "",
            "message": "",
        };
        this.disable = false;
        platform.ready().then(function () {
            _this.mentor = _this.navParams.data;
            _this.storage.get('user').then(function (val) {
                _this.mentee = val;
                _this.provider.getConnections().then(function (data) {
                    var connections;
                    connections = data;
                    for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
                        var connection = connections_1[_i];
                        if (connection.mentee_id == _this.mentee._id && connection.mentor_id == _this.mentor._id) {
                            _this.disable = true;
                        }
                        else {
                            console.log(connection.mentor_id && _this.mentor._id);
                        }
                    }
                });
            });
        });
    }
    MentorProfilePage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    MentorProfilePage.prototype.sendRequest = function () {
        this.disable = true;
        // this.menteesService.pushMentor(this.mentor);
        this.provider.makeConnection(this.mentee._id, this.mentor._id);
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
    return MentorProfilePage;
}());
MentorProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentor-profiles',template:/*ion-inline-start:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-profiles/mentor-profiles.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <img class="user1"[src]="mentor.pic">\n  <br>\n  <h1 style="font-size:24px;">{{mentor.first_name}} {{mentor.last_name}}</h1>\n  <p style="font-size:24px;">Education: {{mentor.education}} {{mentor.major}} </p>\n  <p style="font-size:24px;">Age: {{mentor.age}}\n    <p style="font-size:20px;">About: {{mentor.bio}}</p>\n    <ion-row>\n      <ion-col width-50 style="text-align: center">\n        <button center ion-button (click)="sendRequest()" [disabled] ="disable"> Request Connection</button>\n      </ion-col>\n    </ion-row>\n    <!-- <button ion-button (click)="openMap()">See Location</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/vanessagutierrez/ConnectSage/ConnectSageApp/src/pages/mentor-profiles/mentor-profiles.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_connect_sage_api_connect_sage_api__["a" /* ConnectSageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_mentors_mentors__["a" /* MentorsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_mentees_mentees__["a" /* MenteesProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MentorProfilePage);

//# sourceMappingURL=mentor-profiles.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map