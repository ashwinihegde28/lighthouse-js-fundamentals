const judgeVegetable = function (vegetables, metric) {
    let output = "";
    let highscore = 0;
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i][metric] > highscore) {
        output = vegetables[i]["submitter"];
        highscore = vegetables[i][metric];
      }
    }
    return output;
  };

  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
  
  const metric = 'redness'
  
  judgeVegetable(vegetables, metric)