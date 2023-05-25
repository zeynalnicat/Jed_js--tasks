const domains = [
  {
    id: 0,
    name: "baki.az",
    owner: {
      name: "ali",
      age: 17,
      gender: "man",
      job: "fe",
    },
  },
  {
    id: 1,
    name: "fe.az",
    owner: {
      name: "aydan",
      age: 15,
      gender: "woman",
      job: "be",
    },
  },
  {
    id: 2,
    name: "fs.com",
    owner: {
      name: "tesla",
      age: 15,
      gender: "woman",
      job: "fs",
    },
  },
  {
    id: 3,
    name: "zoo.com",
    owner: {
      name: "zabilia",
      age: 20,
      gender: "man",
      job: "qa",
    },
  },
  {
    id: 4,
    name: "zatachivak.com",
    owner: {
      name: "pakitotunak",
      age: 28,
      gender: "man",
      job: "designer",
    },
  },
];

function oldestAge() {
  let age = 0;

  domains.forEach((user) => {
    if (user.owner.age > age) {
      age = user.owner.age;
    }
  });

  const findOldest = domains.find((user) => {
    if (user.owner.age === age) {
      return user.owner;
    }
  });
  return findOldest;
}

const includeChar = domains
  .filter((user) => {
    if (user.owner.name.includes("n") || user.name.includes("n")) {
      return user;
    }
  })
  .map((domain) => {
    return domain.name;
  });

const checkEqual = domains
  .filter((user) => {
    if (user.name.split(".")[0] === user.owner.job) {
      return user;
    }
  })
  .map((user) => {
    return [user.name, user.owner.name];
  });

console.log(oldestAge());
console.log(includeChar);
console.log(checkEqual);
