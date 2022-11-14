const user = "aacdddddddddfffffffffgghhh";
let result = "";
console.log(
  `${user.match(/a/g).length}${Number(user.match(/b/g))}${
    user.match(/c/g).length
  }${user.match(/d/g).length}${Number(user.match(/e/g))}${
    user.match(/f/g).length
  }${user.match(/g/g).length}${user.match(/h/g).length}`
);
