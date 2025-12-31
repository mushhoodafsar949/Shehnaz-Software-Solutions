"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[828],{

/***/ 5828:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/consultation-dialog/consultation-dialog.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultationDialogComponent: () => (/* binding */ ConsultationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/steps */ 6997);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);






















function ConsultationDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What type of project are you looking to build?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.projectTypes)("showClear", true);
  }
}
function ConsultationDialogComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tell us about your project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12)(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 5)("autoResize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.budgetRanges)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.timelines)("showClear", true);
  }
}
function ConsultationDialogComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16)(4, "div", 12)(5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16)(15, "div", 12)(16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Name (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12)(21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function ConsultationDialogComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultationDialogComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.previousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ConsultationDialogComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultationDialogComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ConsultationDialogComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 25);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r0.isSubmitting)("disabled", !ctx_r0.consultationForm.valid || ctx_r0.isSubmitting);
  }
}
let ConsultationDialogComponent = /*#__PURE__*/(() => {
  class ConsultationDialogComponent {
    constructor(fb, ref, messageService) {
      this.fb = fb;
      this.ref = ref;
      this.messageService = messageService;
      this.currentStep = 0;
      this.isSubmitting = false;
      this.steps = [{
        label: 'Project Type'
      }, {
        label: 'Requirements'
      }, {
        label: 'Contact Info'
      }];
      this.projectTypes = [{
        label: 'Web Application',
        value: 'web'
      }, {
        label: 'Mobile App',
        value: 'mobile'
      }, {
        label: 'Cloud Solution',
        value: 'cloud'
      }, {
        label: 'AI/ML Project',
        value: 'ai'
      }, {
        label: 'DevOps Setup',
        value: 'devops'
      }, {
        label: 'UI/UX Design',
        value: 'design'
      }];
      this.budgetRanges = [{
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
      this.timelines = [{
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
      this.consultationForm = this.fb.group({
        projectType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        projectDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        timeline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
        company: [''],
        phone: ['']
      });
    }
    ngOnInit() {}
    nextStep() {
      if (this.isStepValid()) {
        this.currentStep++;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Required Fields',
          detail: 'Please fill in all required fields.'
        });
      }
    }
    previousStep() {
      this.currentStep--;
    }
    isStepValid() {
      switch (this.currentStep) {
        case 0:
          return !!this.consultationForm.get('projectType')?.valid;
        case 1:
          return !!this.consultationForm.get('projectDescription')?.valid && !!this.consultationForm.get('budget')?.valid && !!this.consultationForm.get('timeline')?.valid;
        case 2:
          return !!this.consultationForm.get('name')?.valid && !!this.consultationForm.get('email')?.valid;
        default:
          return true;
      }
    }
    onSubmit() {
      if (this.consultationForm.valid) {
        this.isSubmitting = true;
        // Simulate API call
        setTimeout(() => {
          this.ref.close({
            success: true,
            data: this.consultationForm.value
          });
        }, 1500);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Form Invalid',
          detail: 'Please fill in all required fields correctly.'
        });
      }
    }
    onCancel() {
      this.ref.close();
    }
    static {
      this.ɵfac = function ConsultationDialogComponent_Factory(t) {
        return new (t || ConsultationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsultationDialogComponent,
        selectors: [["app-consultation-dialog"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 13,
        vars: 10,
        consts: [[1, "consultation-dialog"], [3, "model", "activeIndex", "readonly"], [1, "consultation-form", 3, "ngSubmit", "formGroup"], ["class", "step-content", 4, "ngIf"], [1, "dialog-footer"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cancel", 1, "p-button-outlined", 3, "click"], [1, "step-buttons"], ["pButton", "", "pRipple", "", "type", "button", "label", "Previous", "icon", "pi pi-arrow-left", "class", "p-button-secondary", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", "icon", "pi pi-check", 3, "loading", "disabled", 4, "ngIf"], ["position", "top-right"], [1, "step-content"], [1, "form-field"], ["formControlName", "projectType", "placeholder", "Select Project Type", "styleClass", "w-full", 3, "options", "showClear"], [1, "p-float-label"], ["pInputTextarea", "", "formControlName", "projectDescription", 3, "rows", "autoResize"], [1, "form-row"], ["formControlName", "budget", "placeholder", "Budget Range", "styleClass", "w-full", 3, "options", "showClear"], ["formControlName", "timeline", "placeholder", "Project Timeline", "styleClass", "w-full", 3, "options", "showClear"], ["pInputText", "", "formControlName", "name", "type", "text"], ["pInputText", "", "formControlName", "email", "type", "email"], ["pInputText", "", "formControlName", "company", "type", "text"], ["pInputText", "", "formControlName", "phone", "type", "tel"], ["pButton", "", "pRipple", "", "type", "button", "label", "Previous", "icon", "pi pi-arrow-left", 1, "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Submit", "icon", "pi pi-check", 3, "loading", "disabled"]],
        template: function ConsultationDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-steps", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ConsultationDialogComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConsultationDialogComponent_div_3_Template, 5, 2, "div", 3)(4, ConsultationDialogComponent_div_4_Template, 13, 6, "div", 3)(5, ConsultationDialogComponent_div_5_Template, 25, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultationDialogComponent_Template_button_click_7_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConsultationDialogComponent_button_9_Template, 1, 0, "button", 7)(10, ConsultationDialogComponent_button_10_Template, 1, 0, "button", 8)(11, ConsultationDialogComponent_button_11_Template, 1, 2, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-toast", 10);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.steps)("activeIndex", ctx.currentStep)("readonly", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.consultationForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep < 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_steps__WEBPACK_IMPORTED_MODULE_7__.StepsModule, primeng_steps__WEBPACK_IMPORTED_MODULE_7__.Steps, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextareaModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast],
        styles: [".consultation-dialog[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.consultation-dialog[_ngcontent-%COMP%]     .p-steps {\n  margin-bottom: 2rem;\n}\n.consultation-dialog[_ngcontent-%COMP%]     .p-steps .p-steps-item .p-steps-number {\n  background: var(--surface-ground);\n  color: var(--text-color);\n  border: 2px solid var(--surface-border);\n  min-width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1.2rem;\n  z-index: 1;\n  border-radius: 50%;\n}\n.consultation-dialog[_ngcontent-%COMP%]     .p-steps .p-steps-item.p-highlight .p-steps-number {\n  background: var(--primary-color);\n  color: var(--primary-color-text);\n  border-color: var(--primary-color);\n}\n.consultation-dialog[_ngcontent-%COMP%]     .p-steps .p-steps-item:before {\n  border-top: 2px solid var(--surface-border);\n}\n.consultation-dialog[_ngcontent-%COMP%]     .p-steps .p-steps-item.p-highlight:before {\n  border-top-color: var(--primary-color);\n}\n\n.consultation-form[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%] {\n  min-height: 300px;\n  margin-bottom: 2rem;\n}\n.consultation-form[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-color);\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.consultation-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label {\n  display: block;\n}\n.consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext, .consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-dropdown, .consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea {\n  width: 100%;\n}\n.consultation-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-dropdown-label {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid var(--surface-border);\n}\n.dialog-footer[_ngcontent-%COMP%]   .step-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n  .p-toast .p-toast-message {\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbnN1bHRhdGlvbi1kaWFsb2cvY29uc3VsdGF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BlcnNvbmFsJTIwV29ya3NwYWNlL1NoZWhuYXotU29mdHdhcmUtU29sdXRpb25zL3NyYy9hcHAvc2hhcmVkL2NvbnN1bHRhdGlvbi1kaWFsb2cvY29uc3VsdGF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREVJO0VBQ0UsbUJBQUE7QUNBTjtBREdRO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRFY7QURLVTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtBQ0haO0FET1E7RUFDRSwyQ0FBQTtBQ0xWO0FEUVE7RUFDRSxzQ0FBQTtBQ05WOztBRGNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEYUk7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hOO0FEZUU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNiSjtBRGdCRTtFQUNFLHFCQUFBO0FDZEo7QURpQk07RUFDRSxjQUFBO0FDZlI7QURrQk07OztFQUdFLFdBQUE7QUNoQlI7QURtQk07RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDakJSOztBRHVCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ3BCRjtBRHNCRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDcEJKO0FEdUJFO0VBQ0UsZ0JBQUE7QUNyQko7O0FEMkJFO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBQ3hCSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zdWx0YXRpb24tZGlhbG9nIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLnAtc3RlcHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgLnAtc3RlcHMtaXRlbSB7XHJcbiAgICAgICAgLnAtc3RlcHMtbnVtYmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgICAgICAgIG1pbi13aWR0aDogMnJlbTtcclxuICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICAucC1zdGVwcy1udW1iZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wLWhpZ2hsaWdodDpiZWZvcmUge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29uc3VsdGF0aW9uLWZvcm0ge1xyXG4gIC5zdGVwLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgIC5wLWZsb2F0LWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtaW5wdXR0ZXh0LFxyXG4gICAgICAucC1kcm9wZG93bixcclxuICAgICAgLnAtaW5wdXR0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaWFsb2ctZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcblxyXG4gIC5zdGVwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVG9hc3QgQ3VzdG9taXphdGlvblxyXG46Om5nLWRlZXAgLnAtdG9hc3Qge1xyXG4gIC5wLXRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICB9XHJcbn0iLCIuY29uc3VsdGF0aW9uLWRpYWxvZyB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY29uc3VsdGF0aW9uLWRpYWxvZyA6Om5nLWRlZXAgLnAtc3RlcHMge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnN1bHRhdGlvbi1kaWFsb2cgOjpuZy1kZWVwIC5wLXN0ZXBzIC5wLXN0ZXBzLWl0ZW0gLnAtc3RlcHMtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgbWluLXdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbnN1bHRhdGlvbi1kaWFsb2cgOjpuZy1kZWVwIC5wLXN0ZXBzIC5wLXN0ZXBzLWl0ZW0ucC1oaWdobGlnaHQgLnAtc3RlcHMtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmNvbnN1bHRhdGlvbi1kaWFsb2cgOjpuZy1kZWVwIC5wLXN0ZXBzIC5wLXN0ZXBzLWl0ZW06YmVmb3JlIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi5jb25zdWx0YXRpb24tZGlhbG9nIDo6bmctZGVlcCAucC1zdGVwcyAucC1zdGVwcy1pdGVtLnAtaGlnaGxpZ2h0OmJlZm9yZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uY29uc3VsdGF0aW9uLWZvcm0gLnN0ZXAtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnN1bHRhdGlvbi1mb3JtIC5zdGVwLWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uc3VsdGF0aW9uLWZvcm0gLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY29uc3VsdGF0aW9uLWZvcm0gLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY29uc3VsdGF0aW9uLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWZsb2F0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29uc3VsdGF0aW9uLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dCxcbi5jb25zdWx0YXRpb24tZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZHJvcGRvd24sXG4uY29uc3VsdGF0aW9uLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb25zdWx0YXRpb24tZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZHJvcGRvd24tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZGlhbG9nLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG4uZGlhbG9nLWZvb3RlciAuc3RlcC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuLmRpYWxvZy1mb290ZXIgYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuOjpuZy1kZWVwIC5wLXRvYXN0IC5wLXRvYXN0LW1lc3NhZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ConsultationDialogComponent;
})();

/***/ }),

/***/ 6997:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-steps.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Steps: () => (/* binding */ Steps),
/* harmony export */   StepsModule: () => (/* binding */ StepsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 405);










/**
 * Steps components is an indicator for the steps in a wizard workflow.
 * @group Components
 */
const _c0 = ["list"];
const _c1 = a0 => ({
  "p-steps p-component": true,
  "p-readonly": a0
});
const _c2 = (a0, a1) => ({
  "p-highlight p-steps-current": a0,
  "p-disabled": a1
});
const _c3 = () => ({
  exact: false
});
function Steps_li_3_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.label, "");
  }
}
function Steps_li_3_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r3.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Steps_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Steps_li_3_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_a_2_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlLabel_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("aria-current", i_r4 === ctx_r4.activeIndex ? "step" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_li_3_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function Steps_li_3_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r3.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Steps_li_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Steps_li_3_ng_template_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_ng_template_3_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_ng_template_3_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("aria-current", i_r4 === ctx_r4.activeIndex ? "step" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r4 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Steps_li_3_a_2_Template, 6, 18, "a", 8)(3, Steps_li_3_ng_template_3_Template, 6, 8, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const elseBlock_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r3.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, ctx_r4.isActive(item_r3, i_r4), item_r3.disabled || ctx_r4.readonly && !ctx_r4.isActive(item_r3, i_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", ctx_r4.isActive(item_r3, i_r4) ? "step" : undefined)("id", item_r3.id)("data-pc-section", "menuitem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
let Steps = /*#__PURE__*/(() => {
  class Steps {
    router;
    route;
    cd;
    /**
     * Index of the active item.
     * @group Props
     */
    activeIndex = 0;
    /**
     * An array of menu items.
     * @group Props
     */
    model;
    /**
     * Whether the items are clickable or not.
     * @group Props
     */
    readonly = true;
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @group Props
     */
    exact = true;
    /**
     * Callback to invoke when the new step is selected.
     * @param {number} number - current index.
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    constructor(router, route, cd) {
      this.router = router;
      this.route = route;
      this.cd = cd;
    }
    subscription;
    ngOnInit() {
      this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
    }
    onItemClick(event, item, i) {
      if (this.readonly || item.disabled) {
        event.preventDefault();
        return;
      }
      this.activeIndexChange.emit(i);
      if (!item.url && !item.routerLink) {
        event.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item,
          index: i
        });
      }
    }
    onItemKeydown(event, item, i) {
      switch (event.code) {
        case 'ArrowRight':
          {
            this.navigateToNextItem(event.target);
            event.preventDefault();
            break;
          }
        case 'ArrowLeft':
          {
            this.navigateToPrevItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Home':
          {
            this.navigateToFirstItem(event.target);
            event.preventDefault();
            break;
          }
        case 'End':
          {
            this.navigateToLastItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Tab':
          if (i !== this.activeIndex) {
            const siblings = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
            siblings[i].children[0].tabIndex = '-1';
            siblings[this.activeIndex].children[0].tabIndex = '0';
          }
          break;
        case 'Enter':
        case 'Space':
          {
            this.onItemClick(event, item, i);
            event.preventDefault();
            break;
          }
        default:
          break;
      }
    }
    navigateToNextItem(target) {
      const nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    }
    navigateToPrevItem(target) {
      const prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    }
    navigateToFirstItem(target) {
      const firstItem = this.findFirstItem();
      firstItem && this.setFocusToMenuitem(target, firstItem);
    }
    navigateToLastItem(target) {
      const lastItem = this.findLastItem();
      lastItem && this.setFocusToMenuitem(target, lastItem);
    }
    findNextItem(item) {
      const nextItem = item.parentElement.nextElementSibling;
      return nextItem ? nextItem.children[0] : null;
    }
    findPrevItem(item) {
      const prevItem = item.parentElement.previousElementSibling;
      return prevItem ? prevItem.children[0] : null;
    }
    findFirstItem() {
      const firstSibling = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
      return firstSibling ? firstSibling.children[0] : null;
    }
    findLastItem() {
      const siblings = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    }
    setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = '-1';
      focusableItem.tabIndex = '0';
      focusableItem.focus();
    }
    isClickableRouterLink(item) {
      return item.routerLink && !this.readonly && !item.disabled;
    }
    isActive(item, index) {
      if (item.routerLink) {
        let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
        return this.router.isActive(this.router.createUrlTree(routerLink, {
          relativeTo: this.route
        }).toString(), false);
      }
      return index === this.activeIndex;
    }
    getItemTabIndex(item, index) {
      if (item.disabled) {
        return '-1';
      }
      if (!item.disabled && this.activeIndex === index) {
        return item.tabindex || '0';
      }
      return item.tabindex ?? '-1';
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function Steps_Factory(t) {
      return new (t || Steps)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Steps,
      selectors: [["p-steps"]],
      viewQuery: function Steps_Query(rf, ctx) {
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
        activeIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "activeIndex", "activeIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        model: "model",
        readonly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        style: "style",
        styleClass: "styleClass",
        exact: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "exact", "exact", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        activeIndexChange: "activeIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 4,
      vars: 9,
      consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "ngStyle"], ["class", "p-steps-item", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngFor", "ngForOf"], ["pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["role", "link", "class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-steps-number"], ["class", "p-steps-title", 4, "ngIf", "ngIfElse"], [1, "p-steps-title"], [1, "p-steps-title", 3, "innerHTML"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "target"]],
      template: function Steps_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 5)(1, "ul", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_Template, 5, 13, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.readonly))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip],
      styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Steps;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let StepsModule = /*#__PURE__*/(() => {
  class StepsModule {
    static ɵfac = function StepsModule_Factory(t) {
      return new (t || StepsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StepsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule]
    });
  }
  return StepsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=828.js.map