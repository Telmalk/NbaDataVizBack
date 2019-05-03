/**
 * JoinPlayerTeamSeaon
 *
 * @description :: Server-side logic for managing JoinPlayerTeamSeaon
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        JoinPlayerTeamSeaon.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view(200, list);
        });
    },

    show: function(req, res, next) {
        JoinPlayerTeamSeaon.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(200, value);
        });
    },

    edit: function(req, res, next) {
        JoinPlayerTeamSeaon.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(200, value);
        });
    },

    update: function(req, res, next) {
        JoinPlayerTeamSeaon.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('joinPlayerTeamSeaon/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        JoinPlayerTeamSeaon.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/joinPlayerTeamSeaon');
        });
    },
};
