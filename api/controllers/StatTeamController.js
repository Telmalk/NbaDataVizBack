/**
 * StatTeam
 *
 * @description :: Server-side logic for managing StatTeam
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        StatTeam.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view(list);
        });
    },

    show: function(req, res, next) {
        StatTeam.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(value);
        });
    },

    edit: function(req, res, next) {
        StatTeam.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(value);
        });
    },

    update: function(req, res, next) {
        StatTeam.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('statTeam/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        StatTeam.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/statTeam');
        });
    },

};
