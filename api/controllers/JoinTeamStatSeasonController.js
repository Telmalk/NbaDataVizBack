/**
 * JoinTeamStatSeason
 *
 * @description :: Server-side logic for managing JoinTeamStatSeason
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        JoinTeamStatSeason.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view({
                result: list
            });
        });
    },

    show: function(req, res, next) {
        JoinTeamStatSeason.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },

    edit: function(req, res, next) {
        JoinTeamStatSeason.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },

    update: function(req, res, next) {
        JoinTeamStatSeason.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('joinTeamStatSeason/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        JoinTeamStatSeason.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/joinTeamStatSeason');
        });
    },

};