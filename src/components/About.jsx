import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <div>
        <StyledH1>
          Want anything to be easy with <strong>LasLesVPN.</strong>
        </StyledH1>
        <StyledH3>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </StyledH3>
        <GetStartedButton>Get Started</GetStartedButton>
      </div>
      <div>
        <ImageContainer src="../assets/img/hero.svg" alt="" />
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  width: 610px;
  height: 380px;
`;

const GetStartedButton = styled.button`
  width: 250px;
  height: 60px;
  background: #f53838;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 25px 45px 5px rgba(245, 56, 56, 0.35);
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const StyledH1 = styled.h1`
  width: 555px;
  height: 140px;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  color: #0b132a;
`;

const StyledH3 = styled.h3`
  width: 555px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;
