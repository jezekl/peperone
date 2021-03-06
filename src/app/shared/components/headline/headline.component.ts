import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  @Input() public name: string;
  @Input() @HostBinding('style.background-image') public bg: string;

  constructor() { }

  ngOnInit() { }

}
