const keyName = "item";

function get(obj) {
  return localStorage.getItem(keyName);
}

function store(token) {
  localStorage.setItem(keyName, token);
}
function remove() {
  localStorage.removeItem(keyName);
}
export default {
    get,
    store,
    remove,
};