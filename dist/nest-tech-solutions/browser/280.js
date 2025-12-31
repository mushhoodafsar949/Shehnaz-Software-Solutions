"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[280],{

/***/ 6280:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dialog.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ 1257);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 1717);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/windowminimize */ 9551);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 9136);


















const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
const _c3 = ["*", [["p-header"]], [["p-footer"]]];
const _c4 = ["*", "p-header", "p-footer"];
const _c5 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a0,
  "p-dialog-mask-scrollblocker": a1,
  "p-dialog-left": a2,
  "p-dialog-right": a3,
  "p-dialog-top": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom": a7,
  "p-dialog-bottom-left": a8,
  "p-dialog-bottom-right": a9
});
const _c6 = (a0, a1, a2, a3) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-draggable": a1,
  "p-dialog-resizable": a2,
  "p-dialog-maximized": a3
});
const _c7 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c8 = a0 => ({
  value: "visible",
  params: a0
});
const _c9 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
const _c10 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
const _c11 = () => ({
  "min-width": 0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMaximizeIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMinimizeIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 26)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 24)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 24)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r1.maximizable ? "0" : "-1")("aria-label", ctx_r1.maximizeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate && !ctx_r1.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximizeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 29)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 24)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c10))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 17)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 17)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 8, "button", 19)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerFacet && !ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 11)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 9)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notHeadless_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c6, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c7, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 5, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.maskStyle)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](5, _c5, [ctx_r1.modal, ctx_r1.modal || ctx_r1.blockScroll, ctx_r1.position === "left", ctx_r1.position === "right", ctx_r1.position === "top", ctx_r1.position === "topleft" || ctx_r1.position === "top-left", ctx_r1.position === "topright" || ctx_r1.position === "top-right", ctx_r1.position === "bottom", ctx_r1.position === "bottomleft" || ctx_r1.position === "bottom-left", ctx_r1.position === "bottomright" || ctx_r1.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
let Dialog = /*#__PURE__*/(() => {
  class Dialog {
    document;
    platformId;
    el;
    renderer;
    zone;
    cd;
    config;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable = true;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable = true;
    /**
     * Defines the left offset of dialog.
     * @group Props
     * @deprecated positionLeft property is deprecated.
     */
    get positionLeft() {
      return 0;
    }
    set positionLeft(_positionLeft) {
      console.log('positionLeft property is deprecated.');
    }
    /**
     * Defines the top offset of dialog.
     * @group Props
     * @deprecated positionTop property is deprecated.
     */
    get positionTop() {
      return 0;
    }
    set positionTop(_positionTop) {
      console.log('positionTop property is deprecated.');
    }
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal = false;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape = true;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask = false;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl = false;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable = true;
    /**
     * Defines if the component is responsive.
     * @group Props
     * @deprecated Responsive property is deprecated.
     */
    get responsive() {
      return false;
    }
    set responsive(_responsive) {
      console.log('Responsive property is deprecated.');
    }
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader = true;
    /**
     * Defines the breakpoint of the component responsive.
     * @group Props
     * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
     */
    get breakpoint() {
      return 649;
    }
    set breakpoint(_breakpoint) {
      console.log('Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.');
    }
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll = false;
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
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX = 0;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY = 0;
    /**
     * When enabled, first focusable element receives focus on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable = false;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport = true;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex = '0';
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      if (value) {
        this._style = {
          ...value
        };
        this.originalStyle = value;
      }
    }
    /**
     * Position of the dialog.
     * @group Props
     */
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = 'translate3d(-100%, 0px, 0px)';
          break;
        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = 'translate3d(100%, 0px, 0px)';
          break;
        case 'bottom':
          this.transformOptions = 'translate3d(0px, 100%, 0px)';
          break;
        case 'top':
          this.transformOptions = 'translate3d(0px, -100%, 0px)';
          break;
        default:
          this.transformOptions = 'scale(0.7)';
          break;
      }
    }
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFacet;
    footerFacet;
    templates;
    headerViewChild;
    contentViewChild;
    footerViewChild;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    maximizeIconTemplate;
    closeIconTemplate;
    minimizeIconTemplate;
    headlessTemplate;
    _visible = false;
    maskVisible;
    container;
    wrapper;
    dragging;
    ariaLabelledBy = this.getAriaLabelledBy();
    documentDragListener;
    documentDragEndListener;
    resizing;
    documentResizeListener;
    documentResizeEndListener;
    documentEscapeListener;
    maskClickListener;
    lastPageX;
    lastPageY;
    preventVisibleChangePropagation;
    maximized;
    preMaximizeContentHeight;
    preMaximizeContainerWidth;
    preMaximizeContainerHeight;
    preMaximizePageX;
    preMaximizePageY;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    _style = {};
    _position = 'center';
    originalStyle;
    transformOptions = 'scale(0.7)';
    styleElement;
    window;
    get maximizeLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_3__.TranslationKeys.ARIA)['maximizeLabel'];
    }
    constructor(document, platformId, el, renderer, zone, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.zone = zone;
      this.cd = cd;
      this.config = config;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'maximizeicon':
            this.maximizeIconTemplate = item.template;
            break;
          case 'minimizeicon':
            this.minimizeIconTemplate = item.template;
            break;
          case 'headless':
            this.headlessTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_header' : null;
    }
    parseDurationToMilliseconds(durationString) {
      const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
      let totalMilliseconds = 0;
      let match;
      while ((match = transitionTimeRegex.exec(durationString)) !== null) {
        const value = parseFloat(match[1]);
        const unit = match[2];
        if (unit === 'ms') {
          totalMilliseconds += value;
        } else if (unit === 's') {
          totalMilliseconds += value * 1000;
        }
      }
      if (totalMilliseconds === 0) {
        return undefined;
      }
      return totalMilliseconds;
    }
    focus(focusParentElement = this.contentViewChild?.nativeElement) {
      const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
      let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFocusableElement(focusParentElement, '[autofocus]');
      if (focusable) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusable.focus(), timeoutDuration || 5);
        });
        return;
      }
      const focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFocusableElement(focusParentElement);
      if (focusableElement) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusableElement.focus(), timeoutDuration || 5);
        });
      } else if (this.footerViewChild && focusParentElement !== this.footerViewChild.nativeElement) {
        // If the content section is empty try to focus on footer
        this.focus(this.footerViewChild.nativeElement);
      }
    }
    close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
    enableModality() {
      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.close(event);
          }
        });
      }
      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.blockBodyScroll();
      }
    }
    disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }
        // for nested dialogs w/modal
        const scrollBlockers = document.querySelectorAll('.p-dialog-mask-scrollblocker');
        if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.unblockBodyScroll();
        }
        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
    maximize() {
      this.maximized = !this.maximized;
      if (!this.modal && !this.blockScroll) {
        if (this.maximized) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.blockBodyScroll();
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.unblockBodyScroll();
        }
      }
      this.onMaximize.emit({
        maximized: this.maximized
      });
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    createStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement('style');
          this.styleElement.type = 'text/css';
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.setAttribute(this.styleElement, 'nonce', this.config?.csp()?.nonce);
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = '';
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
          }
          this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
      }
    }
    initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-dialog-header-close-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
      }
    }
    onDrag(event) {
      if (this.dragging) {
        const containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(this.container);
        const containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(this.container);
        const deltaX = event.pageX - this.lastPageX;
        const deltaY = event.pageY - this.lastPageY;
        const offset = this.container.getBoundingClientRect();
        const containerComputedStyle = getComputedStyle(this.container);
        const leftMargin = parseFloat(containerComputedStyle.marginLeft);
        const topMargin = parseFloat(containerComputedStyle.marginTop);
        const leftPos = offset.left + deltaX - leftMargin;
        const topPos = offset.top + deltaY - topMargin;
        const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getViewport();
        this.container.style.position = 'fixed';
        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = `${leftPos}px`;
            this.lastPageX = event.pageX;
            this.container.style.left = `${leftPos}px`;
          }
          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = `${topPos}px`;
            this.lastPageY = event.pageY;
            this.container.style.top = `${topPos}px`;
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      }
    }
    endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
    resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    }
    //backward compatibility
    center() {
      this.resetPosition();
    }
    initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
    onResize(event) {
      if (this.resizing) {
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(this.container);
        let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(this.contentViewChild?.nativeElement);
        let newWidth = containerWidth + deltaX;
        let newHeight = containerHeight + deltaY;
        let minWidth = this.container.style.minWidth;
        let minHeight = this.container.style.minHeight;
        let offset = this.container.getBoundingClientRect();
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getViewport();
        let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }
        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
    resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
    bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
    unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
      if (!this.documentDragListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragListener = this.renderer.listen(this.window, 'mousemove', this.onDrag.bind(this));
        });
      }
    }
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        this.documentDragListener();
        this.documentDragListener = null;
      }
    }
    bindDocumentDragEndListener() {
      if (!this.documentDragEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragEndListener = this.renderer.listen(this.window, 'mouseup', this.endDrag.bind(this));
        });
      }
    }
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        this.documentDragEndListener();
        this.documentDragEndListener = null;
      }
    }
    bindDocumentResizeListeners() {
      if (!this.documentResizeListener && !this.documentResizeEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentResizeListener = this.renderer.listen(this.window, 'mousemove', this.onResize.bind(this));
          this.documentResizeEndListener = this.renderer.listen(this.window, 'mouseup', this.resizeEnd.bind(this));
        });
      }
    }
    unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        this.documentResizeListener();
        this.documentResizeEndListener();
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
    bindDocumentEscapeListener() {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
        if (event.key == 'Escape') {
          this.close(event);
        }
      });
    }
    unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    restoreAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.wrapper);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.moveOnTop();
          this.appendContainer();
          this.bindGlobalListeners();
          this.container?.setAttribute(this.id, '');
          if (this.modal) {
            this.enableModality();
          }
          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
          }
          if (this.focusOnShow) {
            this.focus();
          }
          break;
        case 'void':
          if (this.wrapper && this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          }
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          this.cd.markForCheck();
          break;
        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
    onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;
      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
        this.document.body.style.removeProperty('--scrollbar-width');
        this.maximized = false;
      }
      if (this.modal) {
        this.disableModality();
      }
      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
      }
      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? {
        ...this.originalStyle
      } : {};
    }
    destroyStyle() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }
      this.destroyStyle();
    }
    static ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dialog,
      selectors: [["p-dialog"]],
      contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        draggable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "draggable", "draggable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        resizable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "resizable", "resizable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        positionLeft: "positionLeft",
        positionTop: "positionTop",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        modal: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "modal", "modal", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        closeOnEscape: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "closeOnEscape", "closeOnEscape", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dismissableMask: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "dismissableMask", "dismissableMask", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        rtl: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "rtl", "rtl", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        closable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "closable", "closable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        responsive: "responsive",
        appendTo: "appendTo",
        breakpoints: "breakpoints",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        maskStyle: "maskStyle",
        showHeader: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showHeader", "showHeader", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        breakpoint: "breakpoint",
        blockScroll: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "blockScroll", "blockScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        baseZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        minX: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "minX", "minX", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        minY: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "minY", "minY", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        focusOnShow: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "focusOnShow", "focusOnShow", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        maximizable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maximizable", "maximizable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        keepInViewport: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "keepInViewport", "keepInViewport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        focusTrap: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "focusTrap", "focusTrap", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        transitionOptions: "transitionOptions",
        closeIcon: "closeIcon",
        closeAriaLabel: "closeAriaLabel",
        closeTabindex: "closeTabindex",
        minimizeIcon: "minimizeIcon",
        maximizeIcon: "maximizeIcon",
        visible: "visible",
        style: "style",
        position: "position"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        visibleChange: "visibleChange",
        onResizeInit: "onResizeInit",
        onResizeEnd: "onResizeEnd",
        onDragEnd: "onDragEnd",
        onMaximize: "onMaximize"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c4,
      decls: 1,
      vars: 1,
      consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass", "ngStyle"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"]],
      template: function Dialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 16, "div", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrap, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__.WindowMinimizeIcon],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return Dialog;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DialogModule = /*#__PURE__*/(() => {
  class DialogModule {
    static ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__.WindowMinimizeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return DialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=280.js.map