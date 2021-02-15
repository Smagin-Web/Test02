import {Component, ViewChild, AfterViewInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})

export class RecomendationComponent implements AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const widthWrapper = this.wrapper.nativeElement.offsetWidth;
    console.log(widthWrapper);
    const paddingWrapper = parseInt(window.getComputedStyle(this.wrapper.nativeElement, null).getPropertyValue('padding-left'), 10);
    const marginWrapper = parseInt(window.getComputedStyle(this.wrapper.nativeElement, null).getPropertyValue('margin-left'), 10);
    console.log(marginWrapper);
    const widthContentWrapper = widthWrapper - paddingWrapper * 2;

    const lengthCard = this.prodCards.length;

    const allCardWidth = (widthContentWrapper / 2 - 4) * lengthCard;
    const allCardMargin = (lengthCard - 1) * 8;
    const widthContainer = allCardWidth + allCardMargin + paddingWrapper + 'px';

    this.renderer.setStyle(this.container.nativeElement, 'width', widthContainer);
  }

  prodCards = [
    {name: 'Hello', price: '5', add: true},
    {name: 'Hello', price: '5', add: true},
    {name: 'Hello', price: '5', add: true},
    {name: 'Hello', price: '5', add: true},
    {name: 'Hello', price: '5', add: true},
    {name: 'Hello', price: '5', add: true},
  ];


}
