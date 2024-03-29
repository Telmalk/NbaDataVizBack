/**
 * Archive
 *
 * @description :: Server-side logic for managing Archive
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    index: function(req, res, next) {
        Archive.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view({
                result: list
            });
        });
    },

    show: function(req, res, next) {
        Archive.findOneById(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.json({
                element: value
            });
        });
    },

    edit: function(req, res, next) {
        Archive.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },

    update: function(req, res, next) {
        Archive.update(req.param('id'), req.body, function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('archive/show/' + req.param('id'));
        });
    },

    delete: function(req, res, next) {
        Archive.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/archive');
        });
    },

};
