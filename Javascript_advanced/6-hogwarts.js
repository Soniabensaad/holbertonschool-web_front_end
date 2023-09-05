function studentHogwarts() {
    let privateScore = 0;
    let name = null;
  
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    return {
      setName: function (newName) {
        name = newName;
      },
      rewardStudent: function () {
        changeScoreBy(1);
      },
      penalizeStudent: function () {
        changeScoreBy(-1);
      },
      getScore: function () {
        return { [name]: privateScore };
      },
    };
  }
  
  let harry = studentHogwarts();
  harry.setName('Harry');
  
  for (let i = 1; i <= 4; i++) {
    harry.rewardStudent();
    console.log(`Reward ${i} goes to ${harry.name}!`);
  }
  
  let draco = studentHogwarts();
  draco.setName('Draco');
  
  draco.rewardStudent();
  
  for (let i = 1; i <= 3; i++) {
    draco.penalizeStudent();
    console.log(`Penalize ${i} goes to ${draco.name}!`);
  }
  
  console.log(harry.getScore());
  console.log(draco.getScore());
  