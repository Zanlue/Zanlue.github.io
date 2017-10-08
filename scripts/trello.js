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