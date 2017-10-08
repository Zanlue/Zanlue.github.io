var WHITE_ICON = 'https://zanlue.github.io/assets/icon-white.svg';

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: 'Webhook',
      callback: function (t, opts) { console.log('Someone clicked the button'); }
    }];
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
