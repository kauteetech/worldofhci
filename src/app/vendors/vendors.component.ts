import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { VendorService } from '../services/vendor.service';
import { FunctionService } from '../services/function.service';
import { MasterdataService } from '../services/masterdata.service';



@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
  animations: [   ]

})
export class VendorsComponent implements OnInit {

  constructor( 
              public ajaxvendor: VendorService,
              public ajaxmaster: MasterdataService,
              public ajaxfunction: FunctionService
            
            
              ) {  }

  ngOnInit() {
      
   }

          addVendor(selected) {
            this.ajaxvendor.addVendor(selected);
          }

          removeVendor(removed) {
              this.ajaxvendor.removeVendor(removed);
          }
          
          vendorselect(vendor) {
            console.log(vendor);
            return vendor;
          }  

          vmwValue() {
              return (this.ajaxfunction.vmwScore);
          }

          hpeValue() {
            return (this.ajaxfunction.hpeScore);
          }

          cisValue() {
            return (this.ajaxfunction.cisScore);
          }

         delValue() {
            return (this.ajaxfunction.delScore);
          }

          nutValue() {
            return (this.ajaxfunction.nutScore);
          }

          huaValue() {
            return (this.ajaxfunction.huaScore);
          }

          netValue() {
            return (this.ajaxfunction.netScore);
          }

          scaValue() {
            return (this.ajaxfunction.scaScore);
          }

          pivValue() {
            return (this.ajaxfunction.pivScore);
          }

          datValue() {
            return (this.ajaxfunction.datScore);
          }


}


