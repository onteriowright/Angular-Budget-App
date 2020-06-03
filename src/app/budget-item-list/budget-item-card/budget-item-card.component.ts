import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from "src/shared/models/budget-item.model";

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClicked.emit();
  }

  onCardClick() {
    this.cardClicked.emit();
  }

}
