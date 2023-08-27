import { Header } from "../Header/Header";
import Image from "next/image";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  PinterestShareButton,
  PinterestIcon,
} from "next-share";
import {
  AboutText,
  Adress,
  ContentContainer,
  Images,
  OwnerImage,
  Phone,
  SocialMedia,
  StoreImage,
} from "./AboutDetails.styled";
import { ABOUT_TEXT, ADRESS, PHONE_NUMBER } from "./constants";

export const AboutDetails = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <StoreImage>
          <Image
            src="https://images.unsplash.com/photo-1680503397654-cd18497b1b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
            data-testid="yard"
            width={900}
            height={600}
            alt="store"
          />
        </StoreImage>
        <OwnerImage>
          <Image
            src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2941&q=80"
            data-testid="yard"
            width={300}
            height={200}
            alt="yard"
            className="owner"
          />
        </OwnerImage>

        <AboutText>{ABOUT_TEXT}</AboutText>
        <Phone>{PHONE_NUMBER}</Phone>
        <Adress>{ADRESS}</Adress>

        <SocialMedia>
          <WhatsappShareButton url={"/"}>
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
          <FacebookShareButton url={"/"}>
            <FacebookIcon size={36} round />
          </FacebookShareButton>
          <PinterestShareButton url={"/"} media={"#"}>
            <PinterestIcon size={36} round />
          </PinterestShareButton>
        </SocialMedia>
      </ContentContainer>
    </>
  );
};
