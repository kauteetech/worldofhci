import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { MasterdataService } from '../services/masterdata.service';
import { VendorService } from '../services/vendor.service';

@Injectable()
export class FunctionService {
  
  addCount: number = 0;

  selectAddValue: number = 0;
  selectRemoveValue: number = 0;
  //showHciValue: number = 0;
  selectedhci: string;

  
  
  


  constructor( 
                  private mastserv: MasterdataService,
                  private vendorserv: VendorService
 
              ) {}

    avlFunction =  {
    	"Analysts Data"		:	false	,
      "Customer Adoption"		: false	,
      "Software Defined Data Center"	:	false	,
      "Software Defined Storage"	:	false	,
      "Software Defined Network"	:	false	,
      "Software Defined Compute"	:	false	,
      "Software Defined Security"	:	false	,
      "Software Defined WAN"	:	false	,
      "HCI Monitoring Analytics"	:	false	,
      "HCI Log Analytics"	:	false	,
      "Micro-Segmentation"	:	false	,
      "HCI Automation"	:	false	,
      "Disaster Recovery"	:	false	,
      "DR Automation"	:	false	,
      "Data Protection"	:	false	,
      "Multi Hypervisor Support"	:	false	,
      "Hypervisor"	:	false	,
      "Cloud Management Platform"	:	false	,
      "Customer Support"	:	false	,
      "HCI Management"	:	false	,
      "Day One Hardware Support"	:	false	,
      "ROBO Friendly"	:	false	,
      "Hardware Agnostic"	:	false	,
      "Choice of Hardware"	:	false	,
      "Integration with Existing Solution"	:	false	,
      "Partners Solution Integration"	:	false	,
      "HCI in Public Cloud"	:	false	,
      "HCI Vision"	:	false	,
      "VDI Support"	:	false	,
      "HCI Scalability"	:	false	,
      "Support for Containers"	:	false	,
      "Licensing Flexibility"	:	false	,
      "NPS Score"	:	false	,
      "Customer Experience"	:	false	,
      "Near DR"	:	false	,
      "Solution Offering"	:	false	,
      "Ease of Operations"	:	false		

};

selFunction =  {
      "Analysts Data"		:	true	,
      "Customer Adoption"		: true	,
      "Software Defined Data Center"	:	true	,
      "Software Defined Storage"	:	true	,
      "Software Defined Network"	:	true	,
      "Software Defined Compute"	:	true	,
      "Software Defined Security"	:	true	,
      "Software Defined WAN"	:	true	,
      "HCI Monitoring Analytics"	:	true	,
      "HCI Log Analytics"	:	true	,
      "Micro-Segmentation"	:	true	,
      "HCI Automation"	:	true	,
      "Disaster Recovery"	:	true	,
      "DR Automation"	:	true	,
      "Data Protection"	:	true	,
      "Multi Hypervisor Support"	:	true	,
      "Hypervisor"	:	true	,
      "Cloud Management Platform"	:	true	,
      "Customer Support"	:	true	,
      "HCI Management"	:	true	,
      "Day One Hardware Support"	:	true	,
      "ROBO Friendly"	:	true	,
      "Hardware Agnostic"	:	true	,
      "Choice of Hardware"	:	true	,
      "Integration with Existing Solution"	:	true	,
      "Partners Solution Integration"	:	true	,
      "HCI in Public Cloud"	:	true	,
      "HCI Vision"	:	true	,
      "VDI Support"	:	true	,
      "HCI Scalability"	:	true	,
      "Support for Containers"	:	true	,
      "Licensing Flexibility"	:	true	,
      "NPS Score"	:	true	,
      "Customer Experience"	:	true	,
      "Near DR"	:	true	,
      "Solution Offering"	:	true	,
      "Ease of Operations"	:	true	

};    

   

            addFunction(selected) {
                  this.avlFunction[selected] = true;
                  this.selFunction[selected] = false;
                  this.addCount = this.addCount+1 ;

               //   this.selectAddValue = (this.mastserv.vmwhci[0][selected]);
               //   this.showHciValue = (this.showHciValue + this.selectAddValue);

                  if (this.addCount === 0) {
                    this.selectAddValue = 0
                  }

                  this.vmwValue(selected);
                  this.hpeValue(selected);
                  this.cisValue(selected);
                  this.nutValue(selected);
                  this.huaValue(selected);
                  this.scaValue(selected);
                  this.pivValue(selected);
                  this.datValue(selected);
                  this.delValue(selected);
                  this.netValue(selected);
                  
                  
/*
                  console.log ( this.showHciValue , this.selectedhci);
                  console.log (this.vendorserv.vendorselect);
                  return this.showHciValue, this.selectedhci ;
*/
            }

            removeFunction(removed) {
                  this.selFunction[removed] = true;
                  this.avlFunction[removed] = false;
                  this.addCount = this.addCount-1 ;

                  if (this.addCount === 0) {
                    this.selectAddValue = 0
                  }

                  this.vmwRemove(removed);
                  this.hpeRemove(removed);
                  this.cisRemove(removed);
                  this.nutRemove(removed);
                  this.huaRemove(removed);
                  this.scaRemove(removed);
                  this.pivRemove(removed);
                  this.datRemove(removed);
                  this.delRemove(removed);
                  this.netRemove(removed);
                  
            }

/// VMware Functions
            vmwScore = 0;
            vmwHciValue = 0;  
            vmwValue(selected) {
                  
                  this.vmwHciValue = (this.mastserv.vmwhci[0][selected]);
                  this.vmwScore = (this.vmwHciValue + this.vmwScore)
                  console.log (" vmw " + this.vmwScore);
                  return (this.vmwScore);
            }  

