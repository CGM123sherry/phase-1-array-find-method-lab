
function superbowlWin(record) {
    // Use the find method to search for the first object with a result of "W"
    const winningRecord = record.find(game => game.result === "W");
  
    // If a winning record is found, return the year, otherwise return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
   
  ];
  