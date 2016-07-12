const express = require('express');
const stormpath = require('express-stormpath');
 
const app = express();

 
app.set('views', './views');
app.set('view engine', 'pug');
 
app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));
 
app.get('/', stormpath.getUser, (req, res) => {
  res.render('home', {
    title: 'Welcome'
  });
});
 
app.on('stormpath.ready', () => {
  console.log('Stormpath Ready');
});
 
app.listen(3000);