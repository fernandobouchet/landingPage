import TestimonialCards from './TestimonialCards';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export const AllTestimonials = [
  {
    img: '../assets/img/costumer1.png',
    name: 'Viezh Robert',
    city: 'Warsaw, Poland',
    rating: '4.5',
    comment:
      '"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best."',
  },
  {
    img: '../assets/img/costumer2.png',
    name: 'Yessica Christy',
    city: 'Shanxi, China',
    rating: '4.5',
    comment:
      '"I like it because I like to travel far and still can connect with high speed."',
  },
  {
    img: '../assets/img/costumer3.png',
    name: 'Kim Young Jou',
    city: 'Seoul, South Korea',
    rating: '4.5',
    comment:
      '"This is very unusual for my business that currently requires a virtual private network that has high security."',
  },
];

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>
        Trusted by Thousands of Happy Customer
      </TestimonialsTitle>
      <TestimonialsSubTitle>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </TestimonialsSubTitle>
      <TestimonialsCardsContainer>
        {AllTestimonials.map((costumer) => {
          return <TestimonialCards info={costumer} key={nanoid()} />;
        })}
      </TestimonialsCardsContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
`;

const TestimonialsCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const TestimonialsTitle = styled.h2`
  width: 450px;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: #0b132a;
  text-align: center;
`;

const TestimonialsSubTitle = styled.h3`
  width: 555px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #4f5665;
`;
