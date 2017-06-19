import create from "./create/sagas";
import edit from "./edit/sagas";
import load from "./load/sagas";

export default [
  create,
  edit,
  load
].reduce(function (x, y) {
  return x.concat(y)
});
