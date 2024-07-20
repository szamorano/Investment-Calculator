import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{initialInvestment: number, duration:number, expectedReturn:number, annualInvestment:number}>();
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';

  onSubmit()
  {
    this.calculate.emit({initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, annualInvestment: +this.enteredAnnualInvestment, expectedReturn: +this.enteredExpectedReturn});
  }

}
