"use strict";
(self["webpackChunkgifs_app"] = self["webpackChunkgifs_app"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _gifs_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifs/pages/home-page/home-page.component */ 6850);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ 7378);



class AppComponent {
  constructor() {
    this.title = 'gifs-app';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "d-flex"], [1, "flex-fill"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "shared-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "gifs-home-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_gifs_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifs/gifs.module */ 2879);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__.GifsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _gifs_gifs_module__WEBPACK_IMPORTED_MODULE_1__.GifsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 6781:
/*!******************************************************************!*\
  !*** ./src/app/gifs/components/card-list/card-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardListComponent: () => (/* binding */ CardListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card.component */ 9689);



function CardListComponent_gifs_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gifs-card", 2);
  }
  if (rf & 2) {
    const gif_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gif", gif_r1);
  }
}
class CardListComponent {
  constructor() {
    this.gifs = [];
  }
  static #_ = this.ɵfac = function CardListComponent_Factory(t) {
    return new (t || CardListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardListComponent,
    selectors: [["gifs-card-list"]],
    inputs: {
      gifs: "gifs"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "row"], ["class", "col-md-3 col-sm-6", 3, "gif", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6", 3, "gif"]],
    template: function CardListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardListComponent_gifs_card_1_Template, 1, 1, "gifs-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gifs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent],
    styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2lmcy9jb21wb25lbnRzL2NhcmQtbGlzdC9jYXJkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0RBQXdEO0FBQ3hEO0VBQ0UsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEVzdGlsbyBhZGljaW9uYWwgcGFyYSBlbCBjb250ZW5lZG9yIGRlIGxhcyB0YXJqZXRhcyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 9689:
/*!********************************************************!*\
  !*** ./src/app/gifs/components/card/card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/lazy-image/lazy-image.component */ 2680);


class CardComponent {
  ngOnInit() {
    if (!this.gif) throw new Error('Git property is required');
  }
  static #_ = this.ɵfac = function CardComponent_Factory(t) {
    return new (t || CardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardComponent,
    selectors: [["gifs-card"]],
    inputs: {
      gif: "gif"
    },
    decls: 5,
    vars: 3,
    consts: [[1, "card", "mb-2", "text-center", "bg-dark"], [3, "url", "alt"], [1, "card-body", "mb-2", "text-white"], [1, "card-text"]],
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "shared-lazy-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", ctx.gif.images.fixed_height_downsampled["url"])("alt", ctx.gif.title || "No name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gif.title || "no tittle", " ");
      }
    },
    dependencies: [_shared_components_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_0__.LazyImageComponent],
    styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #1493eede;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.3s;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 5px 10px 20px 1px rgba(194, 10, 29, 0.259) !important;\n  transition: all 1.7s linear;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #135592b6;\n  color: #ffffff;\n  padding: 10px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.3rem 1rem;\n  font-size: 1rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2lmcy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpRUFBaUU7RUFDakUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTQ5M2VlZGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAyMHB4IDFweCByZ2JhKDE5NCwgMTAsIDI5LCAwLjI1OSkgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMS43cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTU5MmI2O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7240:
/*!********************************************************************!*\
  !*** ./src/app/gifs/components/search-box/search-box.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBoxComponent: () => (/* binding */ SearchBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_gifs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/gifs.service */ 4794);


const _c0 = ["txtTagInpunt"];
class SearchBoxComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this, this.tagInput.nativeElement.value = '';
    console.log(newTag);
  }
  static #_ = this.ɵfac = function SearchBoxComponent_Factory(t) {
    return new (t || SearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gifs_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SearchBoxComponent,
    selectors: [["gifs-search-box"]],
    viewQuery: function SearchBoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
      }
    },
    decls: 5,
    vars: 0,
    consts: [[1, "navbar"], ["type", "text", "name", "search", "id", "search", "placeholder", "Buscar gifs....", 1, "form-control", 3, "keyup.enter"], ["txtTagInpunt", ""]],
    template: function SearchBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function SearchBoxComponent_Template_input_keyup_enter_3_listener() {
          return ctx.searchTag();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    styles: ["body[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #057ba6b8, #dfa70d79);\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(20, 163, 188, 0.548), rgba(190, 167, 11, 0.717));\n  padding: 10px 0;\n}\n\n.navbar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.form-control[type=\"text\"][_ngcontent-%COMP%] {\n  padding: 18px;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n  margin-right: 15px;\n}\n\n\n.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #33e70fd7;\n}\n\n.navbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  color: #ffc107d3;\n  font-size: 1.5em;\n  text-shadow: 2px 2px 4px rgba(204, 168, 10, 0.747);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2lmcy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQTREO0VBQzVELFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsaUdBQWlHO0VBQ2pHLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0RBQWtEO0FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA1N2JhNmI4LCAjZGZhNzBkNzkpO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgZGUgbGEgYmFycmEgZGUgbmF2ZWdhY2nDg8KzbiAqL1xyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjAsIDE2MywgMTg4LCAwLjU0OCksIHJnYmEoMTkwLCAxNjcsIDExLCAwLjcxNykpO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLm5hdmJhciBmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sW3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzZTcwZmQ3O1xyXG59XHJcblxyXG4ubmF2YmFyIGg1e1xyXG4gIGNvbG9yOiAjZmZjMTA3ZDM7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgyMDQsIDE2OCwgMTAsIDAuNzQ3KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 2879:
/*!*************************************!*\
  !*** ./src/app/gifs/gifs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GifsModule: () => (/* binding */ GifsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 6850);
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-box/search-box.component */ 7240);
/* harmony import */ var _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-list/card-list.component */ 6781);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card/card.component */ 9689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class GifsModule {
  static #_ = this.ɵfac = function GifsModule_Factory(t) {
    return new (t || GifsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: GifsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GifsModule, {
    declarations: [_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent, _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__.SearchBoxComponent, _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_3__.CardListComponent, _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
    exports: [_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent, _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_3__.CardListComponent]
  });
})();

