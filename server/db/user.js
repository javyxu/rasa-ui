const db = require('./db');
const logger = require('../util/logger');

function getUser(req, res, next) {
    db.all('select * from users where user_name = ? and password = ?', req.body.username, req.body.password, function(err) {
      if (err) {
        logger.winston.error(err);
      } else {
        res.status(200);
      }
    });
}

module.exports = {
    getUser: getUser
};