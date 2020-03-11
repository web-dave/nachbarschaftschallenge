import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faShare = faShareAlt

  /**
   * flags to determine if user wants or needs help
   */
  needsHelp: boolean;
  wantsToHelp: boolean;

  constructor() {

  }

  /**
   * user wants to help
   */
  wantHelp() {
    this.wantsToHelp = true;
    this.needsHelp = false;
  }


  /**
   * user needs help
   */
  needHelp() {
    this.needsHelp = true;
    this.wantsToHelp = false;
  }

  resetsHelp() {
    this.needsHelp = false;
    this.wantsToHelp = false;
  }
}
