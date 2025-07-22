import Header from "../../components/Header";
import image from "../../assets/images/hero_3.jpg";
import { About, AboutContainer, AboutFirst, AboutHeader, AboutHeaderDescription, AboutHeaderTitle, AboutHeaderTitleLine, AboutProfile, AboutProfileImage, AboutProfileName, AboutProfileText, AboutProfileTitle, AboutSecond, AboutText, AboutThird, ButtonContainer, CardList, Description, Footer, FooterHeaderContainer, FooterHeading, FooterLink, FooterLinkGroupHeading, FooterLinks, FooterLinksContainer, FooterLogo, Frames, FramesBox, Gallery, Hero, HeroBox, HeroText, HeroTextContainer, News, NewsHeading, NewsTitle, Overlay, Partnership,  PartnershipFirstImageBox,  PartnershipImage,  PartnershipImageBoxContainer, PartnershipSecondImageBox, PartnershipText, PartnershipTextContainer, PartnershipTextDescription, PartnershipTextHeading, PartnershipTextTitle, PictureFrame, StyledHome, SubDescription, Title } from "./styles";
import Button from "../../components/Button";
import hero2 from "../../assets/images/hero_2.jpeg";
import hero6 from "../../assets/images/hero_6.jpeg";
import hero1 from "../../assets/images/hero_1.jpeg";
import hero4 from "../../assets/images/hero_4.jpeg";
import profile from "../../assets/images/portrait.jpg";
import asphalt from "../../assets/images/asphalt_1.jpg";
import asphalt2 from "../../assets/images/asphalt_2.jpg";
import Card from "../../components/Card";
import logo from "../../assets/images/logo.png";
import news1 from "../../assets/images/news_1.jpg";
import news2 from "../../assets/images/news_2.jpg";
import news3 from "../../assets/images/news_3.jpg";
import news4 from "../../assets/images/news_4.jpg";

const cards = [
  {
    title: "Oil",
    description: "Oil plants that are hiring new employees",
    date: "2020-03-19",
    image: news1,
  },
  {
    title: "Oil",
    description: "Oil plants that are hiring new employees",
    date: "2020-03-19",
    image: news2,
  },
  {
    title: "Oil",
    description: "Oil plants that are hiring new employees",
    date: "2020-03-19",
    image: news3,
  },
  {
    title: "Oil", 
    description: "Oil plants that are hiring new employees",
    date: "2020-03-19",
    image: news4,
  }
]
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
      <About>
        <AboutContainer>
        <AboutFirst>
          <AboutHeader>
            <AboutHeaderTitle><AboutHeaderTitleLine />About Us</AboutHeaderTitle>
            <AboutHeaderDescription>Where Quality Meets the Road</AboutHeaderDescription>
          </AboutHeader>
          <AboutText>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </AboutText>
        </AboutFirst>
        <AboutSecond>
        <AboutText>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </AboutText>
        <AboutText>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </AboutText>
        </AboutSecond>
        <AboutThird>
        <AboutText>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </AboutText>
        <AboutText>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </AboutText>
        </AboutThird>
        </AboutContainer>
        <AboutProfile>
            <AboutProfileImage src={profile} alt="profile" />
            <AboutProfileText>
              <AboutProfileName>John Doe</AboutProfileName>
              <AboutProfileTitle>CEO</AboutProfileTitle>
            </AboutProfileText>
          </AboutProfile>
      </About>
      <Partnership>
        <PartnershipImageBoxContainer>
           <PartnershipFirstImageBox> 
            <PartnershipImage src={asphalt} alt="asphalt" />
            <PartnershipSecondImageBox>
              <PartnershipImage src={asphalt2} alt="asphalt" />
            </PartnershipSecondImageBox>
           </PartnershipFirstImageBox>
        </PartnershipImageBoxContainer>
        <PartnershipTextContainer>
          <PartnershipText>
          <PartnershipTextTitle>Corporate Partnership</PartnershipTextTitle>
          <PartnershipTextHeading>We can manage any order</PartnershipTextHeading>
          <PartnershipTextDescription>Consectetur adipiscing elit, sed do euism onsectetur adipiscing elit, sed do eiusm od tempor. </PartnershipTextDescription>
            <Button variant="secondary" type="button" label="About Us" />
          </PartnershipText>
        </PartnershipTextContainer>
      </Partnership>
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
      <News>
        <NewsTitle>POPULAR ARTICLES</NewsTitle>
        <NewsHeading>Latest news</NewsHeading>
        <CardList>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardList>
      </News>
      <Footer>
        <FooterHeaderContainer>
        <FooterLogo>
          <img src={logo} alt="logo" />
        </FooterLogo>
        <FooterHeading>Tomorrow’s Roads, Today</FooterHeading>
        </FooterHeaderContainer>
        <FooterLinksContainer>
          <FooterLinks>
            <FooterLinkGroupHeading>Socials</FooterLinkGroupHeading>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Instagram</FooterLink>
            <FooterLink>Twitter</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLinkGroupHeading>Menu</FooterLinkGroupHeading>
            <FooterLink>Home</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Services</FooterLink>
            <FooterLink>Contact</FooterLink>  
            <FooterLink>Blog</FooterLink>
          </FooterLinks>
          <FooterLinks> 
          <FooterLinkGroupHeading>Say Hello</FooterLinkGroupHeading>
            <FooterLink>info@gmail.com</FooterLink>
          </FooterLinks>
          </FooterLinksContainer>
        </Footer>
   
    </StyledHome>
  )
}

export default Home;