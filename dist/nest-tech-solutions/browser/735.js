"use strict";
(self["webpackChunknest_tech_solutions"] = self["webpackChunknest_tech_solutions"] || []).push([[735],{

/***/ 1807:
/*!*********************************************!*\
  !*** ./src/app/core/performance.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceService: () => (/* binding */ PerformanceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

let PerformanceService = /*#__PURE__*/(() => {
  class PerformanceService {
    constructor() {
      this.performanceMetrics = new Map();
      this.initializePerformanceObserver();
    }
    initializePerformanceObserver() {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              this.performanceMetrics.set('LCP', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              const fidEntry = entry; // Cast to handle processingStart property
              this.performanceMetrics.set('FID', fidEntry.processingStart - entry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              const currentCLS = this.performanceMetrics.get('CLS') || 0;
              this.performanceMetrics.set('CLS', currentCLS + entry.value);
            }
          }
        });
        observer.observe({
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
        });
      }
    }
    // Measure Core Web Vitals
    getCoreWebVitals() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            LCP: this.performanceMetrics.get('LCP') || 0,
            FID: this.performanceMetrics.get('FID') || 0,
            CLS: this.performanceMetrics.get('CLS') || 0
          });
        }, 2000); // Wait 2 seconds to collect metrics
      });
    }
    // Measure custom performance metrics
    markStart(label) {
      performance.mark(`${label}-start`);
    }
    markEnd(label) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      const measure = performance.getEntriesByName(label)[0];
      return measure.duration;
    }
    // Get page load time
    getPageLoadTime() {
      const navigation = performance.getEntriesByType('navigation')[0];
      return navigation.loadEventEnd - navigation.fetchStart;
    }
    // Get first contentful paint
    getFirstContentfulPaint() {
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      return fcpEntry ? fcpEntry.startTime : 0;
    }
    // Memory usage (if available)
    getMemoryUsage() {
      return performance.memory ? {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
      } : null;
    }
    // Report performance to console (for development)
    reportPerformance() {
      console.group('🚀 Performance Metrics');
      console.log('Page Load Time:', this.getPageLoadTime().toFixed(2), 'ms');
      console.log('First Contentful Paint:', this.getFirstContentfulPaint().toFixed(2), 'ms');
      const memory = this.getMemoryUsage();
      if (memory) {
        console.log('Memory Usage:', {
          used: (memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + ' MB',
          total: (memory.totalJSHeapSize / 1024 / 1024).toFixed(2) + ' MB'
        });
      }
      this.getCoreWebVitals().then(vitals => {
        console.log('Core Web Vitals:', {
          LCP: vitals.LCP.toFixed(2) + ' ms',
          FID: vitals.FID.toFixed(2) + ' ms',
          CLS: vitals.CLS.toFixed(4)
        });
        console.groupEnd();
      });
    }
    static {
      this.ɵfac = function PerformanceService_Factory(t) {
        return new (t || PerformanceService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PerformanceService,
        factory: PerformanceService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PerformanceService;
})();

/***/ }),

/***/ 3738:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 6171);
/* harmony import */ var _software_showcase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./software-showcase.component */ 3613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_performance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/performance.service */ 1807);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7780);



// PrimeNG Imports

















