import styled from 'styled-components';

const Plans = () => {
  return (
    <PlansContainer>
      <div>
        <StyledTitle>Choose Your Plan</StyledTitle>
        <StyledInfo>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </StyledInfo>
      </div>
      <Container>
        <PlanContainer>
          <StyledImg src="../assets/img/Premium.png" alt="" />
          <ItemTitle>Free Plan</ItemTitle>
          <ItemList>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Unlimited Bandwitch
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Encrypted Connection
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              No Traffic Logs
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Works on All Devices
            </Item>
          </ItemList>
          <StyledText>Free</StyledText>
          <StyledButton>Select</StyledButton>
        </PlanContainer>
        <PlanContainer>
          <StyledImg src="../assets/img/Premium.png" alt="" />
          <ItemTitle>Standard Plan</ItemTitle>
          <ItemList>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Unlimited Bandwitch
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Encrypted Connection
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Yes Traffic Logs
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Works on All Devices
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Connect Anyware
            </Item>
          </ItemList>
          <StyledText>
            $9 <StyledSpan>/ mo</StyledSpan>
          </StyledText>
          <StyledButton>Select</StyledButton>
        </PlanContainer>
        <PlanContainer>
          <StyledImg src="../assets/img/Premium.png" alt="" />
          <ItemTitle>Premium Plan</ItemTitle>
          <ItemList>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Unlimited Bandwitch
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Encrypted Connection
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Yes Traffic Logs
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Works on All Devices
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Connect Anyware
            </Item>
            <Item>
              <StyledItemImg src="../assets/icons/plans.png" alt="" />
              Get New Features
            </Item>
          </ItemList>
          <StyledText>
            $12 <StyledSpan>/ mo</StyledSpan>
          </StyledText>
          <StyledButton>Select</StyledButton>
        </PlanContainer>
      </Container>
    </PlansContainer>
  );
};

export default Plans;

const PlanContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 330px;
  height: 760px;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 50px 0;
  padding: 60px 0;

  &:hover {
    border: 2px solid #f53838;
  }
`;
const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  padding: 50px 0;
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  text-align: center;
  color: #0b132a;
`;

const StyledInfo = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #4f5665;
`;

const StyledImg = styled.img`
  width: 145px;
  height: 165px;
`;

const ItemTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #0b132a;
  margin: 30px 0px 10px 0;
`;

const ItemList = styled.ul`
  padding: 0;
  flex: 1;
`;

const Item = styled.li`
  list-style: none;
  margin: 10px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #4f5665;
`;

const StyledItemImg = styled.img`
  margin-right: 25px;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  width: 180px;
  height: 45px;
  border: 2px solid #f53838;
  box-sizing: border-box;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #f53838;

  &:hover {
    cursor: pointer;
    background: #f53838;
    color: #ffffff;
    transform: scale(1.05);
    box-shadow: 0 20px 20px 1px rgba(245, 56, 56, 0.35);
  }
`;

const StyledText = styled.h2`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #0b132a;
`;

const StyledSpan = styled.span`
  font-weight: 400;
  color: #4f5665;
`;
