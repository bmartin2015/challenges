const args = process.argv.slice(2);

const total = args.reduce(function(sum, value) {
  return sum + Number(value);
}, 0);

console.log(total);
