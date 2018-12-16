import { Component, OnInit } from '@angular/core';
import { AkitaNgFormsManager } from '../../../projects/datorama/akita-ng-forms-manager/src/lib/forms-manager';
import { FormsState } from '../forms-state';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: FormGroup;
  constructor(private formsManager: AkitaNgFormsManager<FormsState>) {}

  ngOnInit() {
    this.settings = new FormGroup({
      minPrice: new FormControl(10)
    });

    this.formsManager.upsert('settings', this.settings);
  }
}
