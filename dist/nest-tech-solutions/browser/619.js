"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[619],{

/***/ 3474:
/*!**************************************************************!*\
  !*** ./src/app/features/services/services-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesRoutingModule: () => (/* binding */ ServicesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./services.component */ 9884)).then(m => m.ServicesComponent)
}, {
  path: ':id',
  loadComponent: () => __webpack_require__.e(/*! import() */ 411).then(__webpack_require__.bind(__webpack_require__, /*! ./service-detail/service-detail.component */ 7411)).then(m => m.ServiceDetailComponent)
}];
let ServicesRoutingModule = /*#__PURE__*/(() => {
  class ServicesRoutingModule {
    static {
      this.ɵfac = function ServicesRoutingModule_Factory(t) {
        return new (t || ServicesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ServicesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });
    }
  }
  return ServicesRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 9884:
/*!*********************************************************!*\
  !*** ./src/app/features/services/services.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _shared_consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/consultation-dialog/consultation-dialog.component */ 5828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);















const _c0 = a0 => ["/services", a0];
function ServicesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 49)(8, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](category_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r1.projects, " Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r1.expertise, " Expertise");
  }
}
function ServicesComponent_div_34_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feature_r3, " ");
  }
}
function ServicesComponent_div_34_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tech_r4, " ");
  }
}
function ServicesComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55)(5, "div", 56)(6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 56)(11, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Satisfaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59)(16, "div", 60)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 63)(24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Key Capabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ServicesComponent_div_34_li_27_Template, 3, 1, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 65)(29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ServicesComponent_div_34_span_32_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_div_34_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openConsultationDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const solution_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("reverse", i_r7 % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/service-icons/" + solution_r6.icon + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", solution_r6.title + " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](solution_r6.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](solution_r6.satisfaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](solution_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](solution_r6.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](solution_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", solution_r6.keyFeatures.slice(0, 4))("ngForTrackBy", ctx_r4.trackByString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", solution_r6.technologies.slice(0, 5))("ngForTrackBy", ctx_r4.trackByString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, solution_r6.id));
  }
}
function ServicesComponent_div_42_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const solution_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", solution_r8, " ");
  }
}
function ServicesComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ServicesComponent_div_42_span_8_Template, 2, 1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 76)(10, "div", 77)(11, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 77)(16, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const industry_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](industry_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](industry_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](industry_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", industry_r9.solutions)("ngForTrackBy", ctx_r4.trackByString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](industry_r9.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](industry_r9.experience);
  }
}
function ServicesComponent_div_50_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deliverable_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deliverable_r10);
  }
}
function ServicesComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 83)(4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 85)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Key Deliverables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ServicesComponent_div_50_li_14_Template, 2, 1, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](step_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", step_r11.deliverables)("ngForTrackBy", ctx_r4.trackByString);
  }
}
function ServicesComponent_div_58_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91)(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13);
  }
}
function ServicesComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ServicesComponent_div_58_div_7_Template, 3, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r14.items.length, "+ Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r14.items)("ngForTrackBy", ctx_r4.trackByString);
  }
}
function ServicesComponent_div_66_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r15.label);
  }
}
function ServicesComponent_div_66_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServicesComponent_div_66_div_7_div_1_Template, 5, 2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const advantage_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", advantage_r16.metrics)("ngForTrackBy", ctx_r4.trackByMetric);
  }
}
function ServicesComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93)(1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ServicesComponent_div_66_div_7_Template, 2, 2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const advantage_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](advantage_r16.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](advantage_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](advantage_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", advantage_r16.metrics);
  }
}
let ServicesComponent = /*#__PURE__*/(() => {
  class ServicesComponent {
    constructor(router, viewportScroller, dialogService) {
      this.router = router;
      this.viewportScroller = viewportScroller;
      this.dialogService = dialogService;
      this.solutionCategories = [{
        title: 'Digital Transformation',
        description: 'Comprehensive digital modernization strategies that revolutionize business operations and customer experiences.',
        icon: 'pi pi-sync',
        projects: '200+',
        expertise: '5+ Years'
      }, {
        title: 'Custom Software Development',
        description: 'Tailored software solutions built from the ground up to meet your specific business requirements and goals.',
        icon: 'pi pi-code',
        projects: '300+',
        expertise: 'Enterprise Grade'
      }, {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services that enhance performance, security, and cost-efficiency.',
        icon: 'pi pi-cloud',
        projects: '150+',
        expertise: 'Multi-Cloud'
      }, {
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and predictive analytics solutions that drive data-driven decision making.',
        icon: 'pi pi-android',
        projects: '75+',
        expertise: 'Advanced AI'
      }];
      this.detailedSolutions = [{
        id: 'web-development',
        title: 'Web Development Excellence',
        subtitle: 'Modern, Scalable, High-Performance Web Applications',
        description: 'We craft exceptional web experiences using cutting-edge frameworks and technologies. Our solutions are built for scale, performance, and user engagement, ensuring your digital presence drives real business results.',
        keyFeatures: ['Responsive & Mobile-First Design', 'Progressive Web App (PWA) Development', 'Real-time Data Integration', 'Advanced Security Implementation', 'Performance Optimization', 'SEO & Analytics Integration'],
        technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL'],
        projects: '200+',
        satisfaction: '98%',
        icon: 'web-development'
      }, {
        id: 'mobile-development',
        title: 'Mobile App Innovation',
        subtitle: 'Native & Cross-Platform Mobile Solutions',
        description: 'Create powerful mobile experiences that engage users and drive business growth. From native iOS and Android apps to cross-platform solutions, we deliver mobile excellence.',
        keyFeatures: ['Native iOS & Android Development', 'Cross-Platform Solutions (React Native, Flutter)', 'Offline-First Architecture', 'Push Notifications & Real-time Sync', 'App Store Optimization', 'Mobile Analytics & Performance Monitoring'],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Xamarin'],
        projects: '120+',
        satisfaction: '96%',
        icon: 'mobile-development'
      }, {
        id: 'cloud-devops',
        title: 'Cloud & DevOps Mastery',
        subtitle: 'Scalable Infrastructure & Automated Deployments',
        description: 'Transform your development lifecycle with cloud-native solutions and DevOps automation. Achieve faster deployments, better reliability, and reduced operational costs.',
        keyFeatures: ['Multi-Cloud Architecture Design', 'CI/CD Pipeline Automation', 'Container Orchestration (Kubernetes)', 'Infrastructure as Code', 'Monitoring & Logging Solutions', 'Security & Compliance Automation'],
        technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        projects: '100+',
        satisfaction: '99%',
        icon: 'cloud-devops'
      }, {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        subtitle: 'Intelligent Solutions for Modern Business',
        description: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create competitive advantages through data-driven solutions.',
        keyFeatures: ['Custom AI Model Development', 'Natural Language Processing', 'Computer Vision Solutions', 'Predictive Analytics', 'Automated Decision Making', 'ML Model Deployment & Monitoring'],
        technologies: ['TensorFlow', 'PyTorch', 'Python', 'OpenAI', 'Scikit-learn', 'MLflow'],
        projects: '60+',
        satisfaction: '95%',
        icon: 'ai-ml'
      }, {
        id: 'ui-ux-design',
        title: 'UI/UX Design Excellence',
        subtitle: 'User-Centered Design That Converts',
        description: 'Create intuitive, beautiful user experiences that drive engagement and conversions. Our design process focuses on user research, usability, and business outcomes.',
        keyFeatures: ['User Research & Persona Development', 'Information Architecture', 'Interactive Prototyping', 'Design System Creation', 'Usability Testing', 'Accessibility Compliance'],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
        projects: '250+',
        satisfaction: '97%',
        icon: 'ui-ux-design'
      }, {
        id: 'api-development',
        title: 'API & Integration Services',
        subtitle: 'Seamless System Connectivity',
        description: 'Build robust, scalable APIs and integrations that connect your systems, enable data flow, and create seamless user experiences across all touchpoints.',
        keyFeatures: ['RESTful API Development', 'GraphQL Implementation', 'Microservices Architecture', 'Third-Party Integrations', 'API Security & Authentication', 'Documentation & Testing'],
        technologies: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'Swagger', 'Postman'],
        projects: '180+',
        satisfaction: '98%',
        icon: 'api-development'
      }];
      this.industries = [{
        name: 'Financial Services',
        description: 'Secure, compliant solutions for banking, fintech, and financial institutions.',
        icon: 'pi pi-dollar',
        solutions: ['Trading Platforms', 'Payment Systems', 'Risk Management', 'Regulatory Compliance'],
        projects: '50+',
        experience: '5+ Years'
      }, {
        name: 'Healthcare & Life Sciences',
        description: 'HIPAA-compliant solutions for healthcare providers and medical technology companies.',
        icon: 'pi pi-heart',
        solutions: ['Telemedicine', 'Patient Management', 'Medical Devices', 'Health Analytics'],
        projects: '35+',
        experience: '4+ Years'
      }, {
        name: 'E-Commerce & Retail',
        description: 'Scalable commerce platforms and retail technology solutions.',
        icon: 'pi pi-shopping-cart',
        solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
        projects: '80+',
        experience: '5+ Years'
      }, {
        name: 'Manufacturing & Logistics',
        description: 'Digital transformation solutions for manufacturing and supply chain optimization.',
        icon: 'pi pi-cog',
        solutions: ['IoT Integration', 'Supply Chain', 'Quality Control', 'Predictive Maintenance'],
        projects: '25+',
        experience: '3+ Years'
      }, {
        name: 'Education & EdTech',
        description: 'Innovative learning platforms and educational technology solutions.',
        icon: 'pi pi-book',
        solutions: ['Learning Management', 'Virtual Classrooms', 'Assessment Tools', 'Student Analytics'],
        projects: '40+',
        experience: '4+ Years'
      }, {
        name: 'Real Estate & PropTech',
        description: 'Technology solutions for real estate management and property technology.',
        icon: 'pi pi-home',
        solutions: ['Property Management', 'Virtual Tours', 'Market Analytics', 'Transaction Systems'],
        projects: '30+',
        experience: '3+ Years'
      }];
      this.processSteps = [{
        title: 'Discovery & Strategy',
        description: 'Deep dive into your business requirements, challenges, and objectives to create a comprehensive project strategy.',
        icon: 'pi pi-search',
        deliverables: ['Requirements Analysis', 'Technical Architecture', 'Project Roadmap', 'Risk Assessment']
      }, {
        title: 'Design & Prototyping',
        description: 'Create user-centered designs and interactive prototypes that validate concepts before development begins.',
        icon: 'pi pi-palette',
        deliverables: ['UI/UX Designs', 'Interactive Prototypes', 'Design System', 'User Journey Maps']
      }, {
        title: 'Development & Integration',
        description: 'Agile development process with continuous integration and regular client feedback throughout the build phase.',
        icon: 'pi pi-code',
        deliverables: ['Core Development', 'API Integration', 'Quality Assurance', 'Performance Testing']
      }, {
        title: 'Testing & Quality Assurance',
        description: 'Comprehensive testing across all devices and scenarios to ensure reliability, security, and performance.',
        icon: 'pi pi-check-circle',
        deliverables: ['Automated Testing', 'Security Audit', 'Performance Optimization', 'Bug Resolution']
      }, {
        title: 'Deployment & Launch',
        description: 'Seamless deployment with monitoring, documentation, and training to ensure successful go-live.',
        icon: 'pi pi-upload',
        deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Team Training']
      }, {
        title: 'Support & Optimization',
        description: 'Ongoing support, maintenance, and continuous improvement based on real-world usage and feedback.',
        icon: 'pi pi-wrench',
        deliverables: ['24/7 Support', 'Performance Monitoring', 'Feature Updates', 'Scaling Solutions']
      }];
      this.competitiveAdvantages = [{
        title: 'Proven Track Record',
        description: 'Over 500 successful projects delivered across multiple industries with consistently high client satisfaction rates.',
        icon: 'pi pi-trophy',
        metrics: [{
          value: '500+',
          label: 'Projects'
        }, {
          value: '98%',
          label: 'Satisfaction'
        }, {
          value: '25+',
          label: 'Countries'
        }]
      }, {
        title: 'Expert Team',
        description: 'Seasoned professionals with deep expertise in cutting-edge technologies and industry best practices.',
        icon: 'pi pi-users',
        metrics: [{
          value: '50+',
          label: 'Experts'
        }, {
          value: '5+',
          label: 'Avg Experience'
        }, {
          value: '20+',
          label: 'Technologies'
        }]
      }, {
        title: 'Agile Methodology',
        description: 'Flexible, iterative approach that adapts to changing requirements and delivers value incrementally.',
        icon: 'pi pi-sync',
        metrics: [{
          value: '2-3',
          label: 'Week Sprints'
        }, {
          value: '100%',
          label: 'Transparency'
        }, {
          value: '24/7',
          label: 'Communication'
        }]
      }, {
        title: 'Quality Assurance',
        description: 'Rigorous testing and quality control processes ensuring reliable, scalable, and maintainable solutions.',
        icon: 'pi pi-shield',
        metrics: [{
          value: '99.9%',
          label: 'Uptime'
        }, {
          value: '0',
          label: 'Critical Bugs'
        }, {
          value: '100%',
          label: 'Code Coverage'
        }]
      }];
      this.successStories = [{
        client: 'Global FinTech Corp',
        industry: 'Financial Services',
        solutionType: 'Trading Platform',
        challenge: 'Needed a high-performance trading platform capable of handling millions of transactions per second with real-time market data integration.',
        results: ['250% increase in trading volume', '60% faster transaction processing', '99.9% system uptime achieved'],
        technologies: ['Angular', 'Node.js', 'WebSocket', 'MongoDB', 'Redis']
      }, {
        client: 'MedTech Innovations',
        industry: 'Healthcare',
        solutionType: 'Telemedicine Platform',
        challenge: 'Required HIPAA-compliant telemedicine solution connecting 50,000+ patients with healthcare providers remotely.',
        results: ['50,000+ patients served', '70% reduction in wait times', '95% patient satisfaction rate'],
        technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC', 'AWS']
      }, {
        client: 'RetailMax Solutions',
        industry: 'E-Commerce',
        solutionType: 'E-Commerce Platform',
        challenge: 'Modernize legacy e-commerce system with AI-powered recommendations and multi-channel integration.',
        results: ['120% increase in conversion rate', '45% reduction in cart abandonment', '$2M+ additional revenue'],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch', 'Stripe']
      }, {
        client: 'Enterprise Systems Ltd',
        industry: 'Manufacturing',
        solutionType: 'CRM Solution',
        challenge: 'Develop scalable CRM system for large enterprise with advanced analytics and workflow automation.',
        results: ['200% improvement in sales efficiency', '85% better customer retention', '$1.5M cost savings'],
        technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'Kubernetes', 'Apache Kafka']
      }];
      this.technologyCategories = [{
        title: 'Frontend Development',
        items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js', 'Nuxt.js', 'Svelte', 'Tailwind CSS', 'Material-UI', 'Redux', 'GraphQL', 'Webpack']
      }, {
        title: 'Backend Development',
        items: ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Go', 'Ruby', 'Express.js', 'Django', 'Spring Boot', 'Laravel', 'FastAPI']
      }, {
        title: 'Cloud & DevOps',
        items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Helm', 'Prometheus', 'Grafana']
      }, {
        title: 'Database & Storage',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra', 'DynamoDB', 'Neo4j', 'InfluxDB', 'SQLite', 'Firebase']
      }, {
        title: 'AI & Machine Learning',
        items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'Pandas', 'NumPy', 'Jupyter', 'MLflow', 'Kubeflow', 'LangChain']
      }, {
        title: 'Security & Infrastructure',
        items: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'VPN', 'Firewalls', 'Load Balancers', 'CDN', 'DNS', 'Monitoring', 'Penetration Testing', 'GDPR Compliance']
      }];
    }
    ngOnInit() {
      // Component initialization
    }
    scrollToSolutions() {
      const element = document.getElementById('solutions-section');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // TrackBy functions for performance optimization
    trackByIndex(index, item) {
      return index;
    }
    trackByString(index, item) {
      return item;
    }
    trackByMetric(index, metric) {
      return metric.value + metric.label;
    }
    openConsultationDialog() {
      const ref = this.dialogService.open(_shared_consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConsultationDialogComponent, {
        header: 'Request a Consultation',
        width: '90%',
        maximizable: true,
        style: {
          maxWidth: '1200px'
        },
        contentStyle: {
          height: '85vh',
          overflow: 'auto'
        },
        baseZIndex: 10000,
        dismissableMask: true
      });
      ref.onClose.subscribe(result => {
        if (result && result.action === 'getQuote') {
          this.viewportScroller.scrollToPosition([0, 0]);
          this.router.navigate(['/quote']);
        }
      });
    }
    navigateToContact() {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.router.navigate(['/contact']);
    }
    navigateToQuote() {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.router.navigate(['/quote']);
    }
    static {
      this.ɵfac = function ServicesComponent_Factory(t) {
        return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DialogService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ServicesComponent,
        selectors: [["app-services"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 89,
        vars: 22,
        consts: [[1, "solutions-hero-section"], [1, "hero-background"], [1, "hero-lightray", "one"], [1, "hero-lightray", "two"], [1, "hero-lightray", "three"], [1, "hero-content-card"], [1, "hero-content"], [1, "company-tagline"], [1, "hero-headline"], [1, "highlight"], [1, "hero-description"], [1, "hero-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Explore Solutions", 1, "p-button-raised", "p-button-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Consultation", 1, "p-button-outlined", "p-button-lg", 3, "click"], [1, "solutions-categories"], [1, "categories-container"], [1, "section-subtitle"], [1, "categories-grid"], ["class", "category-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "solutions-section", 1, "detailed-solutions"], [1, "solutions-container"], [1, "solutions-grid"], ["class", "solution-card", 3, "reverse", 4, "ngFor", "ngForOf"], [1, "industry-expertise"], [1, "expertise-container"], [1, "industries-grid"], ["class", "industry-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "development-process"], [1, "process-container"], [1, "process-timeline"], ["class", "process-step", 4, "ngFor", "ngForOf"], [1, "technology-stack"], [1, "tech-container"], [1, "tech-categories"], ["class", "tech-category", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "why-choose-us"], [1, "why-container"], [1, "advantages-grid"], ["class", "advantage-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cta-section"], [1, "cta-content"], [1, "cta-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Start Your Project", 1, "p-button-raised", "p-button-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Schedule Consultation", 1, "p-button-outlined", "p-button-lg", 3, "click"], [1, "cta-benefits"], [1, "benefit-item"], [1, "pi", "pi-check-circle"], [1, "category-card"], [1, "category-icon"], [1, "category-metrics"], [1, "metric"], [1, "solution-card"], [1, "solution-visual"], [1, "solution-icon-large"], ["loading", "lazy", 1, "solution-svg-icon", 3, "src", "alt"], [1, "solution-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "solution-content"], [1, "solution-header"], [1, "solution-subtitle"], [1, "solution-description"], [1, "solution-features"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "solution-technologies"], [1, "tech-stack"], ["class", "tech-badge", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "solution-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "View Case Studies", 1, "p-button-raised", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", "label", "Request Quote", 1, "p-button-outlined", 3, "click"], [1, "tech-badge"], [1, "industry-card"], [1, "industry-icon"], [1, "industry-solutions"], ["class", "solution-tag", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "industry-metrics"], [1, "metric-item"], [1, "metric-value"], [1, "metric-label"], [1, "solution-tag"], [1, "process-step"], [1, "step-number"], [1, "step-content"], [1, "step-icon"], [1, "step-deliverables"], [1, "tech-category"], [1, "tech-category-header"], [1, "tech-count"], [1, "tech-items"], ["class", "tech-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tech-item"], [1, "tech-name"], [1, "advantage-card"], [1, "advantage-icon"], ["class", "advantage-metrics", 4, "ngIf"], [1, "advantage-metrics"], ["class", "metric", 4, "ngFor", "ngForOf", "ngForTrackBy"]],
        template: function ServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Our Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Transformative Technology ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Solutions That Scale.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " From concept to deployment, we deliver cutting-edge solutions that drive business growth, enhance efficiency, and create lasting competitive advantages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_Template_button_click_17_listener() {
              return ctx.scrollToSolutions();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_Template_button_click_18_listener() {
              return ctx.openConsultationDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 14)(20, "div", 15)(21, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Our Core Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Comprehensive technology solutions designed to accelerate your digital transformation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ServicesComponent_div_26_Template, 12, 7, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 19)(28, "div", 20)(29, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Professional Solutions Portfolio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "End-to-end solutions tailored to your industry and business needs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ServicesComponent_div_34_Template, 36, 17, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "section", 23)(36, "div", 24)(37, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Industry Expertise");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Deep domain knowledge across key industries");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ServicesComponent_div_42_Template, 20, 9, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 27)(44, "div", 28)(45, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Our Development Process");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Proven methodology ensuring successful project delivery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ServicesComponent_div_50_Template, 15, 8, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 31)(52, "div", 32)(53, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Technology Excellence");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Cutting-edge technologies and frameworks powering our solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ServicesComponent_div_58_Template, 8, 5, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "section", 35)(60, "div", 36)(61, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Why Choose Nest Tech AI Solutions?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "The advantages that set us apart in the technology landscape");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ServicesComponent_div_66_Template, 8, 6, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "section", 39)(68, "div", 40)(69, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Ready to Transform Your Business?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Let's discuss how our solutions can accelerate your digital transformation and drive measurable results.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 41)(74, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_Template_button_click_74_listener() {
              return ctx.openConsultationDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_Template_button_click_75_listener() {
              return ctx.navigateToContact();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 44)(77, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Free Initial Consultation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Custom Solution Architecture");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "No Commitment Required");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.solutionCategories)("ngForTrackBy", ctx.trackByIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.detailedSolutions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.industries)("ngForTrackBy", ctx.trackByIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.processSteps);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.technologyCategories)("ngForTrackBy", ctx.trackByIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.competitiveAdvantages)("ngForTrackBy", ctx.trackByIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_chip__WEBPACK_IMPORTED_MODULE_7__.ChipModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["@charset \"UTF-8\";\n.solutions-hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 600px;\n  padding: 4rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: var(--surface-ground);\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(45deg, var(--primary-color) 0%, var(--primary-color-light) 100%);\n  opacity: 0.1;\n  border-radius: 50%;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.one[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 1000px;\n  top: -400px;\n  left: -200px;\n  transform: rotate(-15deg);\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.two[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n  bottom: -300px;\n  right: -100px;\n  transform: rotate(15deg);\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.three[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  width: 100%;\n  padding: 2rem;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .company-tagline[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.solutions-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.solutions-categories[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-card);\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.solutions-categories[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.solutions-categories[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 1px solid var(--surface-border);\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: var(--card-shadow-hover);\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1.5rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n.solutions-categories[_ngcontent-%COMP%]   .categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n\n.detailed-solutions[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.detailed-solutions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  padding: 3rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%] {\n  grid-template-columns: 2fr 1fr;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%] {\n  order: 2;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n@media (max-width: 1024px) {\n  .detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%], .detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card.reverse[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%] {\n    order: unset;\n  }\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-icon-large[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-bottom: 2rem;\n  background: var(--surface-hover);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-icon-large[_ngcontent-%COMP%]   .solution-svg-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  filter: hue-rotate(0deg);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-visual[_ngcontent-%COMP%]   .solution-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary-color);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-header[_ngcontent-%COMP%]   .solution-subtitle[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 2rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-features[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  color: var(--text-secondary-color);\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-technologies[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-technologies[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-technologies[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-technologies[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%]   .tech-badge[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .detailed-solutions[_ngcontent-%COMP%]   .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%]   .solution-content[_ngcontent-%COMP%]   .solution-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.industry-expertise[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.industry-expertise[_ngcontent-%COMP%]   .expertise-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.industry-expertise[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.industry-expertise[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-solutions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-solutions[_ngcontent-%COMP%]   .solution-tag[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--surface-border);\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.industry-expertise[_ngcontent-%COMP%]   .industries-grid[_ngcontent-%COMP%]   .industry-card[_ngcontent-%COMP%]   .industry-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary-color);\n}\n\n.development-process[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.development-process[_ngcontent-%COMP%]   .process-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.development-process[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.development-process[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  position: relative;\n  transition: transform 0.3s ease;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 2rem;\n  width: 30px;\n  height: 30px;\n  background: var(--primary-color);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: var(--surface-hover);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-deliverables[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  margin-bottom: 0.75rem;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-deliverables[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-deliverables[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  padding-left: 1rem;\n  position: relative;\n}\n.development-process[_ngcontent-%COMP%]   .process-timeline[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-deliverables[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: var(--primary-color);\n  position: absolute;\n  left: 0;\n}\n\n.technology-stack[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-card);\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.technology-stack[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.technology-stack[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  padding: 2rem;\n  border-radius: 1rem;\n  border: 1px solid var(--surface-border);\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-category-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-category-header[_ngcontent-%COMP%]   .tech-count[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-items[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   .tech-name[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  color: var(--text-color);\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n  border: 1px solid var(--surface-border);\n  transition: all 0.3s ease;\n}\n.technology-stack[_ngcontent-%COMP%]   .tech-categories[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%]   .tech-items[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   .tech-name[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n\n.why-choose-us[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.why-choose-us[_ngcontent-%COMP%]   .why-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.why-choose-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.why-choose-us[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1.5rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.why-choose-us[_ngcontent-%COMP%]   .advantages-grid[_ngcontent-%COMP%]   .advantage-card[_ngcontent-%COMP%]   .advantage-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary-color);\n}\n\n.client-success[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.client-success[_ngcontent-%COMP%]   .success-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.client-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.client-success[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  margin-bottom: 0.25rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   .industry[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-header[_ngcontent-%COMP%]   .project-type[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-challenge[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-style: italic;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-results[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-results[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-results[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-results[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-results[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.client-success[_ngcontent-%COMP%]   .success-grid[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-technologies[_ngcontent-%COMP%]   .tech-used[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  border: 1px solid var(--surface-border);\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);\n  pointer-events: none;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1.2rem;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.5rem;\n  line-height: 1.6;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: 1rem 2.5rem;\n  min-width: 220px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%] {\n  background: #ff9800;\n  border-color: #ff9800;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%]:hover {\n  background: #fb8c00;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: #ffffff;\n  transform: translateY(-2px);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-benefits[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-benefits[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--primary-color-text);\n  opacity: 0.9;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-benefits[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color-text);\n  font-size: 1.1rem;\n}\n\n@media (max-width: 768px) {\n  .solutions-grid[_ngcontent-%COMP%]   .solution-card[_ngcontent-%COMP%] {\n    padding: 2rem !important;\n    gap: 2rem !important;\n  }\n  .industries-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .process-timeline[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BlcnNvbmFsJTIwV29ya3NwYWNlL1NoZWhuYXotU29mdHdhcmUtU29sdXRpb25zL3NyYy9hcHAvZmVhdHVyZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBRENGO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QURDSjtBQ0NJO0VBQ0Usa0JBQUE7RUFDQSw0RkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRENOO0FDQ007RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QURDUjtBQ0VNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FEQVI7QUNHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBRERSO0FDTUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FESko7QUNPRTtFQUNFLGtCQUFBO0FETEo7QUNPSTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRExOO0FDUUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FETk47QUNRTTtFQUNFLDJCQUFBO0FETlI7QUNTTTtFQVhGO0lBWUksaUJBQUE7RUROTjtBQUNGO0FDU0k7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFBOO0FDVUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEUk47QUNVTTtFQUxGO0lBTUksc0JBQUE7SUFDQSxvQkFBQTtFRFBOO0FBQ0Y7QUNTTTtFQUNFLGdCQUFBO0FEUFI7O0FDY0E7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0FEWEY7QUNhRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRFhKO0FDY0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRFpKO0FDZUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGJKO0FDZ0JFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRGRKO0FDZ0JJO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdUNBQUE7QURkTjtBQ2dCTTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7QURkUjtBQ2lCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURmUjtBQ2lCUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FEZlY7QUNtQk07RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QURqQlI7QUNvQk07RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURsQlI7QUNxQk07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FEbkJSO0FDcUJRO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEbkJWOztBQzJCQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUR4QkY7QUMwQkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUR4Qko7QUMyQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRHpCSjtBQzRCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEMUJKO0FDNkJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRDNCSjtBQzZCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUQzQk47QUM2Qk07RUFDRSwyQkFBQTtBRDNCUjtBQzhCTTtFQUNFLDhCQUFBO0FENUJSO0FDOEJRO0VBQ0UsUUFBQTtBRDVCVjtBQytCUTtFQUNFLFFBQUE7QUQ3QlY7QUNpQ007RUExQkY7SUEyQkksMEJBQUE7SUFDQSxTQUFBO0VEOUJOO0VDZ0NNO0lBQ0UsMEJBQUE7RUQ5QlI7RUNnQ1E7O0lBRUUsWUFBQTtFRDlCVjtBQUNGO0FDa0NNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEaENSO0FDa0NRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRGhDVjtBQ2tDVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QURoQ1o7QUNvQ1E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRGxDVjtBQ29DVTtFQUNFLGtCQUFBO0FEbENaO0FDb0NZO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FEbENkO0FDcUNZO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtBRG5DZDtBQzBDUTtFQUNFLHFCQUFBO0FEeENWO0FDMENVO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FEeENaO0FDMkNVO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEekNaO0FDNkNRO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEM0NWO0FDOENRO0VBQ0UsbUJBQUE7QUQ1Q1Y7QUM4Q1U7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUQ1Q1o7QUMrQ1U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FEN0NaO0FDK0NZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUQ3Q2Q7QUMrQ2M7RUFDRSwyQkFBQTtFQUNBLGVBQUE7QUQ3Q2hCO0FDbURRO0VBQ0UsbUJBQUE7QURqRFY7QUNtRFU7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURqRFo7QUNvRFU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURsRFo7QUNvRFk7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRGxEZDtBQ3VEUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FEckRWO0FDdURVO0VBSkY7SUFLSSxzQkFBQTtFRHBEVjtBQUNGOztBQzREQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7QUR6REY7QUMyREU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUR6REo7QUM0REU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRDFESjtBQzZERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEM0RKO0FDOERFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRDVESjtBQzhESTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBRDVETjtBQzhETTtFQUNFLDJCQUFBO0FENURSO0FDK0RNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRDdEUjtBQytEUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBRDdEVjtBQ2lFTTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRC9EUjtBQ2tFTTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRGhFUjtBQ21FTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEakVSO0FDbUVRO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FEakVWO0FDcUVNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEbkVSO0FDcUVRO0VBQ0Usa0JBQUE7QURuRVY7QUNxRVU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FEbkVaO0FDc0VVO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtBRHBFWjs7QUM2RUE7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FEMUVGO0FDNEVFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FEMUVKO0FDNkVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUQzRUo7QUM4RUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDVFSjtBQytFRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUQ3RUo7QUMrRUk7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBRDdFTjtBQytFTTtFQUNFLDJCQUFBO0FEN0VSO0FDZ0ZNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUQ5RVI7QUNrRlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FEaEZWO0FDa0ZVO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBRGhGWjtBQ29GUTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRGxGVjtBQ3FGUTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRG5GVjtBQ3VGVTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FEckZaO0FDd0ZVO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRHRGWjtBQ3dGWTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUR0RmQ7QUN3RmM7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUR0RmhCOztBQ2lHQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUQ5RkY7QUNnR0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUQ5Rko7QUNpR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRC9GSjtBQ2tHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEaEdKO0FDbUdFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRGpHSjtBQ21HSTtFQUNFLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QURqR047QUNtR007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FEakdSO0FDbUdRO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBRGpHVjtBQ29HUTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGxHVjtBQ3NHTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRHBHUjtBQ3VHVTtFQUNFLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0FEckdaO0FDdUdZO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QURyR2Q7O0FDK0dBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBRDVHRjtBQzhHRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRDVHSjtBQytHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FEN0dKO0FDZ0hFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUQ5R0o7QUNpSEU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FEL0dKO0FDaUhJO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUQvR047QUNpSE07RUFDRSwyQkFBQTtBRC9HUjtBQ2tITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURoSFI7QUNrSFE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRGhIVjtBQ29ITTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRGxIUjtBQ3FITTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRG5IUjtBQ3NITTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QURwSFI7QUNzSFE7RUFDRSxrQkFBQTtBRHBIVjtBQ3NIVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QURwSFo7QUN1SFU7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FEckhaOztBQzhIQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUQzSEY7QUM2SEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUQzSEo7QUM4SEU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBRDVISjtBQytIRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEN0hKO0FDZ0lFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRDlISjtBQ2dJSTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBRDlITjtBQ2dJTTtFQUNFLDJCQUFBO0FEOUhSO0FDaUlNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRC9IUjtBQ2tJVTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBRGhJWjtBQ21JVTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QURqSVo7QUNzSVU7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHBJWjtBQ3lJTTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEdklSO0FDMElNO0VBQ0UscUJBQUE7QUR4SVI7QUMwSVE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRHhJVjtBQzJJUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUR6SVY7QUMySVU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBRHpJWjtBQzJJWTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBRHpJZDtBQytJTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRDdJUjtBQytJUTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBRDdJVjs7QUNxSkE7RUFDRSxrQkFBQTtFQUNBLDBFQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEbEpGO0FDb0pFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRGQUFBO0VBQ0Esb0JBQUE7QURsSko7QUNxSkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURuSko7QUNxSkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURuSk47QUNxSk07RUFQRjtJQVFJLGlCQUFBO0VEbEpOO0FBQ0Y7QUNvSk07RUFYRjtJQVlJLGlCQUFBO0VEakpOO0FBQ0Y7QUNvSkk7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGxKTjtBQ29KTTtFQVRGO0lBVUksaUJBQUE7RURqSk47QUFDRjtBQ29KSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURsSk47QUNvSk07RUFQRjtJQVFJLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0VEakpOO0FBQ0Y7QUNtSk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURqSlI7QUNtSlE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRGpKVjtBQ21KVTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBRGpKWjtBQ3FKUTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEbkpWO0FDcUpVO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FEbkpaO0FDeUpJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUR2Sk47QUN5Sk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FEdkpSO0FDeUpRO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBRHZKVjs7QUMrSkE7RUFFSTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUQ3Sko7RUNpS0E7SUFDRSxxQ0FBQTtFRC9KRjtFQ2tLQTtJQUNFLHFDQUFBO0VEaEtGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc29sdXRpb25zLWhlcm8tc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQgLmhlcm8tbGlnaHRyYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpIDEwMCUpO1xuICBvcGFjaXR5OiAwLjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQgLmhlcm8tbGlnaHRyYXkub25lIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHRvcDogLTQwMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG59XG4uc29sdXRpb25zLWhlcm8tc2VjdGlvbiAuaGVyby1iYWNrZ3JvdW5kIC5oZXJvLWxpZ2h0cmF5LnR3byB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYm90dG9tOiAtMzAwcHg7XG4gIHJpZ2h0OiAtMTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQgLmhlcm8tbGlnaHRyYXkudGhyZWUge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnNvbHV0aW9ucy1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uc29sdXRpb25zLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvbHV0aW9ucy1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuY29tcGFueS10YWdsaW5lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuLnNvbHV0aW9ucy1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8taGVhZGxpbmUgLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc29sdXRpb25zLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IC5oZXJvLWhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuLnNvbHV0aW9ucy1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNvbHV0aW9ucy1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc29sdXRpb25zLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IC5oZXJvLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbn1cbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8tYWN0aW9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uc29sdXRpb25zLWNhdGVnb3JpZXMge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG59XG4uc29sdXRpb25zLWNhdGVnb3JpZXMgLmNhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyAuY2F0ZWdvcmllcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyAuY2F0ZWdvcmllcy1ncmlkIC5jYXRlZ29yeS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyAuY2F0ZWdvcmllcy1ncmlkIC5jYXRlZ29yeS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3ctaG92ZXIpO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWdyaWQgLmNhdGVnb3J5LWNhcmQgLmNhdGVnb3J5LWljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWdyaWQgLmNhdGVnb3J5LWNhcmQgLmNhdGVnb3J5LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWdyaWQgLmNhdGVnb3J5LWNhcmQgaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnNvbHV0aW9ucy1jYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWdyaWQgLmNhdGVnb3J5LWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyAuY2F0ZWdvcmllcy1ncmlkIC5jYXRlZ29yeS1jYXJkIC5jYXRlZ29yeS1tZXRyaWNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbn1cbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyAuY2F0ZWdvcmllcy1ncmlkIC5jYXRlZ29yeS1jYXJkIC5jYXRlZ29yeS1tZXRyaWNzIC5tZXRyaWMge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZGV0YWlsZWQtc29sdXRpb25zIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgZ2FwOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkLnJldmVyc2Uge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZC5yZXZlcnNlIC5zb2x1dGlvbi12aXN1YWwge1xuICBvcmRlcjogMjtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkLnJldmVyc2UgLnNvbHV0aW9uLWNvbnRlbnQge1xuICBvcmRlcjogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAuZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZC5yZXZlcnNlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZC5yZXZlcnNlIC5zb2x1dGlvbi12aXN1YWwsXG4gIC5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkLnJldmVyc2UgLnNvbHV0aW9uLWNvbnRlbnQge1xuICAgIG9yZGVyOiB1bnNldDtcbiAgfVxufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLXZpc3VhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tdmlzdWFsIC5zb2x1dGlvbi1pY29uLWxhcmdlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi12aXN1YWwgLnNvbHV0aW9uLWljb24tbGFyZ2UgLnNvbHV0aW9uLXN2Zy1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLXZpc3VhbCAuc29sdXRpb24tc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tdmlzdWFsIC5zb2x1dGlvbi1zdGF0cyAuc3RhdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLXZpc3VhbCAuc29sdXRpb24tc3RhdHMgLnN0YXQtaXRlbSAuc3RhdC1udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLXZpc3VhbCAuc29sdXRpb24tc3RhdHMgLnN0YXQtaXRlbSAuc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLWNvbnRlbnQgLnNvbHV0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi1oZWFkZXIgaDMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24taGVhZGVyIC5zb2x1dGlvbi1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24tZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLWNvbnRlbnQgLnNvbHV0aW9uLWZlYXR1cmVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi1mZWF0dXJlcyBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24tZmVhdHVyZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24tZmVhdHVyZXMgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi1mZWF0dXJlcyB1bCBsaSBpIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24tdGVjaG5vbG9naWVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi10ZWNobm9sb2dpZXMgaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmRldGFpbGVkLXNvbHV0aW9ucyAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQgLnNvbHV0aW9uLWNvbnRlbnQgLnNvbHV0aW9uLXRlY2hub2xvZ2llcyAudGVjaC1zdGFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZGV0YWlsZWQtc29sdXRpb25zIC5zb2x1dGlvbnMtZ3JpZCAuc29sdXRpb24tY2FyZCAuc29sdXRpb24tY29udGVudCAuc29sdXRpb24tdGVjaG5vbG9naWVzIC50ZWNoLXN0YWNrIC50ZWNoLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kZXRhaWxlZC1zb2x1dGlvbnMgLnNvbHV0aW9ucy1ncmlkIC5zb2x1dGlvbi1jYXJkIC5zb2x1dGlvbi1jb250ZW50IC5zb2x1dGlvbi1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5pbmR1c3RyeS1leHBlcnRpc2Uge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5leHBlcnRpc2UtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmluZHVzdHJ5LWV4cGVydGlzZSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5pbmR1c3RyeS1leHBlcnRpc2UgLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmluZHVzdHJ5LWV4cGVydGlzZSAuaW5kdXN0cmllcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi5pbmR1c3RyeS1leHBlcnRpc2UgLmluZHVzdHJpZXMtZ3JpZCAuaW5kdXN0cnktY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5pbmR1c3RyeS1leHBlcnRpc2UgLmluZHVzdHJpZXMtZ3JpZCAuaW5kdXN0cnktY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5pbmR1c3RyeS1leHBlcnRpc2UgLmluZHVzdHJpZXMtZ3JpZCAuaW5kdXN0cnktY2FyZCAuaW5kdXN0cnktaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgLmluZHVzdHJ5LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmluZHVzdHJ5LWV4cGVydGlzZSAuaW5kdXN0cmllcy1ncmlkIC5pbmR1c3RyeS1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgLmluZHVzdHJ5LXNvbHV0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5pbmR1c3RyeS1leHBlcnRpc2UgLmluZHVzdHJpZXMtZ3JpZCAuaW5kdXN0cnktY2FyZCAuaW5kdXN0cnktc29sdXRpb25zIC5zb2x1dGlvbi10YWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgLmluZHVzdHJ5LW1ldHJpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgLmluZHVzdHJ5LW1ldHJpY3MgLm1ldHJpYy1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluZHVzdHJ5LWV4cGVydGlzZSAuaW5kdXN0cmllcy1ncmlkIC5pbmR1c3RyeS1jYXJkIC5pbmR1c3RyeS1tZXRyaWNzIC5tZXRyaWMtaXRlbSAubWV0cmljLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uaW5kdXN0cnktZXhwZXJ0aXNlIC5pbmR1c3RyaWVzLWdyaWQgLmluZHVzdHJ5LWNhcmQgLmluZHVzdHJ5LW1ldHJpY3MgLm1ldHJpYy1pdGVtIC5tZXRyaWMtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmRldmVsb3BtZW50LXByb2Nlc3Mge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUgLnByb2Nlc3Mtc3RlcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUgLnByb2Nlc3Mtc3RlcDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAycmVtO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1pY29uIGkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUgLnByb2Nlc3Mtc3RlcCAuc3RlcC1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtY29udGVudCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUgLnByb2Nlc3Mtc3RlcCAuc3RlcC1jb250ZW50IC5zdGVwLWRlbGl2ZXJhYmxlcyBoNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLmRldmVsb3BtZW50LXByb2Nlc3MgLnByb2Nlc3MtdGltZWxpbmUgLnByb2Nlc3Mtc3RlcCAuc3RlcC1jb250ZW50IC5zdGVwLWRlbGl2ZXJhYmxlcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1kZWxpdmVyYWJsZXMgdWwgbGkge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZXZlbG9wbWVudC1wcm9jZXNzIC5wcm9jZXNzLXRpbWVsaW5lIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1kZWxpdmVyYWJsZXMgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6LCgMKiXCI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4udGVjaG5vbG9neS1zdGFjayB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbn1cbi50ZWNobm9sb2d5LXN0YWNrIC50ZWNoLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50ZWNobm9sb2d5LXN0YWNrIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnRlY2hub2xvZ3ktc3RhY2sgLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRlY2hub2xvZ3ktc3RhY2sgLnRlY2gtY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG4udGVjaG5vbG9neS1zdGFjayAudGVjaC1jYXRlZ29yaWVzIC50ZWNoLWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi50ZWNobm9sb2d5LXN0YWNrIC50ZWNoLWNhdGVnb3JpZXMgLnRlY2gtY2F0ZWdvcnkgLnRlY2gtY2F0ZWdvcnktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4udGVjaG5vbG9neS1zdGFjayAudGVjaC1jYXRlZ29yaWVzIC50ZWNoLWNhdGVnb3J5IC50ZWNoLWNhdGVnb3J5LWhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4udGVjaG5vbG9neS1zdGFjayAudGVjaC1jYXRlZ29yaWVzIC50ZWNoLWNhdGVnb3J5IC50ZWNoLWNhdGVnb3J5LWhlYWRlciAudGVjaC1jb3VudCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4udGVjaG5vbG9neS1zdGFjayAudGVjaC1jYXRlZ29yaWVzIC50ZWNoLWNhdGVnb3J5IC50ZWNoLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEuMjVyZW07XG59XG4udGVjaG5vbG9neS1zdGFjayAudGVjaC1jYXRlZ29yaWVzIC50ZWNoLWNhdGVnb3J5IC50ZWNoLWl0ZW1zIC50ZWNoLWl0ZW0gLnRlY2gtbmFtZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi50ZWNobm9sb2d5LXN0YWNrIC50ZWNoLWNhdGVnb3JpZXMgLnRlY2gtY2F0ZWdvcnkgLnRlY2gtaXRlbXMgLnRlY2gtaXRlbSAudGVjaC1uYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4ud2h5LWNob29zZS11cyB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcbn1cbi53aHktY2hvb3NlLXVzIC53aHktY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLndoeS1jaG9vc2UtdXMgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4ud2h5LWNob29zZS11cyAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ud2h5LWNob29zZS11cyAuYWR2YW50YWdlcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi53aHktY2hvb3NlLXVzIC5hZHZhbnRhZ2VzLWdyaWQgLmFkdmFudGFnZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4ud2h5LWNob29zZS11cyAuYWR2YW50YWdlcy1ncmlkIC5hZHZhbnRhZ2UtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi53aHktY2hvb3NlLXVzIC5hZHZhbnRhZ2VzLWdyaWQgLmFkdmFudGFnZS1jYXJkIC5hZHZhbnRhZ2UtaWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2h5LWNob29zZS11cyAuYWR2YW50YWdlcy1ncmlkIC5hZHZhbnRhZ2UtY2FyZCAuYWR2YW50YWdlLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndoeS1jaG9vc2UtdXMgLmFkdmFudGFnZXMtZ3JpZCAuYWR2YW50YWdlLWNhcmQgaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLndoeS1jaG9vc2UtdXMgLmFkdmFudGFnZXMtZ3JpZCAuYWR2YW50YWdlLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi53aHktY2hvb3NlLXVzIC5hZHZhbnRhZ2VzLWdyaWQgLmFkdmFudGFnZS1jYXJkIC5hZHZhbnRhZ2UtbWV0cmljcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG4ud2h5LWNob29zZS11cyAuYWR2YW50YWdlcy1ncmlkIC5hZHZhbnRhZ2UtY2FyZCAuYWR2YW50YWdlLW1ldHJpY3MgLm1ldHJpYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aHktY2hvb3NlLXVzIC5hZHZhbnRhZ2VzLWdyaWQgLmFkdmFudGFnZS1jYXJkIC5hZHZhbnRhZ2UtbWV0cmljcyAubWV0cmljIC5tZXRyaWMtdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi53aHktY2hvb3NlLXVzIC5hZHZhbnRhZ2VzLWdyaWQgLmFkdmFudGFnZS1jYXJkIC5hZHZhbnRhZ2UtbWV0cmljcyAubWV0cmljIC5tZXRyaWMtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmNsaWVudC1zdWNjZXNzIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG59XG4uY2xpZW50LXN1Y2Nlc3MgLnN1Y2Nlc3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNsaWVudC1zdWNjZXNzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5jbGllbnQtc3VjY2VzcyAuc3VjY2Vzcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi5jbGllbnQtc3VjY2VzcyAuc3VjY2Vzcy1ncmlkIC5zdWNjZXNzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uY2xpZW50LXN1Y2Nlc3MgLnN1Y2Nlc3MtZ3JpZCAuc3VjY2Vzcy1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY2xpZW50LXN1Y2Nlc3MgLnN1Y2Nlc3MtZ3JpZCAuc3VjY2Vzcy1jYXJkIC5zdWNjZXNzLWhlYWRlciAuY2xpZW50LWluZm8gaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1oZWFkZXIgLmNsaWVudC1pbmZvIC5pbmR1c3RyeSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1oZWFkZXIgLnByb2plY3QtdHlwZSAudHlwZS1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2xpZW50LXN1Y2Nlc3MgLnN1Y2Nlc3MtZ3JpZCAuc3VjY2Vzcy1jYXJkIC5zdWNjZXNzLWNoYWxsZW5nZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1yZXN1bHRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1yZXN1bHRzIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2xpZW50LXN1Y2Nlc3MgLnN1Y2Nlc3MtZ3JpZCAuc3VjY2Vzcy1jYXJkIC5zdWNjZXNzLXJlc3VsdHMgLnJlc3VsdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1yZXN1bHRzIC5yZXN1bHRzLWdyaWQgLnJlc3VsdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmNsaWVudC1zdWNjZXNzIC5zdWNjZXNzLWdyaWQgLnN1Y2Nlc3MtY2FyZCAuc3VjY2Vzcy1yZXN1bHRzIC5yZXN1bHRzLWdyaWQgLnJlc3VsdC1pdGVtIGkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jbGllbnQtc3VjY2VzcyAuc3VjY2Vzcy1ncmlkIC5zdWNjZXNzLWNhcmQgLnN1Y2Nlc3MtdGVjaG5vbG9naWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5jbGllbnQtc3VjY2VzcyAuc3VjY2Vzcy1ncmlkIC5zdWNjZXNzLWNhcmQgLnN1Y2Nlc3MtdGVjaG5vbG9naWVzIC50ZWNoLXVzZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG5cbi5jdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDVyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMjM3ZSAwJSwgIzI4MzU5MyA1MCUsICMzOTQ5YWIgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmN0YS1zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjJyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyBidXR0b24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMXJlbSAyLjVyZW07XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIGJ1dHRvbi5wLWJ1dHRvbi1yYWlzZWQge1xuICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgYnV0dG9uLnAtYnV0dG9uLXJhaXNlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmYjhjMDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjMpO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgYnV0dG9uLnAtYnV0dG9uLW91dGxpbmVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyBidXR0b24ucC1idXR0b24tb3V0bGluZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWJlbmVmaXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWJlbmVmaXRzIC5iZW5lZml0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1iZW5lZml0cyAuYmVuZWZpdC1pdGVtIGkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc29sdXRpb25zLWdyaWQgLnNvbHV0aW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcbiAgICBnYXA6IDJyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuaW5kdXN0cmllcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9jZXNzLXRpbWVsaW5lIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gSGVybyBTZWN0aW9uXHJcbi5zb2x1dGlvbnMtaGVyby1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuXHJcbiAgLmhlcm8tYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaGVyby1saWdodHJheSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkgMTAwJSk7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgJi5vbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgdG9wOiAtNDAwcHg7XHJcbiAgICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudHdvIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgICAgICBib3R0b206IC0zMDBweDtcclxuICAgICAgICByaWdodDogLTEwMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50aHJlZSB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250ZW50LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNvbXBhbnktdGFnbGluZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1oZWFkbGluZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHJcbiAgICAgIC5oaWdobGlnaHQge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTb2x1dGlvbiBDYXRlZ29yaWVzXHJcbi5zb2x1dGlvbnMtY2F0ZWdvcmllcyB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcblxyXG4gIC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yaWVzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIC5jYXRlZ29yeS1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3ctaG92ZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhdGVnb3J5LW1ldHJpY3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAycmVtO1xyXG5cclxuICAgICAgICAubWV0cmljIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIERldGFpbGVkIFNvbHV0aW9uc1xyXG4uZGV0YWlsZWQtc29sdXRpb25zIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuICAuc29sdXRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zb2x1dGlvbnMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHJlbTtcclxuXHJcbiAgICAuc29sdXRpb24tY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgICAgZ2FwOiAzcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucmV2ZXJzZSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG5cclxuICAgICAgICAuc29sdXRpb24tdmlzdWFsIHtcclxuICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvbHV0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAycmVtO1xyXG5cclxuICAgICAgICAmLnJldmVyc2Uge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgICAgICAgLnNvbHV0aW9uLXZpc3VhbCxcclxuICAgICAgICAgIC5zb2x1dGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgb3JkZXI6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvbHV0aW9uLXZpc3VhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuc29sdXRpb24taWNvbi1sYXJnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuc29sdXRpb24tc3ZnLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29sdXRpb24tc3RhdHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAgICAgICAuc3RhdC1pdGVtIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnN0YXQtbnVtYmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGF0LWxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc29sdXRpb24tY29udGVudCB7XHJcbiAgICAgICAgLnNvbHV0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvbHV0aW9uLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2x1dGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29sdXRpb24tZmVhdHVyZXMge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29sdXRpb24tdGVjaG5vbG9naWVzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZWNoLXN0YWNrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgIC50ZWNoLWJhZGdlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvbHV0aW9uLWFjdGlvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEluZHVzdHJ5IEV4cGVydGlzZVxyXG4uaW5kdXN0cnktZXhwZXJ0aXNlIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuXHJcbiAgLmV4cGVydGlzZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW5kdXN0cmllcy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAuaW5kdXN0cnktY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZHVzdHJ5LWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZHVzdHJ5LXNvbHV0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAuc29sdXRpb24tdGFnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZHVzdHJ5LW1ldHJpY3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAubWV0cmljLWl0ZW0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5tZXRyaWMtdmFsdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWV0cmljLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZXZlbG9wbWVudCBQcm9jZXNzXHJcbi5kZXZlbG9wbWVudC1wcm9jZXNzIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuICAucHJvY2Vzcy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucHJvY2Vzcy10aW1lbGluZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgLnByb2Nlc3Mtc3RlcCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcC1udW1iZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIGxlZnQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwLWNvbnRlbnQge1xyXG4gICAgICAgIC5zdGVwLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0ZXAtZGVsaXZlcmFibGVzIHtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKAwqInO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRlY2hub2xvZ3kgU3RhY2tcclxuLnRlY2hub2xvZ3ktc3RhY2sge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG5cclxuICAudGVjaC1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGVjaC1jYXRlZ29yaWVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAudGVjaC1jYXRlZ29yeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcblxyXG4gICAgICAudGVjaC1jYXRlZ29yeS1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWNoLWNvdW50IHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZWNoLWl0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDEuMjVyZW07XHJcblxyXG4gICAgICAgIC50ZWNoLWl0ZW0ge1xyXG4gICAgICAgICAgLnRlY2gtbmFtZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFdoeSBDaG9vc2UgVXNcclxuLndoeS1jaG9vc2UtdXMge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xyXG5cclxuICAud2h5LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5hZHZhbnRhZ2VzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIC5hZHZhbnRhZ2UtY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW50YWdlLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbnRhZ2UtbWV0cmljcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgICAgIC5tZXRyaWMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5tZXRyaWMtdmFsdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWV0cmljLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDbGllbnQgU3VjY2VzcyBTdG9yaWVzXHJcbi5jbGllbnQtc3VjY2VzcyB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuXHJcbiAgLnN1Y2Nlc3MtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnN1Y2Nlc3MtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgLnN1Y2Nlc3MtY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Y2Nlc3MtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgIC5jbGllbnQtaW5mbyB7XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmluZHVzdHJ5IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC10eXBlIHtcclxuICAgICAgICAgIC50eXBlLWJhZGdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWNjZXNzLWNoYWxsZW5nZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWNjZXNzLXJlc3VsdHMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXN1bHRzLWdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAucmVzdWx0LWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VjY2Vzcy10ZWNobm9sb2dpZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgICAudGVjaC11c2VkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ1RBIFNlY3Rpb25cclxuLmN0YS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA1cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMjM3ZSAwJSwgIzI4MzU5MyA1MCUsICMzOTQ5YWIgMTAwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmN0YS1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdGEtYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMS4ycmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmLnAtYnV0dG9uLXJhaXNlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYjhjMDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wLWJ1dHRvbi1vdXRsaW5lZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdGEtYmVuZWZpdHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAuYmVuZWZpdC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zb2x1dGlvbnMtZ3JpZCB7XHJcbiAgICAuc29sdXRpb24tY2FyZCB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgZ2FwOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmR1c3RyaWVzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2Nlc3MtdGltZWxpbmUge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('900ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('slideUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            transform: 'translateY(40px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('900ms 400ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            transform: 'scale(0.8)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('700ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
            transform: 'scale(1)',
            opacity: 1
          }))])])]
        }
      });
    }
  }
  return ServicesComponent;
})();

