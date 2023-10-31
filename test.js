const a = {
  k() {
    console.log("gaga");
  },
};

for (let i in a) {
  console.log(typeof i);
}

function test() {
  let b = [];
  if (b) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
test();
