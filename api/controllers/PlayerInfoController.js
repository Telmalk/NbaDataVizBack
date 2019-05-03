/**
 * PlayerInfo
 *
 * @description :: Server-side logic for managing PlayerInfo
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        PlayerInfo.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.json(200,  list);
        });
    },

    show: function(req, res, next) {
        PlayerInfo.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json( value);
        });
    },

    edit: function(req, res, next) {
        PlayerInfo.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json(value);
        });
    },

    update: function(req, res, next) {
        PlayerInfo.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('playerInfo/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        PlayerInfo.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/playerInfo');
        });
    },
};
