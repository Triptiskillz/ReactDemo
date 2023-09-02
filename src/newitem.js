const keyName = "childitem";

function getChild(obj) {
  return localStorage.getItem(keyName);
}

function storeChild(token) {
  localStorage.setItem(keyName, token);
}
function removeChild() {
  localStorage.removeItem(keyName);
}
export default {
    getChild,
    storeChild,
    removeChild,
};