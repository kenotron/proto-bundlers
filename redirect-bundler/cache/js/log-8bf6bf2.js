function log(...args) {
  console.log.apply({}, args);
}

export default log;
