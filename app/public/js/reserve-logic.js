var path = require('path');


module.exports = function(app) {

  $('#addBtn').on("click", function() {
    var newReservation = {
      name: $("#name").val().trim(),
      phoneNumber: $("#number").val().trim(),
      email: $("#email").val().trim(),
      uniqueID: $("#id").val().trim()
    };
    if (currentReservations.length < 5) {
			$.post( currentURL + "/api/new", newCharacter)
				.done(function(data){
					console.log(data);
					alert("Adding character...")
				})

			return false;

		});


      currentReservations.push(newReservation);
			console.log(currentReservations);
    } else {
      waitingList.push(newReservation);
			console.log(waitingList);
    };
};



/*
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/new", newReservation)
      .done(function(data) {
        console.log(data);
        var newReservation = req.body;
        newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase()

        console.log(newReservation);

        currentReservations.push(newReservation);

        res.json(newReservation);
      })

    return false;

  }); //END newReservation
}; //END module.exports


app.post('/api/new', function(req, res){

	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase()

	console.log(newReservation);

	currentReservations.push(newReservation);

	res.json(newReservation);
})
*/