/***/ }),

/***/ 2619:
/*!******************************************************!*\
  !*** ./src/app/features/services/services.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesModule: () => (/* binding */ ServicesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.component */ 9884);
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-routing.module */ 3474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





let ServicesModule = /*#__PURE__*/(() => {
  class ServicesModule {
    static {
      this.ɵfac = function ServicesModule_Factory(t) {
        return new (t || ServicesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ServicesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _services_routing_module__WEBPACK_IMPORTED_MODULE_2__.ServicesRoutingModule, _services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent]
      });
    }
  }
  return ServicesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServicesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _services_routing_module__WEBPACK_IMPORTED_MODULE_2__.ServicesRoutingModule, _services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent]
  });
})();

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 3673);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 5728);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/selectbutton */ 9656);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/radiobutton */ 7046);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ 6771);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ 1416);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ 3244);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/panelmenu */ 8635);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/steps */ 6997);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/accordion */ 5206);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/divider */ 6171);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/slider */ 7763);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 8290);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 3568);
/* harmony import */ var _consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultation-dialog/consultation-dialog.component */ 5828);
/* harmony import */ var _quote_dialog_quote_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-dialog/quote-dialog.component */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 7580);



// PrimeNG Imports


























// Components





const PRIMENG_MODULES = [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DynamicDialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule, primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinnerModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.TooltipModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_20__.PanelMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_21__.StepsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_24__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_slider__WEBPACK_IMPORTED_MODULE_26__.SliderModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule];
let SharedModule = /*#__PURE__*/(() => {
  class SharedModule {
    static {
      this.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_30__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_30__.ConfirmationService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule, PRIMENG_MODULES, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConsultationDialogComponent, _quote_dialog_quote_dialog_component__WEBPACK_IMPORTED_MODULE_3__.QuoteDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DynamicDialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule, primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinnerModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.TooltipModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_20__.PanelMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_21__.StepsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_24__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_slider__WEBPACK_IMPORTED_MODULE_26__.SliderModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule]
      });
    }
  }
  return SharedModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DynamicDialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule, primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinnerModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.TooltipModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_20__.PanelMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_21__.StepsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_24__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_slider__WEBPACK_IMPORTED_MODULE_26__.SliderModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConsultationDialogComponent, _quote_dialog_quote_dialog_component__WEBPACK_IMPORTED_MODULE_3__.QuoteDialogComponent],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.MenubarModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DynamicDialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__.SelectButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule, primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinnerModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.TooltipModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_20__.PanelMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_21__.StepsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_24__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule, primeng_slider__WEBPACK_IMPORTED_MODULE_26__.SliderModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConsultationDialogComponent, _quote_dialog_quote_dialog_component__WEBPACK_IMPORTED_MODULE_3__.QuoteDialogComponent]
  });
})();

