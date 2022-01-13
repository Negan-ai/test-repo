const countAppearTimes = (string, object) => {
  string.split('').forEach((letter) => {
    object[letter] ? object[letter]++ : object[letter] = 1;
  });
};

const mergeStrings = (s1, s2) => {
  const record1 = {};
  const record2 = {};
  countAppearTimes(s1, record1);
  countAppearTimes(s2, record2);

  let pt1 = 0;
  let pt2 = 0;
  const lenOfS1 = s1.length;
  const lenOfS2 = s2.length;
  const res = [];

  while (pt1 < lenOfS1 && pt2 < lenOfS2) {
    if (record1[s1[pt1]] < record2[s2[pt2]]) {
      res.push(s1[pt1]);
      pt1 += 1;
    } else if (record1[s1[pt1]] > record2[s2[pt2]]) {
      res.push(s2[pt2]);
      pt2 += 1;
    } else {
      if (s1[pt1] <= s2[pt2]) {
        res.push(s1[pt1]);
        pt1 += 1;
      } else if (s1[pt1] > s2[pt2]) {
        res.push(s2[pt2]);
        pt2 += 1;
      }
    }
  }

  while (pt1 < lenOfS1) {
    res.push(s1[pt1]);
    pt1 += 1;
  }

  while (pt2 < lenOfS2) {
    res.push(s2[pt2]);
    pt2 += 1;
  }

  return res.join('');
}

mergeStrings('dce', 'cccbd');
