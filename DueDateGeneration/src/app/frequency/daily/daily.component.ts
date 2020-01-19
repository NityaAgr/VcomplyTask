import { Component, OnInit } from '@angular/core';
import { FrequencyService } from '../../services/frequency/frequency.service'
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms'
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  public dateForm: FormGroup;

  constructor(public frequencyService: FrequencyService) { }

  ngOnInit() {
  	this.frequencyService.sample();
  	this.dateForm = new FormGroup({
  	  date: new FormControl(null, [Validators.required])
  	});
  }

  dateSelected() {
  	console.log("Selected date:")
  	console.log(this.dateForm.value.date);
  }

}
