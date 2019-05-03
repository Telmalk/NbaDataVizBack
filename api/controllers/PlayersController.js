/**
 * Players
 *
 * @description :: Server-side logic for managing Players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        Players.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.json(200, list);

        });

    },

    show: function(req, res, next) {
        Players.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },
    edit: function(req, res, next) {
        Players.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },

    update: function(req, res, next) {
        Players.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('players/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        Players.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/players');
        });
    },

};
