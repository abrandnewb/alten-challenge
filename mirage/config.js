export default function() {
  this.namespace = '/api';

  this.get('/vehicles', function(schema) {
    return {
      data: schema.db.vehicles.map(attrs => (
        {type: 'vehicle', id: attrs.id, attributes: attrs }
      ))
    };
  })
}