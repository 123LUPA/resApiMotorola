import App from './app';
let app = new App().app;
const port = process.env.PORT || 3000;

module.exports = app.listen(port);
