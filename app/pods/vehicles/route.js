import Route from '@ember/routing/route';

export default Route.extend({
   model() {
    return this.store.findAll('vehicle');
    /* return [
      {
        owner: 'Kalles Grustransporter AB',
        address: 'Cementvägen 8, 111 11 Södertälje',
        vehicles: [
          {
            vin: 'YS2R4X20005399401',
            regNo: 'ABC123'
          },
          {
            vin: 'VLUR4X20009093588',
            regNo: 'DEF456'
          },
          {
            vin: 'VLUR4X20009048066',
            regNo: 'GHI789'
          }
        ]
      },
      {
        owner: 'Johans Bulk AB',
        address: 'Balkvägen 12, 222 22 Stockholm',
        vehicles: [
          {
            vin: 'YS2R4X20005388011',
            regNo: 'JKL012'
          },
          {
            vin: 'YS2R4X20005387949',
            regNo: 'MNO345'
          }    
        ]
      },
      {
        owner: 'Haralds Värdetransporter AB',
        address: 'Budgetvägen 1, 333 33 Uppsala',
        vehicles: [
          {
            vin: 'VLUR4X20009048066',
            regNo: 'PQR678'
          },
          {
            vin: 'YS2R4X20005387055',
            regNo: 'STU901'
          }
        ]
      }
    ]; */
   }
});
