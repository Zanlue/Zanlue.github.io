var WHITE_ICON = 'https://zanlue.github.io/assets/icon-white.svg';

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: ' ',
      callback: function (t, opts) { }
    }];
  }
});

/*var authenticationSuccess = function() {
  console.log('Successful authentication');
};

var authenticationFailure = function() {
  console.log('Failed authentication');
};

window.Trello.authorize({
  type: 'popup',
  name: 'Zan\'s Webhook',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});*/

$.ajax({
	type: "POST",
	url: "https://api.trello.com/1/tokens/7b204829f2a896be8064ed02273e01f32203cf755326c1ebf41974763d812ce4/webhooks/?key=d03c9cf29a52ada649aae8f04b793652",
	data: {
		idModel: "598e1e0c7a96fac11ea03f30",
		callbackURL: "https://skyhook.glitch.me/api/webhooks/371196415155634178/iyVHZunWH-uaomBZ0e2CiUDAN6hoY6NFMvL9NbXnkffLP5J1h6tzzOC_wGPokDRuhPcX/trello"
	},
	success: console.log('Webhook Sent'),
});