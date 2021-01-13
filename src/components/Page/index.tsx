import React, { FC } from "react";

import styled from "styled-components";
import { theme } from "src/theme";

const Inner = styled.div`
  max-width: 1080px;
  min-height: 100%;
  margin: 0 auto;
  padding: ${theme.spacing(2)};
`;

const StyledPage = styled.div`
  background: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
  min-height: 100vh;
`;

export const Page: FC<any> = (props) => (
  <StyledPage {...props}>
    <Inner>{props.children}</Inner>
  </StyledPage>
);
