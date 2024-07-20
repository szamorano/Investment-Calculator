import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// results = input<{
    //   year: year,
    //   interest: interestEarnedInYear,
    //   valueEndOfYear: investmentValue,
    //   annualInvestment: annualInvestment,
    //   totalInterest: totalInterest,
    //   totalAmountInvested: initialInvestment + annualInvestment * year,
    // }>()
@Input() results?: {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}[];
}
