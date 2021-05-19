import React from 'react';
import styled from '@emotion/styled';
import IconInstagram from '../components/icons/IconInstagram';
import IconTikTok from '../components/icons/IconTikTok';
import IconYouTube from '../components/icons/IconYouTube';
import IconFacebook from '../components/icons/IconFacebook';
import IconTwitter from '../components/icons/IconTwitter';
import logo from '../../static/logo/header-logo.png';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: #374151;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  --tw-divide-opacity: 1;
  border-color: white;
  border-top-left-radius: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    border-bottom-left-radius: 1rem;
  }
`;

const P = styled.p`
  text-align: justify;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;
const Flaticon = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: justify;
`;

const Icons = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-evenly;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div>
        <P>Siguenos en redes sociales.</P>
        <Icons>
          <IconInstagram link="#" />
          <IconTikTok link="#" />
          <IconYouTube link="#" />
          <IconFacebook link="#" />
          <IconTwitter link="#" />
        </Icons>

        <Flaticon>
          Iconos diseñados por
          <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </Flaticon>
      </div>
      <div>
        <div>
          <img src={logo} alt="Bandera de Colombia" />
        </div>
        <P className="text-white text-sm break-words text-justify">
          Buscamos colaborar y ayudar al pueblo colombiano en el paro nacional
          del año 2021
        </P>
      </div>
      <div>
        <P>Todos los derechos reservados © 2021 | SOS Colombia</P>
      </div>
    </Text>
  </Wrapper>
);
export default Footer;
