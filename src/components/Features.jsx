import styled from 'styled-components';

const Features = () => {
  return (
    <FeaturesContainer>
      <StyledImg src="../assets/img/features_img.png" alt="" />
      <FeaturesInfoContainer>
        <FeaturesTitle>We Provide Many Features You Can Use</FeaturesTitle>
        <FeaturesSubtitle>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </FeaturesSubtitle>
        <StyledList>
          <StyledItem>
            <ItemIcon src="../assets/icons/Vector.png" alt="" />
            Powerfull online protection.
          </StyledItem>
          <StyledItem>
            <ItemIcon src="../assets/icons/Vector.png" alt="" />
            Internet without borders.
          </StyledItem>
          <StyledItem>
            <ItemIcon src="../assets/icons/Vector.png" alt="" />
            Supercharged VPN
          </StyledItem>
          <StyledItem>
            <ItemIcon src="../assets/icons/Vector.png" alt="" />
            No specific time limits.
          </StyledItem>
        </StyledList>
      </FeaturesInfoContainer>
    </FeaturesContainer>
  );
};

export default Features;

const FeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0px;
`;

const StyledImg = styled.img`
  width: 508px;
  height: 414px;
`;

const FeaturesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 430px;
`;

const FeaturesTitle = styled.h2`
  width: 383px;
  height: 100px;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: #0b132a;
`;
const FeaturesSubtitle = styled.h3`
  width: 427px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;

const StyledItem = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #4f5665;
`;

const ItemIcon = styled.img`
  vertical-align: middle;
  margin-right: 15px;
`;
