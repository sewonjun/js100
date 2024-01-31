function solution(friends, gifts) {
  const giftIndex = friends.reduce((acc, cur) => {
    acc[cur] = null;

    return acc;
  }, {});
  const giftListSorted = friends.reduce((acc, cur) => {
    acc[cur] = [];

    return acc;
  }, {});
  const nextMonthGift = friends.reduce((acc, cur) => {
    acc[cur] = 0;

    return acc;
  }, {});

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    giftIndex[giver] ? (giftIndex[giver] += 1) : (giftIndex[giver] = 1);
    giftIndex[receiver]
      ? (giftIndex[receiver] -= 1)
      : (giftIndex[receiver] = -1);
    giftListSorted[giver].push(receiver);
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const a = friends[i];
      const b = friends[j];

      const aGaveB = giftListSorted[a].filter(
        (receiver) => receiver === b
      ).length;
      const bGaveA = giftListSorted[b].filter(
        (receiver) => receiver === a
      ).length;
      if (aGaveB > bGaveA) {
        nextMonthGift[a] += 1;
      }
      if (aGaveB < bGaveA) {
        nextMonthGift[b] += 1;
      }
      if (aGaveB === bGaveA) {
        if (giftIndex[a] === giftIndex[b]) continue;

        if (giftIndex[a] === null) {
          nextMonthGift[b] += 1;
          continue;
        }

        if (giftIndex[b] === null) {
          nextMonthGift[a] += 1;
          continue;
        }

        giftIndex[a] > giftIndex[b]
          ? (nextMonthGift[a] += 1)
          : (nextMonthGift[b] += 1);
      }
    }
  }

  const nextMonthGiftList = Object.values(nextMonthGift);

  return Math.max(...nextMonthGiftList);
}
