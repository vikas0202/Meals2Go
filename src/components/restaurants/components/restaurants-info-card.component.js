import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const InfoWrapper = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled.View`
  flex-direction: row;
`;
const Section = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)``;
//color: Now we are using the theme instead of directly putting up a color here.
//font-family: Now we are using the custom font from theme, the font has been installed by expo font and then imported in app.js

// expo install react-native-svg , installed this to handle svgs in react native, will require in rating to take star.

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <InfoWrapper>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </InfoWrapper>
    </RestaurantCard>
  );
};
