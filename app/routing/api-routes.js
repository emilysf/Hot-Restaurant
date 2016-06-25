// all currentReservations - provides JSON
var tableData = require('../data/table-data.js');

var path = require('path');

module.exports = function(app) {

    app.get('/api/tables', function(req, res) {

        res.json(tableData);

      })

    };
