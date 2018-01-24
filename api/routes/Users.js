const controller = require("../controllers").users;
const {DecodeOfAuth, ensureAuthenticated} = require('./SourceOfAuth');
const users = require('../models').users;
module.exports = app => {

  /*const ensureAuthenticated = (req,res,next) => {
    if(req.headers.authorization){
      let decodedJWT = DecodeOfAuth(req.headers.authorization.jwt);
      users
      .findOne(decodedJWT)
      .then(user => {
        if(!user){
          res.send("unAuthorized Area, Che minchia fai");
        }
        else {
          return next();
        }
      })
      .catch(error => res.status(400).send(error));      
    }
    else {
      res.send("unAuthorized Area, Che minchia fai");
    }
  }*/
  /**
   * @swagger
   * definitions:
   *   users:
   *      properties:
   *         id:
   *            type: string
   *         Facebook_ID:
   *            type: string
   *         Google_ID:
   *            type: string      
   *         email:
   *            type: string
   *         is_deleted:
   *            type: boolean
   *            default: false
   *         additional_data:
   *            type: object
   *         writer:
   *            type: boolean
   *            default: false
   */  

   app.post('/auth/login' , (req,res) => {
     controller.create(req,res);
   })
   app.get('/users', (req,res) => {
     controller.readAll(req,res);
   })
   app.get('/users/:id',  ensureAuthenticated, (req,res) => {
     controller.readOne(req,res);
   });
};
