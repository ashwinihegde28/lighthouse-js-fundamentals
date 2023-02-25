const smartGarbage = function (trash, bins) {
    bins[trash] += 1;
    const output = bins;
    return output;
  };

  smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });