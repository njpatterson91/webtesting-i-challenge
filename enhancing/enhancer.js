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
  if (item.level < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.level === 15) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, durability: item.durability - 10, level: item.level - 1 };
  }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
