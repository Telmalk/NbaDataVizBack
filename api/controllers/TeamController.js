/**
 * Team
 *
 * @description :: Server-side logic for managing Team
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        Team.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.json(list);
        });
    },

    show: function(req, res, next) {
        Team.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(value);
        });
    },

    edit: function(req, res, next) {
        Team.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(value);
        });
    },

    update: function(req, res, next) {
        Team.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('team/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        Team.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/team');
        });
    },

};
