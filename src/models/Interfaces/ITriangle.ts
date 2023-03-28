export interface ITriangleSize {
  t: number;
  r: number;
  b: number;
  l: number;
}

export type TTriangleBorderColor = "transparent" | string;

export interface ITriangleBorderColor {
  t: TTriangleBorderColor;
  r: TTriangleBorderColor;
  b: TTriangleBorderColor;
  l: TTriangleBorderColor;
}

export interface ITriangle {
  size: ITriangleSize;
  borderColor: ITriangleBorderColor;
}
