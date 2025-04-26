import {deleteAsync} from "del";

//------------------------------------------------------------
//-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL------
//------------------------------------------------------------

export const cleanFull = () => {
  return deleteAsync(app.path.cleanFull)
};

//------------------------------------------------------------
//-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN----
//------------------------------------------------------------

export const cleanMin = () => {
  return deleteAsync(app.path.cleanMin)
};

//------------------------------------------------------------
//-----SPRITE-----SPRITE-----SPRITE-----SPRITE-----SPRITE-----
//------------------------------------------------------------
export const cleanSprite = () => {
  return deleteAsync(app.path.sprite.cleanSprite)
};