/***/ }),

/***/ 9240:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 4876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 9114:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 4318);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);




function debounce(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    const emit = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      hasValue = true;
      lastValue = value;
      durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop);
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = durationSubscriber = null;
    }));
  });
}

/***/ }),

/***/ 1726:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleright.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleRightIcon: () => (/* binding */ AngleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let AngleRightIcon = /*#__PURE__*/(() => {
  class AngleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleRightIcon_BaseFactory;
      return function AngleRightIcon_Factory(t) {
        return (ɵAngleRightIcon_BaseFactory || (ɵAngleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleRightIcon)))(t || AngleRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleRightIcon,
      selectors: [["AngleRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
      template: function AngleRightIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5961:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-bars.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarsIcon: () => (/* binding */ BarsIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let BarsIcon = /*#__PURE__*/(() => {
  class BarsIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵBarsIcon_BaseFactory;
      return function BarsIcon_Factory(t) {
        return (ɵBarsIcon_BaseFactory || (ɵBarsIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BarsIcon)))(t || BarsIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BarsIcon,
      selectors: [["BarsIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z", "fill", "currentColor"]],
      template: function BarsIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return BarsIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3673:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-menu.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   MenuItemContent: () => (/* binding */ MenuItemContent),
/* harmony export */   MenuModule: () => (/* binding */ MenuModule),
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
















const _c0 = ["pMenuItemContent", ""];
const _c1 = a0 => ({
  "p-disabled": a0
});
const _c2 = a0 => ({
  $implicit: a0
});
const _c3 = () => ({
  exact: false
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const itemContent_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r1.item.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r1.item.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const itemContent_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3))("target", ctx_r1.item.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx_r1.item.disabled))("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action")("title", ctx_r1.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_1_Template, 2, 13, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 22, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.item.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.item.icon)("ngStyle", ctx_r1.item.iconStyle);
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.item.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function MenuItemContent_ng_template_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.item.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuItemContent_ng_template_3_span_0_Template, 1, 4, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 1, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, MenuItemContent_ng_template_3_span_4_Template, 2, 2, "span", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
  }
}
const _c4 = ["list"];
const _c5 = ["container"];
const _c6 = a0 => ({
  "p-menu p-component": true,
  "p-menu-overlay": a0
});
const _c7 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c8 = a0 => ({
  value: "visible",
  params: a0
});
const _c9 = a0 => ({
  "p-hidden": a0
});
const _c10 = (a0, a1) => ({
  "p-hidden": a0,
  flex: a1
});
const _c11 = (a0, a1, a2) => ({
  "p-hidden": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    const submenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c9, submenu_r3.visible === false));
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, submenu_r3.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 17)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const submenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c10, submenu_r3.visible === false, submenu_r3.visible))("tooltipOptions", submenu_r3.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.submenuHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.submenuHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const submenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c9, item_r7.visible === false || submenu_r3.visible === false));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r7 = ctx_r8.$implicit;
      const j_r10 = ctx_r8.index;
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r7, ctx_r1.id, i_r6, j_r10)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r7 = ctx_r8.$implicit;
    const j_r10 = ctx_r8.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r7.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pMenuItemContent", item_r7)("itemTemplate", ctx_r1.itemTemplate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c11, item_r7.visible === false || submenu_r3.visible === false, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r7, ctx_r1.id, i_r6, j_r10) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r7.disabled)))("ngStyle", item_r7.style)("tooltipOptions", item_r7.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r7.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r7, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r7.disabled))("aria-disabled", ctx_r1.disabled(item_r7.disabled))("id", ctx_r1.menuitemId(item_r7, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 3, "li", 12)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 17, "li", 19);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r7.separator);
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 3, "li", 12)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 12, "li", 13)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r3.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !submenu_r3.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c9, item_r11.visible === false));
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r11 = ctx_r12.$implicit;
      const i_r14 = ctx_r12.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r14)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r11.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pMenuItemContent", item_r11)("itemTemplate", ctx_r1.itemTemplate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c11, item_r11.visible === false, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r14, ctx_r1.j) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r11.disabled)))("ngStyle", item_r11.style)("tooltipOptions", item_r11.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r11.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r11.disabled))("aria-disabled", ctx_r1.disabled(item_r11.disabled))("id", ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 3, "li", 12)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 17, "li", 19);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.separator);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Menu_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Menu_div_0_div_2_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onListKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Menu_div_0_div_7_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c6, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c7, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "menu")("id", ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.startTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasSubMenu());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hasSubMenu());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.endTemplate);
  }
}
let SafeHtmlPipe = /*#__PURE__*/(() => {
  class SafeHtmlPipe {
    platformId;
    sanitizer;
    constructor(platformId, sanitizer) {
      this.platformId = platformId;
      this.sanitizer = sanitizer;
    }
    transform(value) {
      if (!value || !(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        return value;
      }
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    static ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
  return SafeHtmlPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenuItemContent = /*#__PURE__*/(() => {
  class MenuItemContent {
    item;
    itemTemplate;
    onMenuItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menu;
    constructor(menu) {
      this.menu = menu;
    }
    onItemClick(event, item) {
      this.onMenuItemClick.emit({
        originalEvent: event,
        item
      });
    }
    static ɵfac = function MenuItemContent_Factory(t) {
      return new (t || MenuItemContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Menu)));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuItemContent,
      selectors: [["", "pMenuItemContent", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        item: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pMenuItemContent", "item"],
        itemTemplate: "itemTemplate"
      },
      outputs: {
        onMenuItemClick: "onMenuItemClick"
      },
      attrs: _c0,
      decls: 5,
      vars: 3,
      consts: [["itemContent", ""], ["htmlLabel", ""], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], ["class", "p-menuitem-link", "pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 1, "p-menuitem-link", 3, "target", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menuitem-link-active", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menuitem-icon", 3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"]],
      template: function MenuItemContent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemContent_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onItemClick($event, ctx.item));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.itemTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, SafeHtmlPipe],
      encapsulation: 2
    });
  }
  return MenuItemContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Menu is a navigation / command component that supports dynamic and static positioning.
 * @group Components
 */
let Menu = /*#__PURE__*/(() => {
  class Menu {
    document;
    platformId;
    el;
    renderer;
    cd;
    config;
    overlayService;
    /**
     * An array of menuitems.
     * @group Props
     */
    model;
    /**
     * Defines if menu would displayed as a popup.
     * @group Props
     */
    popup;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the list loses focus.
     * @param {Event} event - blur event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the list receives focus.
     * @param {Event} event - focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    containerViewChild;
    templates;
    startTemplate;
    endTemplate;
    itemTemplate;
    submenuHeaderTemplate;
    container;
    scrollHandler;
    documentClickListener;
    documentResizeListener;
    preventDocumentDefault;
    target;
    visible;
    focusedOptionId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
    });
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    selectedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    focused = false;
    overlayVisible = false;
    relativeAlign;
    constructor(document, platformId, el, renderer, cd, config, overlayService) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_5__.UniqueComponentId)();
    }
    /**
     * Toggles the visibility of the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    toggle(event) {
      if (this.visible) this.hide();else this.show(event);
      this.preventDocumentDefault = true;
    }
    /**
     * Displays the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    show(event) {
      if (this.visible && this.target !== event.currentTarget) {
        this.hide();
      }
      this.target = event.currentTarget;
      this.relativeAlign = event.relativeAlign;
      this.visible = true;
      this.preventDocumentDefault = true;
      this.overlayVisible = true;
      this.cd.detectChanges();
    }
    ngOnInit() {
      if (!this.popup) {
        this.bindDocumentClickListener();
      }
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'start':
            this.startTemplate = item.template;
            break;
          case 'end':
            this.endTemplate = item.template;
            break;
          case 'itemTemplate':
            this.itemTemplate = item.template;
            break;
          case 'submenuheader':
            this.submenuHeaderTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    getTabIndexValue() {
      return this.tabindex !== undefined ? this.tabindex.toString() : null;
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          if (this.popup) {
            this.container = event.element;
            this.moveOnTop();
            this.onShow.emit({});
            this.appendOverlay();
            this.alignOverlay();
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.listViewChild.nativeElement);
            this.preventDocumentDefault = true;
          }
          break;
        case 'void':
          this.onOverlayHide();
          this.onHide.emit({});
          break;
      }
    }
    onOverlayAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(event.element);
          }
          break;
      }
    }
    alignOverlay() {
      if (this.relativeAlign) primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.relativePosition(this.container, this.target);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.absolutePosition(this.container, this.target);
    }
    appendOverlay() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendChild(this.container, this.appendTo);
      }
    }
    restoreOverlayAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.container);
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('menu', this.container, this.baseZIndex + this.config.zIndex.menu);
      }
    }
    /**
     * Hides the popup menu.
     * @group Method
     */
    hide() {
      this.visible = false;
      this.relativeAlign = false;
      this.cd.detectChanges();
    }
    onWindowResize() {
      if (this.visible && !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice()) {
        this.hide();
      }
    }
    menuitemId(item, id, index, childIndex) {
      return item?.id ?? `${id}_${index}${childIndex !== undefined ? '_' + childIndex : ''}`;
    }
    isItemFocused(id) {
      return this.focusedOptionId() === id;
    }
    label(label) {
      return typeof label === 'function' ? label() : label;
    }
    disabled(disabled) {
      return typeof disabled === 'function' ? disabled() : typeof disabled === 'undefined' ? false : disabled;
    }
    activedescendant() {
      return this.focused ? this.focusedOptionId() : undefined;
    }
    onListFocus(event) {
      if (!this.focused) {
        this.focused = true;
        this.onFocus.emit(event);
      }
    }
    onListBlur(event) {
      if (this.focused) {
        this.focused = false;
        this.changeFocusedOptionIndex(-1);
        this.selectedOptionIndex.set(-1);
        this.focusedOptionIndex.set(-1);
        this.onBlur.emit(event);
      }
    }
    onListKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Escape':
        case 'Tab':
          if (this.popup) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
            this.hide();
          }
          this.overlayVisible && this.hide();
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey && this.popup) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
        this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
        this.changeFocusedOptionIndex(optionIndex);
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedOptionIndex(0);
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedOptionIndex(primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
      event.preventDefault();
    }
    onEnterKey(event) {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
      const anchorElement = element && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(element, 'a');
      this.popup && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
      anchorElement ? anchorElement.click() : element && element.click();
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    findNextOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      const matchedOptionIndex = [...links].findIndex(link => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    }
    findPrevOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      const matchedOptionIndex = [...links].findIndex(link => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    }
    changeFocusedOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      if (links.length > 0) {
        let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
        order > -1 && this.focusedOptionIndex.set(links[order].getAttribute('id'));
      }
    }
    itemClick(event, id) {
      const {
        originalEvent,
        item
      } = event;
      if (!this.focused) {
        this.focused = true;
        this.onFocus.emit();
      }
      if (item.disabled) {
        originalEvent.preventDefault();
        return;
      }
      if (!item.url && !item.routerLink) {
        originalEvent.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: originalEvent,
          item: item
        });
      }
      if (this.popup) {
        this.hide();
      }
      if (!this.popup && this.focusedOptionIndex() !== id) {
        this.focusedOptionIndex.set(id);
      }
    }
    onOverlayClick(event) {
      if (this.popup) {
        this.overlayService.add({
          originalEvent: event,
          target: this.el.nativeElement
        });
      }
      this.preventDocumentDefault = true;
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
          const eventTarget = event.composed ? event.composedPath()[0] : event.target;
          const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(eventTarget);
          const isOutsideTarget = !(this.target && (this.target === eventTarget || this.target.contains(eventTarget)));
          if (!this.popup && isOutsideContainer && isOutsideTarget) {
            this.onListBlur(event);
          }
          if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
            this.hide();
            this.preventDocumentDefault = false;
          }
        });
      }
    }
    unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
    }
    bindDocumentResizeListener() {
      if (!this.documentResizeListener && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, 'resize', this.onWindowResize.bind(this));
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindScrollListener() {
      if (!this.scrollHandler && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_6__.ConnectedOverlayScrollHandler(this.target, () => {
          if (this.visible) {
            this.hide();
          }
        });
      }
      this.scrollHandler?.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    onOverlayHide() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.preventDocumentDefault = false;
    }
    ngOnDestroy() {
      if (this.popup) {
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        if (this.container && this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(this.container);
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
      }
      if (!this.popup) {
        this.unbindDocumentClickListener();
      }
    }
    hasSubMenu() {
      if (this.model) {
        for (var item of this.model) {
          if (item.items) {
            return true;
          }
        }
      }
      return false;
    }
    isItemHidden(item) {
      if (item.separator) {
        return item.visible === false || item.items && item.items.some(subitem => subitem.visible !== false);
      }
      return item.visible === false;
    }
    static ɵfac = function Menu_Factory(t) {
      return new (t || Menu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Menu,
      selectors: [["p-menu"]],
      contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Menu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        popup: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "popup", "popup", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        style: "style",
        styleClass: "styleClass",
        appendTo: "appendTo",
        autoZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        baseZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        id: "id",
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        onBlur: "onBlur",
        onFocus: "onFocus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 1,
      vars: 1,
      consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "ngClass", "ngStyle"], ["class", "p-menu-start", 4, "ngIf"], ["role", "menu", 1, "p-menu-list", "p-reset", 3, "focus", "blur", "keydown"], [4, "ngIf"], ["class", "p-menu-end", 4, "ngIf"], [1, "p-menu-start"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["class", "p-submenu-header", "pTooltip", "", "role", "none", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator", 3, "ngClass"], ["pTooltip", "", "role", "none", 1, "p-submenu-header", 3, "ngClass", "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["class", "p-menuitem", "pTooltip", "", "role", "menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "class", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 1, "p-menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "tooltipOptions"], [1, "p-menu-end"]],
      template: function Menu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_Template, 8, 25, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.popup || ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, MenuItemContent, SafeHtmlPipe],
      styles: ["@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0,
          transform: 'scaleY(0.8)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Menu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenuModule = /*#__PURE__*/(() => {
  class MenuModule {
    static ɵfac = function MenuModule_Factory(t) {
      return new (t || MenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
    });
  }
  return MenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5728:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-menubar.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menubar: () => (/* binding */ Menubar),
/* harmony export */   MenubarModule: () => (/* binding */ MenubarModule),
/* harmony export */   MenubarService: () => (/* binding */ MenubarService),
/* harmony export */   MenubarSub: () => (/* binding */ MenubarSub)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angledown */ 8776);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/angleright */ 1726);
/* harmony import */ var primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/bars */ 5961);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9114);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1567);



