/***/ }),

/***/ 6850:
/*!*************************************************************!*\
  !*** ./src/app/gifs/pages/home-page/home-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_gifs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/gifs.service */ 4794);
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ 7240);
/* harmony import */ var _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-list/card-list.component */ 6781);




class HomePageComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  get gifs() {
    return this.gifsService.gifList;
  }
  static #_ = this.ɵfac = function HomePageComponent_Factory(t) {
    return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_gifs_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomePageComponent,
    selectors: [["gifs-home-page"]],
    decls: 6,
    vars: 1,
    consts: [[1, "giphy"], [1, "row", "p-3"], [1, "col-12"], [1, "col-12", "pt-2"], [3, "gifs"]],
    template: function HomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "gifs-search-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "gifs-card-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gifs", ctx.gifs);
      }
    },
    dependencies: [_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_1__.SearchBoxComponent, _components_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_2__.CardListComponent],
    styles: [".giphy[_ngcontent-%COMP%] {\n  font-family: 'Oxygen', sans-serif;\n  height: auto;\n  background: rgba(233, 110, 10, 0.565);\n  background: linear-gradient(\n    180deg,\n    rgba(15, 77, 177, 0.516) 0%,\n    rgba(146, 174, 225, 0.549) 15%,\n    rgba(93, 219, 71, 0.542) 30%,\n    rgba(45, 188, 20, 0.547) 45%,\n    rgba(190, 167, 11, 0.717) 100%\n  );\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2lmcy9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLHFDQUFxQztFQUNyQzs7Ozs7OztHQU9DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIuZ2lwaHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDExMCwgMTAsIDAuNTY1KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICByZ2JhKDE1LCA3NywgMTc3LCAwLjUxNikgMCUsXHJcbiAgICByZ2JhKDE0NiwgMTc0LCAyMjUsIDAuNTQ5KSAxNSUsXHJcbiAgICByZ2JhKDkzLCAyMTksIDcxLCAwLjU0MikgMzAlLFxyXG4gICAgcmdiYSg0NSwgMTg4LCAyMCwgMC41NDcpIDQ1JSxcclxuICAgIHJnYmEoMTkwLCAxNjcsIDExLCAwLjcxNykgMTAwJVxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4794:
/*!***********************************************!*\
  !*** ./src/app/gifs/services/gifs.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GifsService: () => (/* binding */ GifsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class GifsService {
  constructor(http) {
    this.http = http;
    this.gifList = [];
    this._tagsHistory = [];
    this.apiKey = 'NGNvMv8Grq9J96hJnxtVUBGQ1RcG8r7w';
    this.serviceUrl = 'https://api.giphy.com/v1/gifs';
    this._tagsHistory = [];
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }
  get tagHistory() {
    return [...this._tagsHistory];
  }
  organizeHistory(tag) {
    tag = tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }
  saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  loadLocalStorage() {
    const history = localStorage.getItem('history');
    if (!history) return;
    this._tagsHistory = JSON.parse(history);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }
  searchTag(tag) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', tag);
    this.http.get(`${this.serviceUrl}/search`, {
      params
    }).subscribe(resp => {
      this.gifList = resp.data;
      console.log({
        gifs: this.gifList
      });
    });
  }
  static #_ = this.ɵfac = function GifsService_Factory(t) {
    return new (t || GifsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GifsService,
    factory: GifsService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 2680:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/lazy-image/lazy-image.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyImageComponent: () => (/* binding */ LazyImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function LazyImageComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
  }
}
const _c0 = function (a0) {
  return {
    display: a0
  };
};
class LazyImageComponent {
  constructor() {
    this.alt = '';
    this.hasLoaded = false;
  }
  ngOnInit() {
    if (!this.url) throw new Error('URL preperty is required');
  }
  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
  static #_ = this.ɵfac = function LazyImageComponent_Factory(t) {
    return new (t || LazyImageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LazyImageComponent,
    selectors: [["shared-lazy-image"]],
    inputs: {
      url: "url",
      alt: "alt"
    },
    decls: 3,
    vars: 6,
    consts: [[1, "d-flex", "jjustify-content-center"], [1, "card-img-top", "animate__animated", "animate__fadeIn", 3, "src", "alt", "ngStyle", "load"], ["src", "assets/loader.svg", "height", "35", "width", "35", "class", "mt-3", 4, "ngIf"], ["src", "assets/loader.svg", "height", "35", "width", "35", 1, "mt-3"]],
    template: function LazyImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LazyImageComponent_Template_img_load_1_listener() {
          return ctx.onLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LazyImageComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.hasLoaded ? "" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".card-img-top[_ngcontent-%COMP%]  {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF6eS1pbWFnZS9sYXp5LWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctdG9wICB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 7378:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_gifs_services_gifs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/gifs/services/gifs.service */ 4794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function SidebarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tag_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.searchTag(tag_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, tag_r1), " ");
  }
}
class SidebarComponent {
  constructor(gifsService) {
    this.gifsService = gifsService;
  }
  get tags() {
    return this.gifsService.tagHistory;
  }
  searchTag(tag) {
    this.gifsService.searchTag(tag);
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_gifs_services_gifs_service__WEBPACK_IMPORTED_MODULE_0__.GifsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["shared-sidebar"]],
    decls: 6,
    vars: 1,
    consts: [["id", "sidebar", 1, "bg-dark", "border-right", "p-3"], [1, "list-group", "list-reset"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GifsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidebarComponent_button_5_Template, 3, 3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
    styles: ["body[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #057ba6b8, #dfa70d79);\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n#sidebar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(20, 163, 188, 0.548), rgba(190, 167, 11, 0.717));\n  padding: 1rem;\n  color: #ffffffd2;\n  margin-right: 80px;\n  height: 100vh;\n  width: 100%;\n  max-width: 250px;\n  overflow-y: auto;\n}\n\n#sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffc107;\n  font-size: 1.5em;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#sidebar[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: #9baf28c9;\n  border: 1px solid #59d61fc9;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n}\n#sidebar[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ffA500, #ff8c00); \n\n  border: 1px solid #ffA500; \n\n  color: #000000; \n\n  cursor: pointer;\n  width: 100%; \n\n  padding: 15px; \n\n}\n\n#sidebar[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff8c00, #ffA500); \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBNEQ7RUFDNUQsU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlHQUFpRztFQUNqRyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1REFBdUQsRUFBRSxzQkFBc0I7RUFDL0UseUJBQXlCLEVBQUUsMEJBQTBCO0VBQ3JELGNBQWMsRUFBRSxnQkFBZ0I7RUFDaEMsZUFBZTtFQUNmLFdBQVcsRUFBRSx5REFBeUQ7RUFDdEUsYUFBYSxFQUFFLHFEQUFxRDtBQUN0RTs7QUFFQTtFQUNFLHVEQUF1RCxFQUFFLDBDQUEwQztBQUNyRyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNTdiYTZiOCwgI2RmYTcwZDc5KTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDIwLCAxNjMsIDE4OCwgMC41NDgpLCByZ2JhKDE5MCwgMTY3LCAxMSwgMC43MTcpKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmZDI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jc2lkZWJhciBoMyB7XHJcbiAgY29sb3I6ICNmZmMxMDc7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4jc2lkZWJhciBociB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJhZjI4Yzk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5ZDYxZmM5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG4jc2lkZWJhciAubGlzdC1ncm91cC1pdGVtLWFjdGlvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmQTUwMCwgI2ZmOGMwMCk7IC8qIERlZ3JhZGFkbyBuYXJhbmphICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmQTUwMDsgLyogQm9yZGUgZGVsIG1pc21vIGNvbG9yICovXHJcbiAgY29sb3I6ICMwMDAwMDA7IC8qIFRleHRvIG5lZ3JvICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBIYWNlIHF1ZSBlbCBib3TDg8KzbiBvY3VwZSB0b2RvIGVsIGFuY2hvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgcGFkZGluZzogMTVweDsgLyogQWp1c3RhIGVsIHJlbGxlbm8gcGFyYSBoYWNlciBlbCBib3TDg8KzbiBtw4PCoXMgZ3JhbmRlICovXHJcbn1cclxuXHJcbiNzaWRlYmFyIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY4YzAwLCAjZmZBNTAwKTsgLyogQ2FtYmlvIGRlIGRlZ3JhZGFkbyBhbCBwYXNhciBlbCByYXTDg8KzbiAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 7378);
/* harmony import */ var _components_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lazy-image/lazy-image.component */ 2680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _components_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyImageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _components_lazy_image_lazy_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyImageComponent]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map