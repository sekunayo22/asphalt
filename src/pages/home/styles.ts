import styled from "@emotion/styled";
import { colBlack, colGrey1, colPrimary1, colWhite } from "../../styles/abstracts/variables";

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
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 30px;
    padding: 0 16px;
  }
`
export const SubDescription = styled.p`
  font-size: 16px;
  font-weight: 100;
  color: ${colWhite};
  margin-bottom: 32px;
  width: 40%;
  text-align: center;

   
  @media (max-width: 480px) {
     width: 70%;
     margin-top: 16px;
  }
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

export const About = styled.div`
  height: 70vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 32px;
`

export const AboutText = styled.div`
 font-size: 16px;
 font-weight: 400;
 color: ${colGrey1};
 text-align: left;
`

export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AboutHeaderTitle = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: ${colBlack};
  text-align: left;
  letter-spacing: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const AboutHeaderDescription = styled.p`
  font-size: 40px;
  font-weight: 900;
  color: ${colBlack};
  text-align: left;
  margin-bottom: 8px;
`
export const AboutHeaderTitleLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${colPrimary1};
  margin-right: 8px;
`

export const AboutFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 100%;
`

export const AboutProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const AboutProfileImage = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  object-fit: cover;
`

export const AboutProfileText = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutProfileName = styled.h3`
  font-size: 19px;
  font-weight: 600;
  color: ${colBlack};
`

export const AboutProfileTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colGrey1};
`

export const AboutSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
` 

export const AboutThird = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const Partnership = styled.div`
  height: auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 50px 32px 150px 32px;
`

export const PartnershipImageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const PartnershipFirstImageBox = styled.div`
  width: 400px;
  height: 600px;
  position: relative;
`

export const PartnershipSecondImageBox = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: -15%;
  right: -50%;
`

export const PartnershipImage = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const PartnershipTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 100px;
`

export const PartnershipText = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PartnershipTextTitle = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: ${colBlack};
  text-align: left;
  letter-spacing: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const PartnershipTextDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colGrey1};
  text-align: left;
  margin-bottom: 8px;
`

export const PartnershipTextHeading = styled.h3`
  font-size: 50px;
  font-weight: 900;
  color: ${colBlack};
  text-align: left;
  margin-bottom: 8px;
  width: 80%;
  line-height: 1.2;
`