const flights = [
    { id: 0, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 1, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 2, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 3, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 4, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 5, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 6, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 7, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 8, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 9, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

const getUserName = () => {
    const userName = prompt(
        'Bienvenido a ISDI Coders Airlines!✈️🛩 Aquí podrás ver la información de nuestros vuelos! Cuál es tu nombre?'
    );
    if (userName === null) {
        alert('Hasta pronto!');
    } else {
        alert(
            `Hola ${userName}! A continuación te mostraremos nuestros vuelos disponibles.`
        );
    }
    return userName;
};

// The user can see all avaliable flights
const infoFlights = () => {
    const scaleInfo = [];
    flights.forEach((flight) => {
        let haveScale;
        if (flight.scale) {
            haveScale = 'realiza escalas.';
        } else {
            haveScale = 'no realiza ninguna escala.';
        }
        scaleInfo.push(
            `El vuelo con origen ${flight.from}, y destino ${flight.to}, tiene un coste de €${flight.cost} y ${haveScale}\n`
        );
    });
    alert(scaleInfo);
};

const averageCost = () => {
    let flightCost = 0;
    for (let flight of flights) {
        flightCost += flight.cost;
    }
    flightCost /= flights.length;
    flightCost = flightCost.toFixed(2);
    alert(`El coste medio de nuestros vuelos es de: ${flightCost} euros`);
    return flightCost;
};

const flightsWithScales = () => {
    let scales = 0;
    flights.forEach((flight) => {
        if (flight.scale) {
            scales++;
        }
    });

    alert(`Hoy tenemos ${scales} vuelos que efectuan escalas.`);
};

const lastDestinations = () => {
    let destinations = [];
    for (let i = flights.length - 5; i < flights.length; i++) {
        destinations.push(`* ${flights[i].to}\n\r`);
    }
    alert(
        `Estos son los últimos vuelos programados para hoy: \n\r ${destinations}`
    );
};

// Main function
const airlinesProgram = () => {
    const userName = getUserName();
    infoFlights();
    averageCost();
    flightsWithScales();
    lastDestinations();
    alert(`Gracias por usar nuestro programa ${userName}! Vuelve pronto!✈️🛩`);
};
airlinesProgram();
