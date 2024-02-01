function solution(today, terms, privacies) {
  const termsObj = terms.reduce((acc, cur) => {
    const [name, term] = cur.split(" ");

    acc[name] = Number(term);

    return acc;
  }, {});

  const todayArr = today.split(".").map((el) => Number(el));
  const privacyTerms = [];

  privacies.forEach((privacy) => {
    let privacyTerm = [];
    const [agreedDate, term] = privacy.split(" ");
    const agreedDateArr = agreedDate.split(".").map((el) => Number(el));
    const sumedTerm = agreedDateArr[1] + termsObj[term];
    let month = sumedTerm % 12 === 0 ? 12 : sumedTerm % 12;

    if (sumedTerm > 12) {
      privacyTerm.push(agreedDateArr[0] + Math.floor(sumedTerm / 12));
    } else {
      privacyTerm.push(agreedDateArr[0]);
    }

    if (agreedDateArr[2] === 1) {
      if (month - 1 === 0) {
        privacyTerm[0] = privacyTerm[0] - 1;
        privacyTerm[1] = 12;
      } else {
        privacyTerm.push(month - 1);
      }

      privacyTerm.push(28);
    } else {
      privacyTerm.push(month);
      privacyTerm.push(agreedDateArr[2] - 1);
    }

    privacyTerms.push(privacyTerm);
  });

  const expiredPrivacy = privacyTerms.map((privacyTerm) => {
    if (privacyTerm[0] < todayArr[0]) return true;

    if (privacyTerm[1] < todayArr[1]) return true;

    if (privacyTerm[1] === todayArr[1] && privacyTerm[2] < todayArr[2])
      return true;

    return false;
  });

  const answer = [];

  expiredPrivacy.forEach((el, index) => {
    if (el === true) answer.push(index + 1);
  });

  return answer;
}
