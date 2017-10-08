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

$.post("https://api.trello.com/1/tokens/7b204829f2a896be8064ed02273e01f32203cf755326c1ebf41974763d812ce4/webhooks/?key=d03c9cf29a52ada649aae8f04b793652", {
  description: "My first webhook",
  callbackURL: "https://discordapp.com/api/webhooks/366444051274399745/_hlIRmZTkTdvHAdPj7IrMc3D4dQYKSfgno1Z9xO6IqyynHQoDKmIbaeeyYicip5py5sQ",
  idModel: "58a3c6efd74935bca133a8db",
});