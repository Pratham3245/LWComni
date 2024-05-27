import { LightningElement, api, wire } from 'lwc';
import getRecordOwner from '@salesforce/apex/RecordOwnerController.getRecordOwner';

export default class CurrentOwnerDetail extends LightningElement {
    @api recordId;
    ownerName;

    @wire(getRecordOwner, { recordId: '$recordId' })
    wiredOwner({ error, data }) {
        if (data) {
            this.ownerName = data.Owner.Name; 
        } else if (error) {
            console.error('Error fetching record owner', error);
        }
    }
}
