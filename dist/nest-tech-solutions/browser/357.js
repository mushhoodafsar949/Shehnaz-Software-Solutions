"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[357],{

/***/ 9546:
/*!***************************************************!*\
  !*** ./src/app/features/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _shared_consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/consultation-dialog/consultation-dialog.component */ 5828);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 7780);





















function AboutComponent_div_26_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r1);
  }
}
function AboutComponent_div_26_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_div_26_div_11_span_1_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const milestone_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", milestone_r2.metrics);
  }
}
function AboutComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 56)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AboutComponent_div_26_div_11_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const milestone_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("left", i_r3 % 2 === 0)("right", i_r3 % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](milestone_r2.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](milestone_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](milestone_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](milestone_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", milestone_r2.metrics);
  }
}
function AboutComponent_ng_template_33_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", member_r6.linkedinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_ng_template_33_p_chip_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-chip", 74);
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", skill_r7);
  }
}
function AboutComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function AboutComponent_ng_template_33_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AboutComponent_ng_template_33_a_6_Template, 2, 1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 67)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AboutComponent_ng_template_33_p_chip_15_Template, 1, 1, "p-chip", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ceo-card", member_r6.role.includes("CEO"))("anayat-card", member_r6.name.includes("Anayat"))("mushhood-card", member_r6.name.includes("Mushhood"))("kasim-card", member_r6.name.includes("Kasim"))("arslan-card", member_r6.name.includes("Arslan"))("jahanzaib-card", member_r6.name.includes("Jahanzaib"))("abbas-card", member_r6.name.includes("Abbas"))("shahzaib-card", member_r6.name.includes("Shahzaib"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", member_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", member_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](member_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", member_r6.linkedinUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r6.skills.slice(0, 3))("ngForTrackBy", ctx_r4.trackByString);
  }
}
function AboutComponent_div_87_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const practice_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](practice_r8);
  }
}
function AboutComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75)(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AboutComponent_div_87_span_8_Template, 2, 1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const culture_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](culture_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](culture_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](culture_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", culture_r9.practices);
  }
}
function AboutComponent_div_94_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](goal_r10);
  }
}
function AboutComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 82)(4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AboutComponent_div_94_div_11_Template, 4, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r11.goals);
  }
}
function AboutComponent_div_101_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metric_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r12);
  }
}
function AboutComponent_div_101_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_div_101_div_10_span_1_Template, 2, 1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const achievement_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", achievement_r13.metrics);
  }
}
function AboutComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 90)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AboutComponent_div_101_div_10_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const achievement_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](achievement_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](achievement_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](achievement_r13.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](achievement_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", achievement_r13.metrics);
  }
}
function AboutComponent_p_card_108_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111)(1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-tag", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pi " + project_r14.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", project_r14.category)("severity", ctx_r4.getProjectSeverity(project_r14.category));
  }
}
function AboutComponent_p_card_108_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const impact_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](impact_r15);
  }
}
function AboutComponent_p_card_108_p_chip_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-chip", 115);
  }
  if (rf & 2) {
    const tech_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", tech_r16);
  }
}
function AboutComponent_p_card_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_p_card_108_ng_template_1_Template, 4, 4, "ng-template", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 99)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 101)(8, "div", 102)(9, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Investment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 102)(14, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 102)(19, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Team Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 105)(24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Key Achievements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AboutComponent_p_card_108_div_27_Template, 4, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 108)(29, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AboutComponent_p_card_108_p_chip_30_Template, 1, 1, "p-chip", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r14.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r14.timeline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r14.teamSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r14.impact.slice(0, 2))("ngForTrackBy", ctx_r4.trackByString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r14.techStack.slice(0, 4))("ngForTrackBy", ctx_r4.trackByString);
  }
}
let AboutComponent = /*#__PURE__*/(() => {
  class AboutComponent {
    constructor(router, viewportScroller, dialogService) {
      this.router = router;
      this.viewportScroller = viewportScroller;
      this.dialogService = dialogService;
      this.companyTimeline = [{
        year: '2019',
        title: 'Foundation & Vision',
        description: 'Nest Tech AI Solutions was founded with a vision to revolutionize digital transformation. Started as a small team of passionate developers with big dreams.',
        icon: 'pi pi-flag',
        metrics: ['5 Team Members', 'First Office', 'Vision Established']
      }, {
        year: '2020',
        title: 'First Major Breakthrough',
        description: 'Landed our first enterprise client and delivered a transformative e-commerce platform that increased their revenue by 300%. This marked our entry into serious business.',
        icon: 'pi pi-trophy',
        metrics: ['50+ Projects', '10 Team Members', 'Enterprise Clients']
      }, {
        year: '2021',
        title: 'Global Expansion',
        description: 'Expanded operations internationally, serving clients across 15+ countries. Established our reputation for delivering world-class solutions on time and within budget.',
        icon: 'pi pi-globe',
        metrics: ['15+ Countries', '25 Team Members', 'Global Recognition']
      }, {
        year: '2022',
        title: 'Innovation Leadership',
        description: 'Launched our AI/ML division and cloud-native solutions practice. Became industry leaders in cutting-edge technology adoption and implementation.',
        icon: 'pi pi-cog',
        metrics: ['AI/ML Division', 'Cloud Expertise', 'Tech Innovation']
      }, {
        year: '2023',
        title: 'Industry Recognition',
        description: 'Received multiple industry awards and certifications. Achieved ISO certification and became an AWS Advanced Partner, validating our commitment to excellence.',
        icon: 'pi pi-star',
        metrics: ['ISO Certified', 'AWS Partner', 'Industry Awards']
      }, {
        year: '2024',
        title: 'Scaling New Heights',
        description: 'Crossed 500+ successful projects milestone. Established centers of excellence for emerging technologies and strengthened our global delivery capabilities.',
        icon: 'pi pi-chart-line',
        metrics: ['500+ Projects', '50+ Team Members', 'Centers of Excellence']
      }];
      this.companyCulture = [{
        title: 'Innovation First',
        description: 'We foster a culture of continuous innovation, encouraging creative thinking and embracing emerging technologies to solve complex challenges.',
        icon: 'pi pi-lightbulb',
        practices: ['Hackathons', 'Innovation Lab', 'R&D Time', 'Tech Talks']
      }, {
        title: 'Collaborative Excellence',
        description: 'Teamwork and collaboration are at our core. We believe great solutions emerge when diverse minds work together towards common goals.',
        icon: 'pi pi-users',
        practices: ['Cross-functional Teams', 'Peer Reviews', 'Knowledge Sharing', 'Mentorship']
      }, {
        title: 'Continuous Learning',
        description: 'We invest in our people through continuous learning opportunities, certifications, and skill development programs to stay ahead of the curve.',
        icon: 'pi pi-book',
        practices: ['Training Programs', 'Certifications', 'Conferences', 'Online Learning']
      }, {
        title: 'Work-Life Balance',
        description: 'We promote a healthy work-life balance with flexible working arrangements, wellness programs, and supportive team environment.',
        icon: 'pi pi-heart',
        practices: ['Flexible Hours', 'Remote Work', 'Wellness Programs', 'Team Events']
      }, {
        title: 'Quality Obsession',
        description: 'Quality is non-negotiable. We maintain the highest standards in everything we do, from code quality to client communication.',
        icon: 'pi pi-shield',
        practices: ['Code Reviews', 'Testing Standards', 'Quality Gates', 'Best Practices']
      }, {
        title: 'Client Success',
        description: 'Our clients\' success is our success. We go above and beyond to ensure every project delivers exceptional value and measurable results.',
        icon: 'pi pi-thumbs-up',
        practices: ['Client Focus', 'Success Metrics', 'Regular Check-ins', 'Feedback Loops']
      }];
      this.roadmapItems = [{
        period: 'Q1 2025',
        title: 'AI-Powered Solutions',
        description: 'Launch comprehensive AI and machine learning solutions division with focus on predictive analytics and automation.',
        icon: 'pi pi-android',
        goals: ['AI Lab Setup', 'ML Model Development', 'Automation Tools', 'Predictive Analytics']
      }, {
        period: 'Q2 2025',
        title: 'Global Market Expansion',
        description: 'Establish regional offices in North America and Europe to better serve our growing international client base.',
        icon: 'pi pi-globe',
        goals: ['US Office', 'European Hub', 'Regional Teams', 'Local Partnerships']
      }, {
        period: 'Q3 2025',
        title: 'Next-Gen Platform',
        description: 'Develop proprietary development platform combining low-code capabilities with enterprise-grade security and scalability.',
        icon: 'pi pi-desktop',
        goals: ['Platform Development', 'Low-Code Tools', 'Security Framework', 'Scalability Features']
      }, {
        period: 'Q4 2025',
        title: 'Sustainability Initiative',
        description: 'Launch green technology initiative focusing on carbon-neutral solutions and sustainable software development practices.',
        icon: 'pi pi-leaf',
        goals: ['Green Tech', 'Carbon Neutral', 'Sustainable Practices', 'Environmental Impact']
      }];
      this.achievements = [{
        title: 'ISO 27001 Certification',
        year: '2023',
        description: 'Achieved ISO 27001 certification for information security management, demonstrating our commitment to data protection and security.',
        icon: 'pi pi-shield',
        metrics: ['Security Standards', 'Data Protection', 'Risk Management']
      }, {
        title: 'AWS Advanced Partner',
        year: '2023',
        description: 'Became an AWS Advanced Consulting Partner, validating our cloud expertise and ability to deliver enterprise-grade solutions.',
        icon: 'pi pi-cloud',
        metrics: ['Cloud Expertise', 'Enterprise Solutions', 'AWS Certified']
      }, {
        title: 'Tech Innovation Award',
        year: '2023',
        description: 'Received the Technology Innovation Award for our groundbreaking AI-powered healthcare solution that improved patient outcomes by 40%.',
        icon: 'pi pi-trophy',
        metrics: ['Innovation Excellence', 'Healthcare Impact', '40% Improvement']
      }, {
        title: 'Client Satisfaction Excellence',
        year: '2024',
        description: 'Achieved 98% client satisfaction rate with zero project failures, maintaining our reputation for reliable delivery.',
        icon: 'pi pi-star',
        metrics: ['98% Satisfaction', 'Zero Failures', 'Reliable Delivery']
      }, {
        title: 'Top Employer Recognition',
        year: '2024',
        description: 'Recognized as Top Employer in Tech by leading industry publications for our exceptional workplace culture and employee benefits.',
        icon: 'pi pi-users',
        metrics: ['Top Employer', 'Great Culture', 'Employee Benefits']
      }, {
        title: '500+ Projects Milestone',
        year: '2024',
        description: 'Successfully delivered over 500 projects across 25+ countries, establishing ourselves as a global technology partner.',
        icon: 'pi pi-chart-line',
        metrics: ['500+ Projects', '25+ Countries', 'Global Reach']
      }];
      this.teamMembers = [{
        name: 'Mushhood Afsar',
        role: 'Senior Software Engineer',
        description: 'Visionary leader with 5+ years of experience in full-stack development and business strategy. Passionate about creating innovative solutions that drive business growth and digital transformation.',
        icon: 'pi pi-user',
        skills: ['Strategic Leadership', 'Digital Transformation', 'Business Development', 'Full-Stack Development', 'Team Building', 'Client Relations'],
        linkedinUrl: 'https://www.linkedin.com/in/mushhood-afsar/',
        image: 'assets/home/Mushhood2.jpg'
      }, {
        name: 'Anayat Ullah',
        role: 'Expert Lead Generation and Sales',
        description: 'Strategic business development leader focused on growth, client relationships, and market expansion. Drives revenue growth through innovative sales strategies and strategic partnerships.',
        icon: 'pi pi-briefcase',
        skills: ['Business Development', 'Strategic Sales', 'Client Relationship Management', 'Market Analysis', 'Partnership Development', 'Revenue Growth'],
        linkedinUrl: 'https://www.linkedin.com/in/anayat-ullah-8647b7162/',
        image: 'assets/Team/Anayat.jpeg'
      }, {
        name: 'Kasim Ali',
        role: 'Network Engineer & Cybersecurity Specialist',
        description: 'Technology leader and networking engineering expert with extensive experience in designing and implementing robust network infrastructures. Specializes in enterprise networking solutions, system architecture, and technology strategy. Combines deep technical expertise with strategic vision to drive innovation and ensure scalable, secure technology operations.',
        icon: 'pi pi-network',
        skills: ['Network Architecture', 'Technology Strategy', 'System Design', 'Infrastructure Management', 'Security Implementation', 'Technical Leadership'],
        linkedinUrl: 'https://www.linkedin.com/in/kasimali01/',
        image: 'assets/Team/Qasim.jpeg'
      }, {
        name: 'Shahzaib Rasool',
        role: 'Senior Backend Developer',
        description: 'Strategic leader and backend development expert with a proven track record in building high-performance, scalable systems. Combines business acumen with deep technical expertise to drive development excellence and deliver enterprise-grade solutions. Leads development initiatives with a focus on code quality, architecture best practices, and team growth.',
        icon: 'pi pi-briefcase',
        skills: ['Backend Development', 'System Architecture', 'Strategic Leadership', 'Team Management', 'Code Quality', 'Enterprise Solutions'],
        linkedinUrl: 'https://www.linkedin.com/in/shahzaib-rasool/',
        image: 'assets/Team/Shahzaib.jpg'
      }, {
        name: 'Arslan Qureshi',
        role: 'Senior UI/UX Designer',
        description: 'Creative design leader with MBA credentials and extensive expertise in logo design, brand identity, and UI/UX design. Master of Figma and modern design tools, creating visually stunning and strategically effective designs. Combines business acumen with creative excellence to deliver designs that not only look exceptional but drive business results.',
        icon: 'pi pi-palette',
        skills: ['Logo Design', 'Brand Identity', 'Figma', 'UI/UX Design', 'Creative Strategy', 'Business Design'],
        linkedinUrl: 'https://www.linkedin.com/in/arslanqureshi/',
        image: 'assets/Team/Arslan.png'
      }, {
        name: 'Jahanzaib Sohail',
        role: 'Senior IOS Developer',
        description: 'Expert iOS developer and technology strategist with extensive experience in mobile app architecture and development. Leads our technical innovation and mobile excellence initiatives.',
        icon: 'pi pi-mobile',
        skills: ['iOS Development', 'Mobile Architecture', 'Technical Strategy', 'Team Leadership', 'Innovation Management', 'Product Development'],
        linkedinUrl: 'https://www.linkedin.com/in/jahanzeb-sohail-047/',
        image: 'assets/Team/Jahanzaib.jpeg'
      }, {
        name: 'Abbas Raza',
        role: 'DevOps & Infrastructure',
        description: 'DevOps specialist with deep expertise in cloud infrastructure, automation, and deployment pipelines. Ensures scalable, secure, and efficient development operations.',
        icon: 'pi pi-cloud',
        skills: ['AWS Cloud', 'DevOps Automation', 'Infrastructure Management', 'Security Implementation', 'Scalability Design', 'CI/CD Pipelines'],
        linkedinUrl: 'https://www.linkedin.com/in/abbas-raza-564b57b2/',
        image: 'assets/Team/Abbas.jpeg'
      }, {
        name: 'Muhammad Usama',
        role: 'Flutter Mobile Developer',
        description: 'Cross-platform mobile development expert specializing in Flutter and React Native. Creates beautiful, high-performance mobile applications for both iOS and Android platforms.',
        icon: 'pi pi-mobile',
        skills: ['Flutter Development', 'Cross-Platform Mobile', 'UI/UX Implementation', 'Performance Optimization', 'Mobile Testing', 'App Store Deployment'],
        linkedinUrl: 'https://www.linkedin.com/in/muhammad-usama-330044212/',
        image: 'https://ui-avatars.com/api/?name=Muhammad+Usama&size=400&background=166534&color=ffffff&font-size=0.35&bold=true&format=png'
      }, {
        name: 'Umair Tahir',
        role: 'Senior Solution Architect',
        description: 'Operations leader and solution architecture expert specializing in designing and implementing automated, scalable solutions. Combines operational excellence with technical innovation to optimize business processes and deliver transformative solutions. Expert in solutioning complex business challenges and automating workflows for maximum efficiency.',
        icon: 'pi pi-cog',
        skills: ['Solution Architecture', 'Process Automation', 'Operations Management', 'System Integration', 'Business Optimization', 'Strategic Planning'],
        linkedinUrl: 'https://www.linkedin.com/in/umairm18/',
        image: 'assets/Team/Umair.jpg'
      }];
      this.projects = [{
        name: 'FinTech Trading Platform',
        category: 'FinTech',
        description: 'A comprehensive trading platform with real-time market data, advanced charting, and automated trading capabilities. Built for institutional and retail traders.',
        icon: 'pi-chart-line',
        budget: '$150K - $300K',
        timeline: '8-12 months',
        teamSize: '6-8 developers',
        impact: ['Increased trading volume by 250%', 'Reduced transaction processing time by 60%', 'Enhanced user engagement by 180%', 'Achieved 99.9% uptime reliability'],
        techStack: ['Angular', 'Node.js', 'WebSocket', 'MongoDB', 'Redis', 'Docker', 'AWS']
      }, {
        name: 'HealthConnect Telemedicine',
        category: 'Healthcare',
        description: 'A HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video consultations and medical record management.',
        icon: 'pi-heart',
        budget: '$200K - $400K',
        timeline: '10-14 months',
        teamSize: '8-10 developers',
        impact: ['Served 50,000+ patients remotely', 'Reduced appointment wait time by 70%', 'Improved patient satisfaction by 95%', 'Streamlined medical record access'],
        techStack: ['React', 'Python', 'PostgreSQL', 'WebRTC', 'Socket.IO', 'AWS', 'Docker']
      }, {
        name: 'SmartRetail E-Commerce',
        category: 'E-Commerce',
        description: 'An AI-powered e-commerce platform with personalized recommendations, inventory management, and multi-channel sales integration.',
        icon: 'pi-shopping-cart',
        budget: '$100K - $250K',
        timeline: '6-10 months',
        teamSize: '5-7 developers',
        impact: ['Increased conversion rate by 120%', 'Reduced cart abandonment by 45%', 'Improved inventory turnover by 80%', 'Generated $2M+ in additional revenue'],
        techStack: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch', 'Redis', 'Stripe', 'GCP']
      }, {
        name: 'Enterprise CRM Solution',
        category: 'Enterprise',
        description: 'A scalable CRM system designed for large enterprises with advanced analytics, workflow automation, and multi-team collaboration features.',
        icon: 'pi-users',
        budget: '$300K - $500K',
        timeline: '12-18 months',
        teamSize: '10-12 developers',
        impact: ['Improved sales efficiency by 200%', 'Enhanced customer retention by 85%', 'Automated 70% of routine tasks', 'Reduced operational costs by $1.5M annually'],
        techStack: ['Angular', 'Java Spring', 'PostgreSQL', 'Kubernetes', 'Apache Kafka', 'Microservices']
      }];
      this.teamCarouselResponsive = [{
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      }, {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }];
    }
    ngOnInit() {
      // Component initialization
    }
    ngOnDestroy() {
      // Cleanup if needed
    }
    scrollToHistory() {
      const element = document.getElementById('history-section');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    scrollToTeam() {
      const element = document.getElementById('team-section');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    getProjectSeverity(category) {
      switch (category) {
        case 'FinTech':
          return 'success';
        case 'Healthcare':
          return 'info';
        case 'E-Commerce':
          return 'warning';
        case 'Enterprise':
          return 'secondary';
        default:
          return 'secondary';
      }
    }
    onImageError(event) {
      const target = event.target;
      if (target) {
        target.style.display = 'none';
        const fallback = target.nextElementSibling;
        if (fallback) {
          fallback.style.display = 'flex';
        }
      }
    }
    navigateToServices() {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.router.navigate(['/services']);
    }
    // TrackBy functions for optimized *ngFor loops
    trackByMemberIndex(index, member) {
      return index;
    }
    trackByProjectIndex(index, project) {
      return index;
    }
    trackByString(index, item) {
      return item;
    }
    openConsultationDialog() {
      this.dialogService.open(_shared_consultation_dialog_consultation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConsultationDialogComponent, {
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
      }).onClose.subscribe(result => {
        if (result && result.action === 'getQuote') {
          this.viewportScroller.scrollToPosition([0, 0]);
          this.router.navigate(['/quote']);
        }
      });
    }
    static {
      this.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DialogService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 109,
        vars: 31,
        consts: [[1, "about-hero-section"], [1, "hero-background"], [1, "hero-lightray", "one"], [1, "hero-lightray", "two"], [1, "hero-lightray", "three"], [1, "hero-content-card"], [1, "hero-content"], [1, "company-tagline"], [1, "hero-headline"], [1, "highlight"], [1, "hero-description"], [1, "hero-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Discover Our Journey", 1, "p-button-raised", "p-button-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Meet Our Team", 1, "p-button-outlined", "p-button-lg", 3, "click"], ["id", "history-section", 1, "history-section"], [1, "history-container"], [1, "section-subtitle"], [1, "timeline"], ["class", "timeline-item", 3, "left", "right", 4, "ngFor", "ngForOf"], ["id", "team-section", 1, "team-section"], ["styleClass", "team-carousel", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval", "responsiveOptions"], ["pTemplate", "item"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-item"], [1, "pi", "pi-calendar"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label"], [1, "pi", "pi-users"], [1, "pi", "pi-globe"], [1, "pi", "pi-star"], [1, "vision-mission-section"], [1, "vision-mission-container"], [1, "vision-mission-grid"], [1, "vision-card"], [1, "vm-icon"], [1, "pi", "pi-eye"], [1, "mission-card"], [1, "pi", "pi-heart"], [1, "culture-section"], [1, "culture-grid"], ["class", "culture-card", 4, "ngFor", "ngForOf"], [1, "roadmap-section"], [1, "roadmap-timeline"], ["class", "roadmap-item", 4, "ngFor", "ngForOf"], [1, "achievements-section"], [1, "achievements-grid"], ["class", "achievement-card", 4, "ngFor", "ngForOf"], [1, "success-section"], [1, "projects-grid"], ["styleClass", "project-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "timeline-item"], [1, "timeline-marker"], [1, "timeline-year"], [1, "timeline-icon"], [1, "timeline-content"], ["class", "timeline-metrics", 4, "ngIf"], [1, "timeline-metrics"], ["class", "metric-chip", 4, "ngFor", "ngForOf"], [1, "metric-chip"], [1, "team-member-card"], [1, "member-image-container"], ["loading", "lazy", 1, "member-image", 3, "error", "src", "alt"], [1, "member-avatar", 2, "display", "none"], [1, "member-overlay"], ["target", "_blank", "class", "linkedin-link", 3, "href", 4, "ngIf"], [1, "member-info"], [1, "member-role"], [1, "member-description"], [1, "member-skills"], ["styleClass", "skill-chip", 3, "label", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["target", "_blank", 1, "linkedin-link", 3, "href"], [1, "pi", "pi-linkedin"], ["styleClass", "skill-chip", 3, "label"], [1, "culture-card"], [1, "culture-icon"], [1, "culture-practices"], ["class", "practice-tag", 4, "ngFor", "ngForOf"], [1, "practice-tag"], [1, "roadmap-item"], [1, "roadmap-quarter"], [1, "roadmap-content"], [1, "roadmap-icon"], [1, "roadmap-goals"], ["class", "goal-item", 4, "ngFor", "ngForOf"], [1, "goal-item"], [1, "pi", "pi-check-circle"], [1, "achievement-card"], [1, "achievement-icon"], [1, "achievement-content"], [1, "achievement-year"], [1, "achievement-description"], ["class", "achievement-metrics", 4, "ngIf"], [1, "achievement-metrics"], ["class", "metric-badge", 4, "ngFor", "ngForOf"], [1, "metric-badge"], ["styleClass", "project-card"], ["pTemplate", "header"], [1, "project-content"], [1, "project-description"], [1, "project-metrics"], [1, "metric-item"], [1, "metric-label"], [1, "metric-value"], [1, "project-results"], [1, "results-list"], ["class", "result-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "project-tech"], [1, "tech-chips"], ["styleClass", "tech-chip", 3, "label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "project-header"], [1, "project-icon"], [3, "value", "severity"], [1, "result-item"], ["styleClass", "tech-chip", 3, "label"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Our Story");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Pioneering the Future of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Digital Innovation.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Since 2019, Nest Tech AI Solutions has been at the forefront of digital transformation, crafting innovative solutions that empower businesses to thrive in the digital age. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_17_listener() {
              return ctx.scrollToHistory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_18_listener() {
              return ctx.scrollToTeam();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 14)(20, "div", 15)(21, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Our Journey Through Innovation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "From startup to industry leader - the story of Nest Tech AI Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AboutComponent_div_26_Template, 12, 11, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 19)(28, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Meet Our Leadership Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Visionary leaders driving innovation and excellence at Nest Tech AI Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p-carousel", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AboutComponent_ng_template_33_Template, 16, 27, "ng-template", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "section", 22)(35, "div", 23)(36, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26)(39, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "5+");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Years of Excellence");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26)(46, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "100+");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Projects Delivered");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 26)(53, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "25+");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Countries Served");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26)(60, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "4.9/5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Client Satisfaction");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "section", 32)(65, "div", 33)(66, "div", 34)(67, "div", 35)(68, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Our Vision");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "To be the global leader in digital innovation, transforming how businesses operate and grow through cutting-edge technology solutions that create lasting impact.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 38)(75, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Our Mission");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Empowering businesses worldwide with innovative, scalable, and secure digital solutions while fostering a culture of excellence, creativity, and continuous learning.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "section", 40)(82, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Our Culture & Values");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "The principles that guide our daily work and long-term vision");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, AboutComponent_div_87_Template, 9, 6, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "section", 43)(89, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Our Vision Roadmap");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Strategic goals and initiatives shaping our future");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, AboutComponent_div_94_Template, 12, 7, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "section", 46)(96, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Recognition & Achievements");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Celebrating our milestones and industry recognition");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, AboutComponent_div_101_Template, 11, 7, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "section", 49)(103, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Client Success Stories");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Transforming businesses across industries with innovative solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, AboutComponent_p_card_108_Template, 31, 10, "p-card", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyTimeline);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.teamMembers)("numVisible", 3)("numScroll", 1)("circular", true)("autoplayInterval", 5000)("responsiveOptions", ctx.teamCarouselResponsive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInLeft", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyCulture);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roadmapItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.achievements);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects)("ngForTrackBy", ctx.trackByProjectIndex);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_8__.Carousel, primeng_chip__WEBPACK_IMPORTED_MODULE_9__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_9__.Chip, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_tag__WEBPACK_IMPORTED_MODULE_11__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_11__.Tag, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogModule],
        styles: [".about-hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 600px;\n  padding: 4rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: var(--surface-ground);\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(45deg, var(--primary-color) 0%, var(--primary-color-light) 100%);\n  opacity: 0.1;\n  border-radius: 50%;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.one[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 1000px;\n  top: -400px;\n  left: -200px;\n  transform: rotate(-15deg);\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.two[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n  bottom: -300px;\n  right: -100px;\n  transform: rotate(15deg);\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-lightray.three[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  width: 100%;\n  padding: 2rem;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .company-tagline[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.about-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.history-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.history-section[_ngcontent-%COMP%]   .history-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.history-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.history-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 0;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--primary-color);\n  transform: translateX(-50%);\n}\n@media (max-width: 768px) {\n  .history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]::before {\n    left: 2rem;\n  }\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 3rem;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n    margin-left: 4rem;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.left[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n@media (max-width: 768px) {\n  .history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.left[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n    text-align: left;\n  }\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  text-align: left;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.right[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n@media (max-width: 768px) {\n  .history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.right[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n    left: 2rem;\n    position: relative;\n    transform: none;\n    margin-bottom: 1rem;\n  }\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background: var(--surface-card);\n  border: 3px solid var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  max-width: 400px;\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 1rem;\n  font-size: 1.3rem;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.history-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-metrics[_ngcontent-%COMP%]   .metric-chip[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-card);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 2rem;\n  background: var(--surface-hover);\n  border-radius: 1rem;\n  transition: transform 0.3s ease;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 1.1rem;\n}\n\n.vision-mission-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-mission-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 3rem;\n}\n@media (max-width: 768px) {\n  .vision-mission-section[_ngcontent-%COMP%]   .vision-mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%], .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 3rem;\n  border-radius: 1rem;\n  text-align: center;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover, .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .vm-icon[_ngcontent-%COMP%], .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .vm-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 2rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .vm-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .vm-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n}\n.vision-mission-section[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vision-mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.7;\n  font-size: 1.1rem;\n}\n\n.culture-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.culture-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.culture-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  transition: transform 0.3s ease;\n  box-shadow: var(--card-shadow);\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   .culture-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1.5rem;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   .culture-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   .culture-practices[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.culture-section[_ngcontent-%COMP%]   .culture-grid[_ngcontent-%COMP%]   .culture-card[_ngcontent-%COMP%]   .culture-practices[_ngcontent-%COMP%]   .practice-tag[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.85rem;\n  border: 1px solid var(--surface-border);\n}\n\n.team-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n  overflow-x: hidden;\n  max-width: 100%;\n}\n.team-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.team-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .p-carousel-items-container {\n  display: flex;\n  align-items: stretch;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .p-carousel-indicators {\n  margin-top: 2rem;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .p-carousel-indicators .p-carousel-indicator button {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background: var(--surface-300);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .p-carousel-indicators .p-carousel-indicator button.p-highlight {\n  background: var(--primary-color);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card {\n  background: var(--surface-card);\n  border-radius: 1rem;\n  overflow: hidden;\n  margin: 0 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: var(--card-shadow);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card:hover {\n  transform: translateY(-10px);\n  box-shadow: var(--card-shadow-hover);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  overflow: hidden;\n  background: var(--surface-hover);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n  display: block;\n  transition: transform 0.3s ease;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-avatar {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-color);\n  color: white;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-avatar i {\n  font-size: 4rem;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-overlay .linkedin-link {\n  color: white;\n  font-size: 1.5rem;\n  text-decoration: none;\n  width: 56px;\n  height: 56px;\n  min-width: 56px;\n  min-height: 56px;\n  border-radius: 50%;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s ease;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-overlay .linkedin-link i {\n  font-size: 1.5rem;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container .member-overlay .linkedin-link:hover {\n  transform: scale(1.1);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container:hover .member-overlay {\n  opacity: 1;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-image-container:hover .member-image {\n  transform: scale(1.1);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.ceo-card .member-image-container .member-image {\n  object-position: center 30%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.anayat-card .member-image-container .member-image {\n  object-position: center 35%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.mushhood-card .member-image-container .member-image {\n  object-position: center 25%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.kasim-card .member-image-container .member-image {\n  object-position: center 15%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.arslan-card .member-image-container .member-image {\n  object-position: center 15%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.jahanzaib-card .member-image-container .member-image {\n  object-position: center 5%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.abbas-card .member-image-container .member-image {\n  object-position: center 15%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card.shahzaib-card .member-image-container .member-image {\n  object-position: center 15%;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info h3 {\n  font-size: 1.3rem;\n  margin-bottom: 0.5rem;\n  color: var(--text-color);\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info .member-role {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-bottom: 1rem;\n  font-size: 1rem;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info .member-description {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n  flex: 1;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info .member-skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.team-section[_ngcontent-%COMP%]     .team-carousel .team-member-card .member-info .member-skills   .skill-chip .p-chip {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  font-size: 0.75rem;\n}\n\n.roadmap-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.roadmap-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.roadmap-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-quarter[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--primary-color);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   .roadmap-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--surface-hover);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   .roadmap-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 1rem;\n  font-size: 1.3rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   .roadmap-goals[_ngcontent-%COMP%]   .goal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   .roadmap-goals[_ngcontent-%COMP%]   .goal-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.roadmap-section[_ngcontent-%COMP%]   .roadmap-timeline[_ngcontent-%COMP%]   .roadmap-item[_ngcontent-%COMP%]   .roadmap-content[_ngcontent-%COMP%]   .roadmap-goals[_ngcontent-%COMP%]   .goal-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n}\n\n.achievements-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.achievements-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.achievements-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  display: flex;\n  gap: 1.5rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n  font-size: 1.3rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%]   .achievement-year[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%]   .achievement-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%]   .achievement-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievements-grid[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .achievement-content[_ngcontent-%COMP%]   .achievement-metrics[_ngcontent-%COMP%]   .metric-badge[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--primary-color);\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  border: 1px solid var(--primary-color);\n}\n\n.success-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.success-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.success-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 2rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card {\n  height: 100%;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .p-card {\n  height: 100%;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .p-card:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-shadow-hover);\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-header .project-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-header .project-icon i {\n  font-size: 1.5rem;\n  color: white;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content h3 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-description {\n  color: var(--text-secondary-color);\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: var(--surface-hover);\n  border-radius: 0.5rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-metrics .metric-item {\n  text-align: center;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-metrics .metric-item .metric-label {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 0.25rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-metrics .metric-item .metric-value {\n  display: block;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-results {\n  margin-bottom: 1.5rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-results h4 {\n  color: var(--text-color);\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-results .results-list .result-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 0.5rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-results .results-list .result-item i {\n  color: var(--primary-color);\n  font-size: 1.1rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-tech .tech-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.success-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]     .project-card .project-content .project-tech .tech-chips   .tech-chip .p-chip {\n  background: var(--primary-color);\n  color: white;\n  font-size: 0.8rem;\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);\n  pointer-events: none;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1.2rem;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.5rem;\n  line-height: 1.6;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: 1rem 2.5rem;\n  min-width: 220px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%] {\n  background: #ff9800;\n  border-color: #ff9800;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%]:hover {\n  background: #fb8c00;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: #ffffff;\n  transform: translateY(-2px);\n}\n\n@media (max-width: 768px) {\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 2rem !important;\n  }\n  .timeline-item.left[_ngcontent-%COMP%], .timeline-item.right[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n    text-align: left !important;\n  }\n  .timeline-item.left[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%], .timeline-item.right[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9QZXJzb25hbCUyMFdvcmtzcGFjZS9TaGVobmF6LVNvZnR3YXJlLVNvbHV0aW9ucy9zcmMvYXBwL2ZlYXR1cmVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLDRGQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQU47QURFTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FSO0FER007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNEUjtBRElNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRlI7QURPRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFFJO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBRFNNO0VBQ0UsMkJBQUE7QUNQUjtBRFVNO0VBWEY7SUFZSSxpQkFBQTtF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a0xJO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2hMTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVybyBTZWN0aW9uXHJcbi5hYm91dC1oZXJvLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuICAuaGVyby1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5oZXJvLWxpZ2h0cmF5IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSAxMDAlKTtcclxuICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAmLm9uZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICB0b3A6IC00MDBweDtcclxuICAgICAgICBsZWZ0OiAtMjAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50d28ge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTMwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRocmVlIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRlbnQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuY29tcGFueS10YWdsaW5lIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWhlYWRsaW5lIHtcclxuICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG5cclxuICAgICAgLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENvbXBhbnkgSGlzdG9yeSBUaW1lbGluZVxyXG4uaGlzdG9yeS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuXHJcbiAgLmhpc3RvcnktY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aW1lbGluZS1pdGVtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5sZWZ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGxlZnQ6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lLXllYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lLW1ldHJpY3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgICAgIC5tZXRyaWMtY2hpcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdGF0cyBTZWN0aW9uXHJcbi5zdGF0cy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuXHJcbiAgLnN0YXRzLWdyaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAuc3RhdC1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0LWNvbnRlbnQge1xyXG4gICAgICAgIC5zdGF0LW51bWJlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXQtbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVmlzaW9uICYgTWlzc2lvbiBTZWN0aW9uXHJcbi52aXNpb24tbWlzc2lvbi1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuICAudmlzaW9uLW1pc3Npb24tY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudmlzaW9uLW1pc3Npb24tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDNyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZpc2lvbi1jYXJkLCAubWlzc2lvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnZtLWljb24ge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb21wYW55IEN1bHR1cmUgU2VjdGlvblxyXG4uY3VsdHVyZS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jdWx0dXJlLWdyaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAuY3VsdHVyZS1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdWx0dXJlLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdWx0dXJlLXByYWN0aWNlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5wcmFjdGljZS10YWcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVGVhbSBTZWN0aW9uIHdpdGggQ2Fyb3VzZWxcclxuLnRlYW0tc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIHtcclxuICAgIC5wLWNhcm91c2VsLWl0ZW1zLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgfVxyXG5cclxuICAgIC5wLWNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgICAgLnAtY2Fyb3VzZWwtaW5kaWNhdG9yIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTMwMCk7XHJcblxyXG4gICAgICAgICYucC1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRlYW0tbWVtYmVyLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdy1ob3Zlcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG5cclxuICAgICAgICAubWVtYmVyLWltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtYmVyLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbWJlci1vdmVybGF5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgLmxpbmtlZGluLWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTZweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIC5tZW1iZXItb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbWJlci1pbWFnZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNwZWNpYWwgcG9zaXRpb25pbmcgZm9yIENFTyBpbWFnZSB0byBzaG93IG1vcmUgdXBwZXIgYm9keVxyXG4gICAgICAmLmNlby1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDMwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3BlY2lhbCBwb3NpdGlvbmluZyBmb3IgQW5heWF0IFVsbGFoIGltYWdlIHRvIHNob3cgZmFjZSBwcm9wZXJseVxyXG4gICAgICAmLmFuYXlhdC1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDM1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3BlY2lhbCBwb3NpdGlvbmluZyBmb3IgTXVzaGhvb2QgaW1hZ2UgdG8gYWxpZ24gcHJvcGVybHlcclxuICAgICAgJi5tdXNoaG9vZC1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDI1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3BlY2lhbCBwb3NpdGlvbmluZyBmb3IgS2FzaW0gaW1hZ2UgdG8gYWxpZ24gcHJvcGVybHkgLSBzaG93IG1vcmUgaGVhZFxyXG4gICAgICAmLmthc2ltLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTcGVjaWFsIHBvc2l0aW9uaW5nIGZvciBBcnNsYW4gaW1hZ2UgdG8gc2hvdyBoZWFkIHByb3Blcmx5XHJcbiAgICAgICYuYXJzbGFuLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTcGVjaWFsIHBvc2l0aW9uaW5nIGZvciBKYWhhbnphaWIgaW1hZ2UgdG8gc2hvdyBoZWFkIHByb3Blcmx5XHJcbiAgICAgICYuamFoYW56YWliLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNwZWNpYWwgcG9zaXRpb25pbmcgZm9yIEFiYmFzIGltYWdlIHRvIHNob3cgaGVhZCBwcm9wZXJseVxyXG4gICAgICAmLmFiYmFzLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTcGVjaWFsIHBvc2l0aW9uaW5nIGZvciBTaGFoemFpYiBpbWFnZSB0byBzaG93IGhlYWQgcHJvcGVybHlcclxuICAgICAgJi5zaGFoemFpYi1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDE1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lbWJlci1pbmZvIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW1iZXItcm9sZSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW1iZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtYmVyLXNraWxscyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgOjpuZy1kZWVwIC5za2lsbC1jaGlwIHtcclxuICAgICAgICAgICAgLnAtY2hpcCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUm9hZG1hcCBTZWN0aW9uXHJcbi5yb2FkbWFwLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJvYWRtYXAtdGltZWxpbmUge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAucm9hZG1hcC1pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9hZG1hcC1xdWFydGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb2FkbWFwLWNvbnRlbnQge1xyXG4gICAgICAgIC5yb2FkbWFwLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvYWRtYXAtZ29hbHMge1xyXG4gICAgICAgICAgLmdvYWwtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBY2hpZXZlbWVudHMgU2VjdGlvblxyXG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuYWNoaWV2ZW1lbnRzLWdyaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAuYWNoaWV2ZW1lbnQtY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2hpZXZlbWVudC1pY29uIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNoaWV2ZW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWNoaWV2ZW1lbnQteWVhciB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY2hpZXZlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWNoaWV2ZW1lbnQtbWV0cmljcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgLm1ldHJpYy1iYWRnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU3VjY2VzcyBTdG9yaWVzIFNlY3Rpb25cclxuLnN1Y2Nlc3Mtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMtZ3JpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgLnAtY2FyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3ctaG92ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2plY3QtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvamVjdC1jb250ZW50IHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LW1ldHJpY3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgLm1ldHJpYy1pdGVtIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLm1ldHJpYy1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWV0cmljLXZhbHVlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtcmVzdWx0cyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZXN1bHRzLWxpc3Qge1xyXG4gICAgICAgICAgICAucmVzdWx0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LXRlY2gge1xyXG4gICAgICAgICAgLnRlY2gtY2hpcHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgOjpuZy1kZWVwIC50ZWNoLWNoaXAge1xyXG4gICAgICAgICAgICAgIC5wLWNoaXAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENUQSBTZWN0aW9uXHJcbi5jdGEtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTIzN2UgMCUsICMyODM1OTMgNTAlLCAjMzk0OWFiIDEwMCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jdGEtY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3RhLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEuMnJlbTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAyLjVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJi5wLWJ1dHRvbi1yYWlzZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmOTgwMDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmI4YzAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyNTUsIDE1MiwgMCwgMC4zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucC1idXR0b24tb3V0bGluZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpbWVsaW5lIHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgJi5sZWZ0LCAmLnJpZ2h0IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmFib3V0LWhlcm8tc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbn1cbi5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFib3V0LWhlcm8tc2VjdGlvbiAuaGVyby1iYWNrZ3JvdW5kIC5oZXJvLWxpZ2h0cmF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSAxMDAlKTtcbiAgb3BhY2l0eTogMC4xO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYWJvdXQtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQgLmhlcm8tbGlnaHRyYXkub25lIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHRvcDogLTQwMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG59XG4uYWJvdXQtaGVyby1zZWN0aW9uIC5oZXJvLWJhY2tncm91bmQgLmhlcm8tbGlnaHRyYXkudHdvIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBib3R0b206IC0zMDBweDtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xufVxuLmFib3V0LWhlcm8tc2VjdGlvbiAuaGVyby1iYWNrZ3JvdW5kIC5oZXJvLWxpZ2h0cmF5LnRocmVlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uYWJvdXQtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmNvbXBhbnktdGFnbGluZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cbi5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1oZWFkbGluZSAuaGlnaGxpZ2h0IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbi5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmFib3V0LWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IC5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hYm91dC1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG4uYWJvdXQtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8tYWN0aW9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uaGlzdG9yeS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xufVxuLmhpc3Rvcnktc2VjdGlvbiAuaGlzdG9yeS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaGlzdG9yeS1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmhpc3Rvcnktc2VjdGlvbiAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZTo6YmVmb3JlIHtcbiAgICBsZWZ0OiAycmVtO1xuICB9XG59XG4uaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSAudGltZWxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSAudGltZWxpbmUtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ubGVmdCAudGltZWxpbmUtY29udGVudCB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSAudGltZWxpbmUtaXRlbS5sZWZ0IC50aW1lbGluZS1jb250ZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSAudGltZWxpbmUtaXRlbS5yaWdodCAudGltZWxpbmUtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtLnJpZ2h0IC50aW1lbGluZS1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLW1hcmtlciB7XG4gICAgbGVmdDogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1tYXJrZXIgLnRpbWVsaW5lLXllYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1tYXJrZXIgLnRpbWVsaW5lLWljb24ge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1tYXJrZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uaGlzdG9yeS1zZWN0aW9uIC50aW1lbGluZSAudGltZWxpbmUtaXRlbSAudGltZWxpbmUtY29udGVudCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbn1cbi5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1jb250ZW50IGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5oaXN0b3J5LXNlY3Rpb24gLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLWNvbnRlbnQgLnRpbWVsaW5lLW1ldHJpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuLmhpc3Rvcnktc2VjdGlvbiAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0gLnRpbWVsaW5lLWNvbnRlbnQgLnRpbWVsaW5lLW1ldHJpY3MgLm1ldHJpYy1jaGlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXRzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG59XG4uc3RhdHMtc2VjdGlvbiAuc3RhdHMtZ3JpZCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi5zdGF0cy1zZWN0aW9uIC5zdGF0cy1ncmlkIC5zdGF0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc3RhdHMtc2VjdGlvbiAuc3RhdHMtZ3JpZCAuc3RhdC1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLnN0YXRzLXNlY3Rpb24gLnN0YXRzLWdyaWQgLnN0YXQtaXRlbSBpIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5zdGF0cy1zZWN0aW9uIC5zdGF0cy1ncmlkIC5zdGF0LWl0ZW0gLnN0YXQtY29udGVudCAuc3RhdC1udW1iZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnN0YXRzLXNlY3Rpb24gLnN0YXRzLWdyaWQgLnN0YXQtaXRlbSAuc3RhdC1jb250ZW50IC5zdGF0LWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi52aXNpb24tbWlzc2lvbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG59XG4udmlzaW9uLW1pc3Npb24tc2VjdGlvbiAudmlzaW9uLW1pc3Npb24tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnZpc2lvbi1taXNzaW9uLXNlY3Rpb24gLnZpc2lvbi1taXNzaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgZ2FwOiAzcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aXNpb24tbWlzc2lvbi1zZWN0aW9uIC52aXNpb24tbWlzc2lvbi1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnZpc2lvbi1taXNzaW9uLXNlY3Rpb24gLnZpc2lvbi1jYXJkLCAudmlzaW9uLW1pc3Npb24tc2VjdGlvbiAubWlzc2lvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgcGFkZGluZzogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4udmlzaW9uLW1pc3Npb24tc2VjdGlvbiAudmlzaW9uLWNhcmQ6aG92ZXIsIC52aXNpb24tbWlzc2lvbi1zZWN0aW9uIC5taXNzaW9uLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuLnZpc2lvbi1taXNzaW9uLXNlY3Rpb24gLnZpc2lvbi1jYXJkIC52bS1pY29uLCAudmlzaW9uLW1pc3Npb24tc2VjdGlvbiAubWlzc2lvbi1jYXJkIC52bS1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udmlzaW9uLW1pc3Npb24tc2VjdGlvbiAudmlzaW9uLWNhcmQgLnZtLWljb24gaSwgLnZpc2lvbi1taXNzaW9uLXNlY3Rpb24gLm1pc3Npb24tY2FyZCAudm0taWNvbiBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4udmlzaW9uLW1pc3Npb24tc2VjdGlvbiAudmlzaW9uLWNhcmQgaDMsIC52aXNpb24tbWlzc2lvbi1zZWN0aW9uIC5taXNzaW9uLWNhcmQgaDMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4udmlzaW9uLW1pc3Npb24tc2VjdGlvbiAudmlzaW9uLWNhcmQgcCwgLnZpc2lvbi1taXNzaW9uLXNlY3Rpb24gLm1pc3Npb24tY2FyZCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5jdWx0dXJlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG59XG4uY3VsdHVyZS1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmN1bHR1cmUtc2VjdGlvbiAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY3VsdHVyZS1zZWN0aW9uIC5jdWx0dXJlLWdyaWQge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG4uY3VsdHVyZS1zZWN0aW9uIC5jdWx0dXJlLWdyaWQgLmN1bHR1cmUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xufVxuLmN1bHR1cmUtc2VjdGlvbiAuY3VsdHVyZS1ncmlkIC5jdWx0dXJlLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uY3VsdHVyZS1zZWN0aW9uIC5jdWx0dXJlLWdyaWQgLmN1bHR1cmUtY2FyZCAuY3VsdHVyZS1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jdWx0dXJlLXNlY3Rpb24gLmN1bHR1cmUtZ3JpZCAuY3VsdHVyZS1jYXJkIC5jdWx0dXJlLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmN1bHR1cmUtc2VjdGlvbiAuY3VsdHVyZS1ncmlkIC5jdWx0dXJlLWNhcmQgaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmN1bHR1cmUtc2VjdGlvbiAuY3VsdHVyZS1ncmlkIC5jdWx0dXJlLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5jdWx0dXJlLXNlY3Rpb24gLmN1bHR1cmUtZ3JpZCAuY3VsdHVyZS1jYXJkIC5jdWx0dXJlLXByYWN0aWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmN1bHR1cmUtc2VjdGlvbiAuY3VsdHVyZS1ncmlkIC5jdWx0dXJlLWNhcmQgLmN1bHR1cmUtcHJhY3RpY2VzIC5wcmFjdGljZS10YWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuXG4udGVhbS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnRlYW0tc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi50ZWFtLXNlY3Rpb24gLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnAtY2Fyb3VzZWwtaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAucC1jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC5wLWNhcm91c2VsLWluZGljYXRvcnMgLnAtY2Fyb3VzZWwtaW5kaWNhdG9yIGJ1dHRvbiB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0zMDApO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnAtY2Fyb3VzZWwtaW5kaWNhdG9ycyAucC1jYXJvdXNlbC1pbmRpY2F0b3IgYnV0dG9uLnAtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAxcmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93LWhvdmVyKTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1hdmF0YXIgaSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItb3ZlcmxheSAubGlua2VkaW4tbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgbWluLXdpZHRoOiA1NnB4O1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItb3ZlcmxheSAubGlua2VkaW4tbGluayBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLW92ZXJsYXkgLmxpbmtlZGluLWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lcjpob3ZlciAubWVtYmVyLW92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXI6aG92ZXIgLm1lbWJlci1pbWFnZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkLmNlby1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciAzMCU7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZC5hbmF5YXQtY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLWltYWdlIHtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMzUlO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQubXVzaGhvb2QtY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLWltYWdlIHtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMjUlO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQua2FzaW0tY2FyZCAubWVtYmVyLWltYWdlLWNvbnRhaW5lciAubWVtYmVyLWltYWdlIHtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMTUlO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQuYXJzbGFuLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDE1JTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkLmphaGFuemFpYi1jYXJkIC5tZW1iZXItaW1hZ2UtY29udGFpbmVyIC5tZW1iZXItaW1hZ2Uge1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciA1JTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkLmFiYmFzLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDE1JTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkLnNoYWh6YWliLWNhcmQgLm1lbWJlci1pbWFnZS1jb250YWluZXIgLm1lbWJlci1pbWFnZSB7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDE1JTtcbn1cbi50ZWFtLXNlY3Rpb24gOjpuZy1kZWVwIC50ZWFtLWNhcm91c2VsIC50ZWFtLW1lbWJlci1jYXJkIC5tZW1iZXItaW5mbyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWluZm8gaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWluZm8gLm1lbWJlci1yb2xlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWluZm8gLm1lbWJlci1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZsZXg6IDE7XG59XG4udGVhbS1zZWN0aW9uIDo6bmctZGVlcCAudGVhbS1jYXJvdXNlbCAudGVhbS1tZW1iZXItY2FyZCAubWVtYmVyLWluZm8gLm1lbWJlci1za2lsbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuLnRlYW0tc2VjdGlvbiA6Om5nLWRlZXAgLnRlYW0tY2Fyb3VzZWwgLnRlYW0tbWVtYmVyLWNhcmQgLm1lbWJlci1pbmZvIC5tZW1iZXItc2tpbGxzIDo6bmctZGVlcCAuc2tpbGwtY2hpcCAucC1jaGlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ucm9hZG1hcC1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xufVxuLnJvYWRtYXAtc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnNlY3Rpb24tc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnJvYWRtYXAtc2VjdGlvbiAucm9hZG1hcC10aW1lbGluZSB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMnJlbTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSAucm9hZG1hcC1xdWFydGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSAucm9hZG1hcC1jb250ZW50IC5yb2FkbWFwLWljb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnJvYWRtYXAtc2VjdGlvbiAucm9hZG1hcC10aW1lbGluZSAucm9hZG1hcC1pdGVtIC5yb2FkbWFwLWNvbnRlbnQgLnJvYWRtYXAtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSAucm9hZG1hcC1jb250ZW50IGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSAucm9hZG1hcC1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucm9hZG1hcC1zZWN0aW9uIC5yb2FkbWFwLXRpbWVsaW5lIC5yb2FkbWFwLWl0ZW0gLnJvYWRtYXAtY29udGVudCAucm9hZG1hcC1nb2FscyAuZ29hbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yb2FkbWFwLXNlY3Rpb24gLnJvYWRtYXAtdGltZWxpbmUgLnJvYWRtYXAtaXRlbSAucm9hZG1hcC1jb250ZW50IC5yb2FkbWFwLWdvYWxzIC5nb2FsLWl0ZW0gaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnJvYWRtYXAtc2VjdGlvbiAucm9hZG1hcC10aW1lbGluZSAucm9hZG1hcC1pdGVtIC5yb2FkbWFwLWNvbnRlbnQgLnJvYWRtYXAtZ29hbHMgLmdvYWwtaXRlbSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5hY2hpZXZlbWVudHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xufVxuLmFjaGlldmVtZW50cy1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmFjaGlldmVtZW50cy1zZWN0aW9uIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5hY2hpZXZlbWVudHMtc2VjdGlvbiAuYWNoaWV2ZW1lbnRzLWdyaWQge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLmFjaGlldmVtZW50cy1ncmlkIC5hY2hpZXZlbWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5hY2hpZXZlbWVudHMtc2VjdGlvbiAuYWNoaWV2ZW1lbnRzLWdyaWQgLmFjaGlldmVtZW50LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLmFjaGlldmVtZW50cy1ncmlkIC5hY2hpZXZlbWVudC1jYXJkIC5hY2hpZXZlbWVudC1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmFjaGlldmVtZW50cy1zZWN0aW9uIC5hY2hpZXZlbWVudHMtZ3JpZCAuYWNoaWV2ZW1lbnQtY2FyZCAuYWNoaWV2ZW1lbnQtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLmFjaGlldmVtZW50cy1ncmlkIC5hY2hpZXZlbWVudC1jYXJkIC5hY2hpZXZlbWVudC1jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbi5hY2hpZXZlbWVudHMtc2VjdGlvbiAuYWNoaWV2ZW1lbnRzLWdyaWQgLmFjaGlldmVtZW50LWNhcmQgLmFjaGlldmVtZW50LWNvbnRlbnQgaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLmFjaGlldmVtZW50cy1ncmlkIC5hY2hpZXZlbWVudC1jYXJkIC5hY2hpZXZlbWVudC1jb250ZW50IC5hY2hpZXZlbWVudC15ZWFyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmFjaGlldmVtZW50cy1zZWN0aW9uIC5hY2hpZXZlbWVudHMtZ3JpZCAuYWNoaWV2ZW1lbnQtY2FyZCAuYWNoaWV2ZW1lbnQtY29udGVudCAuYWNoaWV2ZW1lbnQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmFjaGlldmVtZW50cy1zZWN0aW9uIC5hY2hpZXZlbWVudHMtZ3JpZCAuYWNoaWV2ZW1lbnQtY2FyZCAuYWNoaWV2ZW1lbnQtY29udGVudCAuYWNoaWV2ZW1lbnQtbWV0cmljcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG4uYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLmFjaGlldmVtZW50cy1ncmlkIC5hY2hpZXZlbWVudC1jYXJkIC5hY2hpZXZlbWVudC1jb250ZW50IC5hY2hpZXZlbWVudC1tZXRyaWNzIC5tZXRyaWMtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnN1Y2Nlc3Mtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdy1ob3Zlcik7XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIC5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtaGVhZGVyIC5wcm9qZWN0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIC5wcm9qZWN0LWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LW1ldHJpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtY29udGVudCAucHJvamVjdC1tZXRyaWNzIC5tZXRyaWMtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtY29udGVudCAucHJvamVjdC1tZXRyaWNzIC5tZXRyaWMtaXRlbSAubWV0cmljLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LW1ldHJpY3MgLm1ldHJpYy1pdGVtIC5tZXRyaWMtdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnN1Y2Nlc3Mtc2VjdGlvbiAucHJvamVjdHMtZ3JpZCA6Om5nLWRlZXAgLnByb2plY3QtY2FyZCAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LXJlc3VsdHMge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtcmVzdWx0cyBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uc3VjY2Vzcy1zZWN0aW9uIC5wcm9qZWN0cy1ncmlkIDo6bmctZGVlcCAucHJvamVjdC1jYXJkIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtcmVzdWx0cyAucmVzdWx0cy1saXN0IC5yZXN1bHQtaXRlbSBpIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtY29udGVudCAucHJvamVjdC10ZWNoIC50ZWNoLWNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5zdWNjZXNzLXNlY3Rpb24gLnByb2plY3RzLWdyaWQgOjpuZy1kZWVwIC5wcm9qZWN0LWNhcmQgLnByb2plY3QtY29udGVudCAucHJvamVjdC10ZWNoIC50ZWNoLWNoaXBzIDo6bmctZGVlcCAudGVjaC1jaGlwIC5wLWNoaXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmN0YS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWEyMzdlIDAlLCAjMjgzNTkzIDUwJSwgIzM5NDlhYiAxMDAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3RhLXNlY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgYnV0dG9uLnAtYnV0dG9uLXJhaXNlZCB7XG4gIGJhY2tncm91bmQ6ICNmZjk4MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyBidXR0b24ucC1idXR0b24tcmFpc2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZiOGMwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMyk7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyBidXR0b24ucC1idXR0b24tb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIGJ1dHRvbi5wLWJ1dHRvbi1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGltZWxpbmU6OmJlZm9yZSB7XG4gICAgbGVmdDogMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC50aW1lbGluZS1pdGVtLmxlZnQsIC50aW1lbGluZS1pdGVtLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpbWVsaW5lLWl0ZW0ubGVmdCAudGltZWxpbmUtY29udGVudCwgLnRpbWVsaW5lLWl0ZW0ucmlnaHQgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('900ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'translateY(40px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('900ms 400ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'translateX(-60px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('800ms 300ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'scale(0.8)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('700ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
            transform: 'scale(1)',
            opacity: 1
          }))])])]
        },
        changeDetection: 0
      });
    }
  }
  return AboutComponent;
})();

/***/ }),

/***/ 7357:
/*!************************************************!*\
  !*** ./src/app/features/about/about.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 9546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





let AboutModule = /*#__PURE__*/(() => {
  class AboutModule {
    static {
      this.ɵfac = function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AboutModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
          path: '',
          component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
        }]), _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent]
      });
    }
  }
  return AboutModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=357.js.map