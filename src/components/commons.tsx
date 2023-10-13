type Coordinates = {
  x: number;
  y: number;
};

export const idToCoordinate = (id: string): Coordinates => {
    const [x, y] = id.split(".").map(Number);
    return { x, y };
};

export const coordinateToId = (coordinates: Coordinates): string => {
    const parsed = `${coordinates.x}.${coordinates.y}`;
    return parsed;
};