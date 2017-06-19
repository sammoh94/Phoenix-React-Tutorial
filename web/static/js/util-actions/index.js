const resetState = function (reset) {
  console.log("CALLED RESET STATE");
  return {
    type: "RESET_STATE",
    payload: reset
  }
}
export default {
  resetState
}
