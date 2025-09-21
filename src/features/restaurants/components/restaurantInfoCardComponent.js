import { View } from "react-native";
import { Card, Icon } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/SVG/star";
import open from "../../../assets/SVG/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  overflow: "hidden";
`;

const RestaurantCardCover = styled(Card.Cover)`
  border-radius: 0;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.inverse};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.inverse};
`;

const Section = styled(View)`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Star = styled(SvgXml)``;

const Rating = styled(View)`
  flex-direction: row;
`;

const SectionEnd = styled(View)``;

const Open = styled(SvgXml)``;

const Closed = styled(Text)``;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    subtitle = "this is a subtitle",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const rattingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {rattingArray.map((_, index) => (
              <Star key={index} xml={star} width={24} height={24} />
            ))}
          </Rating>
          <SectionEnd>
            {isOpenNow ? (
              <Open xml={open} width={24} height={24} />
            ) : (
              <Closed variant="error">Temporarily Closed</Closed>
            )}
          </SectionEnd>
        </Section>
        <Address variant="caption">{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
