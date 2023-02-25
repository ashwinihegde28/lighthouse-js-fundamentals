const chooseStations = function (stations) {
    let output = [];
    for (let station of stations) {
      if (station[1] >= 20) {
        if (station[2] === "school" || station[2] === "community centre") {
          output.push(station[0]);
        }
      }
    }
    return output;
  };