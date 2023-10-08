function main(args) {
  let message = args.message || "hello";
  let greeting = "Rishitha says " + message;
  return { body: greeting };
}
