import styled from "styled-components";

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin: 2rem 0 1.4rem 0;
`;

export const Title = styled.h1`
  font-size: clamp(1.1rem, 1.7rem, 3rem);
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  font-size: clamp(0.8rem, 1.1rem, 2rem);
  color: #334155;
  font-weight: 480;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const CardDescriptionContainer = styled.div`
  padding: 1rem;
`;

export const CardDescription = styled.p`
  font-size: clamp(0.8rem, 1rem, 2rem);
  color: #334155;
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 1rem 0;
`;

export const ButtonElement = styled.button`
  background-color: #1f81ff;
  height: 45px;
  width: 130px;
  color: #ffffff;
  font-weight: 550;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
