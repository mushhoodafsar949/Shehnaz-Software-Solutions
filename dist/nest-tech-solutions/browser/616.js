"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[616],{

/***/ 6895:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dropdown.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DROPDOWN_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_VALUE_ACCESSOR),
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   DropdownItem: () => (/* binding */ DropdownItem),
/* harmony export */   DropdownModule: () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autofocus */ 7159);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/overlay */ 3576);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scroller */ 2222);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 2289);
/* harmony import */ var primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/blank */ 7243);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/search */ 3647);
























const _c0 = a0 => ({
  height: a0
});
const _c1 = (a0, a1, a2) => ({
  "p-dropdown-item": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
const _c2 = a0 => ({
  $implicit: a0
});
function DropdownItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-check-icon");
  }
}
function DropdownItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "BlankIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-blank-icon");
  }
}
function DropdownItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownItem_ng_container_1_CheckIcon_1_Template, 1, 1, "CheckIcon", 3)(2, DropdownItem_ng_container_1_BlankIcon_2_Template, 1, 1, "BlankIcon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selected);
  }
}
function DropdownItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["focusInput"];
const _c6 = ["editableInput"];
const _c7 = ["items"];
const _c8 = ["scroller"];
const _c9 = ["overlay"];
const _c10 = ["firstHiddenFocusableEl"];
const _c11 = ["lastHiddenFocusableEl"];
const _c12 = a0 => ({
  "max-height": a0
});
const _c13 = a0 => ({
  options: a0
});
const _c14 = a0 => ({
  "p-variant-filled": a0
});
const _c15 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c16 = () => ({});
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 25);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r2.selectedOption));
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isSelectedOptionEmpty());
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 20)(3, Dropdown_span_2_ng_container_3_Template, 1, 4, "ng-container", 24)(4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("autofocus", ctx_r2.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? undefined : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== undefined ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedItemTemplate && !ctx_r2.isSelectedOptionEmpty());
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("autofocus", ctx_r2.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === undefined || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : undefined)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? undefined : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 27)(2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dropdown-trigger-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-dropdown-trigger-icon pi pi-spinner pi-spin");
  }
}
function Dropdown_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_2_span_1_Template, 1, 1, "span", 32)(2, Dropdown_ng_container_6_ng_container_2_span_2_Template, 1, 2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 18)(2, Dropdown_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_template_7_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 39);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_7_ng_container_0_span_1_Template, 1, 1, "span", 37)(2, Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_span_1_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_template_7_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_7_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_7_span_1_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 18)(1, Dropdown_ng_template_7_span_1_Template, 2, 1, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c13, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49)(1, "input", 50, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 38)(4, Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2._filterValue() || "")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, ctx_r2.variant === "filled" || ctx_r2.config.inputStyle() === "filled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_template_11_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_container_1_Template, 2, 4, "ng-container", 20)(2, Dropdown_ng_template_11_div_4_ng_template_2_Template, 5, 10, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const buildInItems_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c15, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c13, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Dropdown_ng_template_11_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 53, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function Dropdown_ng_template_11_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 22)(3, Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r2.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const buildInItems_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c15, ctx_r2.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c16)));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 18)(3, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dropdownItem", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const option_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 18)(1, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionGroup(option_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 13);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 14);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 55, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 56)(3, Dropdown_ng_template_11_ng_template_8_li_3_Template, 3, 6, "li", 57)(4, Dropdown_ng_template_11_ng_template_8_li_4_Template, 3, 6, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r20.contentStyleClass)("ngStyle", scrollerOptions_r20.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_11_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "span", 43, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_ng_template_11_Template_span_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFirstHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Dropdown_ng_template_11_div_4_Template, 4, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_ng_template_11_p_scroller_6_Template, 4, 10, "p-scroller", 46)(7, Dropdown_ng_template_11_ng_container_7_Template, 2, 6, "ng-container", 18)(8, Dropdown_ng_template_11_ng_template_8_Template, 5, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Dropdown_ng_template_11_ng_container_10_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_ng_template_11_Template_span_focus_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLastHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r2.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c12, ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
const DROPDOWN_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Dropdown),
  multi: true
};
let DropdownItem = /*#__PURE__*/(() => {
  class DropdownItem {
    id;
    option;
    selected;
    focused;
    label;
    disabled;
    visible;
    itemSize;
    ariaPosInset;
    ariaSetSize;
    template;
    checkmark;
    onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    ngOnInit() {}
    onOptionClick(event) {
      this.onClick.emit(event);
    }
    onOptionMouseEnter(event) {
      this.onMouseEnter.emit(event);
    }
    static ɵfac = function DropdownItem_Factory(t) {
      return new (t || DropdownItem)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownItem,
      selectors: [["p-dropdownItem"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        id: "id",
        option: "option",
        selected: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selected", "selected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        focused: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "focused", "focused", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        label: "label",
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        visible: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "visible", "visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        itemSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "itemSize", "itemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        ariaPosInset: "ariaPosInset",
        ariaSetSize: "ariaSetSize",
        template: "template",
        checkmark: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "checkmark", "checkmark", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        onClick: "onClick",
        onMouseEnter: "onMouseEnter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 4,
      vars: 22,
      consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
      template: function DropdownItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
            return ctx.onOptionClick($event);
          })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
            return ctx.onOptionMouseEnter($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, DropdownItem_span_2_Template, 2, 1, "span", 1)(3, DropdownItem_ng_container_3_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c1, ctx.selected, ctx.disabled, ctx.focused));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkmark);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.option));
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__.BlankIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon],
      encapsulation: 2
    });
  }
  return DropdownItem;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 * @group Components
 */
