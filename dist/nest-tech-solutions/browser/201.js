"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[201],{

/***/ 9126:
/*!***************************************************!*\
  !*** ./src/app/features/quote/quote.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteComponent: () => (/* binding */ QuoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 6771);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ 7763);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 6895);


















const _c0 = a0 => ({
  "background-color": a0
});
function QuoteComponent_p_card_58_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r1, " ");
  }
}
function QuoteComponent_p_card_58_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-inputNumber", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", service_r2.id + "_quantity")("showButtons", true)("min", 1);
  }
}
function QuoteComponent_p_card_58_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timeline (weeks):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-slider", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const service_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", service_r2.id + "_weeks")("min", 4)("max", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r2.quoteForm.get(service_r2.id + "_weeks")) == null ? null : tmp_6_0.value, " weeks");
  }
}
function QuoteComponent_p_card_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 63)(1, "div", 64)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-chip", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67)(8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteComponent_p_card_58_li_9_Template, 3, 1, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteComponent_p_card_58_div_12_Template, 4, 3, "div", 71)(13, QuoteComponent_p_card_58_div_13_Template, 6, 4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 73)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Starting from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const service_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r2.getComplexityColor(service_r2.complexity)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", service_r2.complexity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", service_r2.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", service_r2.id)("binary", true)("label", "Select " + service_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r2.quoteForm.get(service_r2.id)) == null ? null : tmp_10_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.quoteForm.get(service_r2.id)) == null ? null : tmp_11_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", service_r2.basePrice.toLocaleString(), "");
  }
}
function QuoteComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", service_r4.id)("binary", true)("label", service_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", service_r4.price.toLocaleString(), "");
  }
}
function QuoteComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You're saving $", ctx_r2.getDiscount().toLocaleString(), " with bundle discount!");
  }
}
function QuoteComponent_div_130_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89)(5, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const service_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Qty: ", ctx_r2.getServiceQuantity(service_r5.id), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.getServiceWeeks(service_r5.id), " weeks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", (service_r5.basePrice * ctx_r2.getServiceQuantity(service_r5.id)).toLocaleString(), " ");
  }
}
function QuoteComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteComponent_div_130_div_4_Template, 11, 4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getSelectedServices());
  }
}
function QuoteComponent_div_131_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", service_r6.price.toLocaleString(), "");
  }
}
function QuoteComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Additional Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteComponent_div_131_div_4_Template, 5, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getSelectedAdditionalServices());
  }
}
function QuoteComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bundle Discount (", ctx_r2.getDiscountPercentage(), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-$", ctx_r2.getDiscount().toLocaleString(), "");
  }
}
let QuoteComponent = /*#__PURE__*/(() => {
  class QuoteComponent {
    constructor(fb, messageService) {
      this.fb = fb;
      this.messageService = messageService;
      this.showCustomRequirements = false;
      this.isSubmitting = false;
      this.services = [{
        id: 'web-dev',
        name: 'Custom Web Development',
        description: 'Full-stack web applications with modern frameworks and responsive design',
        basePrice: 15000,
        features: ['Responsive design', 'Database integration', 'User authentication', 'API development', 'SEO optimization'],
        category: 'development',
        complexity: 'standard',
        estimatedTime: '8-12 weeks',
        selected: false,
        quantity: 1,
        weekRange: 10
      }, {
        id: 'mobile-app',
        name: 'Mobile App Development',
        description: 'Cross-platform mobile applications with native performance',
        basePrice: 25000,
        features: ['iOS & Android support', 'Offline functionality', 'Push notifications', 'App store deployment', 'Analytics integration'],
        category: 'development',
        complexity: 'premium',
        estimatedTime: '12-16 weeks',
        selected: false,
        quantity: 1,
        weekRange: 14
      }, {
        id: 'cloud-devops',
        name: 'Cloud & DevOps',
        description: 'Scalable cloud infrastructure and automation solutions',
        basePrice: 20000,
        features: ['Cloud migration', 'CI/CD pipelines', 'Containerization', 'Infrastructure as Code', 'Monitoring & Logging'],
        category: 'infrastructure',
        complexity: 'advanced',
        estimatedTime: '6-8 weeks',
        selected: false,
        quantity: 1,
        weekRange: 7
      }, {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence',
        basePrice: 35000,
        features: ['Custom AI models', 'Data analysis', 'Predictive analytics', 'Natural language processing', 'Computer vision'],
        category: 'ai',
        complexity: 'advanced',
        estimatedTime: '16-20 weeks',
        selected: false,
        quantity: 1,
        weekRange: 18
      }, {
        id: 'ui-ux',
        name: 'UI/UX Design',
        description: 'User-centered design for exceptional user experiences',
        basePrice: 8000,
        features: ['User research', 'Wireframing', 'Prototyping', 'Visual design', 'Usability testing'],
        category: 'design',
        complexity: 'standard',
        estimatedTime: '4-6 weeks',
        selected: false,
        quantity: 1,
        weekRange: 5
      }, {
        id: 'ecommerce',
        name: 'E-commerce Platform',
        description: 'Complete online store with payment processing and inventory management',
        basePrice: 22000,
        features: ['Product catalog', 'Payment integration', 'Inventory management', 'Order tracking', 'Admin dashboard'],
        category: 'ecommerce',
        complexity: 'premium',
        estimatedTime: '10-14 weeks',
        selected: false,
        quantity: 1,
        weekRange: 12
      }];
      this.additionalServices = [{
        id: 'testing',
        name: 'Quality Assurance & Testing',
        price: 3000
      }, {
        id: 'maintenance',
        name: '6-Month Maintenance & Support',
        price: 2000
      }, {
        id: 'training',
        name: 'Team Training & Documentation',
        price: 1500
      }, {
        id: 'security',
        name: 'Security Audit & Penetration Testing',
        price: 4000
      }, {
        id: 'optimization',
        name: 'Performance Optimization',
        price: 2500
      }, {
        id: 'seo',
        name: 'SEO Optimization Package',
        price: 1800
      }, {
        id: 'analytics',
        name: 'Analytics & Reporting Setup',
        price: 1200
      }, {
        id: 'backup',
        name: 'Automated Backup System',
        price: 800
      }];
      this.budgetOptions = [{
        label: 'Under $10,000',
        value: '10k'
      }, {
        label: '$10,000 - $25,000',
        value: '25k'
      }, {
        label: '$25,000 - $50,000',
        value: '50k'
      }, {
        label: '$50,000+',
        value: '50k+'
      }];
      this.timelineOptions = [{
        label: '1-3 months',
        value: '3m'
      }, {
        label: '3-6 months',
        value: '6m'
      }, {
        label: '6-12 months',
        value: '12m'
      }, {
        label: '12+ months',
        value: '12m+'
      }];
      this.quoteForm = this.fb.group({
        customRequirements: [''],
        budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        timeline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
        company: [''],
        phone: ['']
      });
    }
    ngOnInit() {
      this.services.forEach(service => {
        this.quoteForm.addControl(service.id, this.fb.control(false));
        this.quoteForm.addControl(`${service.id}_quantity`, this.fb.control(1));
        this.quoteForm.addControl(`${service.id}_weeks`, this.fb.control(service.weekRange));
      });
      this.additionalServices.forEach(service => {
        this.quoteForm.addControl(service.id, this.fb.control(false));
      });
    }
    getComplexityColor(complexity) {
      switch (complexity) {
        case 'standard':
          return '#22c55e';
        case 'premium':
          return '#8b5cf6';
        case 'advanced':
          return '#3b82f6';
        default:
          return 'var(--primary-color)';
      }
    }
    getComplexityIcon(complexity) {
      switch (complexity) {
        case 'standard':
          return 'pi pi-check-circle';
        case 'premium':
          return 'pi pi-star';
        case 'advanced':
          return 'pi pi-bolt';
        default:
          return 'pi pi-info-circle';
      }
    }
    calculateTotal() {
      const subtotal = this.getSubtotal();
      const discount = this.getDiscount();
      return subtotal - discount;
    }
    getSubtotal() {
      let total = 0;
      this.services.forEach(service => {
        if (this.quoteForm.get(service.id)?.value) {
          const quantity = this.quoteForm.get(`${service.id}_quantity`)?.value || 1;
          total += service.basePrice * quantity;
        }
      });
      this.additionalServices.forEach(service => {
        if (this.quoteForm.get(service.id)?.value) {
          total += service.price;
        }
      });
      return total;
    }
    getDiscount() {
      const selectedCount = this.getSelectedServices().length;
      const subtotal = this.getSubtotal();
      // Apply bundle discounts
      if (selectedCount >= 3) {
        return Math.floor(subtotal * 0.15); // 15% discount for 3+ services
      } else if (selectedCount >= 2) {
        return Math.floor(subtotal * 0.10); // 10% discount for 2+ services
      }
      return 0;
    }
    getDiscountPercentage() {
      const selectedCount = this.getSelectedServices().length;
      if (selectedCount >= 3) return 15;
      if (selectedCount >= 2) return 10;
      return 0;
    }
    getSelectedServices() {
      return this.services.filter(service => this.quoteForm.get(service.id)?.value);
    }
    getSelectedAdditionalServices() {
      return this.additionalServices.filter(service => this.quoteForm.get(service.id)?.value);
    }
    getServiceQuantity(serviceId) {
      return this.quoteForm.get(`${serviceId}_quantity`)?.value || 1;
    }
    getServiceWeeks(serviceId) {
      return this.quoteForm.get(`${serviceId}_weeks`)?.value || 1;
    }
    generateProposal() {
      if (this.calculateTotal() > 0) {
        // In a real app, this would generate and download a PDF proposal
        this.messageService.add({
          severity: 'info',
          summary: 'Proposal Generation',
          detail: 'Detailed proposal will be sent to your email within 24 hours.',
          life: 5000
        });
      }
    }
    onSubmit() {
      if (this.quoteForm.valid && this.calculateTotal() > 0) {
        this.isSubmitting = true;
        // Simulate API call with quote data
        const quoteData = {
          services: this.getSelectedServices(),
          additionalServices: this.getSelectedAdditionalServices(),
          total: this.calculateTotal(),
          formData: this.quoteForm.value,
          timestamp: new Date()
        };
        console.log('Quote Data:', quoteData); // For development
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Quote Request Submitted Successfully!',
            detail: 'Our team will review your requirements and send a detailed proposal within 24 hours.',
            life: 6000
          });
          this.isSubmitting = false;
          // Reset form after successful submission
          // this.resetForm();
        }, 2000);
      } else if (this.calculateTotal() === 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'No Services Selected',
          detail: 'Please select at least one service to get a quote.',
          life: 4000
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Form Incomplete',
          detail: 'Please fill in all required fields correctly.',
          life: 4000
        });
      }
    }
    resetForm() {
      this.quoteForm.reset();
      this.services.forEach(service => {
        this.quoteForm.get(service.id)?.setValue(false);
        this.quoteForm.get(`${service.id}_quantity`)?.setValue(1);
        this.quoteForm.get(`${service.id}_weeks`)?.setValue(service.weekRange);
      });
      this.additionalServices.forEach(service => {
        this.quoteForm.get(service.id)?.setValue(false);
      });
    }
    static {
      this.ɵfac = function QuoteComponent_Factory(t) {
        return new (t || QuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteComponent,
        selectors: [["app-quote"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
        decls: 159,
        vars: 19,
        consts: [[1, "quote-container"], [1, "quote-hero-section"], [1, "hero-content"], [1, "hero-badge"], [1, "pi", "pi-calculator"], [1, "gradient-text"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "progress-indicator"], [1, "progress-steps"], [1, "step", "active"], [1, "step-number"], [1, "step"], [1, "quote-form-container"], [1, "quote-form", 3, "ngSubmit", "formGroup"], [1, "services-section"], [1, "pi", "pi-layers"], [1, "services-grid"], ["styleClass", "service-card", 4, "ngFor", "ngForOf"], [1, "additional-services-section"], [1, "pi", "pi-plus-circle"], [1, "additional-services-grid"], ["class", "additional-service-item", 4, "ngFor", "ngForOf"], [1, "requirements-section"], [1, "pi", "pi-pencil"], [1, "form-field"], [1, "p-float-label"], ["pInputTextarea", "", "formControlName", "customRequirements", 3, "rows", "autoResize"], [1, "form-row"], ["formControlName", "budget", "optionLabel", "label", "optionValue", "value", 3, "options", "showClear"], ["formControlName", "timeline", "optionLabel", "label", "optionValue", "value", 3, "options", "showClear"], [1, "contact-section"], [1, "pi", "pi-user"], ["pInputText", "", "formControlName", "name", "type", "text"], ["pInputText", "", "formControlName", "email", "type", "email"], ["pInputText", "", "formControlName", "company", "type", "text"], ["pInputText", "", "formControlName", "phone", "type", "tel"], [1, "submit-section"], [1, "quote-summary-mobile"], [1, "total-amount"], [1, "disclaimer"], ["class", "savings-indicator", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit Quote Request", "icon", "pi pi-send", 3, "loading", "disabled"], [1, "quote-summary-sidebar"], [1, "summary-card"], [1, "summary-header"], [1, "summary-status"], [1, "status-indicator", "live"], ["class", "selected-services", 4, "ngIf"], ["class", "selected-additional", 4, "ngIf"], [1, "price-breakdown"], [1, "breakdown-item"], ["class", "breakdown-item discount", 4, "ngIf"], [1, "breakdown-item", "total"], [1, "trust-indicators"], [1, "trust-item"], [1, "pi", "pi-shield"], [1, "pi", "pi-clock"], [1, "pi", "pi-heart"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Detailed Proposal", "icon", "pi pi-file-pdf", 1, "p-button-primary", "w-full", "summary-cta", 3, "click", "disabled"], ["position", "top-right"], ["styleClass", "service-card"], [1, "service-header"], [3, "label"], [1, "service-description"], [1, "service-features"], [4, "ngFor", "ngForOf"], [1, "service-controls"], [3, "formControlName", "binary", "label"], ["class", "quantity-control", 4, "ngIf"], ["class", "timeline-control", 4, "ngIf"], [1, "service-price"], [1, "pi", "pi-check"], [1, "quantity-control"], ["buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-secondary", "incrementButtonClass", "p-button-secondary", 3, "formControlName", "showButtons", "min"], [1, "timeline-control"], [3, "formControlName", "min", "max"], [1, "timeline-value"], [1, "additional-service-item"], [1, "price"], [1, "savings-indicator"], [1, "pi", "pi-star"], [1, "selected-services"], [1, "service-list"], ["class", "service-item", 4, "ngFor", "ngForOf"], [1, "service-item"], [1, "service-info"], [1, "service-details"], [1, "quantity"], [1, "timeline"], [1, "selected-additional"], [1, "additional-list"], ["class", "additional-item", 4, "ngFor", "ngForOf"], [1, "additional-item"], [1, "breakdown-item", "discount"]],
        template: function QuoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free Quote Calculator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get a ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Custom Quote");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Transform your vision into reality with our comprehensive software solutions. Get a detailed, personalized estimate in just a few clicks.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "24h");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Response Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "500+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects Delivered");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7)(25, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "100%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Free Consultation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "div", 11)(31, "div", 12)(32, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14)(37, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14)(42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14)(47, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15)(52, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuoteComponent_Template_form_ngSubmit_52_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 17)(54, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Select Services ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, QuoteComponent_p_card_58_Template, 19, 14, "p-card", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 21)(60, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Additional Services ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, QuoteComponent_div_64_Template, 4, 4, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section", 25)(66, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Project Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27)(70, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "textarea", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Describe your project requirements");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30)(75, "div", 27)(76, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "p-dropdown", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Budget Range");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27)(81, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "p-dropdown", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Project Timeline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "section", 33)(86, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Contact Information ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30)(90, "div", 27)(91, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Full Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 27)(96, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30)(101, "div", 27)(102, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Company Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27)(107, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "section", 39)(112, "div", 40)(113, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Estimated Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "*Final price may vary based on detailed requirements analysis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, QuoteComponent_div_119_Template, 4, 1, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 45)(122, "div", 46)(123, "div", 47)(124, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Quote Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Live Calculation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, QuoteComponent_div_130_Template, 5, 1, "div", 50)(131, QuoteComponent_div_131_Template, 5, 1, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 52)(133, "div", 53)(134, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Subtotal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, QuoteComponent_div_138_Template, 5, 2, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 55)(140, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Estimated Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 56)(145, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Fixed Price Guarantee");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "On-Time Delivery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "100% Satisfaction");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_Template_button_click_157_listener() {
              return ctx.generateProposal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "p-toast", 62);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.quoteForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.additionalServices);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 5)("autoResize", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.budgetOptions)("showClear", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.timelineOptions)("showClear", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.calculateTotal().toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getDiscount() > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isSubmitting)("disabled", !ctx.quoteForm.valid || ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getSelectedServices().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getSelectedAdditionalServices().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.getSubtotal().toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getDiscount() > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.calculateTotal().toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.calculateTotal() === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__.InputTextarea, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_slider__WEBPACK_IMPORTED_MODULE_8__.Slider, primeng_card__WEBPACK_IMPORTED_MODULE_9__.Card, primeng_chip__WEBPACK_IMPORTED_MODULE_10__.Chip, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumber, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown],
        styles: [".quote-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--surface-ground);\n}\n\n.quote-hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 6rem 2rem 4rem;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-light) 100%);\n  text-align: center;\n  color: white;\n  overflow: hidden;\n}\n.quote-hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"rgba(255, 255, 255, 0.1)\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"20\" fill=\"url(%23grid)\"/></svg>') repeat;\n  z-index: 1;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  color: white;\n  line-height: 1.1;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fbbf24, #f59e0b);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 3rem;\n  opacity: 0.9;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 1.6;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fbbf24;\n  margin-bottom: 0.5rem;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n@media (max-width: 768px) {\n  .quote-hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin-top: 4rem;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 100%;\n  width: 2rem;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:not(:last-child)::after {\n    width: 1rem;\n  }\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #fbbf24;\n  color: var(--primary-color);\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-weight: 600;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n@media (max-width: 768px) {\n  .quote-hero-section[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .quote-hero-section[_ngcontent-%COMP%] {\n    padding: 4rem 1rem 3rem;\n  }\n}\n\n.quote-form-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 3rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 4rem 2rem;\n}\n@media (max-width: 1200px) {\n  .quote-form-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    padding: 3rem 1rem;\n  }\n}\n\n.quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border-radius: 1.5rem;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--card-shadow-hover);\n}\n.quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--surface-border);\n}\n.quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.5rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card {\n  height: 100%;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card:hover {\n  border-color: var(--primary-color);\n  transform: translateY(-5px);\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .p-card-body {\n  padding: 1.5rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-header h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0;\n  line-height: 1.3;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-header   .p-chip .p-chip-text {\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-description {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  flex-grow: 1;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-features {\n  margin-bottom: 1.5rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-features ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-features ul li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: var(--text-secondary-color);\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-features ul li i {\n  color: var(--primary-color);\n  font-size: 0.875rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls {\n  margin-bottom: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls   .p-checkbox {\n  margin-bottom: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls   .p-checkbox .p-checkbox-label {\n  font-weight: 600;\n  color: var(--text-color);\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls .quantity-control, .quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls .timeline-control {\n  margin-bottom: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls .quantity-control label, .quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-controls .timeline-control label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-price {\n  text-align: center;\n  padding: 1rem;\n  background: var(--surface-section);\n  border-radius: 0.75rem;\n  margin-top: auto;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-price span {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 0.25rem;\n}\n.quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-price strong {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.quote-form[_ngcontent-%COMP%]   .additional-services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   .additional-services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quote-form[_ngcontent-%COMP%]   .additional-services-grid[_ngcontent-%COMP%]   .additional-service-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: var(--surface-section);\n  border-radius: 0.75rem;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n}\n.quote-form[_ngcontent-%COMP%]   .additional-services-grid[_ngcontent-%COMP%]   .additional-service-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background: rgba(var(--primary-color-rgb), 0.05);\n}\n.quote-form[_ngcontent-%COMP%]   .additional-services-grid[_ngcontent-%COMP%]   .additional-service-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-size: 1.1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quote-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.quote-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label {\n  display: block;\n}\n.quote-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label label {\n  font-weight: 500;\n  color: var(--text-secondary-color);\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%]   .savings-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  border-radius: 0.75rem;\n  color: #16a34a;\n  font-weight: 600;\n  margin-top: 1rem;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   .quote-summary-mobile[_ngcontent-%COMP%]   .savings-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border-radius: 0.75rem;\n}\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   .submit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 2rem;\n  background: var(--surface-card);\n  border-radius: 1.5rem;\n  box-shadow: var(--card-shadow);\n  overflow: hidden;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));\n  color: white;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-status[_ngcontent-%COMP%]   .status-indicator.live[_ngcontent-%COMP%] {\n  background: #22c55e;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .additional-list[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .additional-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.75rem;\n  background: var(--surface-section);\n  border-radius: 0.5rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0 0 0.25rem 0;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-details[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.8rem;\n  color: var(--text-secondary-color);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-price[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color);\n  font-size: 0.9rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .additional-item[_ngcontent-%COMP%], .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .additional-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.9rem;\n  color: var(--text-secondary-color);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-services[_ngcontent-%COMP%]   .additional-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .selected-additional[_ngcontent-%COMP%]   .additional-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  font-size: 0.9rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item.discount[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 500;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item.total[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--surface-border);\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .price-breakdown[_ngcontent-%COMP%]   .breakdown-item.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--primary-color);\n  font-size: 1.3rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .trust-indicators[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .trust-indicators[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--text-secondary-color);\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .trust-indicators[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .trust-indicators[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1rem;\n}\n.quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-cta[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  border-radius: 0.75rem;\n  font-weight: 600;\n}\n@media (max-width: 1200px) {\n  .quote-summary-sidebar[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n  .p-card {\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n  transition: all 0.3s ease;\n}\n  .p-button {\n  border-radius: 0.75rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n  .p-button.p-button-primary {\n  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));\n  border-color: var(--primary-color);\n}\n  .p-button.p-button-primary:hover {\n  background: linear-gradient(135deg, var(--primary-color-light), var(--primary-color));\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);\n}\n  .p-checkbox .p-checkbox-box {\n  border-radius: 0.375rem;\n  transition: all 0.3s ease;\n}\n  .p-checkbox .p-checkbox-box.p-highlight {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n}\n  .p-inputnumber,   .p-inputtext,   .p-dropdown,   .p-inputtextarea {\n  border-radius: 0.5rem;\n  transition: all 0.3s ease;\n}\n  .p-inputnumber:focus,   .p-inputtext:focus,   .p-dropdown:focus,   .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.2);\n}\n  .p-slider .p-slider-range {\n  background: var(--primary-color);\n}\n  .p-slider .p-slider-handle {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n}\n  .p-chip {\n  border-radius: 1rem;\n  font-weight: 600;\n}\n  .p-chip .p-chip-text {\n  color: white;\n}\n  .p-toast .p-toast-message {\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n\n@media (max-width: 768px) {\n  .quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .quote-form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .quote-form[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n.dark-theme[_nghost-%COMP%]   .quote-hero-section[_ngcontent-%COMP%]::before, .dark-theme   [_nghost-%COMP%]   .quote-hero-section[_ngcontent-%COMP%]::before {\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"rgba(255, 255, 255, 0.05)\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"20\" fill=\"url(%23grid)\"/></svg>') repeat;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcXVvdGUvcXVvdGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9QZXJzb25hbCUyMFdvcmtzcGFjZS9TaGVobmF6LVNvZnR3YXJlLVNvbHV0aW9ucy9zcmMvYXBwL2ZlYXR1cmVzL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtBQ0ZGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZGQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdXQUFBO0VBQ0EsVUFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE1JO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDSk47QURNTTtFQUNFLGNBQUE7QUNKUjtBRFFJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTk47QURRTTtFQUNFLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDTlI7QURVSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBRFlJO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtC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O0FDMUZOO0FENEZNO0VBQ0UscUZBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FDMUZSO0FEZ0dJO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQzlGTjtBRGdHTTtFQUNFLGdDQUFBO0VBQ0Esa0NBQUE7QUM5RlI7QURtR0U7Ozs7RUFJRSxxQkFBQTtFQUNBLHlCQUFBO0FDakdKO0FEbUdJOzs7O0VBQ0Usa0NBQUE7RUFDQSw0REFBQTtBQzlGTjtBRG1HSTtFQUNFLGdDQUFBO0FDakdOO0FEb0dJO0VBQ0UsZ0NBQUE7RUFDQSxrQ0FBQTtBQ2xHTjtBRHNHRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNwR0o7QURzR0k7RUFDRSxZQUFBO0FDcEdOO0FEeUdJO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBQ3ZHTjs7QUQ2R0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtFQzNHSjtFRDZHSTtJQUNFLGlCQUFBO0VDM0dOO0VEK0dFO0lBQ0UsU0FBQTtFQzdHSjtBQUNGO0FEb0hJO0VBQ0UsaVdBQUE7QUNsSE4iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2Rlcm4gUHJvZmVzc2lvbmFsIFF1b3RlIFBhZ2UgU3R5bGluZ1xyXG4vLyBGb2xsb3dpbmcgdGhlIHdlYnNpdGUncyBncmVlbiB0aGVtZSBhbmQgZGVzaWduIHN5c3RlbVxyXG5cclxuLnF1b3RlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG59XHJcblxyXG4vLyBFbmhhbmNlZCBIZXJvIFNlY3Rpb25cclxuLnF1b3RlLWhlcm8tc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDZyZW0gMnJlbSA0cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSAxMDAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDIwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJncmlkXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48cGF0aCBkPVwiTSAxMCAwIEwgMCAwIDAgMTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiBmaWxsPVwidXJsKCUyM2dyaWQpXCIvPjwvc3ZnPicpIHJlcGVhdDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5oZXJvLWJhZGdlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IGNsYW1wKDIuNXJlbSwgNXZ3LCA0cmVtKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gICAgICAuZ3JhZGllbnQtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZiYmYyNCwgI2Y1OWUwYik7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlcm8gc3RhdHNcclxuICAgIC5oZXJvLXN0YXRzIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIC5zdGF0LWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnN0YXQtbnVtYmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXQtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFByb2dyZXNzIGluZGljYXRvclxyXG4gIC5wcm9ncmVzcy1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcblxyXG4gICAgLnByb2dyZXNzLXN0ZXBzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAuc3RlcC1udW1iZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJiZjI0O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0ZXAtbnVtYmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRW5oYW5jZWQgRm9ybSBDb250YWluZXJcclxuLnF1b3RlLWZvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwMHB4O1xyXG4gIGdhcDogM3JlbTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogM3JlbSAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRm9ybSBTdHlsaW5nXHJcbi5xdW90ZS1mb3JtIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93LWhvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC43NXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNlcnZpY2VzIGdyaWRcclxuICAuc2VydmljZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLWNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAucC1jaGlwIHtcclxuICAgICAgICAgIC5wLWNoaXAtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlcnZpY2UtZmVhdHVyZXMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlLWNvbnRyb2xzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICA6Om5nLWRlZXAgLnAtY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAucC1jaGVja2JveC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdWFudGl0eS1jb250cm9sLFxyXG4gICAgICAgIC50aW1lbGluZS1jb250cm9sIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlLXByaWNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGRpdGlvbmFsIHNlcnZpY2VzXHJcbiAgLmFkZGl0aW9uYWwtc2VydmljZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRpdGlvbmFsLXNlcnZpY2UtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjA1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByaWNlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRm9ybSBmaWVsZHNcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIDo6bmctZGVlcCAucC1mbG9hdC1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3VibWl0IHNlY3Rpb25cclxuICAuc3VibWl0LXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucXVvdGUtc3VtbWFyeS1tb2JpbGUge1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b3RhbC1hbW91bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpc2NsYWltZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2F2aW5ncy1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMTk3LCA5NCwgMC4xKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM0LCAxOTcsIDk0LCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmJiZjI0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUXVvdGUgU3VtbWFyeSBTaWRlYmFyXHJcbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIge1xyXG4gIC5zdW1tYXJ5LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5zdW1tYXJ5LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdW1tYXJ5LXN0YXR1cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAgIC5zdGF0dXMtaW5kaWNhdG9yIHtcclxuICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAmLmxpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3RlZC1zZXJ2aWNlcyxcclxuICAgIC5zZWxlY3RlZC1hZGRpdGlvbmFsIHtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZS1saXN0LFxyXG4gICAgICAuYWRkaXRpb25hbC1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cclxuICAgICAgICAuc2VydmljZS1pbmZvIHtcclxuICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLWRldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlcnZpY2UtcHJpY2Uge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZGl0aW9uYWwtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJpY2UtYnJlYWtkb3duIHtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG5cclxuICAgICAgLmJyZWFrZG93bi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kaXNjb3VudCB7XHJcbiAgICAgICAgICBjb2xvcjogIzE2YTM0YTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnRvdGFsIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50cnVzdC1pbmRpY2F0b3JzIHtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG5cclxuICAgICAgLnRydXN0LWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeS1jdGEge1xyXG4gICAgICBtYXJnaW46IDEuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5zdW1tYXJ5LWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUHJpbWVORyBDdXN0b21pemF0aW9uc1xyXG46Om5nLWRlZXAge1xyXG4gIC5wLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAucC1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICYucC1idXR0b24tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucC1jaGVja2JveCB7XHJcbiAgICAucC1jaGVja2JveC1ib3gge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICYucC1oaWdobGlnaHQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLWlucHV0bnVtYmVyLFxyXG4gIC5wLWlucHV0dGV4dCxcclxuICAucC1kcm9wZG93bixcclxuICAucC1pbnB1dHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLXNsaWRlciB7XHJcbiAgICAucC1zbGlkZXItcmFuZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAucC1zbGlkZXItaGFuZGxlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucC1jaGlwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIC5wLWNoaXAtdGV4dCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLXRvYXN0IHtcclxuICAgIC5wLXRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5xdW90ZS1mb3JtIHtcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlcy1ncmlkIHtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGFyayB0aGVtZSBzcGVjaWZpYyBhZGp1c3RtZW50c1xyXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgLnF1b3RlLWhlcm8tc2VjdGlvbiB7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAyMFwiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZ3JpZFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHBhdGggZD1cIk0gMTAgMCBMIDAgMCAwIDEwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMFwiIGZpbGw9XCJ1cmwoJTIzZ3JpZClcIi8+PC9zdmc+JykgcmVwZWF0O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi5xdW90ZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xufVxuXG4ucXVvdGUtaGVyby1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2cmVtIDJyZW0gNHJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpIDEwMCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAyMFwiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZ3JpZFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHBhdGggZD1cIk0gMTAgMCBMIDAgMCAwIDEwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cInVybCglMjNncmlkKVwiLz48L3N2Zz4nKSByZXBlYXQ7XG4gIHotaW5kZXg6IDE7XG59XG4ucXVvdGUtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4ucXVvdGUtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8tYmFkZ2UgaSB7XG4gIGNvbG9yOiAjZmJiZjI0O1xufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDV2dywgNHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IGgxIC5ncmFkaWVudC10ZXh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZiYmYyNCwgI2Y1OWUwYik7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucXVvdGUtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8tc3RhdHMgLnN0YXQtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudCAuaGVyby1zdGF0cyAuc3RhdC1pdGVtIC5zdGF0LW51bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmJiZjI0O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucXVvdGUtaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQgLmhlcm8tc3RhdHMgLnN0YXQtaXRlbSAuc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBvcGFjaXR5OiAwLjg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlLWhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50IC5oZXJvLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLnByb2dyZXNzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLnByb2dyZXNzLWluZGljYXRvciAucHJvZ3Jlc3Mtc3RlcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGUtaGVyby1zZWN0aW9uIC5wcm9ncmVzcy1pbmRpY2F0b3IgLnByb2dyZXNzLXN0ZXBzIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLnByb2dyZXNzLWluZGljYXRvciAucHJvZ3Jlc3Mtc3RlcHMgLnN0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAucHJvZ3Jlc3MtaW5kaWNhdG9yIC5wcm9ncmVzcy1zdGVwcyAuc3RlcDpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGUtaGVyby1zZWN0aW9uIC5wcm9ncmVzcy1pbmRpY2F0b3IgLnByb2dyZXNzLXN0ZXBzIC5zdGVwOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgfVxufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAucHJvZ3Jlc3MtaW5kaWNhdG9yIC5wcm9ncmVzcy1zdGVwcyAuc3RlcC5hY3RpdmUgLnN0ZXAtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogI2ZiYmYyNDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAucHJvZ3Jlc3MtaW5kaWNhdG9yIC5wcm9ncmVzcy1zdGVwcyAuc3RlcC5hY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiAjZmJiZjI0O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnF1b3RlLWhlcm8tc2VjdGlvbiAucHJvZ3Jlc3MtaW5kaWNhdG9yIC5wcm9ncmVzcy1zdGVwcyAuc3RlcCAuc3RlcC1udW1iZXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5xdW90ZS1oZXJvLXNlY3Rpb24gLnByb2dyZXNzLWluZGljYXRvciAucHJvZ3Jlc3Mtc3RlcHMgLnN0ZXAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG9wYWNpdHk6IDAuODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGUtaGVyby1zZWN0aW9uIC5wcm9ncmVzcy1pbmRpY2F0b3IgLnByb2dyZXNzLXN0ZXBzIC5zdGVwIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZS1oZXJvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtO1xuICB9XG59XG5cbi5xdW90ZS1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwMHB4O1xuICBnYXA6IDNyZW07XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNHJlbSAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucXVvdGUtZm9ybS1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XG4gIH1cbn1cblxuLnF1b3RlLWZvcm0gc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbn1cbi5xdW90ZS1mb3JtIHNlY3Rpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93LWhvdmVyKTtcbn1cbi5xdW90ZS1mb3JtIHNlY3Rpb24gaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLnF1b3RlLWZvcm0gc2VjdGlvbiBoMiBpIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAucC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1oZWFkZXIgaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1oZWFkZXIgOjpuZy1kZWVwIC5wLWNoaXAgLnAtY2hpcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWZlYXR1cmVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtZmVhdHVyZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1mZWF0dXJlcyB1bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1mZWF0dXJlcyB1bCBsaSBpIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtY29udHJvbHMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtY29udHJvbHMgOjpuZy1kZWVwIC5wLWNoZWNrYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWNvbnRyb2xzIDo6bmctZGVlcCAucC1jaGVja2JveCAucC1jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5xdW90ZS1mb3JtIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWNvbnRyb2xzIC5xdWFudGl0eS1jb250cm9sLFxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtY29udHJvbHMgLnRpbWVsaW5lLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtY29udHJvbHMgLnF1YW50aXR5LWNvbnRyb2wgbGFiZWwsXG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1jb250cm9scyAudGltZWxpbmUtY29udHJvbCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnF1b3RlLWZvcm0gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQgLnNlcnZpY2UtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1wcmljZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4ucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1wcmljZSBzdHJvbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnF1b3RlLWZvcm0gLmFkZGl0aW9uYWwtc2VydmljZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlLWZvcm0gLmFkZGl0aW9uYWwtc2VydmljZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5xdW90ZS1mb3JtIC5hZGRpdGlvbmFsLXNlcnZpY2VzLWdyaWQgLmFkZGl0aW9uYWwtc2VydmljZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5xdW90ZS1mb3JtIC5hZGRpdGlvbmFsLXNlcnZpY2VzLWdyaWQgLmFkZGl0aW9uYWwtc2VydmljZS1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMDUpO1xufVxuLnF1b3RlLWZvcm0gLmFkZGl0aW9uYWwtc2VydmljZXMtZ3JpZCAuYWRkaXRpb25hbC1zZXJ2aWNlLWl0ZW0gLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5xdW90ZS1mb3JtIC5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdW90ZS1mb3JtIC5mb3JtLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5xdW90ZS1mb3JtIC5mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnF1b3RlLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWZsb2F0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucXVvdGUtZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZmxvYXQtbGFiZWwgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLnF1b3RlLWZvcm0gLnN1Ym1pdC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gLnF1b3RlLXN1bW1hcnktbW9iaWxlIHtcbiAgZmxleDogMTtcbn1cbi5xdW90ZS1mb3JtIC5zdWJtaXQtc2VjdGlvbiAucXVvdGUtc3VtbWFyeS1tb2JpbGUgaDMge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gLnF1b3RlLXN1bW1hcnktbW9iaWxlIC50b3RhbC1hbW91bnQge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gLnF1b3RlLXN1bW1hcnktbW9iaWxlIC5kaXNjbGFpbWVyIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5xdW90ZS1mb3JtIC5zdWJtaXQtc2VjdGlvbiAucXVvdGUtc3VtbWFyeS1tb2JpbGUgLnNhdmluZ3MtaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgzNCwgMTk3LCA5NCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMTk3LCA5NCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgY29sb3I6ICMxNmEzNGE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gLnF1b3RlLXN1bW1hcnktbW9iaWxlIC5zYXZpbmdzLWluZGljYXRvciBpIHtcbiAgY29sb3I6ICNmYmJmMjQ7XG59XG4ucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGUtZm9ybSAuc3VibWl0LXNlY3Rpb24gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zdW1tYXJ5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnN1bW1hcnktaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc3VtbWFyeS1oZWFkZXIgLnN1bW1hcnktc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnN1bW1hcnktaGVhZGVyIC5zdW1tYXJ5LXN0YXR1cyAuc3RhdHVzLWluZGljYXRvciB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnN1bW1hcnktaGVhZGVyIC5zdW1tYXJ5LXN0YXR1cyAuc3RhdHVzLWluZGljYXRvci5saXZlIHtcbiAgYmFja2dyb3VuZDogIzIyYzU1ZTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtc2VydmljZXMsXG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLWFkZGl0aW9uYWwge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLXNlcnZpY2VzIGg0LFxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zZWxlY3RlZC1hZGRpdGlvbmFsIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLXNlcnZpY2VzIC5zZXJ2aWNlLWxpc3QsXG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLXNlcnZpY2VzIC5hZGRpdGlvbmFsLWxpc3QsXG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLWFkZGl0aW9uYWwgLnNlcnZpY2UtbGlzdCxcbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtYWRkaXRpb25hbCAuYWRkaXRpb25hbC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zZWxlY3RlZC1zZXJ2aWNlcyAuc2VydmljZS1pdGVtLFxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zZWxlY3RlZC1hZGRpdGlvbmFsIC5zZXJ2aWNlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLXNlcnZpY2VzIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5mbyBoNSxcbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtYWRkaXRpb25hbCAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLWluZm8gaDUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLXNlcnZpY2VzIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5mbyAuc2VydmljZS1kZXRhaWxzLFxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zZWxlY3RlZC1hZGRpdGlvbmFsIC5zZXJ2aWNlLWl0ZW0gLnNlcnZpY2UtaW5mbyAuc2VydmljZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtc2VydmljZXMgLnNlcnZpY2UtaXRlbSAuc2VydmljZS1wcmljZSxcbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtYWRkaXRpb25hbCAuc2VydmljZS1pdGVtIC5zZXJ2aWNlLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtc2VydmljZXMgLmFkZGl0aW9uYWwtaXRlbSxcbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtYWRkaXRpb25hbCAuYWRkaXRpb25hbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAuc2VsZWN0ZWQtc2VydmljZXMgLmFkZGl0aW9uYWwtaXRlbSBzcGFuOmxhc3QtY2hpbGQsXG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnNlbGVjdGVkLWFkZGl0aW9uYWwgLmFkZGl0aW9uYWwtaXRlbSBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnByaWNlLWJyZWFrZG93biB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAucHJpY2UtYnJlYWtkb3duIC5icmVha2Rvd24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnByaWNlLWJyZWFrZG93biAuYnJlYWtkb3duLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnByaWNlLWJyZWFrZG93biAuYnJlYWtkb3duLWl0ZW0uZGlzY291bnQge1xuICBjb2xvcjogIzE2YTM0YTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAucHJpY2UtYnJlYWtkb3duIC5icmVha2Rvd24taXRlbS50b3RhbCB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5xdW90ZS1zdW1tYXJ5LXNpZGViYXIgLnN1bW1hcnktY2FyZCAucHJpY2UtYnJlYWtkb3duIC5icmVha2Rvd24taXRlbS50b3RhbCBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC50cnVzdC1pbmRpY2F0b3JzIHtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC50cnVzdC1pbmRpY2F0b3JzIC50cnVzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnRydXN0LWluZGljYXRvcnMgLnRydXN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQgLnRydXN0LWluZGljYXRvcnMgLnRydXN0LWl0ZW0gaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnF1b3RlLXN1bW1hcnktc2lkZWJhciAuc3VtbWFyeS1jYXJkIC5zdW1tYXJ5LWN0YSB7XG4gIG1hcmdpbjogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucXVvdGUtc3VtbWFyeS1zaWRlYmFyIC5zdW1tYXJ5LWNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG46Om5nLWRlZXAgLnAtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbjo6bmctZGVlcCAucC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuOjpuZy1kZWVwIC5wLWJ1dHRvbi5wLWJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbjo6bmctZGVlcCAucC1idXR0b24ucC1idXR0b24tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4zKTtcbn1cbjo6bmctZGVlcCAucC1jaGVja2JveCAucC1jaGVja2JveC1ib3gge1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbjo6bmctZGVlcCAucC1jaGVja2JveCAucC1jaGVja2JveC1ib3gucC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbjo6bmctZGVlcCAucC1pbnB1dG51bWJlcixcbjo6bmctZGVlcCAucC1pbnB1dHRleHQsXG46Om5nLWRlZXAgLnAtZHJvcGRvd24sXG46Om5nLWRlZXAgLnAtaW5wdXR0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbjo6bmctZGVlcCAucC1pbnB1dG51bWJlcjpmb2N1cyxcbjo6bmctZGVlcCAucC1pbnB1dHRleHQ6Zm9jdXMsXG46Om5nLWRlZXAgLnAtZHJvcGRvd246Zm9jdXMsXG46Om5nLWRlZXAgLnAtaW5wdXR0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4yKTtcbn1cbjo6bmctZGVlcCAucC1zbGlkZXIgLnAtc2xpZGVyLXJhbmdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG46Om5nLWRlZXAgLnAtc2xpZGVyIC5wLXNsaWRlci1oYW5kbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbjo6bmctZGVlcCAucC1jaGlwIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjo6bmctZGVlcCAucC1jaGlwIC5wLWNoaXAtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAucC10b2FzdCAucC10b2FzdC1tZXNzYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlLWZvcm0gc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuICAucXVvdGUtZm9ybSBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucXVvdGUtZm9ybSAuc2VydmljZXMtZ3JpZCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAucXVvdGUtaGVyby1zZWN0aW9uOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAyMFwiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZ3JpZFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHBhdGggZD1cIk0gMTAgMCBMIDAgMCAwIDEwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMFwiIGZpbGw9XCJ1cmwoJTIzZ3JpZClcIi8+PC9zdmc+JykgcmVwZWF0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
            opacity: 0,
            transform: 'translateY(20px)'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('600ms cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        }
      });
    }
  }
  return QuoteComponent;
})();

