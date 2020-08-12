export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (feature) => {
  console.log("REMOVE_FEATURE");
  return { type: REMOVE_FEATURE, payload: feature };
};

export const addNewFeature = (feature) => {
  console.log("action fired", feature);
  return { type: ADD_FEATURE, payload: feature };
};
