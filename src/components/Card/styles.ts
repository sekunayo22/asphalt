import styled from "@emotion/styled";
import { colBlack, colGrey1, colWhite } from "../../styles/abstracts/variables";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colBlack};
  text-align: left;
`

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colGrey1};
`
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CardImage = styled.div`
  width: 100%;
  height: 188px;
  border-radius: 10px;
  overflow: hidden;

  & img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

export const CardDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${colGrey1};
`