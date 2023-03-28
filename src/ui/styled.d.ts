import "styled-components";

import { ITheme } from "../models/Interfaces";
import { ETheme } from "../models/Enum";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ETheme;
  }
}
