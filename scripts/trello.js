var WHITE_ICON = '../assets/icon-white.svg';

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: WHITE_ICON,
      text: 'Webhook',
      callback: function (t, opts) { ... }
    }];
  }
});