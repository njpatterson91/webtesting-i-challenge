module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.level === 20) {
    return item;
  } else {
    return { ...item, level: item.level + 1 };
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
