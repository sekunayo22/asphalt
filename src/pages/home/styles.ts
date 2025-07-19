import styled from "@emotion/styled";
import { colWhite } from "../../styles/abstracts/variables";

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 50;
`;

export const HeroBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
   z-index: 100;
   width: 100%;
   height: 100%;
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 100px;
`

export const Title = styled.h6`
  letter-spacing: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 400;
  color: ${colWhite};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: ${colWhite};
`
export const SubDescription = styled.p`
  font-size: 16px;
  font-weight: 100;
  color: ${colWhite};
  margin-bottom: 32px;
  width: 40%;
  text-align: center;
`

export const StyledHome = styled.div`
  overflow-y: auto;
  min-height: 100vh;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const HeroIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(5px);
  }
  
  img {
    filter: brightness(0) invert(1);
    opacity: 0.8;
  }
`

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const Gallery = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const PictureFrame = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FramesBox = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(2, 50vh);
`

export const Frames = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`