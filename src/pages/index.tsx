import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { Column } from "../layout/Column";
import { Container } from "../layout/Container";
import { Text } from "../layout/irs/Text";
import { Row } from "../layout/Row";

const text = "IRS België is een IT infrastructuur oplossingen provider.";
const subHeadingText = `Wij ontzorgen middelgrote tot grote klanten met cash terminals, IT devices en oplossingen op maat.`;
const shortLorum = `Fusce arcu ligula, dictum eget velit ac, aliquet fermentum turpis.`;
const longLorum = `In presentations, you often require 'dummy text' to fill out the
places where actual text will go once the money men buy it from some
other overpriced consultant. Historically, this dummy text is a
block of fake latin boilerplate that begins with 'Lorem Ipsum'. It
fills up the space with sentences and paragraphs, but it's been used
so long by so many that - like banner ads and tv commercials -
people just gloss over it without paying any attention to the
contents. Herein lies your opportunity to subvert the timeless
standard.`;

export default function Index() {
  return (
    <Container>
      <StyledHeading>Styleguide Guide.</StyledHeading>
      <StyledSub>Nicholas Van Beylen - Crossworx</StyledSub>
      <StyledDivider />
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>HTML Heading Tags</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubItemTitle>H1</StyledSubItemTitle>
          <h1>{text}</h1>
          <StyledSubItemTitle>H2</StyledSubItemTitle>
          <h2>{text}</h2>
          <StyledSubItemTitle>H3</StyledSubItemTitle>
          <h3>{text}</h3>
          <StyledSubItemTitle>H4</StyledSubItemTitle>
          <h4>{text}</h4>
          <StyledSubItemTitle>H5</StyledSubItemTitle>
          <h5>{text}</h5>
          <StyledSubItemTitle>H6</StyledSubItemTitle>
          <h6>{text}</h6>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Other html tags</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>paragraph</StyledSubItemTitle>
          <StyledP>{longLorum}</StyledP>
          <StyledSubItemTitle>links</StyledSubItemTitle>
          <a href="https://crossworx.be">Text link</a>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Testimonials</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-testimonials</StyledSubItemTitle>
          <StyledTestimonials>{longLorum}</StyledTestimonials>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Text sizes</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-xlarge</StyledSubItemTitle>
          <StyledText type="text-xlarge">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-large</StyledSubItemTitle>
          <StyledText type="text-large">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-medium</StyledSubItemTitle>
          <StyledText type="text-medium">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-small</StyledSubItemTitle>
          <StyledText type="text-small">{shortLorum}</StyledText>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Text weights</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-weight-bold</StyledSubItemTitle>
          <StyledText weight="text-weight-bold">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-weight-semibold</StyledSubItemTitle>
          <StyledText weight="text-weight-semibold">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-weight-medium</StyledSubItemTitle>
          <StyledText weight="text-weight-medium">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-weight-normal</StyledSubItemTitle>
          <StyledText weight="text-weight-normal">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-weight-light</StyledSubItemTitle>
          <StyledText weight="text-weight-light">{shortLorum}</StyledText>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Text styles</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-style-link</StyledSubItemTitle>
          <StyledA href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Text link
          </StyledA>
          <StyledSubItemTitle>.text-style-subheading</StyledSubItemTitle>
          <StyledText textStyle="text-style-subheading">
            {subHeadingText}
          </StyledText>
        </Column>
      </StyledRow>
      <StyledRow>
        <Column breakpoints={{ phone: 4 }}>
          <StyledItemTitle>Text colors</StyledItemTitle>
        </Column>
        <Column breakpoints={{ phone: 8 }}>
          <StyledSubtileDivider />
          <StyledSubItemTitle>.text-color-white</StyledSubItemTitle>
          <StyledTextColorWhiteBox>
            <StyledText color="text-color-white">{shortLorum}</StyledText>
          </StyledTextColorWhiteBox>
          <StyledSubItemTitle>.text-color-secondary</StyledSubItemTitle>
          <StyledText color="text-color-secondary">{shortLorum}</StyledText>
          <StyledSubItemTitle>.text-color-accent</StyledSubItemTitle>
          <StyledText color="text-color-accent">{shortLorum}</StyledText>
        </Column>
      </StyledRow>
    </Container>
  );
}

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #034c87;
  margin: 1rem 0 1rem 0;
`;

const StyledSub = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #034c87;
  margin: 2rem 0;
`;

const StyledSubtileDivider = styled.div`
  background: #eff6fc;
  width: calc(100% - 2rem);
  height: 0.1rem;
  margin: 1rem 0rem 5rem 2rem;
`;

const StyledItemTitle = styled.p`
  width: fit-content;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  background: #eff6fc;
  font-weight: 900;
  letter-spacing: 0.15rem;
  color: #034c87;
`;

const StyledSubItemTitle = styled(StyledItemTitle)`
  padding: 0.6rem 0.8rem;
  margin-bottom: 1.5rem;
`;

const StyledRow = styled(Row)`
  margin-bottom: 4rem;
`;

const StyledP = styled.p`
  margin-bottom: 4rem;
`;

const StyledTestimonials = styled.p`
  font-size: 1.14rem;
  font-weight: 700;
`;

const StyledText = styled(Text)`
  margin-bottom: 4rem;
`;

const StyledA = styled.a`
  margin-bottom: 4rem;
`;

const StyledTextColorWhiteBox = styled.div`
  background: #034c87;
  padding: 1rem;
  margin-bottom: 4rem;
`;
