import { Component, OnInit } from '@angular/core';
import { SgbapiService } from '../sgbapi.service';

@Component({
  selector: 'app-sgbqa',
  templateUrl: './sgbqa.component.html',
  styleUrls: ['../../app/w3.css',
'../dashboard/dashboard.component.css',
'./sgbqa.component.css']
})
export class SgbqaComponent implements OnInit {

  Category = '';
  Question = '';
  loading = false;
  inValid = true;

  constructor(private sgbapi: SgbapiService) { }

  ngOnInit() {
  }

  isValid(): boolean {
    if (this.Category.length > 0 && this.Question.length > 0) {
      return true;
    }
    return false;
  }

  onSubmit(): void {
    this.loading = true;
    this.sgbapi.sendEmail(this.Category, this.Question)
      .subscribe(res => {
        alert('Your question has been submitted..');
        this.Category = '';
        this.Question = '';
        this.loading = false;
      });
  }
}
