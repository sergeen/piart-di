type Coordinates = {
  x: number;
  y: number;
};

export const coordStringToCoordObj = (coorString: string): Coordinates => {
  const [x, y] = coorString.split(".").map(Number);
  return { x : x, y : y };
};

export const coordObjToCoordStr = (coordinates: Coordinates): string => {
  const parsed = `${coordinates.x}.${coordinates.y}`;
  return parsed;
};

export const createMatrix = (size: number): string[][] | Error => {
  if (typeof size !== "number" || size < 1) {
    return new Error("Invalid size, must be a number bigger than 1");
  }
  
  const matrix = new Array();
  for ( let i = 0; i < 4; i++) {
      matrix.push(new Array(4).fill(0));
  }
  return matrix;
};