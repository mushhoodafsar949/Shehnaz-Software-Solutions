"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[731],{

/***/ 4178:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-carousel.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselModule: () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/chevronleft */ 4959);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 5994);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronup */ 7223);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 5228);















/**
 * Carousel is a content slider featuring various customization options.
 * @group Components
 */
const _c0 = ["itemsContainer"];
const _c1 = ["indicatorContent"];
const _c2 = [[["p-header"]], [["p-footer"]]];
const _c3 = ["p-header", "p-footer"];
const _c4 = (a0, a1) => ({
  "p-carousel p-component": true,
  "p-carousel-vertical": a0,
  "p-carousel-horizontal": a1
});
const _c5 = a0 => ({
  height: a0
});
const _c6 = a0 => ({
  "p-carousel-prev p-link": true,
  "p-disabled": a0
});
const _c7 = (a0, a1, a2) => ({
  "p-carousel-item p-carousel-item-cloned": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
const _c8 = a0 => ({
  $implicit: a0
});
const _c9 = (a0, a1, a2) => ({
  "p-carousel-item": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
const _c10 = a0 => ({
  "p-carousel-next p-link": true,
  "p-disabled": a0
});
const _c11 = a0 => ({
  "p-carousel-indicator": true,
  "p-highlight": a0
});
function Carousel_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 17)(2, Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function Carousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_4_span_2_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPrevButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousIconTemplate);
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c7, ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length, 0 === index_r5, ctx_r1.clonedItemsForStarting.length - 1 === index_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r5))("aria-roledescription", ctx_r1.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c8, item_r4));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c9, ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7, ctx_r1.firstIndex() === index_r7, ctx_r1.lastIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r7))("aria-roledescription", ctx_r1.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c8, item_r6));
  }
}
function Carousel_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c7, ctx_r1.totalShiftedItems * -1 === ctx_r1.numVisible, 0 === index_r9, ctx_r1.clonedItemsForFinishing.length - 1 === index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c8, item_r8));
  }
}
function Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 17)(2, Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_11_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextIconTemplate);
  }
}
function Carousel_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_11_span_2_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c10, ctx_r1.isForwardNavDisabled()))("disabled", ctx_r1.isForwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaNextButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextIconTemplate);
  }
}
function Carousel_ul_12_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_ul_12_li_2_Template_button_click_1_listener($event) {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDotClick($event, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c11, ctx_r1._page === i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.indicatorStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-link")("ngStyle", ctx_r1.indicatorStyle)("tabindex", ctx_r1._page === i_r13 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPageLabel(i_r13 + 1))("aria-current", ctx_r1._page === i_r13 ? "page" : undefined);
  }
}
function Carousel_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Carousel_ul_12_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIndicatorKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_ul_12_li_2_Template, 2, 11, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.indicatorsContentClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r1.indicatorsContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.totalDotsArray());
  }
}
function Carousel_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_13_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
let Carousel = /*#__PURE__*/(() => {
  class Carousel {
    el;
    zone;
    cd;
    renderer;
    document;
    platformId;
    config;
    updateSlideAccessibility(slide, isActive) {
      const focusableElements = slide.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      focusableElements.forEach(element => {
        element.tabIndex = isActive ? 0 : -1;
      });
    }
    updateCarouselItemsAccessibility() {
      const slides = this.el.nativeElement.querySelectorAll('.p-carousel-item');
      slides.forEach((slide, index) => {
        const isActive = index === this._page;
        slide.setAttribute('aria-hidden', !isActive ? 'true' : 'false');
        this.updateSlideAccessibility(slide, isActive);
      });
    }
    /**
     * Index of the first item.
     * @defaultValue 0
     * @group Props
     */
    get page() {
      return this._page;
    }
    set page(val) {
      if (this.isCreated && val !== this._page) {
        if (this.autoplayInterval) {
          this.stopAutoplay();
        }
        if (val > this._page && val <= this.totalDots() - 1) {
          this.step(-1, val);
        } else if (val < this._page) {
          this.step(1, val);
        }
      }
      this._page = val;
    }
    /**
     * Number of items per page.
     * @defaultValue 1
     * @group Props
     */
    get numVisible() {
      return this._numVisible;
    }
    set numVisible(val) {
      this._numVisible = val;
    }
    /**
     * Number of items to scroll.
     * @defaultValue 1
     * @group Props
     */
    get numScroll() {
      return this._numVisible;
    }
    set numScroll(val) {
      this._numScroll = val;
    }
    /**
     * An array of options for responsive design.
     * @see {CarouselResponsiveOptions}
     * @group Props
     */
    responsiveOptions;
    /**
     * Specifies the layout of the component.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Height of the viewport in vertical layout.
     * @group Props
     */
    verticalViewPortHeight = '300px';
    /**
     * Style class of main content.
     * @group Props
     */
    contentClass = '';
    /**
     * Style class of the indicator items.
     * @group Props
     */
    indicatorsContentClass = '';
    /**
     * Inline style of the indicator items.
     * @group Props
     */
    indicatorsContentStyle;
    /**
     * Style class of the indicators.
     * @group Props
     */
    indicatorStyleClass = '';
    /**
     * Style of the indicators.
     * @group Props
     */
    indicatorStyle;
    /**
     * An array of objects to display.
     * @defaultValue null
     * @group Props
     */
    get value() {
      return this._value;
    }
    set value(val) {
      this._value = val;
    }
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular = false;
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators = true;
    /**
     * Whether to display navigation buttons in container.
     * @group Props
     */
    showNavigators = true;
    /**
     * Time in milliseconds to scroll items automatically.
     * @group Props
     */
    autoplayInterval = 0;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the viewport container.
     * @group Props
     */
    styleClass;
    /**
     * Callback to invoke after scroll.
     * @param {CarouselPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemsContainer;
    indicatorContent;
    headerFacet;
    footerFacet;
    templates;
    _numVisible = 1;
    _numScroll = 1;
    _oldNumScroll = 0;
    prevState = {
      numScroll: 0,
      numVisible: 0,
      value: []
    };
    defaultNumScroll = 1;
    defaultNumVisible = 1;
    _page = 0;
    _value;
    carouselStyle;
    id;
    totalShiftedItems;
    isRemainingItemsAdded = false;
    animationTimeout;
    translateTimeout;
    remainingItems = 0;
    _items;
    startPos;
    documentResizeListener;
    clonedItemsForStarting;
    clonedItemsForFinishing;
    allowAutoplay;
    interval;
    isCreated;
    swipeThreshold = 20;
    itemTemplate;
    headerTemplate;
    footerTemplate;
    previousIconTemplate;
    nextIconTemplate;
    window;
    constructor(el, zone, cd, renderer, document, platformId, config) {
      this.el = el;
      this.zone = zone;
      this.cd = cd;
      this.renderer = renderer;
      this.document = document;
      this.platformId = platformId;
      this.config = config;
      this.totalShiftedItems = this.page * this.numScroll * -1;
      this.window = this.document.defaultView;
    }
    ngOnChanges(simpleChange) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (simpleChange.value) {
          if (this.circular && this._value) {
            this.setCloneItems();
          }
        }
        if (this.isCreated) {
          if (simpleChange.numVisible) {
            if (this.responsiveOptions) {
              this.defaultNumVisible = this.numVisible;
            }
            if (this.isCircular()) {
              this.setCloneItems();
            }
            this.createStyle();
            this.calculatePosition();
          }
          if (simpleChange.numScroll) {
            if (this.responsiveOptions) {
              this.defaultNumScroll = this.numScroll;
            }
          }
        }
      }
      this.cd.markForCheck();
    }
    ngAfterContentInit() {
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
          this.setCloneItems();
        }
        if (this.responsiveOptions) {
          this.defaultNumScroll = this._numScroll;
          this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
          this.bindDocumentListeners();
        }
      }
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.cd.detectChanges();
    }
    ngAfterContentChecked() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
          if (this.autoplayInterval) {
            this.stopAutoplay(false);
          }
          this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
          let page = this._page;
          if (this.totalDots() !== 0 && page >= this.totalDots()) {
            page = this.totalDots() - 1;
            this._page = page;
            this.onPage.emit({
              page: this.page
            });
          }
          totalShiftedItems = page * this._numScroll * -1;
          if (isCircular) {
            totalShiftedItems -= this._numVisible;
          }
          if (page === this.totalDots() - 1 && this.remainingItems > 0) {
            totalShiftedItems += -1 * this.remainingItems + this._numScroll;
            this.isRemainingItemsAdded = true;
          } else {
            this.isRemainingItemsAdded = false;
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
          this._oldNumScroll = this._numScroll;
          this.prevState.numScroll = this._numScroll;
          this.prevState.numVisible = this._numVisible;
          this.prevState.value = [...this._value];
          if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
          }
          this.isCreated = true;
          if (this.autoplayInterval && this.isAutoplay()) {
            this.startAutoplay();
          }
        }
        if (isCircular) {
          if (this.page === 0) {
            totalShiftedItems = -1 * this._numVisible;
          } else if (totalShiftedItems === 0) {
            totalShiftedItems = -1 * this.value.length;
            if (this.remainingItems > 0) {
              this.isRemainingItemsAdded = true;
            }
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
        }
      }
    }
    createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = this.renderer.createElement('style');
        this.carouselStyle.type = 'text/css';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.setAttribute(this.carouselStyle, 'nonce', this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.carouselStyle);
      }
      let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
      if (this.responsiveOptions) {
        this.responsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
      if (this.responsiveOptions) {
        let matchedResponsiveData = {
          numVisible: this.defaultNumVisible,
          numScroll: this.defaultNumScroll
        };
        if (typeof window !== 'undefined') {
          let windowWidth = window.innerWidth;
          for (let i = 0; i < this.responsiveOptions.length; i++) {
            let res = this.responsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveData = res;
            }
          }
        }
        if (this._numScroll !== matchedResponsiveData.numScroll) {
          let page = this._page;
          page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
          let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
          if (this.isCircular()) {
            totalShiftedItems -= matchedResponsiveData.numVisible;
          }
          this.totalShiftedItems = totalShiftedItems;
          this._numScroll = matchedResponsiveData.numScroll;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        if (this._numVisible !== matchedResponsiveData.numVisible) {
          this._numVisible = matchedResponsiveData.numVisible;
          this.setCloneItems();
        }
        this.cd.markForCheck();
      }
    }
    setCloneItems() {
      this.clonedItemsForStarting = [];
      this.clonedItemsForFinishing = [];
      if (this.isCircular()) {
        this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
        this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
      }
    }
    firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
    }
    lastIndex() {
      return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
      return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
      const totalDots = this.totalDots();
      return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
      return this.orientation === 'vertical';
    }
    isCircular() {
      return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
      return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
    }
    isBackwardNavDisabled() {
      return this.isEmpty() || this._page <= 0 && !this.isCircular();
    }
    isEmpty() {
      return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
      if (this.isCircular() || this._page < this.totalDots() - 1) {
        this.step(-1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e, index) {
      if (this.isCircular() || this._page !== 0) {
        this.step(1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    onDotClick(e, index) {
      let page = this._page;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (index > page) {
        this.navForward(e, index);
      } else if (index < page) {
        this.navBackward(e, index);
      }
    }
    onIndicatorKeydown(event) {
      switch (event.code) {
        case 'ArrowRight':
          this.onRightKey();
          break;
        case 'ArrowLeft':
          this.onLeftKey();
          break;
      }
    }
    onRightKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    }
    onLeftKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    }
    onHomeKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    }
    onEndKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]r')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    }
    onTabKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const highlightedIndex = indicators.findIndex(ind => primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(ind, 'data-p-highlight') === true);
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      const activeIndex = indicators.findIndex(ind => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = '-1';
      indicators[highlightedIndex].children[0].tabIndex = '0';
    }
    findFocusedIndicatorIndex() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(ind => ind === activeIndicator.parentElement);
    }
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      indicators[prevInd].children[0].tabIndex = '-1';
      indicators[nextInd].children[0].tabIndex = '0';
      indicators[nextInd].children[0].focus();
    }
    step(dir, page) {
      let totalShiftedItems = this.totalShiftedItems;
      const isCircular = this.isCircular();
      if (page != null) {
        totalShiftedItems = this._numScroll * page * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this._numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this._numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
      }
      if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this._numVisible);
        page = 0;
      } else if (isCircular && this.page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalDots() - 1;
      } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
      this._page = page;
      this.onPage.emit({
        page: this.page
      });
      this.cd.markForCheck();
      this.updateCarouselItemsAccessibility();
    }
    startAutoplay() {
      this.interval = setInterval(() => {
        if (this.totalDots() > 0) {
          if (this.page === this.totalDots() - 1) {
            this.step(-1, 0);
          } else {
            this.step(-1, this.page + 1);
          }
        }
      }, this.autoplayInterval);
      this.allowAutoplay = true;
      this.cd.markForCheck();
    }
    stopAutoplay(changeAllow = true) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
        if (changeAllow) {
          this.allowAutoplay = false;
        }
      }
      this.cd.markForCheck();
    }
    isPlaying() {
      return !!this.interval;
    }
    onTransitionEnd() {
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transition = '';
        if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
      }
    }
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
    changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    }
    ariaPrevButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.prevPageLabel : undefined;
    }
    ariaSlideLabel() {
      return this.config.translation.aria ? this.config.translation.aria.slide : undefined;
    }
    ariaNextButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.nextPageLabel : undefined;
    }
    ariaSlideNumber(value) {
      return this.config.translation.aria ? this.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
    }
    ariaPageLabel(value) {
      return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    bindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (!this.documentResizeListener) {
          this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
            this.calculatePosition();
          });
        }
      }
    }
    unbindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
    }
    ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
    }
    static ɵfac = function Carousel_Factory(t) {
      return new (t || Carousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Carousel,
      selectors: [["p-carousel"]],
      contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Carousel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.indicatorContent = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        page: "page",
        numVisible: "numVisible",
        numScroll: "numScroll",
        responsiveOptions: "responsiveOptions",
        orientation: "orientation",
        verticalViewPortHeight: "verticalViewPortHeight",
        contentClass: "contentClass",
        indicatorsContentClass: "indicatorsContentClass",
        indicatorsContentStyle: "indicatorsContentStyle",
        indicatorStyleClass: "indicatorStyleClass",
        indicatorStyle: "indicatorStyle",
        value: "value",
        circular: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "circular", "circular", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showIndicators: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showIndicators", "showIndicators", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showNavigators: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showNavigators", "showNavigators", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoplayInterval: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoplayInterval", "autoplayInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        style: "style",
        styleClass: "styleClass"
      },
      outputs: {
        onPage: "onPage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 14,
      vars: 23,
      consts: [["itemsContainer", ""], ["indicatorContent", ""], ["role", "region", 3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "touchend", "touchstart", "touchmove", "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", "keydown", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"], [4, "ngIf"], ["class", "p-carousel-prev-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-carousel-prev-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "keydown", "ngClass", "ngStyle"], ["type", "button", 3, "click", "ngClass", "ngStyle", "tabindex"], [1, "p-carousel-footer"]],
      template: function Carousel_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_1_Template, 3, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Carousel_button_4_Template, 3, 7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchend", function Carousel_Template_div_touchend_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchEnd($event));
          })("touchstart", function Carousel_Template_div_touchstart_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchStart($event));
          })("touchmove", function Carousel_Template_div_touchmove_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchMove($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function Carousel_Template_div_transitionend_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTransitionEnd());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Carousel_div_8_Template, 2, 12, "div", 9)(9, Carousel_div_9_Template, 2, 12, "div", 9)(10, Carousel_div_10_Template, 2, 9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Carousel_button_11_Template, 3, 7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Carousel_ul_12_Template, 3, 5, "ul", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Carousel_div_13_Template, 3, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c4, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contentClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx.allowAutoplay ? "polite" : "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForStarting);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForFinishing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon],
      styles: ["@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Carousel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CarouselModule = /*#__PURE__*/(() => {
  class CarouselModule {
    static ɵfac = function CarouselModule_Factory(t) {
      return new (t || CarouselModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return CarouselModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4959:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronLeftIcon: () => (/* binding */ ChevronLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronLeftIcon = /*#__PURE__*/(() => {
  class ChevronLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronLeftIcon_BaseFactory;
      return function ChevronLeftIcon_Factory(t) {
        return (ɵChevronLeftIcon_BaseFactory || (ɵChevronLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronLeftIcon)))(t || ChevronLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronLeftIcon,
      selectors: [["ChevronLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
      template: function ChevronLeftIcon_Template(rf, ctx) {
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
  return ChevronLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7223:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronUpIcon: () => (/* binding */ ChevronUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronUpIcon = /*#__PURE__*/(() => {
  class ChevronUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronUpIcon_BaseFactory;
      return function ChevronUpIcon_Factory(t) {
        return (ɵChevronUpIcon_BaseFactory || (ɵChevronUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronUpIcon)))(t || ChevronUpIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronUpIcon,
      selectors: [["ChevronUpIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
      template: function ChevronUpIcon_Template(rf, ctx) {
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
  return ChevronUpIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3616:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tag.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   TagModule: () => (/* binding */ TagModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);






/**
 * Tag component is used to categorize content.
 * @group Components
 */
const _c0 = ["*"];
function Tag_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_ng_container_2_span_1_Template, 1, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.icon);
  }
}
function Tag_span_3_1_ng_template_0_Template(rf, ctx) {}
function Tag_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tag_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_span_3_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate);
  }
}
let Tag = /*#__PURE__*/(() => {
  class Tag {
    cd;
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      this._style = value;
      this.cd.markForCheck();
    }
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Severity type of the tag.
     * @group Props
     */
    severity;
    /**
     * Value to display inside the tag.
     * @group Props
     */
    value;
    /**
     * Icon of the tag to display next to the value.
     * @group Props
     */
    icon;
    /**
     * Whether the corners of the tag are rounded.
     * @group Props
     */
    rounded;
    templates;
    iconTemplate;
    _style;
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'icon':
            this.iconTemplate = item.template;
            break;
        }
      });
    }
    constructor(cd) {
      this.cd = cd;
    }
    containerClass() {
      return {
        'p-tag p-component': true,
        [`p-tag-${this.severity}`]: this.severity,
        'p-tag-rounded': this.rounded
      };
    }
    static ɵfac = function Tag_Factory(t) {
      return new (t || Tag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Tag,
      selectors: [["p-tag"]],
      contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        style: "style",
        styleClass: "styleClass",
        severity: "severity",
        value: "value",
        icon: "icon",
        rounded: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "rounded", "rounded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 7,
      consts: [[3, "ngClass", "ngStyle"], [4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-value"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
      template: function Tag_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tag_ng_container_2_Template, 2, 1, "ng-container", 1)(3, Tag_span_3_Template, 2, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Tag;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TagModule = /*#__PURE__*/(() => {
  class TagModule {
    static ɵfac = function TagModule_Factory(t) {
      return new (t || TagModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TagModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
  return TagModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=731.js.map