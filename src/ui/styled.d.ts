import "styled-components";

import { ITheme, ETheme } from "../models";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ETheme;
  }
}