const _c0 = () => [1, 2, 3, 4, 5];
function HomeComponent_p_card_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-card", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](feature_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](feature_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](feature_r1.description);
  }
}
function HomeComponent_p_card_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-card", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](service_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](service_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](service_r2.description);
  }
}
function HomeComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tech_r3.category);
  }
}
function HomeComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](step_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r4.description);
  }
}
function HomeComponent_ng_template_56_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 53);
  }
}
function HomeComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HomeComponent_ng_template_56_i_2_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 52)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testimonial_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\"", testimonial_r6.quote, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](testimonial_r6.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](testimonial_r6.company);
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor(router, viewportScroller, performanceService) {
      this.router = router;
      this.viewportScroller = viewportScroller;
      this.performanceService = performanceService;
      this.ceoImagePath = '../../../assets/home/mushhood.png';
      this.imageLoaded = false;
      this.imageError = false;
      this.features = [{
        icon: 'pi pi-bolt',
        title: 'Innovation',
        description: 'Cutting-edge solutions using the latest technologies'
      }, {
        icon: 'pi pi-chart-line',
        title: 'Growth',
        description: 'Scalable solutions that grow with your business'
      }, {
        icon: 'pi pi-cog',
        title: 'Efficiency',
        description: 'Optimized processes and automated workflows'
      }, {
        icon: 'pi pi-fast-forward',
        title: 'Speed',
        description: 'Fast development and deployment cycles'
      }];
      this.services = [{
        icon: 'pi pi-desktop',
        title: 'Web Development',
        description: 'Modern, responsive web applications built with cutting-edge frameworks'
      }, {
        icon: 'pi pi-cloud',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and DevOps automation'
      }, {
        icon: 'pi pi-shield',
        title: 'Security',
        description: 'Enterprise-grade security and compliance solutions'
      }, {
        icon: 'pi pi-chart-bar',
        title: 'Analytics',
        description: 'Data-driven insights and business intelligence'
      }];
      this.technologies = [{
        name: 'React',
        category: 'Frontend'
      }, {
        name: 'Angular',
        category: 'Frontend'
      }, {
        name: 'Vue.js',
        category: 'Frontend'
      }, {
        name: 'Node.js',
        category: 'Backend'
      }, {
        name: 'Python',
        category: 'Backend'
      }, {
        name: 'Java',
        category: 'Backend'
      }, {
        name: 'AWS',
        category: 'Cloud'
      }, {
        name: 'Docker',
        category: 'DevOps'
      }, {
        name: 'Kubernetes',
        category: 'DevOps'
      }, {
        name: 'MongoDB',
        category: 'Database'
      }, {
        name: 'PostgreSQL',
        category: 'Database'
      }, {
        name: 'TensorFlow',
        category: 'AI/ML'
      }];
      this.processSteps = [{
        icon: 'pi pi-search',
        title: 'Discovery',
        description: 'Understanding your business needs and goals'
      }, {
        icon: 'pi pi-palette',
        title: 'Design',
        description: 'Creating user-centered designs and prototypes'
      }, {
        icon: 'pi pi-code',
        title: 'Development',
        description: 'Agile development with continuous integration'
      }, {
        icon: 'pi pi-check-circle',
        title: 'Testing',
        description: 'Comprehensive QA and security testing'
      }, {
        icon: 'pi pi-upload',
        title: 'Deployment',
        description: 'Seamless launch with monitoring and support'
      }];
      this.testimonials = [{
        quote: 'Nest Tech AI Solutions delivered our platform ahead of schedule and exceeded all expectations. Their team is truly world-class.',
        author: 'Sarah Johnson',
        company: 'TechStart Inc.',
        rating: 5
      }, {
        quote: 'The best software partner we have ever worked with. Their cloud migration expertise helped us scale 10x faster than expected.',
        author: 'Ahmed Rahman',
        company: 'FinTech Solutions',
        rating: 5
      }, {
        quote: 'Their analytics platform transformed our decision-making process. ROI was achieved within the first quarter.',
        author: 'Priya Sharma',
        company: 'DataCorp',
        rating: 5
      }];
    }
    ngOnInit() {
      this.performanceService.markStart('home-component-init');
    }
    ngAfterViewInit() {
      this.performanceService.markEnd('home-component-init');
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
        setTimeout(() => {
          this.performanceService.reportPerformance();
        }, 2000);
      }
    }
    onImageError(event) {
      console.error('Failed to load CEO image:', event.target.src);
      this.imageError = true;
      event.target.style.display = 'none';
    }
    onImageLoad(event) {
      console.log('CEO image loaded successfully');
      this.imageLoaded = true;
    }
    navigateToServices() {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.router.navigate(['/services']);
    }
    navigateToQuote() {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.router.navigate(['/quote']);
    }
    trackByTech(index, tech) {
      return tech.name;
    }
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_performance_service__WEBPACK_IMPORTED_MODULE_2__.PerformanceService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 64,
        vars: 22,
        consts: [[1, "hero-v2-section"], [1, "hero-v2-background"], [1, "hero-v2-lightray", "one"], [1, "hero-v2-lightray", "two"], [1, "hero-v2-lightray", "three"], [1, "hero-v2-content-card"], [1, "hero-v2-content"], [1, "hero-v2-company-name"], [1, "hero-v2-headline"], [1, "highlight"], [1, "hero-v2-description"], [1, "hero-v2-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", 1, "p-button-raised", "p-button-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Explore Services", 1, "p-button-outlined", "p-button-lg", 3, "click"], [1, "features-section"], [1, "features-container"], [1, "features-header"], [1, "features-grid"], ["styleClass", "feature-card", 4, "ngFor", "ngForOf"], [1, "services-section"], [1, "services-grid"], ["styleClass", "service-card", 4, "ngFor", "ngForOf"], [1, "tech-stack-section"], [1, "tech-stack-container"], [1, "tech-stack-header"], [1, "tech-stack-grid"], ["class", "tech-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "process-section"], [1, "process-container"], [1, "process-header"], [1, "process-steps"], ["class", "process-step", 4, "ngFor", "ngForOf"], [1, "testimonials-section"], ["styleClass", "testimonial-carousel", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval"], ["pTemplate", "item"], [1, "cta-section"], [1, "cta-content"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started Today", 1, "p-button-raised", "p-button-lg", 3, "click"], ["styleClass", "feature-card"], [1, "feature-content"], ["styleClass", "service-card"], [1, "service-content"], [1, "tech-item"], [1, "tech-name"], [1, "tech-category"], [1, "process-step"], [1, "step-number"], [1, "step-icon"], [1, "testimonial-card"], [1, "rating"], ["class", "pi pi-star-fill", 4, "ngFor", "ngForOf"], [1, "quote"], [1, "author"], [1, "pi", "pi-star-fill"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nest Tech AI Solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Digital Solutions, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Engineered for Growth.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " We transform businesses through innovative software solutions, delivering scalable and secure applications that drive real results. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() {
              return ctx.navigateToServices();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() {
              return ctx.navigateToServices();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-software-showcase");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "section", 14)(21, "div", 15)(22, "div", 16)(23, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Why Choose Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Our core values that drive exceptional results for every project");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HomeComponent_p_card_28_Template, 7, 5, "p-card", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "section", 19)(30, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Our Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, HomeComponent_p_card_33_Template, 7, 5, "p-card", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 22)(35, "div", 23)(36, "div", 24)(37, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Technologies We Master");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Cutting-edge tools and frameworks powering our solutions");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 5, 3, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "section", 27)(44, "div", 28)(45, "div", 29)(46, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Our Development Process");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Proven methodology ensuring successful project delivery");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, HomeComponent_div_51_Template, 9, 6, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "section", 32)(53, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "What Our Clients Say");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p-carousel", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, HomeComponent_ng_template_56_Template, 10, 6, "ng-template", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "section", 35)(58, "div", 36)(59, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Ready to Transform Your Business?");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Let's build something amazing together.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_63_listener() {
              return ctx.navigateToQuote();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideUp", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.features);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.services);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.technologies)("ngForTrackBy", ctx.trackByTech);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.processSteps);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.testimonials)("numVisible", 1)("numScroll", 1)("circular", true)("autoplayInterval", 5000);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bounceIn", undefined);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_card__WEBPACK_IMPORTED_MODULE_8__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_chip__WEBPACK_IMPORTED_MODULE_10__.ChipModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_11__.Carousel, primeng_tag__WEBPACK_IMPORTED_MODULE_12__.TagModule, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule, _software_showcase_component__WEBPACK_IMPORTED_MODULE_1__.SoftwareShowcaseComponent],
        styles: [".hero-v2-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 600px;\n  padding: 4rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: var(--surface-ground);\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-background[_ngcontent-%COMP%]   .hero-v2-lightray[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(45deg, var(--primary-color) 0%, var(--primary-lighter-color) 100%);\n  opacity: 0.1;\n  border-radius: 50%;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-background[_ngcontent-%COMP%]   .hero-v2-lightray.one[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 1000px;\n  top: -400px;\n  left: -200px;\n  transform: rotate(-15deg);\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-background[_ngcontent-%COMP%]   .hero-v2-lightray.two[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n  bottom: -300px;\n  right: -100px;\n  transform: rotate(15deg);\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-background[_ngcontent-%COMP%]   .hero-v2-lightray.three[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  width: 100%;\n  padding: 2rem;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-company-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-headline[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-headline[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-headline[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-secondary-color);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.hero-v2-section[_ngcontent-%COMP%]   .hero-v2-content[_ngcontent-%COMP%]   .hero-v2-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-card);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 2rem;\n  background: var(--surface-hover);\n  border-radius: 1rem;\n  transition: transform 0.3s ease;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 1.1rem;\n}\n\n.features-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.features-section[_ngcontent-%COMP%]   .features-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.features-section[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card {\n  height: 100%;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  transition: transform 0.3s ease;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card:hover {\n  transform: translateY(-5px);\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card .feature-content {\n  text-align: center;\n  padding: 2rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card .feature-content i {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n  margin-bottom: 1.5rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card .feature-content h3 {\n  font-size: 1.5rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]     .feature-card .feature-content p {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n}\n\n.services-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.services-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  color: var(--text-color);\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card {\n  height: 100%;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  transition: transform 0.3s ease;\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card:hover {\n  transform: translateY(-5px);\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-content {\n  text-align: center;\n  padding: 2rem;\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-content i {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n  margin-bottom: 1.5rem;\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-content h3 {\n  font-size: 1.5rem;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%]     .service-card .service-content p {\n  color: var(--text-secondary-color);\n  line-height: 1.6;\n}\n\n.tech-stack-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-card);\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    gap: 0.75rem;\n  }\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  border: 1px solid var(--surface-border);\n  border-radius: 0.75rem;\n  padding: 1rem;\n  text-align: center;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: var(--primary-color);\n  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.15);\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   .tech-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.tech-stack-section[_ngcontent-%COMP%]   .tech-stack-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   .tech-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary-color);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.process-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-ground);\n}\n.process-section[_ngcontent-%COMP%]   .process-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.process-section[_ngcontent-%COMP%]   .process-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.process-section[_ngcontent-%COMP%]   .process-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 1rem;\n}\n.process-section[_ngcontent-%COMP%]   .process-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-secondary-color);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  position: relative;\n}\n@media (min-width: 1024px) {\n  .process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: 2.5rem;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-color-light) 50%, var(--primary-color) 100%);\n    z-index: 0;\n    opacity: 0.3;\n  }\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  padding: 2rem;\n  text-align: center;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 1px solid var(--surface-border);\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-shadow-hover);\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  background: var(--primary-color);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  border: 3px solid var(--surface-card);\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  margin: 1rem 0 1.5rem;\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 0.75rem;\n}\n.process-section[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .process-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary-color);\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.testimonials-section[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n  background: var(--surface-section);\n}\n.testimonials-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  color: var(--text-color);\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .p-carousel-indicators {\n  margin-top: 2rem;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .p-carousel-indicators .p-carousel-indicator button {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background: var(--surface-300);\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .p-carousel-indicators .p-carousel-indicator button.p-highlight {\n  background: var(--primary-color);\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 3rem;\n  background: var(--surface-card);\n  border-radius: 1rem;\n  text-align: center;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .rating {\n  margin-bottom: 1.5rem;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .rating i {\n  color: var(--primary-color);\n  font-size: 1.5rem;\n  margin: 0 0.2rem;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .quote {\n  font-size: 1.2rem;\n  color: var(--text-color);\n  line-height: 1.8;\n  margin-bottom: 2rem;\n  font-style: italic;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .author {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .author strong {\n  color: var(--text-color);\n  font-size: 1.1rem;\n}\n.testimonials-section[_ngcontent-%COMP%]     .testimonial-carousel .testimonial-card .author span {\n  color: var(--text-secondary-color);\n}\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);\n  pointer-events: none;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 1.2rem;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: 2.5rem;\n  line-height: 1.6;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: 1rem 2.5rem;\n  min-width: 220px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%] {\n  background: #ff9800;\n  border-color: #ff9800;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-raised[_ngcontent-%COMP%]:hover {\n  background: #fb8c00;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   button.p-button-outlined[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: #ffffff;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUGVyc29uYWwlMjBXb3Jrc3BhY2UvU2hlaG5hei1Tb2Z0d2FyZS1Tb2x1dGlvbnMvc3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNBRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0YsVUFBQTtFQUNFLGdCQUFBO0FDQUo7QURFQTtFQUNFLGtCQUFBO0VBQ0ksOEZBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREVFO0VBQ00sYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQVI7QURHRTtFQUNNLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0RSO0FESUU7RUFDTSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNGUjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtBQ05KO0FEUUE7RUFDRSxpQkFBQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDSixnQkFBQTtBQ05GO0FEU0E7RUFDTSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNKLGdCQUFBO0FDUEY7QURTRTtFQUNNLDJCQUFBO0FDUFI7QURVTTtFQVhOO0lBWVEsaUJBQUE7RUNQTjtBQUNGO0FEVUE7RUFDRSxpQkFBQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1JOO0FEV0E7RUFDRSxhQUFBO0VBQ0ksU0FBQTtFQUNKLHVCQUFBO0FDVEY7QURXTTtFQUxOO0lBTVEsc0JBQUE7SUFDQSxvQkFBQTtFQ1JOO0FBQ0Y7QURVTTtFQUNFLGdCQUFBO0FDUlI7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0FDWkY7QURjRTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUNaSjtBRGNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNaTjtBRGNNO0VBQ0UsMkJBQUE7QUNaUjtBRGVNO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQ2JSO0FEaUJBO0VBQ1UsZUFBQTtFQUNSLGdCQUFBO0VBQ1Esd0JBQUE7RUFDQSxxQkFBQTtBQ2ZWO0FEa0JBO0VBQ1Usa0NBQUE7RUFDUixpQkFBQTtBQ2hCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FDckJGO0FEdUJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDckJKO0FEd0JFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ3RCSjtBRHdCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDdEJOO0FEeUJJO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZCTjtBRDJCRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUN6Qko7QUQyQkk7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDekJOO0FEMkJFO0VBQ00sMkJBQUE7QUN6QlI7QUQ0Qk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUMxQlI7QUQ0QlE7RUFDRSxpQkFBQTtFQUNOLDJCQUFBO0VBQ00scUJBQUE7QUMxQlY7QUQ2QlE7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUMzQlY7QUQ4QlE7RUFDRSxrQ0FBQTtFQUNOLGdCQUFBO0FDNUJKOztBRG9DQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7QUNqQ0Y7QURtQ0U7RUFDQSxrQkFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ2pDSjtBRG9DRTtFQUNFLGlCQUFBO0VBQ0YsY0FBQTtFQUNBLGFBQUE7RUFDRSwyREFBQTtFQUNBLFNBQUE7QUNsQ0o7QURvQ0k7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNGLCtCQUFBO0FDbENKO0FEb0NFO0VBQ00sMkJBQUE7QUNsQ1I7QURxQ007RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNuQ1I7QURxQ1E7RUFDRixpQkFBQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUNuQ1Y7QURzQ1E7RUFDSixpQkFBQTtFQUNNLHdCQUFBO0VBQ04sbUJBQUE7QUNwQ0o7QUR1Q0U7RUFDUSxrQ0FBQTtFQUNOLGdCQUFBO0FDckNKOztBRDZDQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUMxQ0Y7QUQ0Q0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUMxQ0o7QUQ2Q0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDM0NKO0FENkNJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUMzQ047QUQ4Q0k7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDNUNOO0FEZ0RFO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtBQzlDSjtBRGdESTtFQUxGO0lBTUksNERBQUE7SUFDQSxZQUFBO0VDN0NKO0FBQ0Y7QUQrQ0k7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUM3Q047QUQrQ007RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkRBQUE7QUM3Q1I7QURnRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQzlDUjtBRGlETTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDL0NSOztBRHNEQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUNuREY7QURxREU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNuREo7QURzREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDcERKO0FEc0RJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNwRE47QUR1REk7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDckROO0FEeURFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDdkRKO0FEeURJO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0Esc0hBQUE7SUFJQSxVQUFBO0lBQ0EsWUFBQTtFQzFETjtBQUNGO0FENkRJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdUNBQUE7QUMzRE47QUQ2RE07RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0FDM0RSO0FEOERNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUM1RFI7QUQrRE07RUFDRSxxQkFBQTtBQzdEUjtBRCtEUTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUM3RFY7QURpRU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQy9EUjtBRGtFTTtFQUNFLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNoRVI7O0FEdUVBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQ3BFRjtBRHNFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDcEVKO0FEd0VJO0VBQ0UsZ0JBQUE7QUN0RU47QUR3RU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUN0RVI7QUR3RVE7RUFDRSxnQ0FBQTtBQ3RFVjtBRDJFQTtFQUNNLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN6RU47QUQyRU07RUFDRSxxQkFBQTtBQ3pFUjtBRDJFUTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3pFVjtBRDZFTTtFQUNBLGlCQUFBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ04sa0JBQUE7QUMzRUY7QUQ4RU07RUFDSixhQUFBO0VBQ0Esc0JBQUE7RUFDTSxXQUFBO0FDNUVSO0FEOEVNO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQzVFVjtBRCtFTTtFQUNJLGtDQUFBO0FDN0VWOztBRHFGQTtFQUNFLGtCQUFBO0VBQ0EsMEVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNsRkY7QURvRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEZBQUE7RUFDQSxvQkFBQTtBQ2xGSjtBRHFGRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ25GSjtBRHFGSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ25GTjtBRHFGTTtFQVBGO0lBUUksaUJBQUE7RUNsRk47QUFDRjtBRG9GTTtFQVhGO0lBWUksaUJBQUE7RUNqRk47QUFDRjtBRG9GSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEZOO0FEb0ZNO0VBVEY7SUFVSSxpQkFBQTtFQ2pGTjtBQUNGO0FEb0ZJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNsRk47QURvRk07RUFORjtJQU9JLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0VDakZOO0FBQ0Y7QURtRk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqRlI7QURtRlE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2pGVjtBRG1GVTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBQ2pGWjtBRHFGUTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDbkZWO0FEcUZVO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDbkZaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVybyBTZWN0aW9uXHJcbi5oZXJvLXYyLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG5cclxuLmhlcm8tdjItYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4uaGVyby12Mi1saWdodHJheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpIDEwMCUpO1xyXG4gICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgJi5vbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgdG9wOiAtNDAwcHg7XHJcbiAgICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgJi50d28ge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTMwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICYudGhyZWUge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5oZXJvLXYyLWNvbnRlbnQtY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmhlcm8tdjItY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4uaGVyby12Mi1jb21wYW55LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlcm8tdjItaGVhZGxpbmUge1xyXG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLXYyLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlcm8tdjItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdGF0cyBTZWN0aW9uXHJcbi5zdGF0cy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuXHJcbiAgLnN0YXRzLWdyaWQge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIC5zdGF0LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEuNXJlbTtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXQtY29udGVudCB7XHJcbi5zdGF0LW51bWJlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZlYXR1cmVzIFNlY3Rpb25cclxuLmZlYXR1cmVzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XHJcblxyXG4gIC5mZWF0dXJlcy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlcy1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICA6Om5nLWRlZXAgLmZlYXR1cmUtY2FyZCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmVhdHVyZS1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTZXJ2aWNlcyBTZWN0aW9uXHJcbi5zZXJ2aWNlcy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuXHJcbiAgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlcy1ncmlkIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlcnZpY2UtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZWNobm9sb2d5IFN0YWNrIFNlY3Rpb25cclxuLnRlY2gtc3RhY2stc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcblxyXG4gIC50ZWNoLXN0YWNrLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRlY2gtc3RhY2staGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGVjaC1zdGFjay1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcclxuICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWNoLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4xNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZWNoLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRlY2gtY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGV2ZWxvcG1lbnQgUHJvY2VzcyBTZWN0aW9uXHJcbi5wcm9jZXNzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XHJcblxyXG4gIC5wcm9jZXNzLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnByb2Nlc3MtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvY2Vzcy1zdGVwcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIuNXJlbTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgXHJcbiAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgXHJcbiAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSA1MCUsIFxyXG4gICAgICAgICAgdmFyKC0tcHJpbWFyeS1jb2xvcikgMTAwJSk7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvY2Vzcy1zdGVwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3ctaG92ZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcC1udW1iZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xcmVtO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcC1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVGVzdGltb25pYWxzIFNlY3Rpb25cclxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zZWN0aW9uKTtcclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCB7XHJcbiAgICAucC1jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAgIC5wLWNhcm91c2VsLWluZGljYXRvciBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0zMDApO1xyXG5cclxuICAgICAgICAmLnAtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4udGVzdGltb25pYWwtY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAucmF0aW5nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnF1b3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICAgICAgLmF1dGhvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDVEEgU2VjdGlvblxyXG4uY3RhLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDVyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWEyMzdlIDAlLCAjMjgzNTkzIDUwJSwgIzM5NDlhYiAxMDAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3RhLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN0YS1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAxLjJyZW07XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICYucC1idXR0b24tcmFpc2VkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjk4MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiOGMwMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnAtYnV0dG9uLW91dGxpbmVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59ICIsIi5oZXJvLXYyLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItYmFja2dyb3VuZCAuaGVyby12Mi1saWdodHJheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgdmFyKC0tcHJpbWFyeS1saWdodGVyLWNvbG9yKSAxMDAlKTtcbiAgb3BhY2l0eTogMC4xO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWJhY2tncm91bmQgLmhlcm8tdjItbGlnaHRyYXkub25lIHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHRvcDogLTQwMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWJhY2tncm91bmQgLmhlcm8tdjItbGlnaHRyYXkudHdvIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBib3R0b206IC0zMDBweDtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xufVxuLmhlcm8tdjItc2VjdGlvbiAuaGVyby12Mi1iYWNrZ3JvdW5kIC5oZXJvLXYyLWxpZ2h0cmF5LnRocmVlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWNvbnRlbnQgLmhlcm8tdjItY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudCAuaGVyby12Mi1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudCAuaGVyby12Mi1oZWFkbGluZSAuaGlnaGxpZ2h0IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudCAuaGVyby12Mi1oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbi5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudCAuaGVyby12Mi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmhlcm8tdjItc2VjdGlvbiAuaGVyby12Mi1jb250ZW50IC5oZXJvLXYyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZXJvLXYyLXNlY3Rpb24gLmhlcm8tdjItY29udGVudCAuaGVyby12Mi1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG4uaGVyby12Mi1zZWN0aW9uIC5oZXJvLXYyLWNvbnRlbnQgLmhlcm8tdjItYWN0aW9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uc3RhdHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbn1cbi5zdGF0cy1zZWN0aW9uIC5zdGF0cy1ncmlkIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xufVxuLnN0YXRzLXNlY3Rpb24gLnN0YXRzLWdyaWQgLnN0YXQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zdGF0cy1zZWN0aW9uIC5zdGF0cy1ncmlkIC5zdGF0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uc3RhdHMtc2VjdGlvbiAuc3RhdHMtZ3JpZCAuc3RhdC1pdGVtIGkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnN0YXRzLXNlY3Rpb24gLnN0YXRzLWdyaWQgLnN0YXQtaXRlbSAuc3RhdC1jb250ZW50IC5zdGF0LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uc3RhdHMtc2VjdGlvbiAuc3RhdHMtZ3JpZCAuc3RhdC1pdGVtIC5zdGF0LWNvbnRlbnQgLnN0YXQtbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmZlYXR1cmVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZmVhdHVyZXMtc2VjdGlvbiAuZmVhdHVyZXMtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmZlYXR1cmVzLXNlY3Rpb24gLmZlYXR1cmVzLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZmVhdHVyZXMtc2VjdGlvbiAuZmVhdHVyZXMtaGVhZGVyIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZmVhdHVyZXMtc2VjdGlvbiAuZmVhdHVyZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG59XG4uZmVhdHVyZXMtc2VjdGlvbiAuZmVhdHVyZXMtZ3JpZCA6Om5nLWRlZXAgLmZlYXR1cmUtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlcy1ncmlkIDo6bmctZGVlcCAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLmZlYXR1cmVzLXNlY3Rpb24gLmZlYXR1cmVzLWdyaWQgOjpuZy1kZWVwIC5mZWF0dXJlLWNhcmQgLmZlYXR1cmUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlcy1ncmlkIDo6bmctZGVlcCAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLWNvbnRlbnQgaSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5mZWF0dXJlcy1zZWN0aW9uIC5mZWF0dXJlcy1ncmlkIDo6bmctZGVlcCAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmZlYXR1cmVzLXNlY3Rpb24gLmZlYXR1cmVzLWdyaWQgOjpuZy1kZWVwIC5mZWF0dXJlLWNhcmQgLmZlYXR1cmUtY29udGVudCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc2VjdGlvbik7XG59XG4uc2VydmljZXMtc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1ncmlkIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLnNlcnZpY2VzLWdyaWQgOjpuZy1kZWVwIC5zZXJ2aWNlLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1jb250ZW50IGkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtZ3JpZCA6Om5nLWRlZXAgLnNlcnZpY2UtY2FyZCAuc2VydmljZS1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1ncmlkIDo6bmctZGVlcCAuc2VydmljZS1jYXJkIC5zZXJ2aWNlLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi50ZWNoLXN0YWNrLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG59XG4udGVjaC1zdGFjay1zZWN0aW9uIC50ZWNoLXN0YWNrLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50ZWNoLXN0YWNrLXNlY3Rpb24gLnRlY2gtc3RhY2staGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50ZWNoLXN0YWNrLXNlY3Rpb24gLnRlY2gtc3RhY2stZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50ZWNoLXN0YWNrLXNlY3Rpb24gLnRlY2gtc3RhY2stZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1ncmlkIC50ZWNoLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1ncmlkIC50ZWNoLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMTUpO1xufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1ncmlkIC50ZWNoLWl0ZW0gLnRlY2gtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnRlY2gtc3RhY2stc2VjdGlvbiAudGVjaC1zdGFjay1ncmlkIC50ZWNoLWl0ZW0gLnRlY2gtY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5wcm9jZXNzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbn1cbi5wcm9jZXNzLXNlY3Rpb24gLnByb2Nlc3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnByb2Nlc3Mtc2VjdGlvbiAucHJvY2Vzcy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4ucHJvY2Vzcy1zZWN0aW9uIC5wcm9jZXNzLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucHJvY2Vzcy1zZWN0aW9uIC5wcm9jZXNzLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnByb2Nlc3Mtc2VjdGlvbiAucHJvY2Vzcy1zdGVwcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnByb2Nlc3Mtc2VjdGlvbiAucHJvY2Vzcy1zdGVwczo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIuNXJlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpIDUwJSwgdmFyKC0tcHJpbWFyeS1jb2xvcikgMTAwJSk7XG4gICAgei1pbmRleDogMDtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbi5wcm9jZXNzLXNlY3Rpb24gLnByb2Nlc3Mtc3RlcHMgLnByb2Nlc3Mtc3RlcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuLnByb2Nlc3Mtc2VjdGlvbiAucHJvY2Vzcy1zdGVwcyAucHJvY2Vzcy1zdGVwOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdy1ob3Zlcik7XG59XG4ucHJvY2Vzcy1zZWN0aW9uIC5wcm9jZXNzLXN0ZXBzIC5wcm9jZXNzLXN0ZXAgLnN0ZXAtbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3VyZmFjZS1jYXJkKTtcbn1cbi5wcm9jZXNzLXNlY3Rpb24gLnByb2Nlc3Mtc3RlcHMgLnByb2Nlc3Mtc3RlcCAuc3RlcC1pY29uIHtcbiAgbWFyZ2luOiAxcmVtIDAgMS41cmVtO1xufVxuLnByb2Nlc3Mtc2VjdGlvbiAucHJvY2Vzcy1zdGVwcyAucHJvY2Vzcy1zdGVwIC5zdGVwLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4ucHJvY2Vzcy1zZWN0aW9uIC5wcm9jZXNzLXN0ZXBzIC5wcm9jZXNzLXN0ZXAgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cbi5wcm9jZXNzLXNlY3Rpb24gLnByb2Nlc3Mtc3RlcHMgLnByb2Nlc3Mtc3RlcCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNlY3Rpb24pO1xufVxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIDo6bmctZGVlcCAudGVzdGltb25pYWwtY2Fyb3VzZWwgLnAtY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4udGVzdGltb25pYWxzLXNlY3Rpb24gOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCAucC1jYXJvdXNlbC1pbmRpY2F0b3JzIC5wLWNhcm91c2VsLWluZGljYXRvciBidXR0b24ge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMzAwKTtcbn1cbi50ZXN0aW1vbmlhbHMtc2VjdGlvbiA6Om5nLWRlZXAgLnRlc3RpbW9uaWFsLWNhcm91c2VsIC5wLWNhcm91c2VsLWluZGljYXRvcnMgLnAtY2Fyb3VzZWwtaW5kaWNhdG9yIGJ1dHRvbi5wLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIDo6bmctZGVlcCAudGVzdGltb25pYWwtY2Fyb3VzZWwgLnRlc3RpbW9uaWFsLWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogM3JlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIDo6bmctZGVlcCAudGVzdGltb25pYWwtY2Fyb3VzZWwgLnRlc3RpbW9uaWFsLWNhcmQgLnJhdGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi50ZXN0aW1vbmlhbHMtc2VjdGlvbiA6Om5nLWRlZXAgLnRlc3RpbW9uaWFsLWNhcm91c2VsIC50ZXN0aW1vbmlhbC1jYXJkIC5yYXRpbmcgaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogMCAwLjJyZW07XG59XG4udGVzdGltb25pYWxzLXNlY3Rpb24gOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCAudGVzdGltb25pYWwtY2FyZCAucXVvdGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udGVzdGltb25pYWxzLXNlY3Rpb24gOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCAudGVzdGltb25pYWwtY2FyZCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG4udGVzdGltb25pYWxzLXNlY3Rpb24gOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCAudGVzdGltb25pYWwtY2FyZCAuYXV0aG9yIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4udGVzdGltb25pYWxzLXNlY3Rpb24gOjpuZy1kZWVwIC50ZXN0aW1vbmlhbC1jYXJvdXNlbCAudGVzdGltb25pYWwtY2FyZCAuYXV0aG9yIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uY3RhLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTIzN2UgMCUsICMyODM1OTMgNTAlLCAjMzk0OWFiIDEwMCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jdGEtc2VjdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMi44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4ycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY3RhLXNlY3Rpb24gLmN0YS1jb250ZW50IC5jdGEtYWN0aW9ucyBidXR0b24ucC1idXR0b24tcmFpc2VkIHtcbiAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIGJ1dHRvbi5wLWJ1dHRvbi1yYWlzZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmI4YzAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyNTUsIDE1MiwgMCwgMC4zKTtcbn1cbi5jdGEtc2VjdGlvbiAuY3RhLWNvbnRlbnQgLmN0YS1hY3Rpb25zIGJ1dHRvbi5wLWJ1dHRvbi1vdXRsaW5lZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmN0YS1zZWN0aW9uIC5jdGEtY29udGVudCAuY3RhLWFjdGlvbnMgYnV0dG9uLnAtYnV0dG9uLW91dGxpbmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('900ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('slideUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'translateY(40px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('900ms 400ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('slideInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'translateX(-60px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('800ms 300ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'translateX(60px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('800ms 300ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'none',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(0.8)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('700ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(1)',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('staggerList', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('600ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            opacity: 1,
            transform: 'translateY(0)'
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('bounceIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(0.3)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('800ms 400ms cubic-bezier(.68,-0.55,.265,1.55)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(1)',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'translateY(60px)',
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('1000ms 500ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'translateY(0)',
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('pulse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)('2000ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(1)',
            offset: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(1.05)',
            offset: 0.5
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({
            transform: 'scale(1)',
            offset: 1
          })]))])])]
        },
        changeDetection: 0
      });
    }
  }
  return HomeComponent;
})();