            vmwRemove(removed) {
                  this.vmwHciValue = (this.mastserv.vmwhci[0][removed]);
                  this.vmwScore = (this.vmwScore - this.vmwHciValue)
                  console.log (" vmw " +  this.vmwScore);
                  return (this.vmwScore);
            }

/// HPE Functions
            hpeScore = 0;
            hpeHciValue = 0;  
            hpeValue(selected) {
                  
                  this.hpeHciValue = (this.mastserv.hpehci[0][selected]);
                  this.hpeScore = (this.hpeHciValue + this.hpeScore);
                  console.log (" hpe " + this.hpeScore);
                  return (this.hpeScore);
            }  

            hpeRemove(removed) {
                  this.hpeHciValue = (this.mastserv.hpehci[0][removed]);
                  this.hpeScore = (this.hpeScore - this.hpeHciValue);
                  console.log (" hpe " + this.hpeScore);
                  return (this.hpeScore);
            }


/// Cisco Functions
            cisScore = 0;
            cisHciValue = 0;  
            cisValue(selected) {
                  
                  this.cisHciValue = (this.mastserv.cishci[0][selected]);
                  this.cisScore = (this.cisHciValue + this.cisScore);
                  console.log (" cis " + this.cisScore);
                  return (this.cisScore);
            }  

            cisRemove(removed) {
                  this.cisHciValue = (this.mastserv.cishci[0][removed]);
                  this.cisScore = (this.cisScore - this.cisHciValue);
                  console.log (" cis " + this.cisScore);
                  return (this.cisScore);
            }            


/// Nutanix Functions
              nutScore = 0;
              nutHciValue = 0;  
              nutValue(selected) {
                    
                    this.nutHciValue = (this.mastserv.nuthci[0][selected]);
                    this.nutScore = (this.nutHciValue + this.nutScore)
                    console.log (" nua " + this.nutScore);
                    return (this.nutScore);
              }  

              nutRemove(removed) {
                    this.nutHciValue = (this.mastserv.nuthci[0][removed]);
                    this.nutScore = (this.nutScore - this.nutHciValue)
                    console.log (" nua " + this.nutScore);
                    return (this.nutScore);
              }            


/// Dell EMC Functions
            delScore = 0;
            delHciValue = 0;  
            delValue(selected) {
                  
                  this.delHciValue = (this.mastserv.delhci[0][selected]);
                  this.delScore = (this.delHciValue + this.delScore)
                  console.log (" del " + this.delScore);
                  return (this.delScore);
            }  

            delRemove(removed) {
                  this.delHciValue = (this.mastserv.delhci[0][removed]);
                  this.delScore = (this.delScore - this.delHciValue)
                  console.log (" del " + this.delScore);
                  return (this.delScore);
            }


/// Huawei Functions
            huaScore = 0;
            huaHciValue = 0;  
            huaValue(selected) {
                  
                  this.huaHciValue = (this.mastserv.huahci[0][selected]);
                  this.huaScore = (this.huaHciValue + this.huaScore)
                  console.log (" hua " + this.huaScore);
                  return (this.huaScore);
            }  

            huaRemove(removed) {
                  this.huaHciValue = (this.mastserv.huahci[0][removed]);
                  this.huaScore = (this.huaScore - this.huaHciValue)
                  console.log (" hua " + this.huaScore);
                  return (this.huaScore);
            }


/// NetApp Functions
            netScore = 0;
            netHciValue = 0;  
            netValue(selected) {
                  
                  this.netHciValue = (this.mastserv.nethci[0][selected]);
                  this.netScore = (this.netHciValue + this.netScore)
                  console.log (" net " + this.netScore);
                  return (this.netScore);
            }  

            netRemove(removed) {
                  this.netHciValue = (this.mastserv.nethci[0][removed]);
                  this.netScore = (this.netScore - this.netHciValue)
                  console.log (" net " + this.netScore);
                  return (this.netScore);
            }            


/// Pivot3 Functions
            pivScore = 0;
            pivHciValue = 0;  
            pivValue(selected) {
                  
                  this.pivHciValue = (this.mastserv.pivhci[0][selected]);
                  this.pivScore = (this.pivHciValue + this.pivScore)
                  console.log (" piv " + this.pivScore);
                  return (this.pivScore);
            }  

            pivRemove(removed) {
                  this.pivHciValue = (this.mastserv.pivhci[0][removed]);
                  this.pivScore = (this.pivScore - this.pivHciValue)
                  console.log (" piv " + this.pivScore);
                  return (this.pivScore);
            }            


/// Scale Computing Functions
            scaScore = 0;
            scaHciValue = 0;  
            scaValue(selected) {
                  
                  this.scaHciValue = (this.mastserv.scahci[0][selected]);
                  this.scaScore = (this.scaHciValue + this.scaScore)
                  console.log (" sca " + this.scaScore);
                  return (this.scaScore);
            }  

            scaRemove(removed) {
                  this.scaHciValue = (this.mastserv.scahci[0][removed]);
                  this.scaScore = (this.scaScore - this.scaHciValue)
                  console.log (" sca " + this.scaScore);
                  return (this.scaScore);
            }            



/// Datacore Functions
            datScore = 0;
            datHciValue = 0;  
            datValue(selected) {
                  
                  this.datHciValue = (this.mastserv.dathci[0][selected]);
                  this.datScore = (this.datHciValue + this.datScore)
                  console.log (" dat " + this.datScore);
                  return (this.datScore);
            }  

            datRemove(removed) {
                  this.datHciValue = (this.mastserv.dathci[0][removed]);
                  this.datScore = (this.datScore - this.datHciValue)
                  console.log (" dat " + this.datScore);
                  return (this.datScore);
            }            


}