const _c0 = ["menubar"];
const _c1 = (a0, a1) => ({
  "p-submenu-list": a0,
  "p-menubar-root-list": a1
});
const _c2 = a0 => ({
  "p-menuitem-link": true,
  "p-disabled": a0
});
const _c3 = () => ({
  exact: false
});
const _c4 = (a0, a1) => ({
  $implicit: a0,
  root: a1
});
function MenubarSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getSeparatorItemClass(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "separator");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("tabindex", -1);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.getItemLabelId(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.getItemLabel(processedItem_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("id", ctx_r2.getItemLabelId(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 24)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.root);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 11)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.submenuIconTemplate);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 16)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 3, "span", 17)(3, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 18)(6, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlLabel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r2.getItemProp(processedItem_r2, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("data-pc-section", "action")("tabindex", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("tabindex", -1);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getItemLabel(processedItem_r2));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.getItemLabel(processedItem_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 24)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.root);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 11)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    const menubar_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menubar_r6.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", menubar_r6.submenuIconTemplate);
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 4, "span", 16)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 1, "span", 28)(3, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 18)(6, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1)("data-pc-section", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlRouteLabel_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 13, "a", 13)(2, MenubarSub_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 23, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getItemProp(processedItem_r2, "routerLink"));
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function MenubarSub_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenubarSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenubarSub_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenubarSub_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, processedItem_r2.item, ctx_r2.root));
  }
}
function MenubarSub_ng_template_2_li_1_p_menubarSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubarSub", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MenubarSub_ng_template_2_li_1_p_menubarSub_5_Template_p_menubarSub_itemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function MenubarSub_ng_template_2_li_1_p_menubarSub_5_Template_p_menubarSub_itemMouseEnter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemTemplate", ctx_r2.itemTemplate)("items", processedItem_r2.items)("mobileActive", ctx_r2.mobileActive)("autoDisplay", ctx_r2.autoDisplay)("menuId", ctx_r2.menuId)("activeItemPath", ctx_r2.activeItemPath)("focusedItemId", ctx_r2.focusedItemId)("level", ctx_r2.level + 1)("ariaLabelledBy", ctx_r2.getItemLabelId(processedItem_r2));
  }
}
function MenubarSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9, 1)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarSub_ng_template_2_li_1_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemClick($event, processedItem_r2));
    })("mouseenter", function MenubarSub_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemMouseEnter({
        $event: $event,
        processedItem: processedItem_r2
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenubarSub_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, MenubarSub_ng_template_2_li_1_ng_container_4_Template, 2, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenubarSub_ng_template_2_li_1_p_menubarSub_5_Template, 1, 9, "p-menubarSub", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r2 = ctx_r8.$implicit;
    const index_r10 = ctx_r8.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getItemProp(processedItem_r2, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getItemClass(processedItem_r2))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "menuitem")("data-p-highlight", ctx_r2.isItemActive(processedItem_r2))("data-p-focused", ctx_r2.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2))("aria-label", ctx_r2.getItemLabel(processedItem_r2))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r2) || undefined)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "to") ? "menu" : undefined)("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : undefined)("aria-level", ctx_r2.level + 1)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2));
  }
}
function MenubarSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenubarSub_ng_template_2_li_0_Template, 1, 4, "li", 6)(1, MenubarSub_ng_template_2_li_1_Template, 6, 21, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.getItemProp(processedItem_r2, "separator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "separator"));
  }
}
const _c5 = ["menubutton"];
const _c6 = ["rootmenu"];
const _c7 = ["*"];
const _c8 = a0 => ({
  "p-menubar p-component": true,
  "p-menubar-mobile-active": a0
});
function Menubar_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menubar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menubar_div_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.startTemplate);
  }
}
function Menubar_a_2_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "BarsIcon");
  }
}
function Menubar_a_2_3_ng_template_0_Template(rf, ctx) {}
function Menubar_a_2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menubar_a_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Menubar_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Menubar_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.menuButtonClick($event));
    })("keydown", function Menubar_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.menuButtonKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Menubar_a_2_BarsIcon_2_Template, 1, 0, "BarsIcon", 11)(3, Menubar_a_2_3_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx_r1.model.length && ctx_r1.model.length > 0 ? true : false)("aria-expanded", ctx_r1.mobileActive)("aria-controls", ctx_r1.id)("aria-label", ctx_r1.config.translation.aria.navigation)("data-pc-section", "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.menuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.menuIconTemplate);
  }
}
function Menubar_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menubar_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menubar_div_5_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.endTemplate);
  }
}
function Menubar_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
let MenubarService = /*#__PURE__*/(() => {
  class MenubarService {
    autoHide;
    autoHideDelay;
    mouseLeaves = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    mouseLeft$ = this.mouseLeaves.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(this.autoHideDelay)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(mouseLeft => this.autoHide && mouseLeft));
    static ɵfac = function MenubarService_Factory(t) {
      return new (t || MenubarService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenubarService,
      factory: MenubarService.ɵfac
    });
  }
  return MenubarService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenubarSub = /*#__PURE__*/(() => {
  class MenubarSub {
    el;
    renderer;
    cd;
    menubarService;
    items;
    itemTemplate;
    root = false;
    autoZIndex = true;
    baseZIndex = 0;
    mobileActive;
    autoDisplay;
    menuId;
    ariaLabel;
    ariaLabelledBy;
    level = 0;
    focusedItemId;
    activeItemPath;
    submenuIconTemplate;
    itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menubarViewChild;
    mouseLeaveSubscriber;
    constructor(el, renderer, cd, menubarService) {
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.menubarService = menubarService;
    }
    ngOnInit() {
      this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => {
        this.cd.markForCheck();
      });
    }
    onItemClick(event, processedItem) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemClick.emit({
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    }
    getItemProp(processedItem, name, params = null) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    }
    getItemId(processedItem) {
      return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
    }
    getItemKey(processedItem) {
      return this.getItemId(processedItem);
    }
    getItemLabelId(processedItem) {
      return `${this.menuId}_${processedItem.key}_label`;
    }
    getItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem': true,
        'p-highlight': this.isItemActive(processedItem),
        'p-menuitem-active': this.isItemActive(processedItem),
        'p-focus': this.isItemFocused(processedItem),
        'p-disabled': this.isItemDisabled(processedItem)
      };
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    getSeparatorItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem-separator': true
      };
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemActive(processedItem) {
      if (this.activeItemPath) {
        return this.activeItemPath.some(path => path.key === processedItem.key);
      }
    }
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    }
    isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    }
    isItemGroup(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    getAriaSetSize() {
      return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
    }
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
    }
    onItemMouseLeave() {
      this.menubarService.mouseLeaves.next(true);
    }
    onItemMouseEnter(param) {
      if (this.autoDisplay) {
        this.menubarService.mouseLeaves.next(false);
        const {
          event,
          processedItem
        } = param;
        this.itemMouseEnter.emit({
          originalEvent: event,
          processedItem
        });
      }
    }
    ngOnDestroy() {
      this.mouseLeaveSubscriber?.unsubscribe();
    }
    static ɵfac = function MenubarSub_Factory(t) {
      return new (t || MenubarSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MenubarService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenubarSub,
      selectors: [["p-menubarSub"]],
      viewQuery: function MenubarSub_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menubarViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        items: "items",
        itemTemplate: "itemTemplate",
        root: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "root", "root", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        baseZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        mobileActive: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "mobileActive", "mobileActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoDisplay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoDisplay", "autoDisplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        menuId: "menuId",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        level: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "level", "level", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        focusedItemId: "focusedItemId",
        activeItemPath: "activeItemPath",
        submenuIconTemplate: "submenuIconTemplate"
      },
      outputs: {
        itemClick: "itemClick",
        itemMouseEnter: "itemMouseEnter",
        menuFocus: "menuFocus",
        menuBlur: "menuBlur",
        menuKeydown: "menuKeydown"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 3,
      vars: 11,
      consts: [["menubar", ""], ["listItem", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["role", "menubar", 3, "focus", "blur", "keydown", "ngClass", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "ngStyle", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngStyle", "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "itemTemplate", "items", "mobileActive", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "ariaLabelledBy", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 3, "id", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text", 3, "id"], [1, "p-menuitem-text", 3, "innerHTML", "id"], [1, "p-menuitem-badge", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "data-pc-section"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "itemTemplate", "items", "mobileActive", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "level", "ariaLabelledBy"]],
      template: function MenubarSub_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MenubarSub_Template_ul_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuFocus.emit($event));
          })("blur", function MenubarSub_Template_ul_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuBlur.emit($event));
          })("keydown", function MenubarSub_Template_ul_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuKeydown.emit($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenubarSub_ng_template_2_Template, 2, 2, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, !ctx.root, ctx.root))("tabindex", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menu")("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.root ? ctx.menuId : null)("aria-activedescendant", ctx.focusedItemId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__.AngleRightIcon, MenubarSub],
      encapsulation: 2
    });
  }
  return MenubarSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Menubar is a horizontal menu component.
 * @group Components
 */
