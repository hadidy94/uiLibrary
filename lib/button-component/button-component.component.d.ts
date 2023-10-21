import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponentComponent {
    private elementRef;
    color: 'primary' | 'success' | 'danger';
    disabled: boolean;
    outline: boolean;
    text: string;
    onClick: EventEmitter<any>;
    rootClass?: string;
    classMap: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    updateClassMap(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponentComponent, "rr-button", never, { "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, { "onClick": "onClick"; }, never, never, false, never>;
}
