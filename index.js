const receivesAFunction = (callback) => {
  callback();
};

const returnsANamedFunction = () => {
  const namedFunction = () => {
    console.log("I am namedFunction");
  };
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("I am anonymousFunction hehe");
  };
};
