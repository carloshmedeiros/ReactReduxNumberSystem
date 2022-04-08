export function changeMin(newnumber) {
  return {
    type: "NUM_MIN",
    payload: newnumber
  };
}
export function changeMax(newnumber) {
  return {
    type: "NUM_MAX",
    payload: newnumber
  };
}
