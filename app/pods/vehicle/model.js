import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.attr(),
    address: DS.attr(),
    vin: DS.attr(),
    regno: DS.attr()      
});
