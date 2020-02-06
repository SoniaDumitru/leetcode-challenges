let ranks = [0,1,0]
function get_reporting_rank(ranks, callback) {
  let sortedArray = ranks.sort((a, b) => a - b);
  let reportingSoldier = 0;
  for (var i = 0; i < ranks.length; i++) {
    if (ranks.includes(ranks[i] + 1)) {
      reportingSoldier++;
    }
  }
  return reportingSoldier;
}

get_reporting_rank(ranks)
