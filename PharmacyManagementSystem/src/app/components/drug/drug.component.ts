import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/shared/drug.model';
import { DrugService } from 'src/app/shared/drug.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  listdrug: Drug[];

  constructor(public service: DrugService, public route: Router) {}

  ngOnInit() {
    this.service.getDrugs().subscribe(data => {
      this.listdrug = data;
    });
  }

  populateDrug(selectedDrug: Drug) {
    console.log(selectedDrug);
    this.service.drugData = selectedDrug;
  }

  delete(id: number) {
    if (confirm('Are You Sure?')) {
      this.service.deleteDrug(id).subscribe(data => {
        console.log('record deleted');
        this.service.getDrugs().subscribe(data => {
          this.listdrug = data;
        });
      });
    }
  }
}