function recursiveCount(num = 0) {
  if(num >= 10) {
    return;
  } 
    console.log(num);
    return recursiveCount(num + 1);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;


