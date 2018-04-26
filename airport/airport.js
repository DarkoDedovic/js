'use strict';
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
        this.category = category || 'E';
        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }


    function Passenger(personObj, seatObj) {
        this.personObj = personObj;
        this.seatObj = seatObj;

        this.getData = function () {
            return this.seatObj.getData() + ', ' + this.personObj.getData();
        }

    }
    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];


        this.addPassenger = function (passegnerObj) {
            this.listOfPassengers.push(passegnerObj);
        }

        this.getData = function () {
            var datum = this.date.getDate() + '.' + this.date.getMonth() + 1 + '.' + this.date.getFullYear();
            var firstRow = datum + ', ' + this.relation + '\n';
            var passengers = "";
            this.listOfPassengers.forEach(function (element) {
                passengers += '\t\t' + element.getData() + '\n';
            })
            return firstRow + passengers;
        }
    }


    function Airport(name) {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.addFlight = function (flightObj) {
            this.listOfFlights.push(flightObj);
        }

        this.getData = function () {
            var flights = 0;
            var total = 0;
            var pass = "";
            //Ovde smo porosli kroz pojedinacne  liste letova i za svaki let uzeli duzinu liste putnika koja je ustvari broj putnika. 
            this.listOfFlights.forEach(function (element) {
                flights += element.listOfPassengers.length;
            })
            //Ovde smo prosli kroz pojedinacne liste letova i za svaki let uzeli podatke iz construktora Flight->getData
            this.listOfFlights.forEach(function (el) {
                pass += '\t' + el.getData();

            })
            return 'Airport ' + this.name + ', ' + 'total passengers: ' + flights + '\n' + pass;
        }

    }


    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, number, category) {
        var personObj = new Person(name, surname);
        var seatObj = new Seat(number, category);
        return new Passenger(personObj, seatObj);
    }

    var airport = new Airport();

    var flight1 = createFlight('Belgrade - New York', '2017-10-25');
    var flight2 = createFlight('Belgrade - Barcelona', '2017-10-27');

    var passenger1 = createPassenger('Darko', 'Dedovic', 15, 'B');
    var passenger2 = createPassenger('Nikola', 'Radovic', 17, 'E');
    var passenger3 = createPassenger('Luka', 'Jovic', 45);
    var passenger4 = createPassenger('Dejan', 'Jurisic');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());
    // console.log(airport.listOfFlights);




})();



