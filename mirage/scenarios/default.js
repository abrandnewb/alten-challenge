export default function(server) {
  //server.createList('vehicle', 1);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.loadFixtures();
}
