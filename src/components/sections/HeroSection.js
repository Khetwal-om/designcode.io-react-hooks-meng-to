import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import PurchaseButton from "../buttons/PurchageButton"
import { themes } from "../styles/ColorStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code React apps
          </Title>
          <Description>
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.light.text1};
`
const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`
