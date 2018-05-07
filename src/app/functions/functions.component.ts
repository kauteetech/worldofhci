import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VendorService } from '../services/vendor.service';
import { FunctionService } from '../services/function.service';
import { MasterdataService } from '../services/masterdata.service';

import 'hammerjs';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  animations: [  ]

})
export class FunctionsComponent implements OnInit {


  constructor( 
                public ajaxfunction: FunctionService, 
                public ajaxmaster: MasterdataService
                                    
            ) {   }
  

  ngOnInit() {

     
    }

  addFunction(selected) {
    this.ajaxfunction.addFunction(selected);
  }

  removeFunction(removed) {
    this.ajaxfunction.removeFunction(removed);
  }


}
