import {
  HeaderLinksContainer,
  HeaderWrapperFull,
  HeaderWrapper,
} from "./Header.styled";
import Link from "next/link";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { ABOUT_US, CATALOG } from "./constants";
import Image from 'next/image'

export const Header = () => {
  return (
    <HeaderWrapperFull>
      <HeaderWrapper>
        <Link href="/">
          <Image
            src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-design-vector-real-estate-logo-photos-25.png"
            data-testid='logo'
            width={70}
            height={70}
            alt="Logo"
          />
        </Link>

        <HeaderLinksContainer>
          <Link href="/">{CATALOG}</Link>
          <Link href="/about">{ABOUT_US}</Link>
          <WhatsappShareButton url={"/"}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </HeaderLinksContainer>
      </HeaderWrapper>
    </HeaderWrapperFull>
  );
};
