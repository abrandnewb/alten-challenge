import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    vFilter: null,
    statusOn: computed.filter('model', function(item) {
        return item.status === 1;
    }),
    statusOff: computed.filter('model', function(item) {
        return item.status === 0;
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
        }
    }
});
