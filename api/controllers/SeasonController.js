/**
 * Season
 *
 * @description :: Server-side logic for managing Season
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        Season.find().exec(function(err, list) {
            if (err)
              return Error('Error');
            return res.status(200).json(list);
        });
    },
    create:  (req, res, next) => {
        Season.create({year: 2018}, (err, value) => {
          if (err)
            res.status(404).json({"code": 404});
          res.status(200).json(value);
        });
    },
    prout: (req, res, next) => {

    },
    show: function(req, res, next) {
        Season.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            console.log("GEEE");
            res.view({
                element: value
            });
        });
    },

    edit: function(req, res, next) {
        Season.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(200, value);
        });
    },

    update: function(req, res, next) {
        Season.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('season/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        Season.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/season');
        });
    },

};