let Menubar = /*#__PURE__*/(() => {
  class Menubar {
    document;
    platformId;
    el;
    renderer;
    cd;
    config;
    menubarService;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value) {
      this._model = value;
      this._processedItems = this.createProcessedItems(this._model || []);
    }
    get model() {
      return this._model;
    }
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Whether to show a root submenu on mouse over.
     * @defaultValue true
     * @group Props
     */
    autoDisplay = true;
    /**
     * Whether to hide a root submenu when mouse leaves.
     * @group Props
     */
    autoHide;
    /**
     * Delay to hide the root submenu in milliseconds when mouse leaves.
     * @group Props
     */
    autoHideDelay = 100;
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Callback to execute when button is focused.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to execute when button loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    menubutton;
    rootmenu;
    startTemplate;
    endTemplate;
    menuIconTemplate;
    submenuIconTemplate;
    itemTemplate;
    mobileActive;
    outsideClickListener;
    resizeListener;
    mouseLeaveSubscriber;
    dirty = false;
    focused = false;
    activeItemPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    number = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0);
    focusedItemInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      index: -1,
      level: 0,
      parentKey: '',
      item: null
    });
    searchValue = '';
    searchTimeout;
    _processedItems;
    _model;
    get visibleItems() {
      const processedItem = this.activeItemPath().find(p => p.key === this.focusedItemInfo().parentKey);
      return processedItem ? processedItem.items : this.processedItems;
    }
    get processedItems() {
      if (!this._processedItems || !this._processedItems.length) {
        this._processedItems = this.createProcessedItems(this.model || []);
      }
      return this._processedItems;
    }
    get focusedItemId() {
      const focusedItem = this.focusedItemInfo();
      return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(focusedItem.parentKey) ? '_' + focusedItem.parentKey : ''}_${focusedItem.index}` : null;
    }
    constructor(document, platformId, el, renderer, cd, config, menubarService) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.menubarService = menubarService;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const path = this.activeItemPath();
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(path)) {
          this.bindOutsideClickListener();
          this.bindResizeListener();
        } else {
          this.unbindOutsideClickListener();
          this.unbindResizeListener();
        }
      });
    }
    ngOnInit() {
      this.menubarService.autoHide = this.autoHide;
      this.menubarService.autoHideDelay = this.autoHideDelay;
      this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => this.unbindOutsideClickListener());
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_5__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'start':
            this.startTemplate = item.template;
            break;
          case 'end':
            this.endTemplate = item.template;
            break;
          case 'menuicon':
            this.menuIconTemplate = item.template;
            break;
          case 'submenuicon':
            this.submenuIconTemplate = item.template;
            break;
          case 'item':
            this.itemTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newItem = {
          item,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem['items'] = this.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    }
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    menuButtonClick(event) {
      this.toggle(event);
    }
    menuButtonKeydown(event) {
      (event.code === 'Enter' || event.code === 'Space') && this.menuButtonClick(event);
    }
    onItemClick(event) {
      const {
        originalEvent,
        processedItem
      } = event;
      const grouped = this.isProcessedItemGroup(processedItem);
      const root = primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isEmpty(processedItem.parent);
      const selected = this.isSelected(processedItem);
      if (selected) {
        const {
          index,
          key,
          level,
          parentKey,
          item
        } = processedItem;
        this.activeItemPath.set(this.activeItemPath().filter(p => key !== p.key && key.startsWith(p.key)));
        this.focusedItemInfo.set({
          index,
          level,
          parentKey,
          item
        });
        this.dirty = !root;
        primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          const rootProcessedItem = root ? processedItem : this.activeItemPath().find(p => p.parentKey === '');
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          this.mobileActive = false;
          primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
        }
      }
    }
    onItemMouseEnter(event) {
      if (!primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.isTouchDevice()) {
        if (!this.mobileActive) {
          this.onItemChange(event);
        }
      }
    }
    changeFocusedItemIndex(event, index) {
      const processedItem = this.findVisibleItem(index);
      if (this.focusedItemInfo().index !== index) {
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set({
          ...focusedItemInfo,
          item: processedItem.item,
          index
        });
        this.scrollInView();
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
    onItemChange(event) {
      const {
        processedItem,
        isFocus
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isEmpty(processedItem)) return;
      const {
        index,
        key,
        level,
        parentKey,
        items,
        item
      } = processedItem;
      const grouped = primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(items);
      const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== parentKey && p.parentKey !== key);
      grouped && activeItemPath.push(processedItem);
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      this.activeItemPath.set(activeItemPath);
      grouped && (this.dirty = true);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
    }
    toggle(event) {
      if (this.mobileActive) {
        this.mobileActive = false;
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(this.rootmenu.el.nativeElement);
        this.hide();
      } else {
        this.mobileActive = true;
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('menu', this.rootmenu.el.nativeElement, this.config.zIndex.menu);
        setTimeout(() => {
          this.show();
        }, 0);
      }
      this.cd.markForCheck();
      this.bindOutsideClickListener();
      event.preventDefault();
    }
    hide(event, isFocus) {
      if (this.mobileActive) {
        setTimeout(() => {
          primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.menubutton.nativeElement);
        }, 0);
      }
      this.activeItemPath.set([]);
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.rootmenu?.menubarViewChild.nativeElement);
      this.dirty = false;
    }
    show() {
      const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
      this.focusedItemInfo.set({
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: '',
        item: processedItem?.item
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.focus(this.rootmenu?.menubarViewChild.nativeElement);
    }
    onMenuFocus(event) {
      this.focused = true;
      const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
      const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: '',
        item: processedItem?.item
      };
      this.focusedItemInfo.set(focusedItemInfo);
      this.onFocus.emit(event);
    }
    onMenuBlur(event) {
      this.focused = false;
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
      this.searchValue = '';
      this.dirty = false;
      this.onBlur.emit(event);
    }
    onKeyDown(event) {
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    }
    findVisibleItem(index) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
    }
    findFirstFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    }
    findFirstItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidItem(processedItem));
    }
    findSelectedItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidSelectedItem(processedItem));
    }
    isProcessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    isSelected(processedItem) {
      return this.activeItemPath().some(p => p.key === processedItem.key);
    }
    isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    }
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
    }
    isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    }
    isItemSeparator(item) {
      return this.getItemProp(item, 'separator');
    }
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    }
    isProccessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    searchItems(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let itemIndex = -1;
      let matched = false;
      if (this.focusedItemInfo().index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem));
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
      } else {
        itemIndex = this.visibleItems.findIndex(processedItem => this.isItemMatched(processedItem));
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = '';
        this.searchTimeout = null;
      }, 500);
      return matched;
    }
    getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : undefined;
    }
    getItemLabel(item) {
      return this.getItemProp(item, 'label');
    }
    onArrowDownKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const root = processedItem ? primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isEmpty(processedItem.parent) : null;
      if (root) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            parentKey: processedItem.key,
            item: processedItem.item
          });
          this.onArrowRightKey(event);
        }
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }
    onArrowRightKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const parentItem = processedItem ? this.activeItemPath().find(p => p.key === processedItem.parentKey) : null;
      if (parentItem) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            parentKey: processedItem.key,
            item: processedItem.item
          });
          this.onArrowDownKey(event);
        }
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }
    onArrowUpKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const root = primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.isEmpty(processedItem.parent);
      if (root) {
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            parentKey: processedItem.key,
            item: processedItem.item
          });
          const itemIndex = this.findLastItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      } else {
        const parentItem = this.activeItemPath().find(p => p.key === processedItem.parentKey);
        if (this.focusedItemInfo().index === 0) {
          this.focusedItemInfo.set({
            index: -1,
            parentKey: parentItem ? parentItem.parentKey : '',
            item: processedItem.item
          });
          this.searchValue = '';
          this.onArrowLeftKey(event);
          const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItemInfo().parentKey);
          this.activeItemPath.set(activeItemPath);
        } else {
          const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      }
      event.preventDefault();
    }
    onArrowLeftKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const parentItem = processedItem ? this.activeItemPath().find(p => p.key === processedItem.parentKey) : null;
      if (parentItem) {
        this.onItemChange({
          originalEvent: event,
          processedItem: parentItem
        });
        const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItemInfo().parentKey);
        this.activeItemPath.set(activeItemPath);
        event.preventDefault();
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onEscapeKey(event) {
      this.hide(event, true);
      this.focusedItemInfo().index = this.findFirstFocusedItemIndex();
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    }
    onEnterKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.findSingle(element, 'a[data-pc-section="action"]');
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    }
    findLastFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    }
    findLastItemIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findLastIndex(this.visibleItems, processedItem => this.isValidItem(processedItem));
    }
    findPrevItemIndex(index) {
      const matchedItemIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    }
    findNextItemIndex(index) {
      const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    }
    bindResizeListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
        if (!this.resizeListener) {
          this.resizeListener = this.renderer.listen(this.document.defaultView, 'resize', event => {
            if (!primeng_dom__WEBPACK_IMPORTED_MODULE_12__.DomHandler.isTouchDevice()) {
              this.hide(event, true);
            }
            this.mobileActive = false;
          });
        }
      }
    }
    bindOutsideClickListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
        if (!this.outsideClickListener) {
          this.outsideClickListener = this.renderer.listen(this.document, 'click', event => {
            const isOutsideContainer = this.rootmenu.el.nativeElement !== event.target && !this.rootmenu.el.nativeElement.contains(event.target);
            const isOutsideMenuButton = this.mobileActive && this.menubutton.nativeElement !== event.target && !this.menubutton.nativeElement.contains(event.target);
            if (isOutsideContainer) {
              isOutsideMenuButton ? this.mobileActive = false : this.hide();
            }
          });
        }
      }
    }
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        this.outsideClickListener();
        this.outsideClickListener = null;
      }
    }
    unbindResizeListener() {
      if (this.resizeListener) {
        this.resizeListener();
        this.resizeListener = null;
      }
    }
    ngOnDestroy() {
      this.mouseLeaveSubscriber?.unsubscribe();
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
    }
    static ɵfac = function Menubar_Factory(t) {
      return new (t || Menubar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MenubarService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Menubar,
      selectors: [["p-menubar"]],
      contentQueries: function Menubar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Menubar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menubutton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rootmenu = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        style: "style",
        styleClass: "styleClass",
        autoZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        baseZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        autoDisplay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoDisplay", "autoDisplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoHide: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoHide", "autoHide", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoHideDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoHideDelay", "autoHideDelay", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        id: "id",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy"
      },
      outputs: {
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MenubarService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c7,
      decls: 8,
      vars: 25,
      consts: [["rootmenu", ""], ["legacy", ""], ["menubutton", ""], [3, "ngClass", "ngStyle"], ["class", "p-menubar-start", 4, "ngIf"], ["tabindex", "0", "role", "button", "class", "p-menubar-button", 3, "click", "keydown", 4, "ngIf"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "items", "itemTemplate", "menuId", "root", "baseZIndex", "autoZIndex", "mobileActive", "autoDisplay", "ariaLabel", "ariaLabelledBy", "focusedItemId", "submenuIconTemplate", "activeItemPath"], ["class", "p-menubar-end", 4, "ngIf", "ngIfElse"], [1, "p-menubar-start"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "button", 1, "p-menubar-button", 3, "click", "keydown"], [4, "ngIf"], [1, "p-menubar-end"]],
      template: function Menubar_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menubar_div_1_Template, 2, 1, "div", 4)(2, Menubar_a_2_Template, 4, 7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-menubarSub", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function Menubar_Template_p_menubarSub_itemClick_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onItemClick($event));
          })("menuFocus", function Menubar_Template_p_menubarSub_menuFocus_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMenuFocus($event));
          })("menuBlur", function Menubar_Template_p_menubarSub_menuBlur_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMenuBlur($event));
          })("menuKeydown", function Menubar_Template_p_menubarSub_menuKeydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onKeyDown($event));
          })("itemMouseEnter", function Menubar_Template_p_menubarSub_itemMouseEnter_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onItemMouseEnter($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Menubar_div_5_Template, 2, 1, "div", 7)(6, Menubar_ng_template_6_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const legacy_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c8, ctx.mobileActive))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "root")("data-pc-name", "menubar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model && ctx.model.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.processedItems)("itemTemplate", ctx.itemTemplate)("menuId", ctx.id)("root", true)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("mobileActive", ctx.mobileActive)("autoDisplay", ctx.autoDisplay)("ariaLabel", ctx.ariaLabel)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : undefined)("submenuIconTemplate", ctx.submenuIconTemplate)("activeItemPath", ctx.activeItemPath());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endTemplate)("ngIfElse", legacy_r4);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__.BarsIcon, MenubarSub],
      styles: ["@layer primeng{.p-menubar{display:flex;align-items:center}.p-menubar ul{margin:0;padding:0;list-style:none}.p-menubar .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:2}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-menubar .p-menubar-root-list .p-icon-wrapper,.p-menubar .p-submenu-list .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{margin-left:auto;align-self:center}.p-menubar-button{display:none;cursor:pointer;align-items:center;justify-content:center}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Menubar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenubarModule = /*#__PURE__*/(() => {
  class MenubarModule {
    static ɵfac = function MenubarModule_Factory(t) {
      return new (t || MenubarModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenubarModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__.BarsIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__.AngleRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule]
    });
  }
  return MenubarModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8635:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panelmenu.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelMenu: () => (/* binding */ PanelMenu),
/* harmony export */   PanelMenuList: () => (/* binding */ PanelMenuList),
/* harmony export */   PanelMenuModule: () => (/* binding */ PanelMenuModule),
/* harmony export */   PanelMenuSub: () => (/* binding */ PanelMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/angledown */ 8776);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/angleright */ 1726);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/chevronright */ 5994);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);
















const _c0 = ["list"];
const _c1 = a0 => ({
  "p-submenu-list": true,
  "p-panelmenu-root-list": a0
});
const _c2 = a0 => ({
  "p-disabled": a0
});
const _c3 = () => ({
  exact: false
});
const _c4 = a0 => ({
  $implicit: a0
});
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 7);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 20)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isItemActive(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isItemActive(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r3.icon)("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getItemProp(processedItem_r3, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.getItemProp(processedItem_r3, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r3.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 2, "span", 16)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 1, "span", 17)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlLabel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r3.getItemProp(processedItem_r3, "disabled")))("target", ctx_r3.getItemProp(processedItem_r3, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r3.getItemProp(processedItem_r3, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-pc-section", "action")("tabindex", !!ctx_r3.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isItemGroup(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (processedItem_r3.item == null ? null : processedItem_r3.item.escape) !== false)("ngIfElse", htmlLabel_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 20)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isItemActive(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isItemActive(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r3.icon)("ngStyle", ctx_r3.getItemProp(processedItem_r3, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getItemProp(processedItem_r3, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.getItemProp(processedItem_r3, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getItemProp(processedItem_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getItemProp(processedItem_r3, "badge"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 10)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 2, "span", 16)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 2, 1, "span", 17)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlRouteLabel_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r3.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r3.getItemProp(processedItem_r3, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx_r3.getItemProp(processedItem_r3, "disabled")))("target", ctx_r3.getItemProp(processedItem_r3, "target"))("fragment", ctx_r3.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r3.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r3.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r3.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r3.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r3.getItemProp(processedItem_r3, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r3.getItemProp(processedItem_r3, "title"))("data-pc-section", "action")("tabindex", !!ctx_r3.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isItemGroup(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getItemProp(processedItem_r3, "escape") !== false)("ngIfElse", htmlRouteLabel_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r3.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 7, 12, "a", 13)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 7, 23, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.getItemProp(processedItem_r3, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getItemProp(processedItem_r3, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, processedItem_r3.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template_p_panelMenuSub_itemToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onItemToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.getItemId(processedItem_r3) + "_list")("panelId", ctx_r3.panelId)("items", processedItem_r3 == null ? null : processedItem_r3.items)("itemTemplate", ctx_r3.itemTemplate)("transitionOptions", ctx_r3.transitionOptions)("focusedItemId", ctx_r3.focusedItemId)("activeItemPath", ctx_r3.activeItemPath)("level", ctx_r3.level + 1)("parentExpanded", !!ctx_r3.parentExpanded && ctx_r3.isItemExpanded(processedItem_r3));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onItemClick($event, processedItem_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 10)(3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@submenu.done", function PanelMenuSub_ng_template_2_li_1_Template_div_animation_submenu_done_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onToggleDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template, 1, 9, "p-panelMenuSub", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r3 = ctx_r7.$implicit;
    const index_r9 = ctx_r7.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.getItemProp(processedItem_r3, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-hidden", processedItem_r3.visible === false)("p-focus", ctx_r3.isItemFocused(processedItem_r3) && !ctx_r3.isItemDisabled(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getItemClass(processedItem_r3))("ngStyle", ctx_r3.getItemProp(processedItem_r3, "style"))("pTooltip", ctx_r3.getItemProp(processedItem_r3, "tooltip"))("tooltipOptions", ctx_r3.getItemProp(processedItem_r3, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r3.getItemId(processedItem_r3))("aria-label", ctx_r3.getItemProp(processedItem_r3, "label"))("aria-expanded", ctx_r3.isItemGroup(processedItem_r3) ? ctx_r3.isItemActive(processedItem_r3) : undefined)("aria-level", ctx_r3.level + 1)("aria-setsize", ctx_r3.getAriaSetSize())("aria-posinset", ctx_r3.getAriaPosInset(index_r9))("data-p-disabled", ctx_r3.isItemDisabled(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@submenu", ctx_r3.getAnimation(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isItemVisible(processedItem_r3) && ctx_r3.isItemGroup(processedItem_r3) && (ctx_r3.isItemExpanded(processedItem_r3) || ctx_r3.animating));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_0_Template, 1, 0, "li", 5)(1, PanelMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r3.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !processedItem_r3.separator && ctx_r3.isItemVisible(processedItem_r3));
  }
}
const _c5 = ["submenu"];
const _c6 = ["container"];
const _c7 = (a0, a1) => ({
  "p-component p-panelmenu-header": true,
  "p-highlight": a0,
  "p-disabled": a1
});
const _c8 = a0 => ({
  "p-panelmenu-expanded": a0
});
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 19)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemActive(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.icon)("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.getItemProp(item_r3, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.getItemProp(item_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_2_Template, 1, 2, "span", 15)(3, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_3_Template, 2, 1, "span", 16)(4, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlLabel_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r4.getItemProp(item_r3, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r4.getItemProp(item_r3, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("tabindex", -1)("title", ctx_r4.getItemProp(item_r3, "title"))("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemGroup(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlLabel_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_ng_container_3_a_1_Template, 7, 10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.getItemProp(item_r3, "routerLink"));
  }
}
function PanelMenu_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 19)(2, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemActive(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.icon)("ngStyle", ctx_r4.getItemProp(item_r3, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getItemProp(item_r3, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.getItemProp(item_r3, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_a_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.getItemProp(item_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_5_ng_container_1_Template, 3, 2, "ng-container", 9)(2, PanelMenu_ng_container_2_div_1_a_5_span_2_Template, 1, 2, "span", 15)(3, PanelMenu_ng_container_2_div_1_a_5_span_3_Template, 2, 1, "span", 16)(4, PanelMenu_ng_container_2_div_1_a_5_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenu_ng_container_2_div_1_a_5_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlRouteLabel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.getItemProp(item_r3, "routerLink"))("queryParams", ctx_r4.getItemProp(item_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.getItemProp(item_r3, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("target", ctx_r4.getItemProp(item_r3, "target"))("fragment", ctx_r4.getItemProp(item_r3, "fragment"))("queryParamsHandling", ctx_r4.getItemProp(item_r3, "queryParamsHandling"))("preserveFragment", ctx_r4.getItemProp(item_r3, "preserveFragment"))("skipLocationChange", ctx_r4.getItemProp(item_r3, "skipLocationChange"))("replaceUrl", ctx_r4.getItemProp(item_r3, "replaceUrl"))("state", ctx_r4.getItemProp(item_r3, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1)("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemGroup(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getItemProp(item_r3, "escape") !== false)("ngIfElse", htmlRouteLabel_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getItemProp(item_r3, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@rootItem.done", function PanelMenu_ng_container_2_div_1_div_6_Template_div_animation_rootItem_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onToggleDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27)(2, "p-panelMenuList", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("headerFocus", function PanelMenu_ng_container_2_div_1_div_6_Template_p_panelMenuList_headerFocus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.updateFocusedHeader($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c8, ctx_r4.isItemActive(item_r3)))("@rootItem", ctx_r4.getAnimation(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.getContentId(item_r3, i_r4))("aria-labelledby", ctx_r4.getHeaderId(item_r3, i_r4))("data-pc-section", "toggleablecontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menucontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelId", ctx_r4.getPanelId(i_r4, item_r3))("items", ctx_r4.getItemProp(item_r3, "items"))("itemTemplate", ctx_r4.itemTemplate)("transitionOptions", ctx_r4.transitionOptions)("root", true)("activeItem", ctx_r4.activeItem())("tabindex", ctx_r4.tabindex)("parentExpanded", ctx_r4.isItemActive(item_r3));
  }
}
function PanelMenu_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenu_ng_container_2_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onHeaderClick($event, item_r3, i_r4));
    })("keydown", function PanelMenu_ng_container_2_div_1_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onHeaderKeyDown($event, item_r3, i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenu_ng_container_2_div_1_ng_container_3_Template, 2, 1, "ng-container", 9)(4, PanelMenu_ng_container_2_div_1_ng_container_4_Template, 1, 0, "ng-container", 10)(5, PanelMenu_ng_container_2_div_1_a_5_Template, 7, 19, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelMenu_ng_container_2_div_1_div_6_Template, 3, 16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.getItemProp(item_r3, "headerClass"))("ngStyle", ctx_r4.getItemProp(item_r3, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.getItemProp(item_r3, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c7, ctx_r4.isItemActive(item_r3), ctx_r4.isItemDisabled(item_r3)))("ngStyle", ctx_r4.getItemProp(item_r3, "style"))("pTooltip", ctx_r4.getItemProp(item_r3, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r4.getItemProp(item_r3, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.getHeaderId(item_r3, i_r4))("aria-expanded", ctx_r4.isItemActive(item_r3))("aria-label", ctx_r4.getItemProp(item_r3, "label"))("aria-controls", ctx_r4.getContentId(item_r3, i_r4))("aria-disabled", ctx_r4.isItemDisabled(item_r3))("data-p-highlight", ctx_r4.isItemActive(item_r3))("data-p-disabled", ctx_r4.isItemDisabled(item_r3))("data-pc-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c4, item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getItemProp(item_r3, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemGroup(item_r3));
  }
}
function PanelMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_Template, 7, 28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isItemVisible(item_r3));
  }
}
const _c9 = "@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n";
let PanelMenuSub = /*#__PURE__*/(() => {
  class PanelMenuSub {
    panelMenu;
    el;
    panelId;
    focusedItemId;
    items;
    itemTemplate;
    level = 0;
    activeItemPath;
    root;
    tabindex;
    transitionOptions;
    parentExpanded;
    itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    animating;
    constructor(panelMenu, el) {
      this.panelMenu = panelMenu;
      this.el = el;
    }
    getItemId(processedItem) {
      return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
    }
    getItemKey(processedItem) {
      return this.getItemId(processedItem);
    }
    getItemClass(processedItem) {
      return {
        'p-menuitem': true,
        'p-disabled': this.isItemDisabled(processedItem)
      };
    }
    getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    isItemExpanded(processedItem) {
      return processedItem.expanded;
    }
    isItemActive(processedItem) {
      return this.isItemExpanded(processedItem) || this.activeItemPath.some(path => path && path.key === processedItem.key);
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    }
    isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    }
    isItemGroup(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    getAnimation(processedItem) {
      return this.isItemActive(processedItem) ? {
        value: 'visible',
        params: {
          transitionParams: this.transitionOptions,
          height: '*'
        }
      } : {
        value: 'hidden',
        params: {
          transitionParams: this.transitionOptions,
          height: '0'
        }
      };
    }
    getAriaSetSize() {
      return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
    }
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
    }
    onItemClick(event, processedItem) {
      if (!this.isItemDisabled(processedItem)) {
        this.animating = true;
        this.getItemProp(processedItem, 'command', {
          originalEvent: event,
          item: processedItem.item
        });
        this.itemToggle.emit({
          processedItem,
          expanded: !this.isItemActive(processedItem)
        });
      }
    }
    onItemToggle(event) {
      this.itemToggle.emit(event);
    }
    onToggleDone() {
      this.animating = false;
    }
    static ɵfac = function PanelMenuSub_Factory(t) {
      return new (t || PanelMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PanelMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenuSub,
      selectors: [["p-panelMenuSub"]],
      viewQuery: function PanelMenuSub_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        panelId: "panelId",
        focusedItemId: "focusedItemId",
        items: "items",
        itemTemplate: "itemTemplate",
        level: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "level", "level", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        activeItemPath: "activeItemPath",
        root: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "root", "root", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        transitionOptions: "transitionOptions",
        parentExpanded: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "parentExpanded", "parentExpanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        itemToggle: "itemToggle",
        menuFocus: "menuFocus",
        menuBlur: "menuBlur",
        menuKeyDown: "menuKeyDown"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 3,
      vars: 8,
      consts: [["list", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["role", "tree", 3, "focusin", "focusout", "keydown", "ngClass", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "class", "p-hidden", "p-focus", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator"], ["role", "treeitem", 3, "ngClass", "ngStyle", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], [1, "p-toggleable-content"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], ["class", "p-menuitem-link", 3, "ngClass", "target", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemToggle", "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded"]],
      template: function PanelMenuSub_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuFocus.emit($event));
          })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuBlur.emit($event));
          })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.menuKeyDown.emit($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.root))("tabindex", -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, PanelMenuSub],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('submenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
      }
    });
  }
  return PanelMenuSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelMenuList = /*#__PURE__*/(() => {
  class PanelMenuList {
    el;
    panelId;
    id;
    items;
    itemTemplate;
    parentExpanded;
    expanded;
    transitionOptions;
    root;
    tabindex;
    activeItem;
    itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    subMenuViewChild;
    searchTimeout;
    searchValue;
    focused;
    focusedItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    activeItemPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    processedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    visibleItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const processedItems = this.processedItems();
      return this.flatItems(processedItems);
    });
    get focusedItemId() {
      const focusedItem = this.focusedItem();
      return focusedItem && focusedItem.item?.id ? focusedItem.item.id : primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : undefined;
    }
    constructor(el) {
      this.el = el;
    }
    ngOnChanges(changes) {
      const hasItems = !!changes?.items?.currentValue;
      if (hasItems) {
        this.processedItems.set(this.createProcessedItems(changes?.items?.currentValue || this.items || []));
        return;
      }
      // Update and keep `expanded` property from previous data
      else {
        this.processedItems.update(prev => prev.map(i => ({
          ...i,
          expanded: i.expanded
        })));
      }
    }
    getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    }
    isItemActive(processedItem) {
      return this.activeItemPath().some(path => path.key === processedItem.parentKey);
    }
    isItemGroup(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    isElementInPanel(event, element) {
      const panel = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel && panel.contains(element);
    }
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    }
    isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    }
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
    }
    findFirstItem() {
      return this.visibleItems().find(processedItem => this.isValidItem(processedItem));
    }
    findLastItem() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems(), processedItem => this.isValidItem(processedItem));
    }
    findItemByEventTarget(target) {
      let parentNode = target;
      while (parentNode && parentNode.tagName?.toLowerCase() !== 'li') {
        parentNode = parentNode?.parentNode;
      }
      return parentNode?.id && this.visibleItems().find(processedItem => this.isValidItem(processedItem) && `${this.panelId}_${processedItem.key}` === parentNode.id);
    }
    createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newItem = {
          icon: item.icon,
          expanded: item.expanded,
          separator: item.separator,
          item,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem['items'] = this.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    }
    findProcessedItemByItemKey(key, processedItems, level = 0) {
      processedItems = processedItems || this.processedItems();
      if (processedItems && processedItems.length) {
        for (let i = 0; i < processedItems.length; i++) {
          const processedItem = processedItems[i];
          if (this.getItemProp(processedItem, 'key') === key) return processedItem;
          const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
          if (matchedItem) return matchedItem;
        }
      }
    }
    flatItems(processedItems, processedFlattenItems = []) {
      processedItems && processedItems.forEach(processedItem => {
        if (this.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          this.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
    changeFocusedItem(event) {
      const {
        originalEvent,
        processedItem,
        focusOnNext,
        selfCheck,
        allowHeaderFocus = true
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
        this.focusedItem.set(processedItem);
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.headerFocus.emit({
          originalEvent,
          focusOnNext,
          selfCheck
        });
      }
    }
    scrollInView() {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
    onFocus(event) {
      if (!this.focused) {
        this.focused = true;
        const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findItemByEventTarget(event.target) || this.findFirstItem() : this.findLastItem());
        if (event.relatedTarget !== null) this.focusedItem.set(focusedItem);
      }
    }
    onBlur(event) {
      const target = event.relatedTarget;
      if (this.focused && !this.el.nativeElement.contains(target)) {
        this.focused = false;
        this.focusedItem.set(null);
        this.searchValue = '';
      }
    }
    onItemToggle(event) {
      const {
        processedItem,
        expanded
      } = event;
      processedItem.expanded = !processedItem.expanded;
      const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== processedItem.parentKey);
      expanded && activeItemPath.push(processedItem);
      this.activeItemPath.set(activeItemPath);
      this.processedItems.update(value => value.map(i => i === processedItem ? processedItem : i));
      this.focusedItem.set(processedItem);
    }
    onKeyDown(event) {
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
        case 'Tab':
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    }
    onArrowDownKey(event) {
      const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    }
    onArrowUpKey(event) {
      const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        selfCheck: true
      });
      event.preventDefault();
    }
    onArrowLeftKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
        if (matched) {
          const activeItemPath = this.activeItemPath().filter(p => p.key !== this.focusedItem().key);
          this.activeItemPath.set(activeItemPath);
        } else {
          const focusedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
          this.focusedItem.set(focusedItem);
        }
        event.preventDefault();
      }
    }
    onArrowRightKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const grouped = this.isItemGroup(this.focusedItem());
        if (grouped) {
          const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItem().parentKey);
            activeItemPath.push(this.focusedItem());
            this.activeItemPath.set(activeItemPath);
          }
        }
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    }
    onEnterKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && (primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, '[data-pc-section="action"]') || primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, 'a,button'));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    findNextItem(processedItem) {
      const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
      const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find(pItem => this.isValidItem(pItem)) : undefined;
      return matchedItem || processedItem;
    }
    findPrevItem(processedItem) {
      const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
      const matchedItem = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems().slice(0, index), pItem => this.isValidItem(pItem)) : undefined;
      return matchedItem || processedItem;
    }
    searchItems(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let matchedItem = null;
      let matched = false;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const focusedItemIndex = this.visibleItems().findIndex(processedItem => processedItem.key === this.focusedItem().key);
        matchedItem = this.visibleItems().slice(focusedItemIndex).find(processedItem => this.isItemMatched(processedItem));
        matchedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find(processedItem => this.isItemMatched(processedItem)) : matchedItem;
      } else {
        matchedItem = this.visibleItems().find(processedItem => this.isItemMatched(processedItem));
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(this.focusedItem())) {
        matchedItem = this.findFirstItem();
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = '';
        this.searchTimeout = null;
      }, 500);
      return matched;
    }
    static ɵfac = function PanelMenuList_Factory(t) {
      return new (t || PanelMenuList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenuList,
      selectors: [["p-panelMenuList"]],
      viewQuery: function PanelMenuList_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subMenuViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        panelId: "panelId",
        id: "id",
        items: "items",
        itemTemplate: "itemTemplate",
        parentExpanded: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "parentExpanded", "parentExpanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        expanded: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "expanded", "expanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        transitionOptions: "transitionOptions",
        root: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "root", "root", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        activeItem: "activeItem"
      },
      outputs: {
        itemToggle: "itemToggle",
        headerFocus: "headerFocus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 10,
      consts: [["submenu", ""], [3, "itemToggle", "keydown", "menuFocus", "menuBlur", "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded"]],
      template: function PanelMenuList_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuList_Template_p_panelMenuSub_itemToggle_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onItemToggle($event));
          })("keydown", function PanelMenuList_Template_p_panelMenuSub_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onKeyDown($event));
          })("menuFocus", function PanelMenuList_Template_p_panelMenuSub_menuFocus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFocus($event));
          })("menuBlur", function PanelMenuList_Template_p_panelMenuSub_menuBlur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : undefined)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
        }
      },
      dependencies: [PanelMenuSub],
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return PanelMenuList;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * PanelMenu is a hybrid of Accordion and Tree components.
 * @group Components
 */
let PanelMenu = /*#__PURE__*/(() => {
  class PanelMenu {
    cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    model;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Whether multiple tabs can be activated at the same time or not.
     * @group Props
     */
    multiple = false;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    templates;
    containerViewChild;
    submenuIconTemplate;
    itemTemplate;
    animating;
    activeItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'submenuicon':
            this.submenuIconTemplate = item.template;
            break;
          case 'item':
            this.itemTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    constructor(cd) {
      this.cd = cd;
    }
    /**
     * Collapses open panels.
     * @group Method
     */
    collapseAll() {
      for (let item of this.model) {
        if (item.expanded) {
          item.expanded = false;
        }
      }
      this.cd.detectChanges();
    }
    onToggleDone() {
      this.animating = false;
      this.cd.markForCheck();
    }
    changeActiveItem(event, item, index, selfActive = false) {
      if (!this.isItemDisabled(item)) {
        const activeItem = selfActive ? item : this.activeItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(item, this.activeItem) ? null : item;
        this.activeItem.set(activeItem);
      }
    }
    getAnimation(item) {
      return item.expanded ? {
        value: 'visible',
        params: {
          transitionParams: this.animating ? this.transitionOptions : '0ms',
          height: '*'
        }
      } : {
        value: 'hidden',
        params: {
          transitionParams: this.transitionOptions,
          height: '0'
        }
      };
    }
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    getItemLabel(item) {
      return this.getItemProp(item, 'label');
    }
    isItemActive(item) {
      return item.expanded;
    }
    isItemVisible(item) {
      return this.getItemProp(item, 'visible') !== false;
    }
    isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    }
    isItemGroup(item) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(item.items);
    }
    getPanelId(index, item) {
      return item && item.id ? item.id : `${this.id}_${index}`;
    }
    getHeaderId(item, index) {
      return item.id ? item.id + '_header' : `${this.getPanelId(index)}_header`;
    }
    getContentId(item, index) {
      return item.id ? item.id + '_content' : `${this.getPanelId(index)}_content`;
    }
    updateFocusedHeader(event) {
      const {
        originalEvent,
        focusOnNext,
        selfCheck
      } = event;
      const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      const header = selfCheck ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    }
    changeFocusedHeader(event, element) {
      element && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(element);
    }
    findNextHeader(panelElement, selfCheck = false) {
      const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    }
    findPrevHeader(panelElement, selfCheck = false) {
      const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    }
    findFirstHeader() {
      return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
    }
    findLastHeader() {
      return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
    }
    onHeaderClick(event, item, index) {
      if (this.isItemDisabled(item)) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item
        });
      }
      if (!this.multiple) {
        for (let modelItem of this.model) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
      item.expanded = !item.expanded;
      this.changeActiveItem(event, item, index);
      this.animating = true;
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(event.currentTarget);
    }
    onHeaderKeyDown(event, item, index) {
      switch (event.code) {
        case 'ArrowDown':
          this.onHeaderArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onHeaderArrowUpKey(event);
          break;
        case 'Home':
          this.onHeaderHomeKey(event);
          break;
        case 'End':
          this.onHeaderEndKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.onHeaderEnterKey(event, item, index);
          break;
        default:
          break;
      }
    }
    onHeaderArrowDownKey(event) {
      const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    }
    onHeaderArrowUpKey(event) {
      const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    }
    onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    }
    onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    }
    onHeaderEnterKey(event, item, index) {
      const headerAction = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
      headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
      event.preventDefault();
    }
    static ɵfac = function PanelMenu_Factory(t) {
      return new (t || PanelMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenu,
      selectors: [["p-panelMenu"]],
      contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function PanelMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        style: "style",
        styleClass: "styleClass",
        multiple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        transitionOptions: "transitionOptions",
        id: "id",
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 3,
      vars: 5,
      consts: [["container", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "p-panelmenu-panel", 3, "ngClass", "ngStyle"], ["role", "button", 3, "click", "keydown", "ngClass", "ngStyle", "pTooltip", "tabindex", "tooltipOptions"], [1, "p-panelmenu-header-content"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-toggleable-content", "role", "region", 3, "ngClass", 4, "ngIf"], ["class", "p-panelmenu-header-action", 3, "target", 4, "ngIf"], [1, "p-panelmenu-header-action", 3, "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["role", "region", 1, "p-toggleable-content", 3, "ngClass"], [1, "p-panelmenu-content"], [3, "headerFocus", "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded"]],
      template: function PanelMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_Template, 2, 1, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, PanelMenuList],
      styles: [_c9],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('rootItem', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
      },
      changeDetection: 0
    });
  }
  return PanelMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelMenuModule = /*#__PURE__*/(() => {
  class PanelMenuModule {
    static ɵfac = function PanelMenuModule_Factory(t) {
      return new (t || PanelMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
  return PanelMenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3244:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-progressspinner.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressSpinner: () => (/* binding */ ProgressSpinner),
/* harmony export */   ProgressSpinnerModule: () => (/* binding */ ProgressSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





/**
 * ProgressSpinner is a process status indicator.
 * @group Components
 */
let ProgressSpinner = /*#__PURE__*/(() => {
  class ProgressSpinner {
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Width of the circle stroke.
     * @group Props
     */
    strokeWidth = '2';
    /**
     * Color for the background of the circle.
     * @group Props
     */
    fill = 'none';
    /**
     * Duration of the rotate animation.
     * @group Props
     */
    animationDuration = '2s';
    /**
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel;
    static ɵfac = function ProgressSpinner_Factory(t) {
      return new (t || ProgressSpinner)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressSpinner,
      selectors: [["p-progressSpinner"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        styleClass: "styleClass",
        style: "style",
        strokeWidth: "strokeWidth",
        fill: "fill",
        animationDuration: "animationDuration",
        ariaLabel: "ariaLabel"
      },
      decls: 3,
      vars: 11,
      consts: [["role", "progressbar", 1, "p-progress-spinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progress-spinner-svg"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progress-spinner-circle"]],
      template: function ProgressSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-busy", true)("data-pc-name", "progressspinner")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-duration", ctx.animationDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return ProgressSpinner;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ProgressSpinnerModule = /*#__PURE__*/(() => {
  class ProgressSpinnerModule {
    static ɵfac = function ProgressSpinnerModule_Factory(t) {
      return new (t || ProgressSpinnerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProgressSpinnerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return ProgressSpinnerModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=619.js.map