const step = (name, ms) => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(name, "done");
      resolve(name);
    }, ms)
  );
};

step("A", 200)
  .then(() => step("B", 200))
  .then(() => step("C", 200))
  .then(() => console.log("All steps finished"));
