import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderSection>
      <StyledAnchor href="#root">
        <img src="../assets/img/Logo.svg" alt="" />
      </StyledAnchor>
      <nav>
        <StyledList>
          <StyledItems>About</StyledItems>
          <StyledItems>Features</StyledItems>
          <StyledItems>Pricing</StyledItems>
          <StyledItems>Testimonials</StyledItems>
          <StyledItems>Help</StyledItems>
        </StyledList>
      </nav>
      <StyledAnchor href="#home">Sign In</StyledAnchor>
      <ButtonUnFilled>Sign Up</ButtonUnFilled>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const StyledItems = styled.li`
  list-style-type: none;
  margin: 0 30px;
  color: #4f5665;
  cursor: pointer;
`;

const ButtonUnFilled = styled.button`
  color: #f53855;
  background-color: transparent;
  width: 150px;
  height: 45px;
  border: 1px solid #f53855;
  box-sizing: border-box;
  border-radius: 50px;
  align-self: center;
  cursor: pointer;
`;

const StyledAnchor = styled.a`
  align-self: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0b132a;
`;