/***/ }),

/***/ 2829:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3738);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/divider */ 6171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



// PrimeNG Imports









let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {
    static {
      this.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
          path: '',
          component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
        }]), primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_chip__WEBPACK_IMPORTED_MODULE_7__.ChipModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.TagModule, primeng_divider__WEBPACK_IMPORTED_MODULE_10__.DividerModule]
      });
    }
  }
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_chip__WEBPACK_IMPORTED_MODULE_7__.ChipModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.TagModule, primeng_divider__WEBPACK_IMPORTED_MODULE_10__.DividerModule]
  });
})();

/***/ }),

/***/ 3613:
/*!**************************************************************!*\
  !*** ./src/app/features/home/software-showcase.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoftwareShowcaseComponent: () => (/* binding */ SoftwareShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chip */ 5678);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);













function SoftwareShowcaseComponent_div_2_p_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-chip", 18);
  }
  if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tech_r2);
  }
}
function SoftwareShowcaseComponent_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r3);
  }
}
function SoftwareShowcaseComponent_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function SoftwareShowcaseComponent_div_2_div_24_Template_img_error_1_listener() {
      const svg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onImageError(svg_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const svg_r7 = ctx.$implicit;
    const software_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", svg_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", software_r4.name + " illustration");
  }
}
function SoftwareShowcaseComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SoftwareShowcaseComponent_div_2_p_chip_7_Template, 1, 1, "p-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SoftwareShowcaseComponent_div_2_div_9_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Active Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoftwareShowcaseComponent_div_2_Template_button_click_21_listener() {
      const software_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.router.navigate(["/product", software_r4.id]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15)(23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SoftwareShowcaseComponent_div_2_div_24_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const software_r4 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reverse", i_r8 % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](software_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](software_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", software_r4.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", software_r4.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", software_r4.users, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](software_r4.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", software_r4.svgs);
  }
}
let SoftwareShowcaseComponent = /*#__PURE__*/(() => {
  class SoftwareShowcaseComponent {
    constructor(router) {
      this.router = router;
      this.softwareList = [{
        id: 'healthconnect',
        name: 'HealthConnect Pro',
        description: 'A comprehensive healthcare management system that revolutionizes patient care. Our platform seamlessly integrates electronic health records, telemedicine, and AI-powered diagnostics to provide an unparalleled healthcare experience.',
        features: ['Real-time patient monitoring', 'AI-assisted diagnosis', 'Secure health records management', 'Integrated billing system'],
        technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'WebRTC'],
        users: '50,000',
        rating: '4.8',
        svgs: ['assets/software-showcase/healthconnect-dashboard.svg', 'assets/software-showcase/healthconnect-patient-records.svg', 'assets/software-showcase/healthconnect-telemedicine.svg', 'assets/software-showcase/healthconnect-analytics.svg', 'assets/software-showcase/healthconnect-calendar.svg']
      }, {
        id: 'fintech',
        name: 'FinTech Suite',
        description: 'A comprehensive financial technology platform featuring a corporate web portal for bulk processing, portfolio management, and analytics, plus a feature-rich mobile application for individual users. Empowering businesses and consumers with advanced financial tools.',
        features: ['Corporate web dashboard for bulk processing', 'Portfolio management & investment tracking', 'Mobile app with stocks & mutual funds', 'Rewards, referrals & loyalty programs', 'Advance salary & account upgrades', 'Secure payments & international transfers'],
        technologies: ['Angular', 'Flutter', 'Python', 'PostgreSQL', 'Node.js', 'Redis'],
        users: '75,000',
        rating: '4.9',
        svgs: ['assets/product-details/fintech/corporate-dashboard.svg', 'assets/product-details/fintech/mobile-stocks-funds.svg', 'assets/product-details/fintech/web-portfolio-analytics.svg', 'assets/product-details/fintech/mobile-rewards-spin.svg', 'assets/product-details/fintech/mobile-payments-upgrades.svg']
      }, {
        id: 'smartretail',
        name: 'SmartRetail Pro',
        description: 'A next-generation retail management platform that brings together inventory management, point of sale, and customer analytics. Empower your retail business with AI-driven insights and seamless operations.',
        features: ['Smart inventory tracking', 'AI-powered analytics', 'Customer behavior insights', 'Automated reordering'],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'TensorFlow', 'Redis'],
        users: '30,000',
        rating: '4.7',
        svgs: ['assets/software-showcase/smartretail-dashboard.svg', 'assets/software-showcase/smartretail-inventory.svg', 'assets/software-showcase/smartretail-pos.svg', 'assets/software-showcase/smartretail-customer-analytics.svg', 'assets/software-showcase/smartretail-supply-chain.svg']
      }];
    }
    ngOnInit() {
      // Log SVG paths to verify they're correct
      this.softwareList.forEach(software => {
        console.log('Loading SVGs for:', software.name);
        software.svgs.forEach(svg => console.log('SVG path:', svg));
      });
    }
    onImageError(svg) {
      console.error('Failed to load SVG:', svg);
    }
    static {
      this.ɵfac = function SoftwareShowcaseComponent_Factory(t) {
        return new (t || SoftwareShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SoftwareShowcaseComponent,
        selectors: [["app-software-showcase"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 2,
        consts: [[1, "software-showcase"], [1, "showcase-container"], ["class", "showcase-item", 3, "reverse", 4, "ngFor", "ngForOf"], [1, "showcase-item"], [1, "content-side"], [1, "description"], [1, "tech-stack"], [3, "label", 4, "ngFor", "ngForOf"], [1, "features"], ["class", "feature", 4, "ngFor", "ngForOf"], [1, "stats"], [1, "stat"], [1, "value"], [1, "label"], ["pButton", "", "pRipple", "", "type", "button", "label", "Learn More", 1, "p-button-outlined", 3, "click"], [1, "image-side"], [1, "image-grid"], ["class", "image-item", 4, "ngFor", "ngForOf"], [3, "label"], [1, "feature"], [1, "pi", "pi-check-circle"], [1, "image-item"], [1, "svg-image", 3, "error", "src", "alt"]],
        template: function SoftwareShowcaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SoftwareShowcaseComponent_div_2_Template, 25, 10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.softwareList);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_chip__WEBPACK_IMPORTED_MODULE_5__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_5__.Chip, primeng_card__WEBPACK_IMPORTED_MODULE_6__.CardModule, primeng_tag__WEBPACK_IMPORTED_MODULE_7__.TagModule],
        styles: [".software-showcase[_ngcontent-%COMP%] {\n  padding: 8rem 2rem;\n  background: var(--surface-ground);\n  overflow: hidden;\n  position: relative;\n}\n.software-showcase[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: linear-gradient(90deg, rgba(var(--primary-color-rgb), 0), rgba(var(--primary-color-rgb), 0.2), rgba(var(--primary-color-rgb), 0));\n}\n\n.showcase-container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n\n.showcase-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4rem;\n  margin-bottom: 8rem;\n  min-height: 600px;\n}\n.showcase-item.reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.showcase-item.reverse[_ngcontent-%COMP%]   .content-side[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4rem;\n}\n@media (max-width: 1024px) {\n  .showcase-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2rem;\n    margin-bottom: 4rem;\n  }\n  .showcase-item.reverse[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .showcase-item.reverse[_ngcontent-%COMP%]   .content-side[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n\n.content-side[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 4rem;\n}\n@media (max-width: 1024px) {\n  .content-side[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n}\n.content-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-text));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.content-side[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  color: var(--text-color-secondary);\n  margin-bottom: 2rem;\n}\n.content-side[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 1024px) {\n  .content-side[_ngcontent-%COMP%]   .tech-stack[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.content-side[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.content-side[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n@media (max-width: 1024px) {\n  .content-side[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.content-side[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin-right: 1rem;\n}\n.content-side[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.1rem;\n}\n.content-side[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 1024px) {\n  .content-side[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.content-side[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content-side[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n}\n.content-side[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n}\n\n.image-side[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 600px;\n  position: relative;\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 3rem;\n  padding: 3rem;\n  position: relative;\n}\n@media (max-width: 1024px) {\n  .image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  background: var(--surface-card);\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n  z-index: 1;\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]   .svg-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]:first-child {\n  grid-column: 1/-1;\n  grid-row: 1;\n  aspect-ratio: 2/1;\n}\n.image-side[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]:first-child   .svg-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9zb2Z0d2FyZS1zaG93Y2FzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9QZXJzb25hbCUyMFdvcmtzcGFjZS9TaGVobmF6LVNvZnR3YXJlLVNvbHV0aW9ucy9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvc29mdHdhcmUtc2hvd2Nhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREVNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZJQUFBO0FDQVI7O0FET0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNKTjs7QURPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSk47QURNTTtFQUNFLDJCQUFBO0FDSlI7QURNUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0pWO0FEUU07RUFoQkY7SUFpQkksc0JBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUNMTjtFRE9NO0lBQ0Usc0JBQUE7RUNMUjtFRE9RO0lBQ0UsZ0JBQUE7RUNMVjtBQUNGOztBRFVJO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDUE47QURTTTtFQUpGO0lBS0ksZUFBQTtJQUNBLGtCQUFBO0VDTk47QUFDRjtBRFFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtRkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNOUjtBRFNNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFVNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNSUjtBRFVRO0VBTkY7SUFPSSx1QkFBQTtFQ1BSO0FBQ0Y7QURVTTtFQUNFLG1CQUFBO0FDUlI7QURVUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUlY7QURVVTtFQUxGO0lBTUksdUJBQUE7RUNQVjtBQUNGO0FEU1U7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDUFo7QURVVTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUNSWjtBRGFNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEYVE7RUFMRjtJQU1JLHVCQUFBO0VDVlI7QUFDRjtBRFlRO0VBQ0Usa0JBQUE7QUNWVjtBRFlVO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDVlo7QURhVTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtBQ1haOztBRGlCSTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZE47QURnQk07RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDZFI7QURnQlE7RUFQRjtJQVFJLDBCQUFBO0lBQ0EsU0FBQTtFQ2JSO0FBQ0Y7QURlUTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2JWO0FEZVU7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FDYlo7QURnQlU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0ZBQUE7RUFDQSxVQUFBO0FDZFo7QURpQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FDZlo7QURrQlU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2hCWjtBRGtCWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQmQiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc29mdHdhcmUtc2hvd2Nhc2Uge1xuICAgICAgcGFkZGluZzogOHJlbSAycmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgXG4gICAgICAgICAgcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDApLCBcbiAgICAgICAgICByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4yKSwgXG4gICAgICAgICAgcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvd2Nhc2UtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5zaG93Y2FzZS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuXG4gICAgICAmLnJldmVyc2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAgICAgLmNvbnRlbnQtc2lkZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG5cbiAgICAgICAgJi5yZXZlcnNlIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLmNvbnRlbnQtc2lkZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LXNpZGUge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KSk7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cblxuICAgICAgLnRlY2gtc3RhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZmVhdHVyZXMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAgIC5mZWF0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zdGF0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZS1zaWRlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmltYWdlLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBnYXA6IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDNyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLWl0ZW0ge1xuICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdmctaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDIvMTtcblxuICAgICAgICAgICAgLnN2Zy1pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAiLCIuc29mdHdhcmUtc2hvd2Nhc2Uge1xuICBwYWRkaW5nOiA4cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvZnR3YXJlLXNob3djYXNlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwKSwgcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMiksIHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwKSk7XG59XG5cbi5zaG93Y2FzZS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNob3djYXNlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDhyZW07XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuLnNob3djYXNlLWl0ZW0ucmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5zaG93Y2FzZS1pdGVtLnJldmVyc2UgLmNvbnRlbnQtc2lkZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNob3djYXNlLWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIH1cbiAgLnNob3djYXNlLWl0ZW0ucmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuc2hvd2Nhc2UtaXRlbS5yZXZlcnNlIC5jb250ZW50LXNpZGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuLmNvbnRlbnQtc2lkZSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRlbnQtc2lkZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnQtc2lkZSBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jb250ZW50LXNpZGUgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRlbnQtc2lkZSAudGVjaC1zdGFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250ZW50LXNpZGUgLnRlY2gtc3RhY2sge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uY29udGVudC1zaWRlIC5mZWF0dXJlcyB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uY29udGVudC1zaWRlIC5mZWF0dXJlcyAuZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250ZW50LXNpZGUgLmZlYXR1cmVzIC5mZWF0dXJlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnQtc2lkZSAuZmVhdHVyZXMgLmZlYXR1cmUgaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmNvbnRlbnQtc2lkZSAuZmVhdHVyZXMgLmZlYXR1cmUgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uY29udGVudC1zaWRlIC5zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRlbnQtc2lkZSAuc3RhdHMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uY29udGVudC1zaWRlIC5zdGF0cyAuc3RhdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LXNpZGUgLnN0YXRzIC5zdGF0IC52YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29udGVudC1zaWRlIC5zdGF0cyAuc3RhdCAubGFiZWwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pbWFnZS1zaWRlIHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWFnZS1zaWRlIC5pbWFnZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAzcmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbWFnZS1zaWRlIC5pbWFnZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDJyZW07XG4gIH1cbn1cbi5pbWFnZS1zaWRlIC5pbWFnZS1ncmlkIC5pbWFnZS1pdGVtIHtcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZS1zaWRlIC5pbWFnZS1ncmlkIC5pbWFnZS1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5pbWFnZS1zaWRlIC5pbWFnZS1ncmlkIC5pbWFnZS1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICB6LWluZGV4OiAxO1xufVxuLmltYWdlLXNpZGUgLmltYWdlLWdyaWQgLmltYWdlLWl0ZW0gLnN2Zy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG59XG4uaW1hZ2Utc2lkZSAuaW1hZ2UtZ3JpZCAuaW1hZ2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBncmlkLXJvdzogMTtcbiAgYXNwZWN0LXJhdGlvOiAyLzE7XG59XG4uaW1hZ2Utc2lkZSAuaW1hZ2UtZ3JpZCAuaW1hZ2UtaXRlbTpmaXJzdC1jaGlsZCAuc3ZnLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 1
          }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 0,
            transform: 'translateX(-100px)'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 200ms cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 1,
            transform: 'translateX(0)'
          }))])])]
        }
      });
    }
  }
  return SoftwareShowcaseComponent;
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  performance: {
    enableMetrics: true,
    enableConsoleReporting: true
  }
};

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

/***/ 839:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimesCircleIcon: () => (/* binding */ TimesCircleIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let TimesCircleIcon = /*#__PURE__*/(() => {
  class TimesCircleIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵTimesCircleIcon_BaseFactory;
      return function TimesCircleIcon_Factory(t) {
        return (ɵTimesCircleIcon_BaseFactory || (ɵTimesCircleIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TimesCircleIcon)))(t || TimesCircleIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TimesCircleIcon,
      selectors: [["TimesCircleIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function TimesCircleIcon_Template(rf, ctx) {
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
  return TimesCircleIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=735.js.map