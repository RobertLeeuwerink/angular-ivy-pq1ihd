import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hgrid',
  template: `
  <a routerLink="..">< back</a>
  <app-hierarchical-grid></app-hierarchical-grid>
  `,
})
export class HgridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
