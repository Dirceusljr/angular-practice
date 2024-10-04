import { investmentService } from './../investment.service';
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(investmentService);

  results = this.investmentService.resultsData.asReadonly();

  //Other solution using computed property
  // results = computed(() => this.investmentService.resultsData());
}
