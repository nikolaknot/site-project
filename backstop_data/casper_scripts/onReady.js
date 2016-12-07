<<<<<<< HEAD
module.exports = function (casper, scenario, vp) {
  casper.evaluate(function () {
    //Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
  });
  console.log('onReady.js has run for: ', vp.name);
=======
module.exports = function(casper, scenario, vp) {
  casper.echo('onReady.js', 'INFO');
  casper.evaluate(function(){
    console.log('This custom script is running inside your web app!');
    console.log('Add your own casper commands here to simulate user interacions or logging in.');
  });
  casper.wait(50);
>>>>>>> 01f4cebddc58779be1c3758ef11619eeeb7f8ca6
};
