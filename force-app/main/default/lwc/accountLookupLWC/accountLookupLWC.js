import { track} from 'lwc';
import OmniscriptSelect from 'omnistudio/omniscriptSelect';
import getAccount from '@salesforce/apex/GetAccount.getAccount';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class accountLookupLWC extends OmniscriptBaseMixin(OmniscriptSelect) {

   @track picklistdata = [];

    connectedCallback() {
        // console.log('in connected callback');
        super.connectedCallback();
        let contextId = this.jsonData.ContextId;
        getAccount({ ContextId: contextId })
            .then((result) => { 
                console.log('result::',JSON.stringify(result));
                result.forEach(currentItem => {
                    this.picklistdata.push({
                        value: currentItem.Id,
                        label: currentItem.Name,
                        data: currentItem
                    });
                });
                this._realtimeOptions = this.picklistdata;
            })
            .catch((error) => {
                console.error('error ::' + error);
            });
    }


}