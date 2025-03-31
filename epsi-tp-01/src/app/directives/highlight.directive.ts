import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean = false;
  
  constructor(private el: ElementRef) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.updateStyles();
  }
  
  private updateStyles(): void {
    if (this.appHighlight) {
      this.el.nativeElement.style.backgroundColor = '#ffff99';
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}