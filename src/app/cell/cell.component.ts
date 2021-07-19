import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {CellEnum} from './CellEnum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input() public piece : CellEnum = CellEnum.EMPTY ;
  @Input() public row : number;
  @Input() public col : number;
  constructor() { }

  ngOnInit(): void {
  }

}
