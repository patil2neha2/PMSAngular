import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Drug } from 'src/app/shared/drug.model';
import { DrugService } from 'src/app/shared/drug.service';

@Component({
  selector: 'app-drugform',
  templateUrl: './drugform.component.html',
  styleUrls: ['./drugform.component.css']
})
export class DrugformComponent implements OnInit {
  constructor(
    public service: DrugService,
    public route: Router,
    public toast: NgToastService
  ) {}

  ngOnInit() {
    this.service.getDrugs().subscribe(res => {
      this.service.listdrug = res;
    });
  }

  submit(form: NgForm) {
    console.log('submitted');
    if (this.service.drugData.drugId == 0




) {
this.insertDrug(form);
} else {
this.updateDrug(form);
}
}

insertDrug(myform: NgForm) {
this.service.saveDrugs().subscribe(d => {
this.refreshData();
this.resetForm(myform);
this.route.navigate(['drug']);
window.location.reload();
this.toast.success({
detail: "success",
summary: "Record Added Successfully!",
duration: 5000
});
console.log('success');
});
}

updateDrug(myform: NgForm) {
this.service.updateDrugs().subscribe(d => {
this.resetForm(myform);
this.refreshData();
window.location.reload();
this.toast.success({
detail: "success",
summary: "Record Updated Successfully!",
duration: 8000
});
console.log('update success');
});
}

resetForm(myform: NgForm) {
myform.form.reset();
this.service.drugData = new Drug();
}

refreshData() {
this.service.getDrugs().subscribe(res => {
this.service.listdrug = res;
});
}
}