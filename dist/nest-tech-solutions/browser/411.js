"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[411],{

/***/ 7411:
/*!******************************************************************************!*\
  !*** ./src/app/features/services/service-detail/service-detail.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceDetailComponent: () => (/* binding */ ServiceDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);













function ServiceDetailComponent_div_0_p_chip_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-chip", 16);
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r1);
  }
}
function ServiceDetailComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r2);
  }
}
function ServiceDetailComponent_div_0_p_card_23_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r3);
  }
}
function ServiceDetailComponent_div_0_p_card_23_p_chip_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-chip", 16);
  }
  if (rf & 2) {
    const tech_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r4);
  }
}
function ServiceDetailComponent_div_0_p_card_23_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "blockquote")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer")(5, "cite")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", project_r5.testimonial.quote, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.testimonial.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.testimonial.position);
  }
}
function ServiceDetailComponent_div_0_p_card_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 19)(1, "div", 20)(2, "div", 21)(3, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Challenge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26)(18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Key Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ServiceDetailComponent_div_0_p_card_23_li_21_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28)(23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Technologies Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ServiceDetailComponent_div_0_p_card_23_p_chip_26_Template, 1, 1, "p-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ServiceDetailComponent_div_0_p_card_23_div_29_Template, 10, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.challenge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.solution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r5.results);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r5.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", project_r5.title + " visualization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r5.testimonial);
  }
}
function ServiceDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Technologies We Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServiceDetailComponent_div_0_p_chip_13_Template, 1, 1, "p-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10)(15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Capabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ServiceDetailComponent_div_0_div_18_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 13)(20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Success Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ServiceDetailComponent_div_0_p_card_23_Template, 30, 9, "p-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/service-icons/" + ctx_r5.service.icon + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r5.service.title + " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.service.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.service.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.service.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.service.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.service.projects);
  }
}
let ServiceDetailComponent = /*#__PURE__*/(() => {
  class ServiceDetailComponent {
    constructor() {
      this.serviceId = '';
      // Sample project data - this would typically come from a service
      this.serviceDetails = {
        'web-development': {
          id: 'web-development',
          title: 'Web Development',
          description: 'Build powerful, responsive web applications with modern frameworks and cutting-edge technologies.',
          icon: 'web-development',
          technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
          features: ['Frontend development (React, Angular, Vue.js)', 'Backend development (Node.js, Python, .NET)', 'Progressive Web Apps (PWAs)', 'E-commerce solutions', 'CMS & custom portals', 'Performance optimization'],
          projects: [{
            title: 'E-commerce Platform Transformation',
            description: 'Complete redesign and development of a modern e-commerce platform for a leading retail brand.',
            challenge: 'The client needed to modernize their outdated e-commerce platform that was struggling with performance issues and couldn\'t handle their growing customer base.',
            solution: 'We developed a scalable, React-based frontend with a Node.js backend, implementing modern e-commerce features and optimizing for performance.',
            results: ['40% increase in conversion rate', '60% improvement in page load times', '300% increase in mobile sales', 'Seamless integration with inventory management'],
            technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
            imageUrl: 'assets/project-examples/ecommerce-dashboard.svg',
            testimonial: {
              quote: 'The new platform has transformed our business. The performance improvements and modern features have directly contributed to our growth.',
              author: 'Sarah Johnson',
              position: 'CTO, RetailCo'
            }
          }]
        },
        'mobile-development': {
          id: 'mobile-development',
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
          icon: 'mobile-development',
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
          features: ['iOS native development (Swift)', 'Android native development (Kotlin)', 'Cross-platform apps (React Native, Flutter)', 'App Store optimization', 'Mobile UI/UX design', 'Push notifications & analytics'],
          projects: [{
            title: 'Health & Fitness Tracking App',
            description: 'A comprehensive fitness tracking application with social features and AI-powered recommendations.',
            challenge: 'Create a cross-platform fitness app that provides personalized workout plans and seamlessly syncs with various fitness devices.',
            solution: 'Developed using Flutter for cross-platform compatibility, with Firebase backend for real-time data sync and ML Kit for workout analysis.',
            results: ['1M+ downloads across iOS and Android', '4.8 average rating on both app stores', '85% user retention rate after 3 months', 'Featured in App Store\'s "Apps We Love"'],
            technologies: ['Flutter', 'Firebase', 'ML Kit', 'Google Fit API', 'HealthKit'],
            imageUrl: 'assets/project-examples/fitness-app.svg',
            testimonial: {
              quote: 'The app has exceeded our expectations in every way. The team\'s attention to detail and technical expertise is evident in the final product.',
              author: 'Michael Chen',
              position: 'Founder, FitTech'
            }
          }]
        },
        'cloud-devops': {
          id: 'cloud-devops',
          title: 'Cloud & DevOps',
          description: 'Scalable cloud infrastructure and DevOps automation for faster, more reliable software delivery.',
          icon: 'cloud-devops',
          technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
          features: ['Cloud migration (AWS, Azure, GCP)', 'CI/CD pipeline automation', 'Containerization (Docker, Kubernetes)', 'Infrastructure as Code', 'Monitoring & logging', 'Security & compliance'],
          projects: [{
            title: 'Cloud Migration & DevOps Transformation',
            description: 'Complete cloud migration and DevOps implementation for a financial services company.',
            challenge: 'Modernize legacy infrastructure and implement automated deployment pipelines while ensuring zero downtime.',
            solution: 'Implemented infrastructure as code using Terraform, containerized applications with Kubernetes, and set up automated CI/CD pipelines.',
            results: ['99.99% system uptime achieved', 'Deployment time reduced from days to minutes', '40% reduction in infrastructure costs', 'Automated security compliance checks'],
            technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
            imageUrl: 'assets/project-examples/cloud-architecture.svg',
            testimonial: {
              quote: 'The cloud migration has revolutionized our development process. We\'re now able to deploy faster and more reliably than ever before.',
              author: 'David Wilson',
              position: 'Head of Engineering, FinServ Inc.'
            }
          }]
        }
      };
      this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute);
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.serviceId = params['id'];
        this.service = this.serviceDetails[this.serviceId];
      });
    }
    static {
      this.ɵfac = function ServiceDetailComponent_Factory(t) {
        return new (t || ServiceDetailComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServiceDetailComponent,
        selectors: [["app-service-detail"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "service-detail-container", 4, "ngIf"], [1, "service-detail-container"], [1, "hero-section"], [1, "hero-content"], [1, "service-icon"], ["width", "80", "height", "80", 3, "src", "alt"], [1, "service-description"], [1, "technologies-section"], [1, "tech-chips"], [3, "label", 4, "ngFor", "ngForOf"], [1, "features-section"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "projects-section"], [1, "project-cards"], ["class", "project-card", 4, "ngFor", "ngForOf"], [3, "label"], [1, "feature-card"], [1, "pi", "pi-check-circle"], [1, "project-card"], [1, "project-content"], [1, "project-text"], [1, "project-title"], [1, "project-description"], [1, "project-details"], [1, "challenge-solution"], [1, "results"], [4, "ngFor", "ngForOf"], [1, "project-tech"], [1, "project-visual"], ["loading", "lazy", 1, "project-image", 3, "src", "alt"], ["class", "testimonial", 4, "ngIf"], [1, "testimonial"]],
        template: function ServiceDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceDetailComponent_div_0_Template, 24, 11, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card, primeng_chip__WEBPACK_IMPORTED_MODULE_6__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_6__.Chip, primeng_tag__WEBPACK_IMPORTED_MODULE_7__.TagModule],
        styles: ["@charset \"UTF-8\";\n.service-detail-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  background: var(--surface-ground);\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 0;\n  background: linear-gradient(135deg, var(--primary-color-light) 0%, var(--primary-color) 100%);\n  border-radius: 1rem;\n  margin-bottom: 3rem;\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.hero-section[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n.hero-section[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n\n.technologies-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n.technologies-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 2rem;\n  color: var(--text-color);\n}\n.technologies-section[_ngcontent-%COMP%]   .tech-chips[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.technologies-section[_ngcontent-%COMP%]   .tech-chips[_ngcontent-%COMP%]     .p-chip {\n  background: var(--primary-color-lighter);\n  color: var(--primary-color-text);\n}\n\n.features-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.features-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  color: var(--text-color);\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--surface-card);\n  border-radius: 0.5rem;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.5rem;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-color);\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.projects-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  color: var(--text-color);\n}\n.projects-section[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.projects-section[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%]     .p-card {\n  background: var(--surface-card);\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n.projects-section[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%]     .p-card .p-card-body {\n  padding: 2rem;\n}\n.projects-section[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%]     .p-card .p-card-content {\n  padding: 0;\n}\n.projects-section[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .projects-section[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n  font-weight: 600;\n}\n.projects-section[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: var(--text-secondary-color);\n  margin-bottom: 2rem;\n}\n.projects-section[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin: 1.5rem 0 0.5rem;\n  font-size: 1.2rem;\n}\n.projects-section[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n}\n.projects-section[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 1rem 0;\n}\n.projects-section[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  position: relative;\n  margin-bottom: 0.5rem;\n  color: var(--text-secondary-color);\n}\n.projects-section[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2713\";\n  position: absolute;\n  left: 0;\n  color: var(--primary-color);\n}\n.projects-section[_ngcontent-%COMP%]   .project-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.projects-section[_ngcontent-%COMP%]   .project-visual[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 0.5rem;\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  padding: 2rem;\n  border-radius: 0 0 1rem 1rem;\n  margin-top: 2rem;\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 0;\n  font-style: italic;\n  color: var(--text-secondary-color);\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.projects-section[_ngcontent-%COMP%]   .testimonial[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BlcnNvbmFsJTIwV29ya3NwYWNlL1NoZWhuYXotU29mdHdhcmUtU29sdXRpb25zL3NyYy9hcHAvZmVhdHVyZXMvc2VydmljZXMvc2VydmljZS1kZXRhaWwvc2VydmljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL3NlcnZpY2VzL3NlcnZpY2UtZGV0YWlsL3NlcnZpY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBREVGOztBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkZBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRENGO0FDQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFRTtFQUNFLHFCQUFBO0FEQUo7QUNFSTtFQUNFLCtCQUFBO0FEQU47QUNJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREZKO0FDS0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREhKOztBQ1FBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBRExGO0FDT0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBRExKO0FDUUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRE5KO0FDUUk7RUFDRSx3Q0FBQTtFQUNBLGdDQUFBO0FETk47O0FDWUE7RUFDRSxtQkFBQTtBRFRGO0FDV0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FEVEo7QUNZRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFdBQUE7QURWSjtBQ2FFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBRFhKO0FDYUk7RUFDRSwyQkFBQTtBRFhOO0FDY0k7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0FEWk47QUNlSTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGJOOztBQ29CRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QURqQko7QUNvQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FEbEJKO0FDb0JJO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FEbEJOO0FDb0JNO0VBQ0UsYUFBQTtBRGxCUjtBQ3FCTTtFQUNFLFVBQUE7QURuQlI7QUN3QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FEdEJKO0FDd0JJO0VBTEY7SUFNSSwwQkFBQTtFRHJCSjtBQUNGO0FDeUJJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUR2Qk47QUMwQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBRHhCTjtBQzZCSTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBRDNCTjtBQzhCSTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7QUQ1Qk47QUMrQkk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEN0JOO0FDK0JNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUQ3QlI7QUMrQlE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7QUQ3QlY7QUNtQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRGpDSjtBQ21DSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURqQ047QUNxQ0U7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FEbkNKO0FDcUNJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QURuQ047QUNxQ007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURuQ1I7QUN1Q1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURyQ1Y7QUN1Q1U7RUFDRSx3QkFBQTtBRHJDWjtBQ3dDVTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUR0Q1oiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VydmljZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG59XG5cbi5oZXJvLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkgMCUsIHZhcigtLXByaW1hcnktY29sb3IpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmhlcm8tc2VjdGlvbiAuc2VydmljZS1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmhlcm8tc2VjdGlvbiAuc2VydmljZS1pY29uIGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG4uaGVyby1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVyby1zZWN0aW9uIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRlY2hub2xvZ2llcy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlY2hub2xvZ2llcy1zZWN0aW9uIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi50ZWNobm9sb2dpZXMtc2VjdGlvbiAudGVjaC1jaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuLnRlY2hub2xvZ2llcy1zZWN0aW9uIC50ZWNoLWNoaXBzIDo6bmctZGVlcCAucC1jaGlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVyKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG59XG5cbi5mZWF0dXJlcy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xufVxuLmZlYXR1cmVzLXNlY3Rpb24gLmZlYXR1cmUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uZmVhdHVyZXMtc2VjdGlvbiAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmZlYXR1cmVzLXNlY3Rpb24gLmZlYXR1cmUtY2FyZCBpIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlLWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtY2FyZHMgOjpuZy1kZWVwIC5wLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG59XG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1jYXJkcyA6Om5nLWRlZXAgLnAtY2FyZCAucC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycmVtO1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtY2FyZHMgOjpuZy1kZWVwIC5wLWNhcmQgLnAtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gIGdhcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtdGV4dCAucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1kZXRhaWxzIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDEuNXJlbSAwIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1kZXRhaWxzIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtZGV0YWlscyB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1kZXRhaWxzIHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtZGV0YWlscyB1bCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIsOiwpzCk1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXZpc3VhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtdmlzdWFsIC5wcm9qZWN0LWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC50ZXN0aW1vbmlhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnByb2plY3RzLXNlY3Rpb24gLnRlc3RpbW9uaWFsIGJsb2NrcXVvdGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC50ZXN0aW1vbmlhbCBibG9ja3F1b3RlIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC50ZXN0aW1vbmlhbCBibG9ja3F1b3RlIGZvb3RlciBjaXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC50ZXN0aW1vbmlhbCBibG9ja3F1b3RlIGZvb3RlciBjaXRlIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC50ZXN0aW1vbmlhbCBibG9ja3F1b3RlIGZvb3RlciBjaXRlIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn0iLCIuc2VydmljZS1kZXRhaWwtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxufVxyXG5cclxuLy8gSGVybyBTZWN0aW9uXHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkgMCUsIHZhcigtLXByaW1hcnktY29sb3IpIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC5oZXJvLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2UtaWNvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2UtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGVjaG5vbG9naWVzIFNlY3Rpb25cclxuLnRlY2hub2xvZ2llcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnRlY2gtY2hpcHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgOjpuZy1kZWVwIC5wLWNoaXAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZXIpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZlYXR1cmVzIFNlY3Rpb25cclxuLmZlYXR1cmVzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFByb2plY3RzIFNlY3Rpb25cclxuLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICA6Om5nLWRlZXAgLnAtY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuXHJcbiAgICAgIC5wLWNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGV4dCB7XHJcbiAgICAucHJvamVjdC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWRldGFpbHMge1xyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbjogMS41cmVtIDAgMC41cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIsOiwpzCk1wiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LXZpc3VhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5wcm9qZWN0LWltYWdlIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXN0aW1vbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICBibG9ja3F1b3RlIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgY2l0ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 0,
            transform: 'translateY(20px)'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('600ms cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        }
      });
    }
  }
  return ServiceDetailComponent;
})();

/***/ })

}]);
//# sourceMappingURL=411.js.map