const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey)=> {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey)=> {
    return journey.endLocation;
  });
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey)=> {
    return journey.transport;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter( (journey) => {
    return journey.transport === transport
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter( (journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce( (total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.getModesOfTransport()
    return transports.filter((transport, index) => {
      return transports.indexOf(transport) === index;
  });
};


module.exports = Traveller;
