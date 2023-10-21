import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';

class MyAngularUiLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyAngularUiLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: MyAngularUiLibraryComponent, selector: "lib-my-angular-ui-library", ngImport: i0, template: `
    <p>
      my-angular-ui-library works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-angular-ui-library', template: `
    <p>
      my-angular-ui-library works!
    </p>
  ` }]
        }] });

class ButtonComponentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.color = 'primary';
        this.disabled = false;
        this.outline = false;
        this.text = '';
        this.onClick = new EventEmitter();
    }
    ngOnInit() {
        this.rootClass = this.elementRef.nativeElement.tagName.toLowerCase();
        this.updateClassMap();
    }
    updateClassMap() {
        this.classMap = {
            [`${this.rootClass}`]: true,
            [`${this.rootClass}--${this.color}`]: !!this.color,
            [`${this.rootClass}--outline`]: this.outline,
            [`${this.rootClass}--disabled`]: this.disabled,
        };
    }
    ngOnChanges() {
        this.updateClassMap();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonComponentComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ButtonComponentComponent, selector: "rr-button", inputs: { color: "color", disabled: "disabled", outline: "outline", text: "text" }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: "<button [class]=\"classMap\" (click)=\"onClick.emit($event)\">{{text}}</button>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rr-button', template: "<button [class]=\"classMap\" (click)=\"onClick.emit($event)\">{{text}}</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], outline: [{
                type: Input
            }], text: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class HeadingComponentComponent {
    constructor() {
        this.text = "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeadingComponentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: HeadingComponentComponent, selector: "rr-heading", inputs: { text: "text" }, ngImport: i0, template: ` <h1>{{ text }}</h1> `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeadingComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: "rr-heading", template: ` <h1>{{ text }}</h1> ` }]
        }], propDecorators: { text: [{
                type: Input
            }] } });

class MyAngularUiLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryModule, declarations: [MyAngularUiLibraryComponent,
            ButtonComponentComponent,
            HeadingComponentComponent], exports: [MyAngularUiLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyAngularUiLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyAngularUiLibraryComponent,
                        ButtonComponentComponent,
                        HeadingComponentComponent
                    ],
                    imports: [],
                    exports: [
                        MyAngularUiLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-angular-ui-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponentComponent, HeadingComponentComponent, MyAngularUiLibraryComponent, MyAngularUiLibraryModule, MyAngularUiLibraryService };
//# sourceMappingURL=my-angular-ui-library.mjs.map