let Dropdown = /*#__PURE__*/(() => {
  class Dropdown {
    el;
    renderer;
    cd;
    zone;
    filterService;
    config;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * When specified, displays an input field to filter the items on keyup.
     * @group Props
     */
    filter;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * When present, custom value instead of predefined options can be entered using the editable input field.
     * @group Props
     */
    editable;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    set placeholder(val) {
      this._placeholder.set(val);
    }
    get placeholder() {
      return this._placeholder.asReadonly();
    }
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon;
    /**
     * Placeholder text to show when filter input is empty.
     * @group Props
     */
    filterPlaceholder;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * Identifier of the accessible input element.
     * @group Props
     */
    inputId;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Clears the filter value when hiding the dropdown.
     * @group Props
     */
    resetFilterOnHide = false;
    /**
     * Whether the selected option will be shown with a check mark.
     * @group Props
     */
    checkmark = false;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
    /**
     * Whether the dropdown is in loading state.
     * @group Props
     */
    loading = false;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Whether to display the first item as the label if no placeholder is defined and value is null.
     * @deprecated since v17.3.0, set initial value by model instead.
     * @group Props
     */
    autoDisplayFirst = true;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyFilterMessage = '';
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage = '';
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel;
    /**
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode = 'contains';
    /**
     * Maximum number of character allows in the editable input field.
     * @group Props
     */
    maxlength;
    /**
     * Advisory information to display in a tooltip on hover.
     * @group Props
     */
    tooltip = '';
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition = 'right';
    /**
     * Type of CSS position.
     * @group Props
     */
    tooltipPositionStyle = 'absolute';
    /**
     * Style class of the tooltip.
     * @group Props
     */
    tooltipStyleClass;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    focusOnHover = false;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Applies focus to the filter element when the overlay is shown.
     * @group Props
     */
    autofocusFilter = true;
    /**
     * Determines if the panel will be shown when the input is focused and receives a character key down event.
     * @group Props
     */
    autoShowPanelOnPrintableCharacterKeyDown = true;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(_disabled) {
      if (_disabled) {
        this.focused = false;
        if (this.overlayVisible) this.hide();
      }
      this._disabled = _disabled;
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
    /**
     * Item size of item to be virtual scrolled.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
      console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    _itemSize;
    /**
     * Whether to automatically manage layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get autoZIndex() {
      return this._autoZIndex;
    }
    set autoZIndex(val) {
      this._autoZIndex = val;
      console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _autoZIndex;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get baseZIndex() {
      return this._baseZIndex;
    }
    set baseZIndex(val) {
      this._baseZIndex = val;
      console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _baseZIndex;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
      return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
      this._showTransitionOptions = val;
      console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _showTransitionOptions;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
      return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
      this._hideTransitionOptions = val;
      console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _hideTransitionOptions;
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue() {
      return this._filterValue();
    }
    set filterValue(val) {
      setTimeout(() => {
        this._filterValue.set(val);
      });
    }
    /**
     * An array of objects to display as the available options.
     * @group Props
     */
    get options() {
      const options = this._options();
      return options;
    }
    set options(val) {
      if (!primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.deepEquals(val, this._options())) {
        this._options.set(val);
      }
    }
    /**
     * Callback to invoke when value of dropdown changes.
     * @param {DropdownChangeEvent} event - custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {DropdownFilterEvent} event - custom filter event.
     * @group Emits
     */
    onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dropdown gets focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dropdown loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when component is clicked.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dropdown overlay gets visible.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dropdown overlay gets hidden.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dropdown clears the value.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {DropdownLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerViewChild;
    filterViewChild;
    focusInputViewChild;
    editableInputViewChild;
    itemsViewChild;
    scroller;
    overlayViewChild;
    firstHiddenFocusableElementOnOverlay;
    lastHiddenFocusableElementOnOverlay;
    templates;
    _disabled;
    itemsWrapper;
    itemTemplate;
    groupTemplate;
    loaderTemplate;
    selectedItemTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    dropdownIconTemplate;
    loadingIconTemplate;
    clearIconTemplate;
    filterIconTemplate;
    filterOptions;
    _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    _placeholder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(undefined);
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    hover;
    focused;
    overlayVisible;
    optionsChanged;
    panel;
    dimensionsUpdated;
    hoveredItem;
    selectedOptionUpdated;
    _filterValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    searchValue;
    searchIndex;
    searchTimeout;
    previousSearchChar;
    currentSearchChar;
    preventModelTouched;
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    labelId;
    listId;
    clicked = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    get emptyMessageLabel() {
      return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.EMPTY_MESSAGE);
    }
    get emptyFilterMessageLabel() {
      return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.EMPTY_FILTER_MESSAGE);
    }
    get isVisibleClearIcon() {
      return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
    }
    get listLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.ARIA)['listLabel'];
    }
    get containerClass() {
      return {
        'p-dropdown p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-dropdown-clearable': this.showClear && !this.disabled,
        'p-focus': this.focused,
        'p-inputwrapper-filled': this.modelValue() !== undefined && this.modelValue() !== null && !this.modelValue().length,
        'p-inputwrapper-focus': this.focused || this.overlayVisible,
        'p-variant-filled': this.variant === 'filled' || this.config.inputStyle() === 'filled',
        'p-dropdown-open': this.overlayVisible
      };
    }
    get inputClass() {
      const label = this.label();
      return {
        'p-dropdown-label p-inputtext': true,
        'p-placeholder': this.placeholder() && label === this.placeholder(),
        'p-dropdown-label-empty': !this.editable && !this.selectedItemTemplate && (label === undefined || label === null || label === 'p-emptylabel' || label.length === 0)
      };
    }
    get panelClass() {
      return {
        'p-dropdown-panel p-component': true,
        'p-input-filled': this.config.inputStyle() === 'filled',
        'p-ripple-disabled': this.config.ripple === false
      };
    }
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const options = this.getAllVisibleAndNonVisibleOptions();
      if (this._filterValue()) {
        const _filterBy = this.filterBy || this.optionLabel;
        const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter(option => {
          if (option.label) {
            return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
          }
          return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
        if (this.group) {
          const optionGroups = this.options || [];
          const filtered = [];
          optionGroups.forEach(group => {
            const groupChildren = this.getOptionGroupChildren(group);
            const filteredItems = groupChildren.filter(item => filteredOptions.includes(item));
            if (filteredItems.length > 0) filtered.push({
              ...group,
              [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems]
            });
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    });
    label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      // use  getAllVisibleAndNonVisibleOptions verses just visible options
      // this will find the selected option whether or not the user is currently filtering  because the filtered (i.e. visible) options, are a subset of all the options
      const options = this.getAllVisibleAndNonVisibleOptions();
      // use isOptionEqualsModelValue for the use case where the dropdown is initalized with a disabled option
      const selectedOptionIndex = options.findIndex(option => this.isOptionValueEqualsModelValue(option));
      return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || 'p-emptylabel';
    });
    filled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (typeof this.modelValue() === 'string') return !!this.modelValue();
      const options = this.getAllVisibleAndNonVisibleOptions();
      const isOptionSelected = options.findIndex(option => this.isOptionValueEqualsModelValue(option)) !== -1;
      return this.label() !== 'p-emptylabel' && isOptionSelected;
    });
    selectedOption;
    editableInputValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || '');
    constructor(el, renderer, cd, zone, filterService, config) {
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
      this.filterService = filterService;
      this.config = config;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const modelValue = this.modelValue();
        const visibleOptions = this.visibleOptions();
        if (visibleOptions && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(visibleOptions)) {
          const selectedOptionIndex = this.findSelectedOptionIndex();
          if (selectedOptionIndex !== -1 || modelValue === undefined || typeof modelValue === 'string' && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
            this.selectedOption = visibleOptions[selectedOptionIndex];
          }
        }
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isEmpty(visibleOptions) && (modelValue === undefined || this.isModelValueNotSet()) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.selectedOption)) {
          this.selectedOption = null;
        }
        if (modelValue !== undefined && this.editable) {
          this.updateEditableLabel();
        }
        this.cd.markForCheck();
      });
    }
    isModelValueNotSet() {
      return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
    }
    getAllVisibleAndNonVisibleOptions() {
      return this.group ? this.flatOptions(this.options) : this.options || [];
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();
      this.autoUpdateModel();
      if (this.filterBy) {
        this.filterOptions = {
          filter: value => this.onFilterInputChange(value),
          reset: () => this.resetFilter()
        };
      }
    }
    ngAfterViewChecked() {
      if (this.optionsChanged && this.overlayVisible) {
        this.optionsChanged = false;
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            if (this.overlayViewChild) {
              this.overlayViewChild.alignOverlay();
            }
          }, 1);
        });
      }
      if (this.selectedOptionUpdated && this.itemsWrapper) {
        let selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, 'li.p-highlight');
        if (selectedItem) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.scrollInView(this.itemsWrapper, selectedItem);
        }
        this.selectedOptionUpdated = false;
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'selectedItem':
            this.selectedItemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'filter':
            this.filterTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'emptyfilter':
            this.emptyFilterTemplate = item.template;
            break;
          case 'empty':
            this.emptyTemplate = item.template;
            break;
          case 'group':
            this.groupTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({
          optionGroup: option,
          group: true,
          index
        });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
        return result;
      }, []);
    }
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
        this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
        this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
      }
      if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === undefined)) {
        if (!this.placeholder()) {
          const ind = this.findFirstOptionIndex();
          this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
        }
      }
    }
    onOptionSelect(event, option, isHide = true, preventChange = false) {
      if (!this.isSelected(option)) {
        const value = this.getOptionValue(option);
        this.updateModel(value, event);
        this.focusedOptionIndex.set(this.findSelectedOptionIndex());
        preventChange === false && this.onChange.emit({
          originalEvent: event,
          value: value
        });
      }
      if (isHide) {
        this.hide(true);
      }
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    updateModel(value, event) {
      this.value = value;
      this.onModelChange(value);
      this.modelValue.set(value);
      this.selectedOptionUpdated = true;
    }
    writeValue(value, emitEvent = true) {
      if (this.filter) {
        this.resetFilter();
      }
      this.value = value;
      if (emitEvent && this.allowModelChange()) {
        this.onModelChange(value);
      }
      this.modelValue.set(this.value);
      this.updateEditableLabel();
      this.cd.markForCheck();
    }
    allowModelChange() {
      return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === undefined || this.modelValue() === null) && !this.editable && this.options && this.options.length;
    }
    isSelectedOptionEmpty() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isEmpty(this.selectedOption);
    }
    isSelected(option) {
      return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
    }
    isOptionValueEqualsModelValue(option) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    ngAfterViewInit() {
      if (this.editable) {
        this.updateEditableLabel();
      }
      this.updatePlaceHolderForFloatingLabel();
    }
    updatePlaceHolderForFloatingLabel() {
      if (this._placeholder() !== null && this._placeholder() !== undefined) {
        // We don't want to overwrite the placeholder if it's already set
        return;
      }
      const parentElement = this.el.nativeElement.parentElement;
      const isInFloatingLabel = parentElement?.classList.contains('p-float-label');
      if (parentElement && isInFloatingLabel && !this.selectedOption) {
        const label = parentElement.querySelector('label');
        if (label) {
          this._placeholder.set(label.textContent);
        }
      }
    }
    updateEditableLabel() {
      if (this.editableInputViewChild) {
        this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || '';
      }
    }
    clearEditableLabel() {
      if (this.editableInputViewChild) {
        this.editableInputViewChild.nativeElement.value = '';
      }
    }
    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionLabel(option) {
      return this.optionLabel !== undefined && this.optionLabel !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== undefined ? option.label : option;
    }
    getOptionValue(option) {
      return this.optionValue && this.optionValue !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    isOptionDisabled(option) {
      if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
        return false;
      } else {
        return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
      }
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren !== undefined && this.optionGroupChildren !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    /**
     * Callback to invoke on filter reset.
     * @group Method
     */
    resetFilter() {
      this._filterValue.set(null);
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.filterViewChild.nativeElement.value = '';
      }
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    onContainerClick(event) {
      if (this.disabled || this.readonly || this.loading) {
        return;
      }
      this.focusInputViewChild?.nativeElement.focus({
        preventScroll: true
      });
      if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.onClick.emit(event);
      this.clicked.set(true);
      this.cd.detectChanges();
    }
    isEmpty() {
      return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
    }
    onEditableInput(event) {
      const value = event.target.value;
      this.searchValue = '';
      const matched = this.searchOptions(event, value);
      !matched && this.focusedOptionIndex.set(-1);
      this.onModelChange(value);
      this.updateModel(value, event);
      setTimeout(() => {
        this.onChange.emit({
          originalEvent: event,
          value: value
        });
      }, 1);
      !this.overlayVisible && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(value) && this.show();
    }
    /**
     * Displays the panel.
     * @group Method
     */
    show(isFocus) {
      this.overlayVisible = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      if (isFocus) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
      if (event.toState === 'visible') {
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-dropdown-items-wrapper');
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        if (this.options && this.options.length) {
          if (this.virtualScroll) {
            const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
              });
            }
          }
        }
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter && !this.editable) {
            this.filterViewChild.nativeElement.focus();
          }
        }
        this.onShow.emit(event);
      }
      if (event.toState === 'void') {
        this.itemsWrapper = null;
        this.onModelTouched();
        this.onHide.emit(event);
      }
    }
    /**
     * Hides the panel.
     * @group Method
     */
    hide(isFocus) {
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      this.clicked.set(false);
      this.searchValue = '';
      if (this.overlayOptions?.mode === 'modal') {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.unblockBodyScroll();
      }
      if (this.filter && this.resetFilterOnHide) {
        this.resetFilter();
      }
      if (isFocus) {
        if (this.focusInputViewChild) {
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
          });
        }
        if (this.editable && this.editableInputViewChild) {
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.editableInputViewChild?.nativeElement);
          });
        }
      }
      this.cd.markForCheck();
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.onBlur.emit(event);
      if (!this.preventModelTouched) {
        this.onModelTouched();
      }
      this.preventModelTouched = false;
    }
    onMouseDown(event) {
      event.preventDefault();
    }
    onKeyDown(event, search) {
      if (this.disabled || this.readonly || this.loading) {
        return;
      }
      switch (event.code) {
        //down
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        //up
        case 'ArrowUp':
          this.onArrowUpKey(event, this.editable);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, this.editable);
          break;
        case 'Delete':
          this.onDeleteKey(event);
          break;
        case 'Home':
          this.onHomeKey(event, this.editable);
          break;
        case 'End':
          this.onEndKey(event, this.editable);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        //space
        case 'Space':
          this.onSpaceKey(event, search);
          break;
        //enter
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        //escape and tab
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event, this.editable);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!event.metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.autoShowPanelOnPrintableCharacterKeyDown && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
      this.clicked.set(false);
    }
    onFilterKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, true);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, true);
          break;
        case 'Home':
          this.onHomeKey(event, true);
          break;
        case 'End':
          this.onEndKey(event, true);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event, true);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event, true);
          break;
        default:
          break;
      }
    }
    onFilterBlur(event) {
      this.focusedOptionIndex.set(-1);
    }
    onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
        this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      // const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      // this.changeFocusedOptionIndex(event, optionIndex);
      // !this.overlayVisible && this.show();
      event.preventDefault();
      event.stopPropagation();
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
        if (this.selectOnFocus) {
          const option = this.visibleOptions()[index];
          this.onOptionSelect(event, option, false);
        }
      }
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
        } else if (!this.virtualScrollerDisabled) {
          setTimeout(() => {
            this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
          }, 0);
        }
      }
    }
    hasSelectedOption() {
      return this.modelValue() !== undefined;
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    isValidOption(option) {
      return option !== undefined && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionGroup(option) {
      return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null && option.optionGroup !== undefined && option.optionGroup !== null && option.group;
    }
    onArrowUpKey(event, pressedInInputText = false) {
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide();
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
      event.stopPropagation();
    }
    onArrowLeftKey(event, pressedInInputText = false) {
      pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onDeleteKey(event) {
      if (this.showClear) {
        this.clear(event);
        event.preventDefault();
      }
    }
    onHomeKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        const target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, target.value.length);
        } else {
          target.setSelectionRange(0, 0);
          this.focusedOptionIndex.set(-1);
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        const target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, target.value.length);
        } else {
          const len = target.value.length;
          target.setSelectionRange(len, len);
          this.focusedOptionIndex.set(-1);
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    }
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions().length - 1);
      event.preventDefault();
    }
    onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    }
    onSpaceKey(event, pressedInInputText = false) {
      !this.editable && !pressedInInputText && this.onEnterKey(event);
    }
    onEnterKey(event, pressedInInput = false) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex.set(-1);
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        !pressedInInput && this.hide();
      }
      event.preventDefault();
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event, pressedInInputText = false) {
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
            const option = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(event, option);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
      event.stopPropagation();
    }
    onFirstHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ':not(.p-hidden-focusable)') : this.focusInputViewChild?.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(focusableEl);
    }
    onLastHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(focusableEl);
    }
    hasFocusableElements() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"]):not([class="p-dropdown-items-wrapper"])').length > 0;
    }
    onBackspaceKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    }
    searchFields() {
      return this.filterBy?.split(',') || this.filterFields || [this.optionLabel];
    }
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let optionIndex = -1;
      let matched = false;
      if (this.focusedOptionIndex() !== -1) {
        optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option));
        optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
      } else {
        optionIndex = this.visibleOptions().findIndex(option => this.isOptionMatched(option));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
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
    isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    }
    onFilterInputChange(event) {
      let value = event.target.value;
      this._filterValue.set(value);
      this.focusedOptionIndex.set(-1);
      this.onFilter.emit({
        originalEvent: event,
        filter: this._filterValue()
      });
      !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
      setTimeout(() => {
        this.overlayViewChild.alignOverlay();
      });
      this.cd.markForCheck();
    }
    applyFocus() {
      if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    /**
     * Applies focus.
     * @group Method
     */
    focus() {
      this.applyFocus();
    }
    /**
     * Clears the model.
     * @group Method
     */
    clear(event) {
      this.updateModel(null, event);
      this.clearEditableLabel();
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
      this.onClear.emit(event);
      this.resetFilter();
    }
    static ɵfac = function Dropdown_Factory(t) {
      return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dropdown,
      selectors: [["p-dropdown"]],
      contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dropdown_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 4,
      hostBindings: function Dropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
        }
      },
      inputs: {
        id: "id",
        scrollHeight: "scrollHeight",
        filter: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "filter", "filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        name: "name",
        style: "style",
        panelStyle: "panelStyle",
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        readonly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        editable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "editable", "editable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        appendTo: "appendTo",
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        placeholder: "placeholder",
        loadingIcon: "loadingIcon",
        filterPlaceholder: "filterPlaceholder",
        filterLocale: "filterLocale",
        variant: "variant",
        inputId: "inputId",
        dataKey: "dataKey",
        filterBy: "filterBy",
        filterFields: "filterFields",
        autofocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        resetFilterOnHide: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "resetFilterOnHide", "resetFilterOnHide", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        checkmark: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "checkmark", "checkmark", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dropdownIcon: "dropdownIcon",
        loading: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionDisabled: "optionDisabled",
        optionGroupLabel: "optionGroupLabel",
        optionGroupChildren: "optionGroupChildren",
        autoDisplayFirst: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoDisplayFirst", "autoDisplayFirst", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        group: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "group", "group", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        emptyFilterMessage: "emptyFilterMessage",
        emptyMessage: "emptyMessage",
        lazy: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        virtualScroll: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        virtualScrollItemSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "virtualScrollItemSize", "virtualScrollItemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        virtualScrollOptions: "virtualScrollOptions",
        overlayOptions: "overlayOptions",
        ariaFilterLabel: "ariaFilterLabel",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        filterMatchMode: "filterMatchMode",
        maxlength: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxlength", "maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        tooltip: "tooltip",
        tooltipPosition: "tooltipPosition",
        tooltipPositionStyle: "tooltipPositionStyle",
        tooltipStyleClass: "tooltipStyleClass",
        focusOnHover: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "focusOnHover", "focusOnHover", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectOnFocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selectOnFocus", "selectOnFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoOptionFocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoOptionFocus", "autoOptionFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autofocusFilter: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocusFilter", "autofocusFilter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoShowPanelOnPrintableCharacterKeyDown: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoShowPanelOnPrintableCharacterKeyDown", "autoShowPanelOnPrintableCharacterKeyDown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: "disabled",
        itemSize: "itemSize",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        filterValue: "filterValue",
        options: "options"
      },
      outputs: {
        onChange: "onChange",
        onFilter: "onFilter",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClick: "onClick",
        onShow: "onShow",
        onHide: "onHide",
        onClear: "onClear",
        onLazyLoad: "onLazyLoad"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 12,
      vars: 20,
      consts: [["container", ""], ["elseBlock", ""], ["overlay", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "ngClass", "disabled", "autofocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger", 3, "mousedown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "autofocus"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], ["tabindex", "0", 1, "p-dropdown-items-wrapper", 3, "ngStyle"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-dropdown-header", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dropdown-filter-container"], ["type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value", "ngClass"], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass", "ngStyle"], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-dropdown-empty-message", 3, "ngStyle"]],
      template: function Dropdown_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_span_2_Template, 6, 20, "span", 16)(3, Dropdown_input_3_Template, 2, 8, "input", 17)(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dropdown_Template_div_mousedown_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMouseDown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 20)(7, Dropdown_ng_template_7_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-overlay", 21, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function Dropdown_Template_p_overlay_visibleChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOverlayAnimationStart($event));
          })("onHide", function Dropdown_Template_p_overlay_onHide_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Dropdown_ng_template_11_Template, 13, 18, "ng-template", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_10_0;
          const elseBlock_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", (tmp_10_0 = ctx.overlayVisible) !== null && tmp_10_0 !== undefined ? tmp_10_0 : false)("data-pc-section", "trigger");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.overlayVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__.SearchIcon, DropdownItem],
      styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}.p-float-label .p-dropdown .p-placeholder{opacity:0}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Dropdown;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DropdownModule = /*#__PURE__*/(() => {
  class DropdownModule {
    static ɵfac = function DropdownModule_Factory(t) {
      return new (t || DropdownModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DropdownModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__.SearchIcon, primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__.BlankIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule]
    });
  }
  return DropdownModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7243:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-blank.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankIcon: () => (/* binding */ BlankIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let BlankIcon = /*#__PURE__*/(() => {
  class BlankIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵBlankIcon_BaseFactory;
      return function BlankIcon_Factory(t) {
        return (ɵBlankIcon_BaseFactory || (ɵBlankIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BlankIcon)))(t || BlankIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BlankIcon,
      selectors: [["BlankIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "v-bind", "pti()"], ["width", "1", "height", "1", "fill", "currentColor", "fill-opacity", "0"]],
      template: function BlankIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rect", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
  return BlankIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5804:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronDownIcon: () => (/* binding */ ChevronDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronDownIcon = /*#__PURE__*/(() => {
  class ChevronDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronDownIcon_BaseFactory;
      return function ChevronDownIcon_Factory(t) {
        return (ɵChevronDownIcon_BaseFactory || (ɵChevronDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronDownIcon)))(t || ChevronDownIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronDownIcon,
      selectors: [["ChevronDownIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
      template: function ChevronDownIcon_Template(rf, ctx) {
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
  return ChevronDownIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5994:
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronRightIcon: () => (/* binding */ ChevronRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronRightIcon = /*#__PURE__*/(() => {
  class ChevronRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronRightIcon_BaseFactory;
      return function ChevronRightIcon_Factory(t) {
        return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronRightIcon)))(t || ChevronRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronRightIcon,
      selectors: [["ChevronRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
      template: function ChevronRightIcon_Template(rf, ctx) {
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
  return ChevronRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3647:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-search.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchIcon: () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let SearchIcon = /*#__PURE__*/(() => {
  class SearchIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSearchIcon_BaseFactory;
      return function SearchIcon_Factory(t) {
        return (ɵSearchIcon_BaseFactory || (ɵSearchIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SearchIcon)))(t || SearchIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SearchIcon,
      selectors: [["SearchIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SearchIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return SearchIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3576:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-overlay.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OVERLAY_VALUE_ACCESSOR: () => (/* binding */ OVERLAY_VALUE_ACCESSOR),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   OverlayModule: () => (/* binding */ OverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 7251);










const _c0 = ["overlay"];
const _c1 = ["content"];
const _c2 = ["*"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "p-overlay p-component": true,
  "p-overlay-modal p-component-overlay p-component-overlay-enter": a0,
  "p-overlay-center": a1,
  "p-overlay-top": a2,
  "p-overlay-top-start": a3,
  "p-overlay-top-end": a4,
  "p-overlay-bottom": a5,
  "p-overlay-bottom-start": a6,
  "p-overlay-bottom-end": a7,
  "p-overlay-left": a8,
  "p-overlay-left-start": a9,
  "p-overlay-left-end": a10,
  "p-overlay-right": a11,
  "p-overlay-right-start": a12,
  "p-overlay-right-end": a13
});
const _c4 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
const _c5 = a0 => ({
  value: "visible",
  params: a0
});
const _c6 = a0 => ({
  mode: a0
});
const _c7 = a0 => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c4, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c6, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Overlay_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Overlay_div_0_div_2_Template, 4, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](5, _c3, [ctx_r1.modal, ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "center", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-end"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
const OVERLAY_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Overlay),
  multi: true
};
const showOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')]);
const hideOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * This API allows overlay components to be controlled from the PrimeNGConfig. In this way, all overlay components in the application can have the same behavior.
 * @group Components
 */
let Overlay = /*#__PURE__*/(() => {
  class Overlay {
    document;
    platformId;
    el;
    renderer;
    config;
    overlayService;
    cd;
    zone;
    /**
     * The visible property is an input that determines the visibility of the component.
     * @defaultValue false
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.modalVisible) {
        this.modalVisible = true;
      }
    }
    /**
     * The mode property is an input that determines the overlay mode type or string.
     * @defaultValue null
     * @group Props
     */
    get mode() {
      return this._mode || this.overlayOptions?.mode;
    }
    set mode(value) {
      this._mode = value;
    }
    /**
     * The style property is an input that determines the style object for the component.
     * @defaultValue null
     * @group Props
     */
    get style() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
    }
    set style(value) {
      this._style = value;
    }
    /**
     * The styleClass property is an input that determines the CSS class(es) for the component.
     * @defaultValue null
     * @group Props
     */
    get styleClass() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
    }
    set styleClass(value) {
      this._styleClass = value;
    }
    /**
     * The contentStyle property is an input that determines the style object for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyle() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
    }
    set contentStyle(value) {
      this._contentStyle = value;
    }
    /**
     * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyleClass() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
    }
    set contentStyleClass(value) {
      this._contentStyleClass = value;
    }
    /**
     * The target property is an input that specifies the target element or selector for the component.
     * @defaultValue null
     * @group Props
     */
    get target() {
      const value = this._target || this.overlayOptions?.target;
      return value === undefined ? '@prev' : value;
    }
    set target(value) {
      this._target = value;
    }
    /**
     * Overlay can be mounted into its location, body or DOM element instance using this option.
     * @defaultValue null
     * @group Props
     */
    get appendTo() {
      return this._appendTo || this.overlayOptions?.appendTo;
    }
    set appendTo(value) {
      this._appendTo = value;
    }
    /**
     * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
     * @defaultValue false
     * @group Props
     */
    get autoZIndex() {
      const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
      return value === undefined ? true : value;
    }
    set autoZIndex(value) {
      this._autoZIndex = value;
    }
    /**
     * The baseZIndex is base zIndex value to use in layering.
     * @defaultValue null
     * @group Props
     */
    get baseZIndex() {
      const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
      return value === undefined ? 0 : value;
    }
    set baseZIndex(value) {
      this._baseZIndex = value;
    }
    /**
     * Transition options of the show or hide animation.
     * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
     * @group Props
     */
    get showTransitionOptions() {
      const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
      return value === undefined ? '.12s cubic-bezier(0, 0, 0.2, 1)' : value;
    }
    set showTransitionOptions(value) {
      this._showTransitionOptions = value;
    }
    /**
     * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
     * @defaultValue .1s linear
     * @group Props
     */
    get hideTransitionOptions() {
      const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
      return value === undefined ? '.1s linear' : value;
    }
    set hideTransitionOptions(value) {
      this._hideTransitionOptions = value;
    }
    /**
     * The listener property is an input that specifies the listener object for the component.
     * @defaultValue null
     * @group Props
     */
    get listener() {
      return this._listener || this.overlayOptions?.listener;
    }
    set listener(value) {
      this._listener = value;
    }
    /**
     * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
     * @defaultValue null
     * @group Props
     */
    get responsive() {
      return this._responsive || this.overlayOptions?.responsive;
    }
    set responsive(val) {
      this._responsive = val;
    }
    /**
     * The options property is an input that specifies the overlay options for the component.
     * @defaultValue null
     * @group Props
     */
    get options() {
      return this._options;
    }
    set options(val) {
      this._options = val;
    }
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {Boolean} boolean - Value of visibility as boolean.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before the overlay is shown.
     * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
     * @group Emits
     */
    onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is shown.
     * @param {OverlayOnShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before the overlay is hidden.
     * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
     * @group Emits
     */
    onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is hidden
     * @param {OverlayOnHideEvent} event - Custom hide event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the animation is started.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onAnimationStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the animation is done.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onAnimationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    overlayViewChild;
    contentViewChild;
    contentTemplate;
    _visible = false;
    _mode;
    _style;
    _styleClass;
    _contentStyle;
    _contentStyleClass;
    _target;
    _appendTo;
    _autoZIndex;
    _baseZIndex;
    _showTransitionOptions;
    _hideTransitionOptions;
    _listener;
    _responsive;
    _options;
    modalVisible = false;
    isOverlayClicked = false;
    isOverlayContentClicked = false;
    scrollHandler;
    documentClickListener;
    documentResizeListener;
    documentKeyboardListener;
    window;
    transformOptions = {
      default: 'scaleY(0.8)',
      center: 'scale(0.7)',
      top: 'translate3d(0px, -100%, 0px)',
      'top-start': 'translate3d(0px, -100%, 0px)',
      'top-end': 'translate3d(0px, -100%, 0px)',
      bottom: 'translate3d(0px, 100%, 0px)',
      'bottom-start': 'translate3d(0px, 100%, 0px)',
      'bottom-end': 'translate3d(0px, 100%, 0px)',
      left: 'translate3d(-100%, 0px, 0px)',
      'left-start': 'translate3d(-100%, 0px, 0px)',
      'left-end': 'translate3d(-100%, 0px, 0px)',
      right: 'translate3d(100%, 0px, 0px)',
      'right-start': 'translate3d(100%, 0px, 0px)',
      'right-end': 'translate3d(100%, 0px, 0px)'
    };
    get modal() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        return this.mode === 'modal' || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace('@media', '') || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
      }
    }
    get overlayMode() {
      return this.mode || (this.modal ? 'modal' : 'overlay');
    }
    get overlayOptions() {
      return {
        ...this.config?.overlayOptions,
        ...this.options
      }; // TODO: Improve performance
    }
    get overlayResponsiveOptions() {
      return {
        ...this.overlayOptions?.responsive,
        ...this.responsive
      }; // TODO: Improve performance
    }
    get overlayResponsiveDirection() {
      return this.overlayResponsiveOptions?.direction || 'center';
    }
    get overlayEl() {
      return this.overlayViewChild?.nativeElement;
    }
    get contentEl() {
      return this.contentViewChild?.nativeElement;
    }
    get targetEl() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getTargetElement(this.target, this.el?.nativeElement);
    }
    constructor(document, platformId, el, renderer, config, overlayService, cd, zone) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.config = config;
      this.overlayService = overlayService;
      this.cd = cd;
      this.zone = zone;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          // TODO: new template types may be added.
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    show(overlay, isFocus = false) {
      this.onVisibleChange(true);
      this.handleEvents('onShow', {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(this.targetEl);
      this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document?.body, 'p-overflow-hidden');
    }
    hide(overlay, isFocus = false) {
      if (!this.visible) {
        return;
      } else {
        this.onVisibleChange(false);
        this.handleEvents('onHide', {
          overlay: overlay || this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(this.targetEl);
        this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document?.body, 'p-overflow-hidden');
      }
    }
    alignOverlay() {
      !this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
    }
    onVisibleChange(visible) {
      this._visible = visible;
      this.visibleChange.emit(visible);
    }
    onOverlayClick() {
      this.isOverlayClicked = true;
    }
    onOverlayContentClick(event) {
      this.overlayService.add({
        originalEvent: event,
        target: this.targetEl
      });
      this.isOverlayContentClicked = true;
    }
    onOverlayContentAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.handleEvents('onBeforeShow', {
            overlay: this.overlayEl,
            target: this.targetEl,
            mode: this.overlayMode
          });
          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.appendTo === 'body' ? this.document.body : this.appendTo, this.appendTo);
          this.alignOverlay();
          break;
        case 'void':
          this.handleEvents('onBeforeHide', {
            overlay: this.overlayEl,
            target: this.targetEl,
            mode: this.overlayMode
          });
          this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.overlayEl, 'p-component-overlay-leave');
          break;
      }
      this.handleEvents('onAnimationStart', event);
    }
    onOverlayContentAnimationDone(event) {
      const container = this.overlayEl || event.element.parentElement;
      switch (event.toState) {
        case 'visible':
          if (this.visible) {
            this.show(container, true);
          }
          this.bindListeners();
          break;
        case 'void':
          if (!this.visible) {
            this.hide(container, true);
            this.modalVisible = false;
            this.unbindListeners();
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
            primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(container);
            this.cd.markForCheck();
            break;
          }
      }
      this.handleEvents('onAnimationDone', event);
    }
    handleEvents(name, params) {
      this[name].emit(params);
      this.options && this.options[name] && this.options[name](params);
      this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
    }
    bindListeners() {
      this.unbindListeners();
      this.bindScrollListener();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindDocumentKeyboardListener();
    }
    unbindListeners() {
      this.unbindScrollListener();
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindDocumentKeyboardListener();
    }
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_5__.ConnectedOverlayScrollHandler(this.targetEl, event => {
          const valid = this.listener ? this.listener(event, {
            type: 'scroll',
            mode: this.overlayMode,
            valid: true
          }) : true;
          valid && this.hide(event, true);
        });
      }
      this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.documentClickListener = this.renderer.listen(this.document, 'click', event => {
          const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
          const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
          const valid = this.listener ? this.listener(event, {
            type: 'outside',
            mode: this.overlayMode,
            valid: event.which !== 3 && isOutsideClicked
          }) : isOutsideClicked;
          valid && this.hide(event);
          this.isOverlayClicked = this.isOverlayContentClicked = false;
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
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
          const valid = this.listener ? this.listener(event, {
            type: 'resize',
            mode: this.overlayMode,
            valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice()
          }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice();
          valid && this.hide(event, true);
        });
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindDocumentKeyboardListener() {
      if (this.documentKeyboardListener) {
        return;
      }
      this.zone.runOutsideAngular(() => {
        this.documentKeyboardListener = this.renderer.listen(this.window, 'keydown', event => {
          if (this.overlayOptions.hideOnEscape === false || event.code !== 'Escape') {
            return;
          }
          const valid = this.listener ? this.listener(event, {
            type: 'keydown',
            mode: this.overlayMode,
            valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice()
          }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice();
          if (valid) {
            this.zone.run(() => {
              this.hide(event, true);
            });
          }
        });
      });
    }
    unbindDocumentKeyboardListener() {
      if (this.documentKeyboardListener) {
        this.documentKeyboardListener();
        this.documentKeyboardListener = null;
      }
    }
    ngOnDestroy() {
      this.hide(this.overlayEl, true);
      if (this.overlayEl) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.overlayEl);
      }
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindListeners();
    }
    static ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Overlay,
      selectors: [["p-overlay"]],
      contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Overlay_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        visible: "visible",
        mode: "mode",
        style: "style",
        styleClass: "styleClass",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        target: "target",
        appendTo: "appendTo",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        listener: "listener",
        responsive: "responsive",
        options: "options"
      },
      outputs: {
        visibleChange: "visibleChange",
        onBeforeShow: "onBeforeShow",
        onShow: "onShow",
        onBeforeHide: "onBeforeHide",
        onHide: "onHide",
        onAnimationStart: "onAnimationStart",
        onAnimationDone: "onAnimationDone"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([OVERLAY_VALUE_ACCESSOR])],
      ngContentSelectors: _c2,
      decls: 1,
      vars: 1,
      consts: [["overlay", ""], ["content", ""], [3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngStyle", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function Overlay_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Overlay_div_0_Template, 3, 20, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
      styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('overlayContentAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(showOverlayContentAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(hideOverlayContentAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return Overlay;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayModule = /*#__PURE__*/(() => {
  class OverlayModule {
    static ɵfac = function OverlayModule_Factory(t) {
      return new (t || OverlayModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
    });
  }
  return OverlayModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2222:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-scroller.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroller: () => (/* binding */ Scroller),
/* harmony export */   ScrollerModule: () => (/* binding */ ScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);








/**
 * Scroller is a performance-approach to handle huge data efficiently.
 * @group Components
 */
const _c0 = ["element"];
const _c1 = ["content"];
const _c2 = ["*"];
const _c3 = (a0, a1, a2) => ({
  "p-scroller": true,
  "p-scroller-inline": a0,
  "p-both-scroll": a1,
  "p-horizontal-scroll": a2
});
const _c4 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c5 = a0 => ({
  "p-scroller-loading": a0
});
const _c6 = a0 => ({
  "p-component-overlay": a0
});
const _c7 = a0 => ({
  numCols: a0
});
const _c8 = a0 => ({
  options: a0
});
const _c9 = () => ({
  styleClass: "p-scroller-loading-icon"
});
const _c10 = (a0, a1) => ({
  rows: a0,
  columns: a1
});
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r1.loadedItems, ctx_r1.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, item_r3, ctx_r1.getOptions(index_r4)));
  }
}
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c5, ctx_r1.d_loading))("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.loadedItems)("ngForTrackBy", ctx_r1._trackBy || ctx_r1.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.spacerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r1.getLoaderOptions(index_r5, ctx_r1.both && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r1._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loaderIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c9)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-scroller-loading-icon pi-spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 6)(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const buildInLoaderIcon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loaderIconTemplate)("ngIfElse", buildInLoaderIcon_r6);
  }
}
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 6)(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const buildInLoader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c6, !ctx_r1.loaderTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loaderTemplate)("ngIfElse", buildInLoader_r7);
  }
}
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 6)(4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 8)(7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const buildInContent_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1._style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c3, ctx_r1.inline, ctx_r1.both, ctx_r1.horizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1._id)("tabindex", ctx_r1.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentTemplate)("ngIfElse", buildInContent_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._showSpacer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loaderDisabled && ctx_r1._showLoader && ctx_r1.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c4, ctx_r1.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c10, ctx_r1._items, ctx_r1.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentTemplate);
  }
}
let Scroller = /*#__PURE__*/(() => {
  class Scroller {
    document;
    platformId;
    renderer;
    cd;
    zone;
    /**
     * Unique identifier of the element.
     * @group Props
     */
    get id() {
      return this._id;
    }
    set id(val) {
      this._id = val;
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(val) {
      this._style = val;
    }
    /**
     * Style class of the element.
     * @group Props
     */
    get styleClass() {
      return this._styleClass;
    }
    set styleClass(val) {
      this._styleClass = val;
    }
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    get tabindex() {
      return this._tabindex;
    }
    set tabindex(val) {
      this._tabindex = val;
    }
    /**
     * An array of objects to display.
     * @group Props
     */
    get items() {
      return this._items;
    }
    set items(val) {
      this._items = val;
    }
    /**
     * The height/width of item according to orientation.
     * @group Props
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
    }
    /**
     * Height of the scroll viewport.
     * @group Props
     */
    get scrollHeight() {
      return this._scrollHeight;
    }
    set scrollHeight(val) {
      this._scrollHeight = val;
    }
    /**
     * Width of the scroll viewport.
     * @group Props
     */
    get scrollWidth() {
      return this._scrollWidth;
    }
    set scrollWidth(val) {
      this._scrollWidth = val;
    }
    /**
     * The orientation of scrollbar.
     * @group Props
     */
    get orientation() {
      return this._orientation;
    }
    set orientation(val) {
      this._orientation = val;
    }
    /**
     * Used to specify how many items to load in each load method in lazy mode.
     * @group Props
     */
    get step() {
      return this._step;
    }
    set step(val) {
      this._step = val;
    }
    /**
     * Delay in scroll before new data is loaded.
     * @group Props
     */
    get delay() {
      return this._delay;
    }
    set delay(val) {
      this._delay = val;
    }
    /**
     * Delay after window's resize finishes.
     * @group Props
     */
    get resizeDelay() {
      return this._resizeDelay;
    }
    set resizeDelay(val) {
      this._resizeDelay = val;
    }
    /**
     * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
     * @group Props
     */
    get appendOnly() {
      return this._appendOnly;
    }
    set appendOnly(val) {
      this._appendOnly = val;
    }
    /**
     * Specifies whether the scroller should be displayed inline or not.
     * @group Props
     */
    get inline() {
      return this._inline;
    }
    set inline(val) {
      this._inline = val;
    }
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    get lazy() {
      return this._lazy;
    }
    set lazy(val) {
      this._lazy = val;
    }
    /**
     * If disabled, the scroller feature is eliminated and the content is displayed directly.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(val) {
      this._disabled = val;
    }
    /**
     * Used to implement a custom loader instead of using the loader feature in the scroller.
     * @group Props
     */
    get loaderDisabled() {
      return this._loaderDisabled;
    }
    set loaderDisabled(val) {
      this._loaderDisabled = val;
    }
    /**
     * Columns to display.
     * @group Props
     */
    get columns() {
      return this._columns;
    }
    set columns(val) {
      this._columns = val;
    }
    /**
     * Used to implement a custom spacer instead of using the spacer feature in the scroller.
     * @group Props
     */
    get showSpacer() {
      return this._showSpacer;
    }
    set showSpacer(val) {
      this._showSpacer = val;
    }
    /**
     * Defines whether to show loader.
     * @group Props
     */
    get showLoader() {
      return this._showLoader;
    }
    set showLoader(val) {
      this._showLoader = val;
    }
    /**
     * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
     * @group Props
     */
    get numToleratedItems() {
      return this._numToleratedItems;
    }
    set numToleratedItems(val) {
      this._numToleratedItems = val;
    }
    /**
     * Defines whether the data is loaded.
     * @group Props
     */
    get loading() {
      return this._loading;
    }
    set loading(val) {
      this._loading = val;
    }
    /**
     * Defines whether to dynamically change the height or width of scrollable container.
     * @group Props
     */
    get autoSize() {
      return this._autoSize;
    }
    set autoSize(val) {
      this._autoSize = val;
    }
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
     * @group Props
     */
    get trackBy() {
      return this._trackBy;
    }
    set trackBy(val) {
      this._trackBy = val;
    }
    /**
     * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    get options() {
      return this._options;
    }
    set options(val) {
      this._options = val;
      if (val && typeof val === 'object') {
        //@ts-ignore
        Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
      }
    }
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when scroll position changes.
     * @param {ScrollerScrollEvent} event - Custom scroll event.
     * @group Emits
     */
    onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when scroll position and item's range in view changes.
     * @param {ScrollerScrollEvent} event - Custom scroll index change event.
     * @group Emits
     */
    onScrollIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    elementViewChild;
    contentViewChild;
    templates;
    _id;
    _style;
    _styleClass;
    _tabindex = 0;
    _items;
    _itemSize = 0;
    _scrollHeight;
    _scrollWidth;
    _orientation = 'vertical';
    _step = 0;
    _delay = 0;
    _resizeDelay = 10;
    _appendOnly = false;
    _inline = false;
    _lazy = false;
    _disabled = false;
    _loaderDisabled = false;
    _columns;
    _showSpacer = true;
    _showLoader = false;
    _numToleratedItems;
    _loading;
    _autoSize = false;
    _trackBy;
    _options;
    d_loading = false;
    d_numToleratedItems;
    contentEl;
    contentTemplate;
    itemTemplate;
    loaderTemplate;
    loaderIconTemplate;
    first = 0;
    last = 0;
    page = 0;
    isRangeChanged = false;
    numItemsInViewport = 0;
    lastScrollPos = 0;
    lazyLoadState = {};
    loaderArr = [];
    spacerStyle = {};
    contentStyle = {};
    scrollTimeout;
    resizeTimeout;
    initialized = false;
    resizeObserver;
    defaultWidth;
    defaultHeight;
    defaultContentWidth;
    defaultContentHeight;
    get vertical() {
      return this._orientation === 'vertical';
    }
    get horizontal() {
      return this._orientation === 'horizontal';
    }
    get both() {
      return this._orientation === 'both';
    }
    get loadedItems() {
      if (this._items && !this.d_loading) {
        if (this.both) return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map(item => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));else if (this.horizontal && this._columns) return this._items;else return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
      }
      return [];
    }
    get loadedRows() {
      return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    }
    get loadedColumns() {
      if (this._columns && (this.both || this.horizontal)) {
        return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
      }
      return this._columns;
    }
    constructor(document, platformId, renderer, cd, zone) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
    }
    ngOnInit() {
      this.setInitialState();
    }
    ngOnChanges(simpleChanges) {
      let isLoadingChanged = false;
      if (simpleChanges.loading) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.loading;
        if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
          this.d_loading = currentValue;
          isLoadingChanged = true;
        }
      }
      if (simpleChanges.orientation) {
        this.lastScrollPos = this.both ? {
          top: 0,
          left: 0
        } : 0;
      }
      if (simpleChanges.numToleratedItems) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.numToleratedItems;
        if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
          this.d_numToleratedItems = currentValue;
        }
      }
      if (simpleChanges.options) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.options;
        if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
          this.d_loading = currentValue.loading;
          isLoadingChanged = true;
        }
        if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
          this.d_numToleratedItems = currentValue.numToleratedItems;
        }
      }
      if (this.initialized) {
        const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
        if (isChanged) {
          this.init();
          this.calculateAutoSize();
        }
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'loadericon':
            this.loaderIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      Promise.resolve().then(() => {
        this.viewInit();
      });
    }
    ngAfterViewChecked() {
      if (!this.initialized) {
        this.viewInit();
      }
    }
    ngOnDestroy() {
      this.unbindResizeListener();
      this.contentEl = null;
      this.initialized = false;
    }
    viewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && !this.initialized) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
          this.setInitialState();
          this.setContentEl(this.contentEl);
          this.init();
          this.calculateAutoSize();
          this.defaultWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild?.nativeElement);
          this.defaultHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild?.nativeElement);
          this.defaultContentWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.contentEl);
          this.defaultContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.contentEl);
          this.resizeObserver = new ResizeObserver(() => this.onResize());
          this.resizeObserver.observe(this.elementViewChild?.nativeElement);
          this.initialized = true;
        }
      }
    }
    init() {
      if (!this._disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
        this.cd.detectChanges();
      }
    }
    setContentEl(el) {
      this.contentEl = el || this.contentViewChild?.nativeElement || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.elementViewChild?.nativeElement, '.p-scroller-content');
    }
    setInitialState() {
      this.first = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.last = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.numItemsInViewport = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
      this.d_loading = this._loading || false;
      this.d_numToleratedItems = this._numToleratedItems;
      this.loaderArr = [];
      this.spacerStyle = {};
      this.contentStyle = {};
    }
    getElementRef() {
      return this.elementViewChild;
    }
    getPageByFirst(first) {
      return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
    }
    isPageChanged(first) {
      return this._step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
    }
    scrollTo(options) {
      // this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
      this.elementViewChild?.nativeElement?.scrollTo(options);
    }
    scrollToIndex(index, behavior = 'auto') {
      const valid = this.both ? index.every(i => i > -1) : index > -1;
      if (valid) {
        const first = this.first;
        const {
          scrollTop = 0,
          scrollLeft = 0
        } = this.elementViewChild?.nativeElement;
        const {
          numToleratedItems
        } = this.calculateNumItems();
        const contentPos = this.getContentPosition();
        const itemSize = this.itemSize;
        const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
        const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
        const scrollTo = (left = 0, top = 0) => this.scrollTo({
          left,
          top,
          behavior
        });
        let newFirst = this.both ? {
          rows: 0,
          cols: 0
        } : 0;
        let isRangeChanged = false,
          isScrollChanged = false;
        if (this.both) {
          newFirst = {
            rows: calculateFirst(index[0], numToleratedItems[0]),
            cols: calculateFirst(index[1], numToleratedItems[1])
          };
          scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
          isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
          isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
        } else {
          newFirst = calculateFirst(index, numToleratedItems);
          this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
          isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
          isRangeChanged = newFirst !== first;
        }
        this.isRangeChanged = isRangeChanged;
        isScrollChanged && (this.first = newFirst);
      }
    }
    scrollInView(index, to, behavior = 'auto') {
      if (to) {
        const {
          first,
          viewport
        } = this.getRenderedRange();
        const scrollTo = (left = 0, top = 0) => this.scrollTo({
          left,
          top,
          behavior
        });
        const isToStart = to === 'to-start';
        const isToEnd = to === 'to-end';
        if (isToStart) {
          if (this.both) {
            if (viewport.first.rows - first.rows > index[0]) {
              scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
            } else if (viewport.first.cols - first.cols > index[1]) {
              scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
            }
          } else {
            if (viewport.first - first > index) {
              const pos = (viewport.first - 1) * this._itemSize;
              this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        } else if (isToEnd) {
          if (this.both) {
            if (viewport.last.rows - first.rows <= index[0] + 1) {
              scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
              scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
            }
          } else {
            if (viewport.last - first <= index + 1) {
              const pos = (viewport.first + 1) * this._itemSize;
              this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    }
    getRenderedRange() {
      const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
      let firstInViewport = this.first;
      let lastInViewport = 0;
      if (this.elementViewChild?.nativeElement) {
        const {
          scrollTop,
          scrollLeft
        } = this.elementViewChild.nativeElement;
        if (this.both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          const scrollPos = this.horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    }
    calculateNumItems() {
      const contentPos = this.getContentPosition();
      const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
      const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
      const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
      const calculateNumToleratedItems = _numItems => Math.ceil(_numItems / 2);
      const numItemsInViewport = this.both ? {
        rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
        cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
      } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
      const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport,
        numToleratedItems
      };
    }
    calculateOptions() {
      const {
        numItemsInViewport,
        numToleratedItems
      } = this.calculateNumItems();
      const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      const first = this.first;
      const last = this.both ? {
        rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
        cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
      } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems;
      if (this.showLoader) {
        this.loaderArr = this.both ? Array.from({
          length: numItemsInViewport.rows
        }).map(() => Array.from({
          length: numItemsInViewport.cols
        })) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this._lazy) {
        Promise.resolve().then(() => {
          this.lazyLoadState = {
            first: this._step ? this.both ? {
              rows: 0,
              cols: first.cols
            } : 0 : first,
            last: Math.min(this._step ? this._step : this.last, this.items.length)
          };
          this.handleEvents('onLazyLoad', this.lazyLoadState);
        });
      }
    }
    calculateAutoSize() {
      if (this._autoSize && !this.d_loading) {
        Promise.resolve().then(() => {
          if (this.contentEl) {
            this.contentEl.style.minHeight = this.contentEl.style.minWidth = 'auto';
            this.contentEl.style.position = 'relative';
            this.elementViewChild.nativeElement.style.contain = 'none';
            const [contentWidth, contentHeight] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.contentEl), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.contentEl)];
            contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = '');
            contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = '');
            const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild.nativeElement)];
            this.contentEl.style.minHeight = this.contentEl.style.minWidth = '';
            this.contentEl.style.position = '';
            this.elementViewChild.nativeElement.style.contain = '';
            this.defaultWidth = width;
            this.defaultHeight = height;
            this.defaultContentWidth = contentWidth;
            this.defaultContentHeight = contentHeight;
            (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + 'px' : this._scrollWidth || this.defaultWidth + 'px');
            (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + 'px' : this._scrollHeight || this.defaultHeight + 'px');
          }
        });
      }
    }
    getLast(last = 0, isCols = false) {
      return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
    }
    getContentPosition() {
      if (this.contentEl) {
        const style = getComputedStyle(this.contentEl);
        const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
        const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
        const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
        const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
        return {
          left,
          right,
          top,
          bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    }
    setSize() {
      if (this.elementViewChild?.nativeElement) {
        const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
        const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
        const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
        const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
        if (this.both || this.horizontal) {
          setProp('height', height);
          setProp('width', width);
        } else {
          setProp('height', height);
        }
      }
    }
    setSpacerSize() {
      if (this._items) {
        const setProp = (_name, _count, _size) => this.spacerStyle = {
          ...this.spacerStyle,
          ...{
            [`${_name}`]: _count * _size + 'px'
          }
        };
        const numItems = this._items.length;
        if (this.both) {
          setProp('height', numItems, this._itemSize[0]);
          setProp('width', this._columns?.length || this._items[1]?.length, this._itemSize[1]);
        } else {
          this.horizontal ? setProp('width', this._columns?.length || this._items.length, this._itemSize) : setProp('height', numItems, this._itemSize);
        }
      }
    }
    setContentPosition(pos) {
      if (this.contentEl && !this._appendOnly) {
        const first = pos ? pos.first : this.first;
        const calculateTranslateVal = (_first, _size) => _first * _size;
        const setTransform = (_x = 0, _y = 0) => this.contentStyle = {
          ...this.contentStyle,
          ...{
            transform: `translate3d(${_x}px, ${_y}px, 0)`
          }
        };
        if (this.both) {
          setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
        } else {
          const translateVal = calculateTranslateVal(first, this._itemSize);
          this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    }
    onScrollPositionChange(event) {
      const target = event.target;
      const contentPos = this.getContentPosition();
      const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
      const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
        let lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return this.getLast(lastValue, _isCols);
      };
      const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let newLast = this.last;
      let isRangeChanged = false;
      let newScrollPos = this.lastScrollPos;
      if (this.both) {
        const isScrollDown = this.lastScrollPos.top <= scrollTop;
        const isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
          const currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
          };
          const triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
          const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
          const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    }
    onScrollChange(event) {
      const {
        first,
        last,
        isRangeChanged,
        scrollPos
      } = this.onScrollPositionChange(event);
      if (isRangeChanged) {
        const newState = {
          first,
          last
        };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.handleEvents('onScrollIndexChange', newState);
        if (this._lazy && this.isPageChanged(first)) {
          const lazyLoadState = {
            first: this._step ? Math.min(this.getPageByFirst(first) * this._step, this.items.length - this._step) : first,
            last: Math.min(this._step ? (this.getPageByFirst(first) + 1) * this._step : last, this.items.length)
          };
          const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.handleEvents('onLazyLoad', lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    }
    onContainerScroll(event) {
      this.handleEvents('onScroll', {
        originalEvent: event
      });
      if (this._delay && this.isPageChanged()) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (!this.d_loading && this.showLoader) {
          const {
            isRangeChanged
          } = this.onScrollPositionChange(event);
          const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
          if (changed) {
            this.d_loading = true;
            this.cd.detectChanges();
          }
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(event);
          if (this.d_loading && this.showLoader && (!this._lazy || this._loading === undefined)) {
            this.d_loading = false;
            this.page = this.getPageByFirst();
            this.cd.detectChanges();
          }
        }, this._delay);
      } else {
        !this.d_loading && this.onScrollChange(event);
      }
    }
    unbindResizeListener() {
      if (this.resizeObserver) {
        this.resizeObserver.unobserve(this.elementViewChild?.nativeElement);
        this.resizeObserver = null;
      }
    }
    onResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
          const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild?.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild?.nativeElement)];
          const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
          const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
          reinit && this.zone.run(() => {
            this.d_numToleratedItems = this._numToleratedItems;
            this.init();
            this.calculateAutoSize();
          });
        }
      }, this._resizeDelay);
    }
    handleEvents(name, params) {
      //@ts-ignore
      return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
    }
    getContentOptions() {
      return {
        contentStyleClass: `p-scroller-content ${this.d_loading ? 'p-scroller-loading' : ''}`,
        items: this.loadedItems,
        getItemOptions: index => this.getOptions(index),
        loading: this.d_loading,
        getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
        itemSize: this._itemSize,
        rows: this.loadedRows,
        columns: this.loadedColumns,
        spacerStyle: this.spacerStyle,
        contentStyle: this.contentStyle,
        vertical: this.vertical,
        horizontal: this.horizontal,
        both: this.both
      };
    }
    getOptions(renderedIndex) {
      const count = (this._items || []).length;
      const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    }
    getLoaderOptions(index, extOptions) {
      const count = this.loaderArr.length;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        ...extOptions
      };
    }
    static ɵfac = function Scroller_Factory(t) {
      return new (t || Scroller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Scroller,
      selectors: [["p-scroller"]],
      contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Scroller_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-scroller-viewport", "p-element"],
      inputs: {
        id: "id",
        style: "style",
        styleClass: "styleClass",
        tabindex: "tabindex",
        items: "items",
        itemSize: "itemSize",
        scrollHeight: "scrollHeight",
        scrollWidth: "scrollWidth",
        orientation: "orientation",
        step: "step",
        delay: "delay",
        resizeDelay: "resizeDelay",
        appendOnly: "appendOnly",
        inline: "inline",
        lazy: "lazy",
        disabled: "disabled",
        loaderDisabled: "loaderDisabled",
        columns: "columns",
        showSpacer: "showSpacer",
        showLoader: "showLoader",
        numToleratedItems: "numToleratedItems",
        loading: "loading",
        autoSize: "autoSize",
        trackBy: "trackBy",
        options: "options"
      },
      outputs: {
        onLazyLoad: "onLazyLoad",
        onScroll: "onScroll",
        onScrollIndexChange: "onScrollIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 3,
      vars: 2,
      consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "ngClass"], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "styleClass"], [4, "ngIf"]],
      template: function Scroller_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 6)(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const disabledContainer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._disabled)("ngIfElse", disabledContainer_r9);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__.SpinnerIcon],
      styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"],
      encapsulation: 2
    });
  }
  return Scroller;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ScrollerModule = /*#__PURE__*/(() => {
  class ScrollerModule {
    static ɵfac = function ScrollerModule_Factory(t) {
      return new (t || ScrollerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScrollerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__.SpinnerIcon, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return ScrollerModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 405:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tooltip.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipModule: () => (/* binding */ TooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);







/**
 * Tooltip directive provides advisory information for a component.
 * @group Components
 */
let Tooltip = /*#__PURE__*/(() => {
  class Tooltip {
    platformId;
    el;
    zone;
    config;
    renderer;
    viewContainer;
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition;
    /**
     * Event to show the tooltip.
     * @group Props
     */
    tooltipEvent = 'hover';
    /**
     *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Type of CSS position.
     * @group Props
     */
    positionStyle;
    /**
     * Style class of the tooltip.
     * @group Props
     */
    tooltipStyleClass;
    /**
     * Whether the z-index should be managed automatically to always go on top or have a fixed value.
     * @group Props
     */
    tooltipZIndex;
    /**
     * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
     * @group Props
     */
    escape = true;
    /**
     * Delay to show the tooltip in milliseconds.
     * @group Props
     */
    showDelay;
    /**
     * Delay to hide the tooltip in milliseconds.
     * @group Props
     */
    hideDelay;
    /**
     * Time to wait in milliseconds to hide the tooltip even it is active.
     * @group Props
     */
    life;
    /**
     * Specifies the additional vertical offset of the tooltip from its default position.
     * @group Props
     */
    positionTop;
    /**
     * Specifies the additional horizontal offset of the tooltip from its default position.
     * @group Props
     */
    positionLeft;
    /**
     * Whether to hide tooltip when hovering over tooltip content.
     * @group Props
     */
    autoHide = true;
    /**
     * Automatically adjusts the element position when there is not enough space on the selected position.
     * @group Props
     */
    fitContent = true;
    /**
     * Whether to hide tooltip on escape key press.
     * @group Props
     */
    hideOnEscape = true;
    /**
     * Content of the tooltip.
     * @group Props
     */
    content;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(val) {
      this._disabled = val;
      this.deactivate();
    }
    /**
     * Specifies the tooltip configuration options for the component.
     * @group Props
     */
    tooltipOptions;
    _tooltipOptions = {
      tooltipLabel: null,
      tooltipPosition: 'right',
      tooltipEvent: 'hover',
      appendTo: 'body',
      positionStyle: null,
      tooltipStyleClass: null,
      tooltipZIndex: 'auto',
      escape: true,
      disabled: null,
      showDelay: null,
      hideDelay: null,
      positionTop: null,
      positionLeft: null,
      life: null,
      autoHide: true,
      hideOnEscape: true,
      id: (0,primeng_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)() + '_tooltip'
    };
    _disabled;
    container;
    styleClass;
    tooltipText;
    showTimeout;
    hideTimeout;
    active;
    mouseEnterListener;
    mouseLeaveListener;
    containerMouseleaveListener;
    clickListener;
    focusListener;
    blurListener;
    documentEscapeListener;
    scrollHandler;
    resizeListener;
    interactionInProgress = false;
    constructor(platformId, el, zone, config, renderer, viewContainer) {
      this.platformId = platformId;
      this.el = el;
      this.zone = zone;
      this.config = config;
      this.renderer = renderer;
      this.viewContainer = viewContainer;
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          const tooltipEvent = this.getOption('tooltipEvent');
          if (tooltipEvent === 'hover' || tooltipEvent === 'both') {
            this.mouseEnterListener = this.onMouseEnter.bind(this);
            this.mouseLeaveListener = this.onMouseLeave.bind(this);
            this.clickListener = this.onInputClick.bind(this);
            this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.addEventListener('click', this.clickListener);
            this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
          }
          if (tooltipEvent === 'focus' || tooltipEvent === 'both') {
            this.focusListener = this.onFocus.bind(this);
            this.blurListener = this.onBlur.bind(this);
            let target = this.el.nativeElement.querySelector('.p-component');
            if (!target) {
              target = this.getTarget(this.el.nativeElement);
            }
            target.addEventListener('focus', this.focusListener);
            target.addEventListener('blur', this.blurListener);
          }
        });
      }
    }
    setAriaDescribedBy() {
      const tooltipId = this.getOption('id');
      if (tooltipId && this.active) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', tooltipId);
      }
    }
    removeAriaDescribedBy() {
      this.renderer.removeAttribute(this.el.nativeElement, 'aria-describedby');
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.tooltipPosition) {
        this.setOption({
          tooltipPosition: simpleChange.tooltipPosition.currentValue
        });
      }
      if (simpleChange.tooltipEvent) {
        this.setOption({
          tooltipEvent: simpleChange.tooltipEvent.currentValue
        });
      }
      if (simpleChange.appendTo) {
        this.setOption({
          appendTo: simpleChange.appendTo.currentValue
        });
      }
      if (simpleChange.positionStyle) {
        this.setOption({
          positionStyle: simpleChange.positionStyle.currentValue
        });
      }
      if (simpleChange.tooltipStyleClass) {
        this.setOption({
          tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
        });
      }
      if (simpleChange.tooltipZIndex) {
        this.setOption({
          tooltipZIndex: simpleChange.tooltipZIndex.currentValue
        });
      }
      if (simpleChange.escape) {
        this.setOption({
          escape: simpleChange.escape.currentValue
        });
      }
      if (simpleChange.showDelay) {
        this.setOption({
          showDelay: simpleChange.showDelay.currentValue
        });
      }
      if (simpleChange.hideDelay) {
        this.setOption({
          hideDelay: simpleChange.hideDelay.currentValue
        });
      }
      if (simpleChange.life) {
        this.setOption({
          life: simpleChange.life.currentValue
        });
      }
      if (simpleChange.positionTop) {
        this.setOption({
          positionTop: simpleChange.positionTop.currentValue
        });
      }
      if (simpleChange.positionLeft) {
        this.setOption({
          positionLeft: simpleChange.positionLeft.currentValue
        });
      }
      if (simpleChange.disabled) {
        this.setOption({
          disabled: simpleChange.disabled.currentValue
        });
      }
      if (simpleChange.content) {
        this.setOption({
          tooltipLabel: simpleChange.content.currentValue
        });
        if (this.active) {
          if (simpleChange.content.currentValue) {
            if (this.container && this.container.offsetParent) {
              this.updateText();
              this.align();
            } else {
              this.show();
            }
          } else {
            this.hide();
          }
        }
      }
      if (simpleChange.autoHide) {
        this.setOption({
          autoHide: simpleChange.autoHide.currentValue
        });
      }
      if (simpleChange.id) {
        this.setOption({
          id: simpleChange.id.currentValue
        });
      }
      if (simpleChange.tooltipOptions) {
        this._tooltipOptions = {
          ...this._tooltipOptions,
          ...simpleChange.tooltipOptions.currentValue
        };
        this.deactivate();
        if (this.active) {
          if (this.getOption('tooltipLabel')) {
            if (this.container && this.container.offsetParent) {
              this.updateText();
              this.align();
            } else {
              this.show();
            }
          } else {
            this.hide();
          }
        }
      }
    }
    isAutoHide() {
      return this.getOption('autoHide');
    }
    onMouseEnter(e) {
      if (!this.container && !this.showTimeout) {
        this.activate();
      }
    }
    onMouseLeave(e) {
      if (!this.isAutoHide()) {
        const valid = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip-text') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(e.relatedTarget, 'p-tooltip-arrow');
        !valid && this.deactivate();
      } else {
        this.deactivate();
      }
    }
    onFocus(e) {
      this.activate();
    }
    onBlur(e) {
      this.deactivate();
    }
    onInputClick(e) {
      this.deactivate();
    }
    activate() {
      if (!this.interactionInProgress) {
        this.active = true;
        this.clearHideTimeout();
        if (this.getOption('showDelay')) this.showTimeout = setTimeout(() => {
          this.show();
        }, this.getOption('showDelay'));else this.show();
        if (this.getOption('life')) {
          let duration = this.getOption('showDelay') ? this.getOption('life') + this.getOption('showDelay') : this.getOption('life');
          this.hideTimeout = setTimeout(() => {
            this.hide();
          }, duration);
        }
        if (this.getOption('hideOnEscape')) {
          this.documentEscapeListener = this.renderer.listen('document', 'keydown.escape', () => {
            this.deactivate();
            this.documentEscapeListener();
          });
        }
      }
      this.interactionInProgress = true;
    }
    deactivate() {
      this.interactionInProgress = false;
      this.active = false;
      this.clearShowTimeout();
      if (this.getOption('hideDelay')) {
        this.clearHideTimeout(); //life timeout
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, this.getOption('hideDelay'));
      } else {
        this.hide();
      }
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
      }
    }
    create() {
      if (this.container) {
        this.clearHideTimeout();
        this.remove();
      }
      this.container = document.createElement('div');
      this.container.setAttribute('id', this.getOption('id'));
      this.container.setAttribute('role', 'tooltip');
      let tooltipArrow = document.createElement('div');
      tooltipArrow.className = 'p-tooltip-arrow';
      this.container.appendChild(tooltipArrow);
      this.tooltipText = document.createElement('div');
      this.tooltipText.className = 'p-tooltip-text';
      this.updateText();
      if (this.getOption('positionStyle')) {
        this.container.style.position = this.getOption('positionStyle');
      }
      this.container.appendChild(this.tooltipText);
      if (this.getOption('appendTo') === 'body') document.body.appendChild(this.container);else if (this.getOption('appendTo') === 'target') primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.container, this.el.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.container, this.getOption('appendTo'));
      this.container.style.display = 'inline-block';
      if (this.fitContent) {
        this.container.style.width = 'fit-content';
      }
      if (this.isAutoHide()) {
        this.container.style.pointerEvents = 'none';
      } else {
        this.container.style.pointerEvents = 'unset';
        this.bindContainerMouseleaveListener();
      }
      this.setAriaDescribedBy();
    }
    bindContainerMouseleaveListener() {
      if (!this.containerMouseleaveListener) {
        const targetEl = this.container ?? this.container.nativeElement;
        this.containerMouseleaveListener = this.renderer.listen(targetEl, 'mouseleave', e => {
          this.deactivate();
        });
      }
    }
    unbindContainerMouseleaveListener() {
      if (this.containerMouseleaveListener) {
        this.bindContainerMouseleaveListener();
        this.containerMouseleaveListener = null;
      }
    }
    show() {
      if (!this.getOption('tooltipLabel') || this.getOption('disabled')) {
        return;
      }
      this.create();
      const nativeElement = this.el.nativeElement;
      const pDialogWrapper = nativeElement.closest('p-dialog');
      if (pDialogWrapper) {
        setTimeout(() => {
          this.container && this.align();
        }, 100);
      } else {
        this.align();
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.fadeIn(this.container, 250);
      if (this.getOption('tooltipZIndex') === 'auto') primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.set('tooltip', this.container, this.config.zIndex.tooltip);else this.container.style.zIndex = this.getOption('tooltipZIndex');
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    }
    hide() {
      if (this.getOption('tooltipZIndex') === 'auto') {
        primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(this.container);
      }
      this.remove();
    }
    updateText() {
      const content = this.getOption('tooltipLabel');
      if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef) {
        const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
        embeddedViewRef.detectChanges();
        embeddedViewRef.rootNodes.forEach(node => this.tooltipText.appendChild(node));
      } else if (this.getOption('escape')) {
        this.tooltipText.innerHTML = '';
        this.tooltipText.appendChild(document.createTextNode(content));
      } else {
        this.tooltipText.innerHTML = content;
      }
    }
    align() {
      let position = this.getOption('tooltipPosition');
      switch (position) {
        case 'top':
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignBottom();
            if (this.isOutOfBounds()) {
              this.alignRight();
              if (this.isOutOfBounds()) {
                this.alignLeft();
              }
            }
          }
          break;
        case 'bottom':
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignRight();
              if (this.isOutOfBounds()) {
                this.alignLeft();
              }
            }
          }
          break;
        case 'left':
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignTop();
              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }
          break;
        case 'right':
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignLeft();
            if (this.isOutOfBounds()) {
              this.alignTop();
              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }
          break;
      }
    }
    getHostOffset() {
      if (this.getOption('appendTo') === 'body' || this.getOption('appendTo') === 'target') {
        let offset = this.el.nativeElement.getBoundingClientRect();
        let targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollLeft();
        let targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollTop();
        return {
          left: targetLeft,
          top: targetTop
        };
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
    alignRight() {
      this.preAlign('right');
      const el = this.activeElement;
      const hostOffset = this.getHostOffset();
      const left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(el);
      const top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(el) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container)) / 2;
      this.container.style.left = left + this.getOption('positionLeft') + 'px';
      this.container.style.top = top + this.getOption('positionTop') + 'px';
    }
    get activeElement() {
      return this.el.nativeElement.nodeName.includes('P-') ? primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.el.nativeElement, '.p-component') || this.el.nativeElement : this.el.nativeElement;
    }
    alignLeft() {
      this.preAlign('left');
      let hostOffset = this.getHostOffset();
      let left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container);
      let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container)) / 2;
      this.container.style.left = left + this.getOption('positionLeft') + 'px';
      this.container.style.top = top + this.getOption('positionTop') + 'px';
    }
    alignTop() {
      this.preAlign('top');
      let hostOffset = this.getHostOffset();
      let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container)) / 2;
      let top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container);
      this.container.style.left = left + this.getOption('positionLeft') + 'px';
      this.container.style.top = top + this.getOption('positionTop') + 'px';
    }
    alignBottom() {
      this.preAlign('bottom');
      let hostOffset = this.getHostOffset();
      let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container)) / 2;
      let top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.nativeElement);
      this.container.style.left = left + this.getOption('positionLeft') + 'px';
      this.container.style.top = top + this.getOption('positionTop') + 'px';
    }
    setOption(option) {
      this._tooltipOptions = {
        ...this._tooltipOptions,
        ...option
      };
    }
    getOption(option) {
      return this._tooltipOptions[option];
    }
    getTarget(el) {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(el, 'p-inputwrapper') ? primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(el, 'input') : el;
    }
    preAlign(position) {
      this.container.style.left = -999 + 'px';
      this.container.style.top = -999 + 'px';
      let defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
      this.container.className = this.getOption('tooltipStyleClass') ? defaultClassName + ' ' + this.getOption('tooltipStyleClass') : defaultClassName;
    }
    isOutOfBounds() {
      let offset = this.container.getBoundingClientRect();
      let targetTop = offset.top;
      let targetLeft = offset.left;
      let width = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.container);
      let height = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.container);
      let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getViewport();
      return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
    }
    onWindowResize(e) {
      this.hide();
    }
    bindDocumentResizeListener() {
      this.zone.runOutsideAngular(() => {
        this.resizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.resizeListener);
      });
    }
    unbindDocumentResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_2__.ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
          if (this.container) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    unbindEvents() {
      const tooltipEvent = this.getOption('tooltipEvent');
      if (tooltipEvent === 'hover' || tooltipEvent === 'both') {
        this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
        this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
        this.el.nativeElement.removeEventListener('click', this.clickListener);
      }
      if (tooltipEvent === 'focus' || tooltipEvent === 'both') {
        let target = this.el.nativeElement.querySelector('.p-component');
        if (!target) {
          target = this.getTarget(this.el.nativeElement);
        }
      }
      this.unbindDocumentResizeListener();
    }
    remove() {
      if (this.container && this.container.parentElement) {
        if (this.getOption('appendTo') === 'body') document.body.removeChild(this.container);else if (this.getOption('appendTo') === 'target') this.el.nativeElement.removeChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeChild(this.container, this.getOption('appendTo'));
      }
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.unbindContainerMouseleaveListener();
      this.clearTimeouts();
      this.removeAriaDescribedBy();
      this.container = null;
      this.scrollHandler = null;
    }
    clearShowTimeout() {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }
    }
    clearHideTimeout() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
    clearTimeouts() {
      this.clearShowTimeout();
      this.clearHideTimeout();
    }
    ngOnDestroy() {
      this.unbindEvents();
      if (this.container) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(this.container);
      }
      this.remove();
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
      }
    }
    static ɵfac = function Tooltip_Factory(t) {
      return new (t || Tooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: Tooltip,
      selectors: [["", "pTooltip", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        tooltipPosition: "tooltipPosition",
        tooltipEvent: "tooltipEvent",
        appendTo: "appendTo",
        positionStyle: "positionStyle",
        tooltipStyleClass: "tooltipStyleClass",
        tooltipZIndex: "tooltipZIndex",
        escape: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "escape", "escape", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        showDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "showDelay", "showDelay", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        hideDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "hideDelay", "hideDelay", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        life: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "life", "life", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        positionTop: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "positionTop", "positionTop", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        positionLeft: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "positionLeft", "positionLeft", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        autoHide: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoHide", "autoHide", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        fitContent: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "fitContent", "fitContent", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        hideOnEscape: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].HasDecoratorInputTransform, "hideOnEscape", "hideOnEscape", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        content: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].None, "pTooltip", "content"],
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputFlags"].None, "tooltipDisabled", "disabled"],
        tooltipOptions: "tooltipOptions"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
  }
  return Tooltip;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TooltipModule = /*#__PURE__*/(() => {
  class TooltipModule {
    static ɵfac = function TooltipModule_Factory(t) {
      return new (t || TooltipModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: TooltipModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return TooltipModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=616.js.map