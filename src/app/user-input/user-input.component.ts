import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentInput } from '../investment-input.model';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: investmentService) {}

  enteredInitialInvestiment = signal('0');
  enteredAnnualInvestiment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestiment(),
      annualInvestment: +this.enteredAnnualInvestiment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    this.enteredInitialInvestiment.set('0');
    this.enteredAnnualInvestiment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
