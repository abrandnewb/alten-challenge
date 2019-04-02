import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    vFilter: null,
    cFilter: null,
    statusOn: computed.filter('model', function(item) {
        return item.status === 1;
    }),
    statusOff: computed.filter('model', function(item) {
        return item.status === 0;
    }),
    customerFiltered: computed.filter('model', function(item) {
        return item.owner === this.get('cFilter');
    }),
    customerFiltered2: computed.filter('model', function(item) {
        return item.owner === this.get('cFilter');
    }),
    customerFiltered3: computed.filter('model', function(item) {
        return item.owner === this.get('cFilter');
    }),
    customerList: computed('model', function() {
        return this.get('model').uniqBy('owner');
    }),
    actions: {
        onStatus() {
            this.set('vFilter',1);
        },
        offStatus() {
            this.set('vFilter',0);
        },
        noStatusFilter() {
            this.set('vFilter',null);
        },
        setCFilter(c) {
            this.set('cFilter', c);
            this.set('vFilter',null);
        },
        clearFilter() {
            /* if(this.get('vFilter') !== null || this.get('vFilter') !== null) { */
                this.set('vFilter', null);
                this.set('cFilter', null);
            /* } */
        }
    }
});
