import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZAPAA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam
          reiciendis optio cumque assumenda corrupti saepe architecto expedita
          facere pariatur, maxime obcaecati facilis porro magnam error ducimus
          totam praesentium explicabo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente, quos quod facilis assumenda est accusamus
          nemo quam. Vero repudiandae recusandae accusamus beatae reiciendis
          quos iusto modi perspiciatis, iure ipsa neque!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E600023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 8 Perl Garden Estate, Port
          Harcourt
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +234 814 365 1142
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> onosgb@gmail.com
        </ContactItem>

        <Payment src="data:image/png;base64,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" />
      </Right>
    </Container>
  );
};

export default Footer;