/***/ }),

/***/ 201:
/*!************************************************!*\
  !*** ./src/app/features/quote/quote.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteModule: () => (/* binding */ QuoteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.component */ 9126);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/selectbutton */ 9656);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ 6771);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/radiobutton */ 7046);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/slider */ 7763);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/accordion */ 5206);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/divider */ 6171);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressbar */ 1416);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




// PrimeNG Imports




















let QuoteModule = /*#__PURE__*/(() => {
  class QuoteModule {
    static {
      this.ɵfac = function QuoteModule_Factory(t) {
        return new (t || QuoteModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: QuoteModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
          path: '',
          component: _quote_component__WEBPACK_IMPORTED_MODULE_0__.QuoteComponent
        }]), primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__.SelectButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__.RadioButtonModule, primeng_slider__WEBPACK_IMPORTED_MODULE_12__.SliderModule, primeng_card__WEBPACK_IMPORTED_MODULE_13__.CardModule, primeng_chip__WEBPACK_IMPORTED_MODULE_14__.ChipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_17__.DividerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__.InputNumberModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule]
      });
    }
  }
  return QuoteModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuoteModule, {
    declarations: [_quote_component__WEBPACK_IMPORTED_MODULE_0__.QuoteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__.SelectButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__.RadioButtonModule, primeng_slider__WEBPACK_IMPORTED_MODULE_12__.SliderModule, primeng_card__WEBPACK_IMPORTED_MODULE_13__.CardModule, primeng_chip__WEBPACK_IMPORTED_MODULE_14__.ChipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, primeng_divider__WEBPACK_IMPORTED_MODULE_17__.DividerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__.InputNumberModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=201.js.map