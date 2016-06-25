// create new currentReservations - takes in JSON input
app.post('/api/new', function(req, res){

	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase()

	console.log(newReservation);

	currentReservations.push(newReservation);

	res.json(newReservation);
})
