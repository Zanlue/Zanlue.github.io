var WHITE_ICON = 'https://zanlue.github.io/assets/icon-white.svg';

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    }];*/
  }
});

var authenticationSuccess = function() {
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
});

$.ajax({
	type: "POST",
	url: "https://api.trello.com/1/tokens/7b204829f2a896be8064ed02273e01f32203cf755326c1ebf41974763d812ce4/webhooks/?key=d03c9cf29a52ada649aae8f04b793652",
	data: {
		idModel: "58a3c6efd74935bca133a8db",
		callbackURL: "https://skyhook.glitch.me/api/webhooks/371170633612263425/1XJYoB8wEJna5v6wF-DIJi3heJTDZZRIC2xebkMX4Yx8fSBzBdO8cVfsm9YRz5gxaSfr/trello"
	},
	success: console.log('Webhook Sent'),
});