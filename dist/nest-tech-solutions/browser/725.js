"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[725],{

/***/ 3956:
/*!**************************************************************!*\
  !*** ./src/app/features/contact/booking-dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDialogComponent: () => (/* binding */ BookingDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/selectbutton */ 9656);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);

















let BookingDialogComponent = /*#__PURE__*/(() => {
  class BookingDialogComponent {
    constructor(fb, ref, messageService) {
      this.fb = fb;
      this.ref = ref;
      this.messageService = messageService;
      this.isSubmitting = false;
      this.services = [{
        name: 'Web Development',
        code: 'web'
      }, {
        name: 'Mobile App Development',
        code: 'mobile'
      }, {
        name: 'Cloud Solutions',
        code: 'cloud'
      }, {
        name: 'AI & Machine Learning',
        code: 'ai'
      }, {
        name: 'DevOps & Infrastructure',
        code: 'devops'
      }, {
        name: 'UI/UX Design',
        code: 'design'
      }];
      this.timeSlots = [{
        name: 'Morning (9AM-12PM)',
        value: 'morning'
      }, {
        name: 'Afternoon (1PM-5PM)',
        value: 'afternoon'
      }, {
        name: 'Evening (6PM-9PM)',
        value: 'evening'
      }];
      this.bookingForm = this.fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
        company: [''],
        phone: [''],
        service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        preferredTime: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        message: ['']
      });
    }
    onSubmit() {
      if (this.bookingForm.valid) {
        this.isSubmitting = true;
        // Simulate API call
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Meeting Scheduled',
            detail: 'We will contact you shortly to confirm your appointment.'
          });
          this.ref.close({
            success: true,
            data: this.bookingForm.value
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
      this.ɵfac = function BookingDialogComponent_Factory(t) {
        return new (t || BookingDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BookingDialogComponent,
        selectors: [["app-booking-dialog"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 88,
        vars: 9,
        consts: [[1, "booking-dialog-header"], [1, "dialog-title"], [1, "pi", "pi-calendar-plus", "title-icon"], [1, "dialog-subtitle"], [1, "booking-form", 3, "ngSubmit", "formGroup"], [1, "meeting-info"], [1, "info-grid"], [1, "info-item"], [1, "pi", "pi-clock", "info-icon"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "pi", "pi-video", "info-icon"], [1, "pi", "pi-calendar", "info-icon"], [1, "form-grid"], [1, "form-field"], [1, "p-float-label"], ["pInputText", "", "id", "name", "formControlName", "name", 1, "w-full"], ["for", "name"], ["pInputText", "", "id", "email", "formControlName", "email", "type", "email", 1, "w-full"], ["for", "email"], ["pInputText", "", "id", "company", "formControlName", "company", 1, "w-full"], ["for", "company"], ["pInputText", "", "id", "phone", "formControlName", "phone", "type", "tel", 1, "w-full"], ["for", "phone"], ["for", "service", 1, "field-label"], ["id", "service", "formControlName", "service", "optionLabel", "name", "optionValue", "code", 1, "w-full", "service-selector", 3, "options", "multiple"], ["for", "timeSlot", 1, "field-label"], ["id", "timeSlot", "formControlName", "preferredTime", "optionLabel", "name", "optionValue", "value", 1, "w-full", "time-selector", 3, "options", "multiple"], ["pInputTextarea", "", "id", "message", "formControlName", "message", "placeholder", "Tell us about your project, goals, or any specific topics you'd like to discuss...", 1, "w-full", 3, "rows", "autoResize"], ["for", "message"], [1, "meeting-benefits"], [1, "benefits-list"], [1, "pi", "pi-check-circle", "benefit-icon"], [1, "form-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-outlined", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Schedule Meeting", "icon", "pi pi-calendar-plus", 1, "p-button-primary", 3, "loading", "disabled"]],
        template: function BookingDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Schedule a Meeting ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Book a consultation with our software development experts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BookingDialogComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Duration");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "30 minutes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Platform");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Google Meet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9)(26, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Available");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Mon-Fri, 9AM-6PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Full Name *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15)(37, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Email Address *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15)(42, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Company Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15)(47, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15)(52, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Service Interest *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "p-selectButton", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 15)(56, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Preferred Time Slot *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "p-selectButton", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 15)(60, "span", 16)(61, "textarea", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Meeting Agenda / Project Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31)(66, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "What to expect in this meeting:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 32)(69, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Free consultation and project assessment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Technology recommendations tailored to your needs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Timeline and budget estimation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Next steps and project roadmap discussion");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 34)(86, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDialogComponent_Template_button_click_86_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.bookingForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.services)("multiple", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.timeSlots)("multiple", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 4)("autoResize", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.isSubmitting)("disabled", !ctx.bookingForm.valid || ctx.isSubmitting);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__.InputTextareaModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__.InputTextarea, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__.SelectButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__.SelectButton, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple],
        styles: [".booking-dialog-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid var(--surface-border);\n}\n.booking-dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n}\n.booking-dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary-color);\n}\n.booking-dialog-header[_ngcontent-%COMP%]   .dialog-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 400;\n}\n\n.booking-form[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%] {\n  background: var(--surface-section);\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  border: 1px solid var(--surface-border);\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: var(--surface-ground);\n  border-radius: 0.5rem;\n  border: 1px solid var(--surface-border);\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  flex-shrink: 0;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-color);\n  font-weight: 600;\n}\n.booking-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 0.75rem;\n  font-size: 0.95rem;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label {\n  display: block;\n  width: 100%;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label label {\n  font-weight: 500;\n  color: var(--text-color-secondary);\n  transition: all 0.3s ease;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label input:focus ~ label, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label input.p-filled ~ label, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label textarea:focus ~ label, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-float-label textarea.p-filled ~ label {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea {\n  width: 100%;\n  border: 2px solid var(--surface-border);\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: var(--surface-ground);\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext:focus, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.2);\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext:hover, .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea:hover {\n  border-color: var(--primary-color-text);\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button {\n  flex: 1;\n  min-width: 120px;\n  border-radius: 0.5rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: 2px solid var(--surface-border);\n  background: var(--surface-ground);\n  color: var(--text-color);\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button:hover {\n  background: var(--surface-hover);\n  border-color: var(--primary-color);\n  transform: translateY(-1px);\n}\n.booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button.p-highlight {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n  color: var(--primary-color-text);\n  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton.service-selector .p-button {\n    min-width: 100px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton.time-selector .p-button {\n    min-width: 90px;\n    font-size: 0.85rem;\n  }\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-color-rgb), 0.05);\n  border: 1px solid rgba(var(--primary-color-rgb), 0.2);\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0 0 1rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.4;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.1rem;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--surface-border);\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button {\n  padding: 0.75rem 2rem;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  transition: all 0.3s ease;\n  min-width: 140px;\n}\n@media (max-width: 768px) {\n  .booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button {\n    width: 100%;\n    min-width: unset;\n  }\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button.p-button-outlined {\n  border: 2px solid var(--surface-border);\n  background: transparent;\n  color: var(--text-color);\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button.p-button-outlined:hover {\n  background: var(--surface-hover);\n  border-color: var(--text-color);\n  transform: translateY(-1px);\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button.p-button-primary {\n  background: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  color: var(--primary-color-text);\n  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button.p-button-primary:hover:not(:disabled) {\n  background: var(--primary-color-text);\n  border-color: var(--primary-color-text);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(var(--primary-color-rgb), 0.4);\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button.p-button-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.booking-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]     button i {\n  margin-right: 0.5rem;\n}\n\n.dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n}\n.dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  background: var(--surface-section);\n}\n.dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext, .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtext, .dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea, .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-inputtextarea {\n  background: var(--surface-card);\n  color: var(--text-color);\n}\n.dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button, .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button {\n  background: var(--surface-card);\n  color: var(--text-color);\n}\n.dark-theme[_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-color-rgb), 0.08);\n}\n\n.booking-form[_ngcontent-%COMP%]     .p-button[loading] {\n  pointer-events: none;\n}\n.booking-form[_ngcontent-%COMP%]     .p-button[loading] .p-button-label {\n  opacity: 0.6;\n}\n\n@media (max-width: 480px) {\n  .booking-dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .booking-dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .booking-form[_ngcontent-%COMP%]   .meeting-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .booking-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]     .p-selectbutton .p-button {\n    font-size: 0.8rem;\n    padding: 0.5rem 0.75rem;\n    min-width: 70px;\n  }\n  .booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .booking-form[_ngcontent-%COMP%]   .meeting-benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9ib29raW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BlcnNvbmFsJTIwV29ya3NwYWNlL1NoZWhuYXotU29mdHdhcmUtU29sdXRpb25zL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9ib29raW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ0NOO0FER0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLQTtFQUNFLGVBQUE7QUNGRjtBRElFO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDRko7QURJSTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUNGTjtBRElNO0VBTEY7SUFNSSwwQkFBQTtJQUNBLFlBQUE7RUNETjtBQUNGO0FESUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7QUNGTjtBRElNO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNGUjtBREtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDSFI7QURLUTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0hWO0FETVE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNKVjtBRFVFO0VBQ0UsYUFBQTtF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QUE7QUM5Q0o7O0FEbURBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQ2hERjtFRGtERTtJQUNFLGtCQUFBO0VDaERKO0VEcURFO0lBQ0UsMEJBQUE7RUNuREo7RURzREU7SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ3BESjtFRHVERTtJQUNFLGFBQUE7RUNyREo7RUR1REk7SUFDRSxpQkFBQTtFQ3JETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctZGlhbG9nLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG5cclxuICAuZGlhbG9nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcblxyXG4gICAgLnRpdGxlLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaWFsb2ctc3VidGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5tZWV0aW5nLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG5cclxuICAgIC5pbmZvLWdyaWQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC43NXJlbTtcclxuICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuXHJcbiAgICAgIC5pbmZvLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZm8tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAuaW5mby1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvLXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIC5maWVsZC1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAucC1mbG9hdC1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0OmZvY3VzIH4gbGFiZWwsXHJcbiAgICAgICAgaW5wdXQucC1maWxsZWQgfiBsYWJlbCxcclxuICAgICAgICB0ZXh0YXJlYTpmb2N1cyB+IGxhYmVsLFxyXG4gICAgICAgIHRleHRhcmVhLnAtZmlsbGVkIH4gbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLWlucHV0dGV4dCxcclxuICAgICAgLnAtaW5wdXR0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucC1zZWxlY3RidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5wLWJ1dHRvbiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucC1oaWdobGlnaHQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNlcnZpY2Utc2VsZWN0b3IgLnAtYnV0dG9uIHtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudGltZS1zZWxlY3RvciAucC1idXR0b24ge1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lZXRpbmctYmVuZWZpdHMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMDUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMC43NXJlbTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblxyXG4gICAgICAgIC5iZW5lZml0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMC43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnAtYnV0dG9uLW91dGxpbmVkIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucC1idXR0b24tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4zKTtcclxuXHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC40KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXJrIHRoZW1lIHNwZWNpZmljIGFkanVzdG1lbnRzXHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAuYm9va2luZy1mb3JtIHtcclxuICAgIC5tZWV0aW5nLWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG5cclxuICAgICAgLmluZm8taXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWZpZWxkIDo6bmctZGVlcCB7XHJcbiAgICAgIC5wLWlucHV0dGV4dCxcclxuICAgICAgLnAtaW5wdXR0ZXh0YXJlYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lZXRpbmctYmVuZWZpdHMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wOCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMb2FkaW5nIHN0YXRlXHJcbi5ib29raW5nLWZvcm0gOjpuZy1kZWVwIC5wLWJ1dHRvbltsb2FkaW5nXSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgXHJcbiAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgaW1wcm92ZW1lbnRzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ib29raW5nLWRpYWxvZy1oZWFkZXIgLmRpYWxvZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICAudGl0bGUtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib29raW5nLWZvcm0ge1xyXG4gICAgLm1lZXRpbmctaW5mbyAuaW5mby1ncmlkIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVldGluZy1iZW5lZml0cyB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAuYmVuZWZpdHMtbGlzdCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuYm9va2luZy1kaWFsb2ctaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLmJvb2tpbmctZGlhbG9nLWhlYWRlciAuZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLmJvb2tpbmctZGlhbG9nLWhlYWRlciAuZGlhbG9nLXRpdGxlIC50aXRsZS1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uYm9va2luZy1kaWFsb2ctaGVhZGVyIC5kaWFsb2ctc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJvb2tpbmctZm9ybSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctaW5mbyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ib29raW5nLWZvcm0gLm1lZXRpbmctaW5mbyAuaW5mby1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctaW5mbyAuaW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWl0ZW0gLmluZm8taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWl0ZW0gLmluZm8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9va2luZy1mb3JtIC5tZWV0aW5nLWluZm8gLmluZm8taXRlbSAuaW5mby1jb250ZW50IC5pbmZvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWl0ZW0gLmluZm8tY29udGVudCAuaW5mby12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJvb2tpbmctZm9ybSAuZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uYm9va2luZy1mb3JtIC5mb3JtLWZpZWxkIC5maWVsZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWZsb2F0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZmxvYXQtbGFiZWwgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZmxvYXQtbGFiZWwgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWZsb2F0LWxhYmVsIGlucHV0LnAtZmlsbGVkIH4gbGFiZWwsXG4uYm9va2luZy1mb3JtIC5mb3JtLWZpZWxkIDo6bmctZGVlcCAucC1mbG9hdC1sYWJlbCB0ZXh0YXJlYTpmb2N1cyB+IGxhYmVsLFxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtZmxvYXQtbGFiZWwgdGV4dGFyZWEucC1maWxsZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dCxcbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0OmZvY3VzLFxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4yKTtcbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dDpob3Zlcixcbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLWlucHV0dGV4dGFyZWE6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG59XG4uYm9va2luZy1mb3JtIC5mb3JtLWZpZWxkIDo6bmctZGVlcCAucC1zZWxlY3RidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtc2VsZWN0YnV0dG9uIC5wLWJ1dHRvbi5wLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4zKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYm9va2luZy1mb3JtIC5mb3JtLWZpZWxkIDo6bmctZGVlcCAucC1zZWxlY3RidXR0b24uc2VydmljZS1zZWxlY3RvciAucC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYm9va2luZy1mb3JtIC5mb3JtLWZpZWxkIDo6bmctZGVlcCAucC1zZWxlY3RidXR0b24udGltZS1zZWxlY3RvciAucC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctYmVuZWZpdHMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYm9va2luZy1mb3JtIC5tZWV0aW5nLWJlbmVmaXRzIGg0IHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctYmVuZWZpdHMgLmJlbmVmaXRzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC43NXJlbTtcbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctYmVuZWZpdHMgLmJlbmVmaXRzLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5ib29raW5nLWZvcm0gLm1lZXRpbmctYmVuZWZpdHMgLmJlbmVmaXRzLWxpc3QgbGkgLmJlbmVmaXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uYm9va2luZy1mb3JtIC5tZWV0aW5nLWJlbmVmaXRzIC5iZW5lZml0cy1saXN0IGxpIHNwYW4ge1xuICBmbGV4OiAxO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ib29raW5nLWZvcm0gLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tYWN0aW9ucyA6Om5nLWRlZXAgYnV0dG9uIHtcbiAgcGFkZGluZzogMC43NXJlbSAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJvb2tpbmctZm9ybSAuZm9ybS1hY3Rpb25zIDo6bmctZGVlcCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbi5ib29raW5nLWZvcm0gLmZvcm0tYWN0aW9ucyA6Om5nLWRlZXAgYnV0dG9uLnAtYnV0dG9uLW91dGxpbmVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1hY3Rpb25zIDo6bmctZGVlcCBidXR0b24ucC1idXR0b24tb3V0bGluZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1hY3Rpb25zIDo6bmctZGVlcCBidXR0b24ucC1idXR0b24tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMyk7XG59XG4uYm9va2luZy1mb3JtIC5mb3JtLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbi5wLWJ1dHRvbi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuNCk7XG59XG4uYm9va2luZy1mb3JtIC5mb3JtLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbi5wLWJ1dHRvbi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJvb2tpbmctZm9ybSAuZm9ybS1hY3Rpb25zIDo6bmctZGVlcCBidXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuYm9va2luZy1mb3JtIC5tZWV0aW5nLWluZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0LFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmJvb2tpbmctZm9ybSAuZm9ybS1maWVsZCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuYm9va2luZy1mb3JtIC5tZWV0aW5nLWJlbmVmaXRzIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMDgpO1xufVxuXG4uYm9va2luZy1mb3JtIDo6bmctZGVlcCAucC1idXR0b25bbG9hZGluZ10ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5ib29raW5nLWZvcm0gOjpuZy1kZWVwIC5wLWJ1dHRvbltsb2FkaW5nXSAucC1idXR0b24tbGFiZWwge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYm9va2luZy1kaWFsb2ctaGVhZGVyIC5kaWFsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgLmJvb2tpbmctZGlhbG9nLWhlYWRlciAuZGlhbG9nLXRpdGxlIC50aXRsZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbiAgLmJvb2tpbmctZm9ybSAubWVldGluZy1pbmZvIC5pbmZvLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5ib29raW5nLWZvcm0gLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgfVxuICAuYm9va2luZy1mb3JtIC5tZWV0aW5nLWJlbmVmaXRzIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5ib29raW5nLWZvcm0gLm1lZXRpbmctYmVuZWZpdHMgLmJlbmVmaXRzLWxpc3QgbGkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return BookingDialogComponent;
})();

/***/ }),

/***/ 674:
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _booking_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-dialog.component */ 3956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 1225);










function ContactComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const method_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](method_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](method_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", method_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", method_r1.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](method_r1.description);
  }
}
function ContactComponent_a_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 51)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const social_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", social_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](social_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](social_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](social_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](social_r2.cta);
  }
}
let ContactComponent = /*#__PURE__*/(() => {
  class ContactComponent {
    constructor(dialogService, messageService) {
      this.dialogService = dialogService;
      this.messageService = messageService;
      this.contactMethods = [{
        icon: 'pi pi-envelope',
        title: 'Email Us',
        value: 'contact@nesttechsolutions.com',
        link: 'mailto:contact@nesttechsolutions.com',
        description: 'Send us an email for detailed inquiries and project discussions.'
      }, {
        icon: 'pi pi-phone',
        title: 'Call Us',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
        description: 'Speak directly with our team for immediate assistance.'
      }, {
        icon: 'pi pi-comments',
        title: 'Live Chat',
        value: 'Start Chat',
        link: '#',
        description: 'Get instant answers to your questions via live chat support.'
      }, {
        icon: 'pi pi-calendar-plus',
        title: 'Schedule Meeting',
        value: 'Book Now',
        link: '#',
        description: 'Schedule a consultation with our experts at your convenience.'
      }];
      this.socialLinks = [{
        icon: 'pi pi-linkedin',
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/nesttechsolutions',
        description: 'Connect with us professionally and see our latest updates.',
        cta: 'Follow Us'
      }, {
        icon: 'pi pi-github',
        name: 'GitHub',
        url: 'https://github.com/nesttechsolutions',
        description: 'Explore our open-source projects and contributions.',
        cta: 'View Repositories'
      }, {
        icon: 'pi pi-twitter',
        name: 'Twitter',
        url: 'https://twitter.com/nesttechsolutions',
        description: 'Get the latest tech insights and company news.',
        cta: 'Follow Updates'
      }, {
        icon: 'pi pi-youtube',
        name: 'YouTube',
        url: 'https://youtube.com/@nesttechsolutions',
        description: 'Watch our tutorials, case studies, and tech talks.',
        cta: 'Subscribe Now'
      }];
    }
    openBookingDialog() {
      const ref = this.dialogService.open(_booking_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BookingDialogComponent, {
        header: '',
        width: '90%',
        maximizable: true,
        style: {
          maxWidth: '600px'
        },
        contentStyle: {
          overflow: 'auto',
          padding: '1.5rem'
        },
        baseZIndex: 10000,
        dismissableMask: true,
        showHeader: false
      });
      ref.onClose.subscribe(result => {
        if (result?.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Meeting Scheduled',
            detail: 'We will contact you shortly to confirm your appointment.'
          });
        }
      });
    }
    static {
      this.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService])],
        decls: 113,
        vars: 2,
        consts: [[1, "hero-section"], [1, "hero-container"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Schedule a Meeting", "icon", "pi pi-calendar-plus", 1, "p-button-primary", "p-button-lg", "hero-btn", 3, "click"], ["href", "mailto:contact@nesttechsolutions.com", 1, "hero-email-link"], [1, "pi", "pi-envelope"], [1, "hero-visual"], [1, "hero-card"], [1, "hero-card-header"], ["src", "assets/logo.svg", "alt", "Nest Tech AI Solutions", 1, "hero-logo"], [1, "hero-card-info"], [1, "hero-card-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "contact-methods-section"], [1, "contact-container"], [1, "section-header"], [1, "contact-methods-grid"], ["class", "contact-method-card", 4, "ngFor", "ngForOf"], [1, "office-section"], [1, "office-container"], [1, "office-content"], [1, "office-info"], [1, "office-details"], [1, "office-detail"], [1, "pi", "pi-map-marker", "detail-icon"], [1, "detail-content"], [1, "pi", "pi-clock", "detail-icon"], [1, "pi", "pi-phone", "detail-icon"], [1, "office-features"], [1, "features-list"], [1, "pi", "pi-check", "feature-icon"], [1, "office-map"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6482451037535!2d-122.08374688447637!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus`, "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0", "border-radius", "1rem"], [1, "social-section"], [1, "social-container"], [1, "social-grid"], ["target", "_blank", "rel", "noopener", "class", "social-card", 3, "href", 4, "ngFor", "ngForOf"], ["position", "top-right"], [1, "contact-method-card"], [1, "method-icon"], [1, "method-content"], ["target", "_blank", "rel", "noopener", 1, "method-link", 3, "href"], [1, "method-description"], ["target", "_blank", "rel", "noopener", 1, "social-card", 3, "href"], [1, "social-icon"], [1, "social-content"], [1, "social-cta"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Let's Connect & Build Something Amazing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Ready to transform your business with cutting-edge software solutions? Our team of experts is here to bring your vision to life. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_9_listener() {
              return ctx.openBookingDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " contact@nesttechsolutions.com ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nest Tech AI Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Premium Software Development");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "500+");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Projects Delivered");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16)(29, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "98%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Client Satisfaction");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "24/7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Support Available");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "section", 19)(39, "div", 20)(40, "div", 21)(41, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Multiple Ways to Reach Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Choose the communication method that works best for you");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ContactComponent_div_46_Template, 10, 6, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "section", 24)(48, "div", 25)(49, "div", 26)(50, "div", 27)(51, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Visit Our Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28)(54, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 31)(57, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "123 Tech Street");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Silicon Valley, CA 94025");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "United States");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31)(68, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Business Hours");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Monday - Friday: 9:00 AM - 6:00 PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Saturday: 10:00 AM - 4:00 PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Sunday: Closed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31)(79, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "+1 (555) 123-4567");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "+1 (555) 123-4568 (Support)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 34)(86, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Office Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ul", 35)(89, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Modern meeting rooms");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "High-speed internet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Parking available");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Accessible facilities");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "iframe", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "section", 39)(104, "div", 40)(105, "div", 21)(106, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Follow Our Journey");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Stay updated with our latest projects, insights, and tech innovations");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, ContactComponent_a_111_Template, 10, 6, "a", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "p-toast", 43);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contactMethods);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast],
        styles: [".hero-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1) 0%, rgba(var(--surface-ground-rgb), 1) 100%);\n  padding: 6rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"rgba(var(--primary-color-rgb), 0.05)\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"20\" fill=\"url(%23grid)\"/></svg>') repeat;\n  z-index: 1;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n    text-align: center;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  line-height: 1.2;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-text));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  color: var(--text-color-secondary);\n  margin-bottom: 2.5rem;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(var(--primary-color-rgb), 0.4);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-email-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color);\n  text-decoration: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-email-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  transform: translateX(5px);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-email-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--primary-color);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1.5rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n  border: 1px solid var(--surface-border);\n  backdrop-filter: blur(10px);\n  max-width: 400px;\n  width: 100%;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-header[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-header[_ngcontent-%COMP%]   .hero-card-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin: 0 0 0.5rem 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-header[_ngcontent-%COMP%]   .hero-card-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  background: var(--surface-section);\n  border-radius: 0.75rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  line-height: 1;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--text-color-secondary);\n  margin-top: 0.5rem;\n  font-weight: 500;\n}\n\n.contact-methods-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--surface-section);\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .contact-methods-section[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.contact-methods-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .contact-methods-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.contact-methods-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-color-secondary);\n  margin: 0;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  border: 1px solid var(--surface-border);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: linear-gradient(90deg, var(--primary-color), var(--primary-color-text));\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]:hover   .method-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary-color);\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-color-text);\n  transition: all 0.3s ease;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-content[_ngcontent-%COMP%]   .method-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-content[_ngcontent-%COMP%]   .method-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color-text);\n  transform: translateY(-1px);\n}\n.contact-methods-section[_ngcontent-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-content[_ngcontent-%COMP%]   .method-description[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.6;\n  margin: 1rem 0 0 0;\n  font-size: 0.95rem;\n}\n\n.office-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--surface-ground);\n}\n.office-section[_ngcontent-%COMP%]   .office-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .office-section[_ngcontent-%COMP%]   .office-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 968px) {\n  .office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  margin-top: 0.25rem;\n  flex-shrink: 0;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0 0 0.5rem 0;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%] {\n  background: var(--surface-section);\n  padding: 1.5rem;\n  border-radius: 1rem;\n  border: 1px solid var(--surface-border);\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0 0 1rem 0;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--text-color);\n  font-size: 0.95rem;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-map[_ngcontent-%COMP%] {\n  height: 500px;\n  border-radius: 1rem;\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 968px) {\n  .office-section[_ngcontent-%COMP%]   .office-content[_ngcontent-%COMP%]   .office-map[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n\n.social-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: var(--surface-section);\n}\n.social-section[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .social-section[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.social-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.social-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .social-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.social-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-color-secondary);\n  margin: 0;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  background: var(--surface-card);\n  padding: 1.5rem;\n  border-radius: 1rem;\n  text-decoration: none;\n  border: 1px solid var(--surface-border);\n  transition: all 0.3s ease;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]:hover   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 1rem;\n  background: rgba(var(--primary-color-rgb), 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  transition: all 0.3s ease;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0 0 0.5rem 0;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 0.75rem 0;\n  font-size: 0.95rem;\n}\n.social-section[_ngcontent-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   .social-cta[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-text) 100%);\n  color: white;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: white;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button {\n  padding: 1rem 2rem;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  min-width: 180px;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button.p-button-primary {\n  background: white;\n  border-color: white;\n  color: var(--primary-color);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button.p-button-primary:hover {\n  background: rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button.p-button-outlined {\n  border: 2px solid white;\n  color: white;\n  background: transparent;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button.p-button-outlined:hover {\n  background: white;\n  color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]     button {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n\n.dark-theme[_nghost-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n}\n.dark-theme[_nghost-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  background: var(--surface-section);\n}\n.dark-theme[_nghost-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .office-info[_ngcontent-%COMP%]   .office-features[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .social-grid[_ngcontent-%COMP%]   .social-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n}\n\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-card-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .contact-methods-section[_ngcontent-%COMP%], .office-section[_ngcontent-%COMP%], .social-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .contact-methods-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .office-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .social-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .contact-methods-grid[_ngcontent-%COMP%]   .contact-method-card[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .office-content[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .office-content[_ngcontent-%COMP%]   .office-details[_ngcontent-%COMP%]   .office-detail[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n    align-self: center;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUGVyc29uYWwlMjBXb3Jrc3BhY2UvU2hlaG5hei1Tb2Z0d2FyZS1Tb2x1dGlvbnMvc3JjL2FwcC9mZWF0dXJlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvSEFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0V0FBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0k7RUFQRjtJQVFJLGVBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBTkY7SUFPSSwwQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQ0FKO0FBQ0Y7QURJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9GQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDRk47QURJTTtFQVhGO0lBWUksaUJBQUE7RUNETjtBQUNGO0FER007RUFmRjtJQWdCSSxlQUFBO0VDQU47QUFDRjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER007RUFQRjtJQVFJLGlCQUFBO0VDQU47QUFDRjtBREdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRE47QURHTTtFQU5GO0lBT0ks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SjtFRCtFSTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtFQzdFTjtFRCtFTTtJQUNFLGdCQUFBO0VDN0VSO0VEbUZBOzs7O0lBSUUsZUFBQTtFQ2pGRjtFRG1GRTs7OztJQUNFLGlCQUFBO0VDOUVKO0VEa0ZBO0lBQ0UsZUFBQTtFQ2hGRjtFRGtGRTtJQUNFLGlCQUFBO0VDaEZKO0VEb0ZBO0lBQ0Usc0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNsRkY7RURvRkU7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUNsRko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlcm8gU2VjdGlvblxyXG4uaGVyby1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4xKSAwJSwgcmdiYSh2YXIoLS1zdXJmYWNlLWdyb3VuZC1yZ2IpLCAxKSAxMDAlKTtcclxuICBwYWRkaW5nOiA2cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDIwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJncmlkXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48cGF0aCBkPVwiTSAxMCAwIEwgMCAwIDAgMTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjA1KVwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiBmaWxsPVwidXJsKCUyM2dyaWQpXCIvPjwvc3ZnPicpIHJlcGVhdDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogNHJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBnYXA6IDNyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLXRleHQge1xyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KSk7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEuNXJlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVyby1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVyby1lbWFpbC1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZXJvLXZpc3VhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmhlcm8tY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuaGVyby1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuXHJcbiAgICAgICAgLmhlcm8tbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVyby1jYXJkLWluZm8ge1xyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmhlcm8tY2FyZC1zdGF0cyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICAgIC5zdGF0LWl0ZW0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG5cclxuICAgICAgICAgIC5zdGF0LW51bWJlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENvbnRhY3QgTWV0aG9kcyBTZWN0aW9uXHJcbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNnJlbSAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcblxyXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1tZXRob2RzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbWV0aG9kLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1ldGhvZC1pY29uIGkge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1ldGhvZC1pY29uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1ldGhvZC1jb250ZW50IHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1ldGhvZC1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWV0aG9kLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gT2ZmaWNlIFNlY3Rpb25cclxuLm9mZmljZS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2cmVtIDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuICAub2ZmaWNlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub2ZmaWNlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogNHJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdhcDogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAub2ZmaWNlLWluZm8ge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vZmZpY2UtZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgICAgICAub2ZmaWNlLWRldGFpbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgLmRldGFpbC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRldGFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAub2ZmaWNlLWZlYXR1cmVzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZlYXR1cmVzLWxpc3Qge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMC43NXJlbTtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMC43NXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcblxyXG4gICAgICAgICAgICAuZmVhdHVyZS1pY29uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9mZmljZS1tYXAge1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNvY2lhbCBTZWN0aW9uXHJcbi5zb2NpYWwtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNnJlbSAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcblxyXG4gIC5zb2NpYWwtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDEuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgICAgIC5zb2NpYWwtaWNvbiBpIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zb2NpYWwtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zb2NpYWwtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMC43NXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbC1jdGEge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ1RBIFNlY3Rpb25cclxuLmN0YS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2cmVtIDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXByaW1hcnktY29sb3ItdGV4dCkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAuY3RhLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3RhLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdGEtYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxODBweDtcclxuXHJcbiAgICAgICAgJi5wLWJ1dHRvbi1wcmltYXJ5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wLWJ1dHRvbi1vdXRsaW5lZCB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXJrIHRoZW1lIGFkanVzdG1lbnRzXHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG5cclxuICAgIC5oZXJvLWNhcmQtc3RhdHMgLnN0YXQtaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQsXHJcbiAgLm9mZmljZS1pbmZvIC5vZmZpY2UtZmVhdHVyZXMsXHJcbiAgLnNvY2lhbC1ncmlkIC5zb2NpYWwtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBpbXByb3ZlbWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcblxyXG4gICAgLmhlcm8tY29udGVudCB7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby10ZXh0IC5oZXJvLWFjdGlvbnMge1xyXG4gICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICAuaGVyby1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuXHJcbiAgICAgIC5oZXJvLWNhcmQtc3RhdHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMC43NXJlbTtcclxuXHJcbiAgICAgICAgLnN0YXQtaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uLFxyXG4gIC5vZmZpY2Utc2VjdGlvbixcclxuICAuc29jaWFsLXNlY3Rpb24sXHJcbiAgLmN0YS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuXHJcbiAgICAuc2VjdGlvbi1oZWFkZXIgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LW1ldGhvZHMtZ3JpZCAuY29udGFjdC1tZXRob2QtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcblxyXG4gICAgLm1ldGhvZC1pY29uIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vZmZpY2UtY29udGVudCAub2ZmaWNlLWRldGFpbHMgLm9mZmljZS1kZXRhaWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5kZXRhaWwtaWNvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuaGVyby1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMSkgMCUsIHJnYmEodmFyKC0tc3VyZmFjZS1ncm91bmQtcmdiKSwgMSkgMTAwJSk7XG4gIHBhZGRpbmc6IDZyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlcm8tc2VjdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDIwXCI+PGRlZnM+PHBhdHRlcm4gaWQ9XCJncmlkXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48cGF0aCBkPVwiTSAxMCAwIEwgMCAwIDAgMTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjA1KVwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiBmaWxsPVwidXJsKCUyM2dyaWQpXCIvPjwvc3ZnPicpIHJlcGVhdDtcbiAgei1pbmRleDogMTtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNHJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdGV4dCAuaGVyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tdGV4dCAuaGVyby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmhlcm8tc2VjdGlvbiAuaGVyby10ZXh0IC5oZXJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tYWN0aW9ucyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmhlcm8tc2VjdGlvbiAuaGVyby10ZXh0IC5oZXJvLWFjdGlvbnMgLmhlcm8tYnRuIHtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby10ZXh0IC5oZXJvLWFjdGlvbnMgLmhlcm8tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjQpO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby10ZXh0IC5oZXJvLWFjdGlvbnMgLmhlcm8tZW1haWwtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby10ZXh0IC5oZXJvLWFjdGlvbnMgLmhlcm8tZW1haWwtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tYWN0aW9ucyAuaGVyby1lbWFpbC1saW5rIGkge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby12aXN1YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdmlzdWFsIC5oZXJvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCAuaGVyby1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdmlzdWFsIC5oZXJvLWNhcmQgLmhlcm8tY2FyZC1oZWFkZXIgLmhlcm8tbG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLXZpc3VhbCAuaGVyby1jYXJkIC5oZXJvLWNhcmQtaGVhZGVyIC5oZXJvLWNhcmQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCAuaGVyby1jYXJkLWhlYWRlciAuaGVyby1jYXJkLWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdmlzdWFsIC5oZXJvLWNhcmQgLmhlcm8tY2FyZC1zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLXZpc3VhbCAuaGVyby1jYXJkIC5oZXJvLWNhcmQtc3RhdHMgLnN0YXQtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdmlzdWFsIC5oZXJvLWNhcmQgLmhlcm8tY2FyZC1zdGF0cyAuc3RhdC1pdGVtIC5zdGF0LW51bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tdmlzdWFsIC5oZXJvLWNhcmQgLmhlcm8tY2FyZC1zdGF0cyAuc3RhdC1pdGVtIC5zdGF0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA2cmVtIDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMS41cmVtO1xuICB9XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXByaW1hcnktY29sb3ItdGV4dCkpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQ6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5jb250YWN0LW1ldGhvZHMtZ3JpZCAuY29udGFjdC1tZXRob2QtY2FyZDpob3ZlciAubWV0aG9kLWljb24gaSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5jb250YWN0LW1ldGhvZHMtZ3JpZCAuY29udGFjdC1tZXRob2QtY2FyZCAubWV0aG9kLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkIC5tZXRob2QtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQgLm1ldGhvZC1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQgLm1ldGhvZC1jb250ZW50IC5tZXRob2QtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb250YWN0LW1ldGhvZHMtc2VjdGlvbiAuY29udGFjdC1tZXRob2RzLWdyaWQgLmNvbnRhY3QtbWV0aG9kLWNhcmQgLm1ldGhvZC1jb250ZW50IC5tZXRob2QtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4uY29udGFjdC1tZXRob2RzLXNlY3Rpb24gLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkIC5tZXRob2QtY29udGVudCAubWV0aG9kLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5vZmZpY2Utc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDZyZW0gMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xufVxuLm9mZmljZS1zZWN0aW9uIC5vZmZpY2UtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9mZmljZS1zZWN0aW9uIC5vZmZpY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNHJlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XG4gIC5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3JlbTtcbiAgfVxufVxuLm9mZmljZS1zZWN0aW9uIC5vZmZpY2UtY29udGVudCAub2ZmaWNlLWluZm8gaDIge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIGgyIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuLm9mZmljZS1zZWN0aW9uIC5vZmZpY2UtY29udGVudCAub2ZmaWNlLWluZm8gLm9mZmljZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLm9mZmljZS1zZWN0aW9uIC5vZmZpY2UtY29udGVudCAub2ZmaWNlLWluZm8gLm9mZmljZS1kZXRhaWxzIC5vZmZpY2UtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZGV0YWlscyAub2ZmaWNlLWRldGFpbCAuZGV0YWlsLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZGV0YWlscyAub2ZmaWNlLWRldGFpbCAuZGV0YWlsLWNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZGV0YWlscyAub2ZmaWNlLWRldGFpbCAuZGV0YWlsLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMDtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZmVhdHVyZXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZmVhdHVyZXMgaDQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG4ub2ZmaWNlLXNlY3Rpb24gLm9mZmljZS1jb250ZW50IC5vZmZpY2UtaW5mbyAub2ZmaWNlLWZlYXR1cmVzIC5mZWF0dXJlcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG59XG4ub2ZmaWNlLXNlY3Rpb24gLm9mZmljZS1jb250ZW50IC5vZmZpY2UtaW5mbyAub2ZmaWNlLWZlYXR1cmVzIC5mZWF0dXJlcy1saXN0IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1pbmZvIC5vZmZpY2UtZmVhdHVyZXMgLmZlYXR1cmVzLWxpc3QgbGkgLmZlYXR1cmUtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5vZmZpY2Utc2VjdGlvbiAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1tYXAge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xuICAub2ZmaWNlLXNlY3Rpb24gLm9mZmljZS1jb250ZW50IC5vZmZpY2UtbWFwIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG59XG5cbi5zb2NpYWwtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDZyZW0gMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4uc29jaWFsLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLnNvY2lhbC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNvY2lhbC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uc29jaWFsLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xufVxuLnNvY2lhbC1zZWN0aW9uIC5zb2NpYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNvY2lhbC1zZWN0aW9uIC5zb2NpYWwtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnNvY2lhbC1zZWN0aW9uIC5zb2NpYWwtZ3JpZCAuc29jaWFsLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkOmhvdmVyIC5zb2NpYWwtaWNvbiBpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnNvY2lhbC1zZWN0aW9uIC5zb2NpYWwtZ3JpZCAuc29jaWFsLWNhcmQgLnNvY2lhbC1pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkIC5zb2NpYWwtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkIC5zb2NpYWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG4uc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1ncmlkIC5zb2NpYWwtY2FyZCAuc29jaWFsLWNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbn1cbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkIC5zb2NpYWwtY29udGVudCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbSAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1ncmlkIC5zb2NpYWwtY2FyZCAuc29jaWFsLWNvbnRlbnQgLnNvY2lhbC1jdGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY3RhLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA2cmVtIDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3RhLXNlY3Rpb24gLmN0YS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgb3BhY2l0eTogMC45O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIDo6bmctZGVlcCBidXR0b24ge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyA6Om5nLWRlZXAgYnV0dG9uLnAtYnV0dG9uLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbi5wLWJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbi5wLWJ1dHRvbi1vdXRsaW5lZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbi5wLWJ1dHRvbi1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCAuaGVyby1jYXJkLXN0YXRzIC5zdGF0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkLFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLm9mZmljZS1pbmZvIC5vZmZpY2UtZmVhdHVyZXMsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuc29jaWFsLWdyaWQgLnNvY2lhbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLXRleHQgLmhlcm8tYWN0aW9ucyB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tdGV4dCAuaGVyby1hY3Rpb25zIC5oZXJvLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLXZpc3VhbCAuaGVyby1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCAuaGVyby1jYXJkLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby12aXN1YWwgLmhlcm8tY2FyZCAuaGVyby1jYXJkLXN0YXRzIC5zdGF0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gIH1cbiAgLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uLFxuICAub2ZmaWNlLXNlY3Rpb24sXG4gIC5zb2NpYWwtc2VjdGlvbixcbiAgLmN0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDA7XG4gIH1cbiAgLmNvbnRhY3QtbWV0aG9kcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMixcbiAgLm9mZmljZS1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMixcbiAgLnNvY2lhbC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMixcbiAgLmN0YS1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgLmNvbnRhY3QtbWV0aG9kcy1ncmlkIC5jb250YWN0LW1ldGhvZC1jYXJkIC5tZXRob2QtaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1kZXRhaWxzIC5vZmZpY2UtZGV0YWlsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAub2ZmaWNlLWNvbnRlbnQgLm9mZmljZS1kZXRhaWxzIC5vZmZpY2UtZGV0YWlsIC5kZXRhaWwtaWNvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 0,
            transform: 'translateY(20px)'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('600ms cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        },
        changeDetection: 0
      });
    }
  }
  return ContactComponent;
})();

/***/ }),

/***/ 4725:
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 674);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/selectbutton */ 9656);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/divider */ 6171);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




// PrimeNG Imports













let ContactModule = /*#__PURE__*/(() => {
  class ContactModule {
    static {
      this.ɵfac = function ContactModule_Factory(t) {
        return new (t || ContactModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ContactModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
          path: '',
          component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
        }]), primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__.SelectButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__.DynamicDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule, primeng_card__WEBPACK_IMPORTED_MODULE_13__.CardModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
      });
    }
  }
  return ContactModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__.SelectButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__.DynamicDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule, primeng_card__WEBPACK_IMPORTED_MODULE_13__.CardModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule]
  });
})();

/***/ }),

/***/ 1486:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-card.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardModule: () => (/* binding */ CardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);







/**
 * Card is a flexible container component.
 * @group Components
 */
const _c0 = ["*", [["p-header"]], [["p-footer"]]];
const _c1 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.subheader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
let Card = /*#__PURE__*/(() => {
  class Card {
    el;
    /**
     * Header of the card.
     * @group Props
     */
    header;
    /**
     * Subheader of the card.
     * @group Props
     */
    subheader;
    /**
     * Inline style of the element.
     * @group Props
     */
    set style(value) {
      if (!primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(this._style(), value)) {
        this._style.set(value);
      }
    }
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    headerFacet;
    footerFacet;
    templates;
    headerTemplate;
    titleTemplate;
    subtitleTemplate;
    contentTemplate;
    footerTemplate;
    _style = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    constructor(el) {
      this.el = el;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'title':
            this.titleTemplate = item.template;
            break;
          case 'subtitle':
            this.subtitleTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    static ɵfac = function Card_Factory(t) {
      return new (t || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Card,
      selectors: [["p-card"]],
      contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        subheader: "subheader",
        style: "style",
        styleClass: "styleClass"
      },
      ngContentSelectors: _c1,
      decls: 9,
      vars: 10,
      consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
      template: function Card_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Card_div_1_Template, 3, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Card_div_8_Template, 3, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-card p-component")("ngStyle", ctx._style());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "card");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.titleTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subheader || ctx.subtitleTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
      styles: ["@layer primeng{.p-card-header img{width:100%}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Card;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CardModule = /*#__PURE__*/(() => {
  class CardModule {
    static ɵfac = function CardModule_Factory(t) {
      return new (t || CardModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CardModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return CardModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6171:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-divider.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Divider: () => (/* binding */ Divider),
/* harmony export */   DividerModule: () => (/* binding */ DividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);





/**
 * Divider is used to separate contents.
 * @group Components
 */
const _c0 = ["*"];
let Divider = /*#__PURE__*/(() => {
  class Divider {
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
     * Specifies the orientation.
     * @group Props
     */
    layout = 'horizontal';
    /**
     * Border style type.
     * @group Props
     */
    type = 'solid';
    /**
     * Alignment of the content.
     * @group Props
     */
    align;
    containerClass() {
      return {
        'p-divider p-component': true,
        'p-divider-horizontal': this.layout === 'horizontal',
        'p-divider-vertical': this.layout === 'vertical',
        'p-divider-solid': this.type === 'solid',
        'p-divider-dashed': this.type === 'dashed',
        'p-divider-dotted': this.type === 'dotted',
        'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
        'p-divider-center': this.layout === 'horizontal' && this.align === 'center' || this.layout === 'vertical' && (!this.align || this.align === 'center'),
        'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
        'p-divider-top': this.layout === 'vertical' && this.align === 'top',
        'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
      };
    }
    static ɵfac = function Divider_Factory(t) {
      return new (t || Divider)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Divider,
      selectors: [["p-divider"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        style: "style",
        styleClass: "styleClass",
        layout: "layout",
        type: "type",
        align: "align"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 6,
      consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]],
      template: function Divider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.layout)("data-pc-name", "divider");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:\"\"}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:\"\"}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Divider;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DividerModule = /*#__PURE__*/(() => {
  class DividerModule {
    static ɵfac = function DividerModule_Factory(t) {
      return new (t || DividerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DividerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return DividerModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=725.js.map