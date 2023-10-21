import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1hbmd1bGFyLXVpLWxpYnJhcnkvc3JjL2xpYi9idXR0b24tY29tcG9uZW50L2J1dHRvbi1jb21wb25lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktYW5ndWxhci11aS1saWJyYXJ5L3NyYy9saWIvYnV0dG9uLWNvbXBvbmVudC9idXR0b24tY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNGLE1BQU0sT0FBTyx3QkFBd0I7SUFTbkMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJqQyxVQUFLLEdBQXFDLFNBQVMsQ0FBQztRQUNwRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNULFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSUMsQ0FBQztJQUM5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQy9DLENBQUM7SUFDSixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOytHQXhCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwyTENQckMsbUZBQ0E7OzRGRE1hLHdCQUF3QjtrQkFMcEMsU0FBUzsrQkFDRSxXQUFXO2lHQUtaLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncnItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICByb290Q2xhc3M/OiBzdHJpbmc7XG4gIGNsYXNzTWFwOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb290Q2xhc3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG4gIHVwZGF0ZUNsYXNzTWFwKCkge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbYCR7dGhpcy5yb290Q2xhc3N9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5yb290Q2xhc3N9LS0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvcixcbiAgICAgIFtgJHt0aGlzLnJvb3RDbGFzc30tLW91dGxpbmVgXTogdGhpcy5vdXRsaW5lLFxuICAgICAgW2Ake3RoaXMucm9vdENsYXNzfS0tZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZCxcbiAgICB9O1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBbY2xhc3NdPVwiY2xhc3NNYXBcIiAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIj57e3RleHR9fTwvYnV0dG9uPlxuIl19