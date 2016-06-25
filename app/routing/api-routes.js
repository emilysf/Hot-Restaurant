// all currentReservations - provides JSON
app.get('/api/:currentReservations?', function(req, res){

	var chosen = req.params.currentReservations;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <currentReservations.length; i++){

			if (chosen == currentReservations[i].routeName){
				res.json(currentReservations[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(currentReservations);
	}
})
