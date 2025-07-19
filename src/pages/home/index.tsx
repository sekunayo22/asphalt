import Header from "../../components/Header";
import image from "../../assets/images/hero_3.jpg";
import { ButtonContainer, Description, Frames, FramesBox, Gallery, Hero, HeroBox, HeroText, HeroTextContainer, Overlay, PictureFrame, StyledHome, SubDescription, Title } from "./styles";
import Button from "../../components/Button";
import hero2 from "../../assets/images/hero_2.jpeg";
import hero6 from "../../assets/images/hero_6.jpeg";
import hero1 from "../../assets/images/hero_1.jpeg";
import hero4 from "../../assets/images/hero_4.jpeg";


function Home() {
  return (
    <StyledHome>
      <Hero>
        <img src={image} alt="hero" />
        <Overlay   /> 
        <HeroBox>
            <Header />
            <HeroTextContainer>
            <HeroText>
                <Title>infrastructure</Title>
                <Description>Engineering Roads. Enabling Journeys.</Description>
                <SubDescription>We believe that every road we build is more than just a stretch of asphalt—it's a path to opportunity, connection, and growth</SubDescription>
                <ButtonContainer>
                    <Button variant="secondary" type="button" label="Write on whatsapp" />
                </ButtonContainer>
            </HeroText>
            </HeroTextContainer>
       </HeroBox>
      </Hero>
      <Gallery>
        <PictureFrame src={hero2} alt="hero_2" />
        <FramesBox>   
        <Frames>
          <PictureFrame src={hero1} alt="hero_1"  />
          <PictureFrame src={hero4} alt="hero_4" />
        </Frames>
        <Frames>
          <PictureFrame src={hero6} alt="hero_5" />
          <PictureFrame src={hero2} alt="hero_6" />
        </Frames>
        </ FramesBox >
      </Gallery>
      
    </StyledHome>
  )
}

export default Home;