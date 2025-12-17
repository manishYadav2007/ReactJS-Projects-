import React, { useState } from "react";
import {
  BackgroundContainer,
  ButtonContainer,
  ButtonElement,
  Card,
  CardDescription,
  CardDescriptionContainer,
  HeadingContainer,
  ImageContainer,
  SubTitle,
  Title,
} from "./styledComponents";

const ReadMore = (props) => {
    const { reactHooksDescription } = props;
    const [isClicked, setClicked] = useState(false);

  const onClickToggleTextDescription = () => {
    setClicked(!isClicked);
  };

  return (
    <>
      <BackgroundContainer>
        <HeadingContainer>
          <Title>React Hooks</Title>
          <SubTitle>Hooks are a new addition to React</SubTitle>
        </HeadingContainer>
        <Card>
          <ImageContainer
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <CardDescriptionContainer>
            <CardDescription>
              {isClicked
                ? reactHooksDescription
                : `${reactHooksDescription.slice(0, 170).trim()}...`}
            </CardDescription>
            <ButtonContainer>
              <ButtonElement onClick={onClickToggleTextDescription}>
                {isClicked ? "Read Less" : "Read More"}
              </ButtonElement>
            </ButtonContainer>
          </CardDescriptionContainer>
        </Card>
      </BackgroundContainer>
    </>
  );
};

export default ReadMore;
