import styled from 'styled-components';

const TestimonialCards = (props) => {
  const { name, city, rating, img, comment } = props.info;
  return (
    <CardContainer>
      <TopInfoContainer>
        <CustomerInfoContainer>
          <CustomerImg src={img} alt={`${name} costumer`} />
          <div>
            <CustomerName>{name}</CustomerName>
            <CustomerCity>{city}</CustomerCity>
          </div>
        </CustomerInfoContainer>
        <CustomerRating>
          {rating} <img src="../assets/icons/star.png" alt="star" />
        </CustomerRating>
      </TopInfoContainer>
      <CustomerComment>{comment}</CustomerComment>
    </CardContainer>
  );
};

export default TestimonialCards;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 230px;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px;
  margin: 50px 0;
`;

const CustomerImg = styled.img`
  width: 50px;
  height: 50px;
`;

const TopInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomerInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const CustomerName = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #0b132a;
  margin: 0;
`;

const CustomerCity = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #4f5665;
  margin: 0;
`;

const CustomerRating = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #0b132a;
`;

const CustomerComment = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #0b132a;
  margin: 0;
`;
