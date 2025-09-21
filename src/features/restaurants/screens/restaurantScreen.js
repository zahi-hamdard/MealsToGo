import { View, Text } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar as Search } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurantInfoCardComponent";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

const SearchContainer = styled(View)``;

const SearchBar = styled(Search)`
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantInfoCardContainer = styled(View)`
  padding-top: ${(props) => props.theme.space[4]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar
          placeholder="Search"
          onChangeText={(val) => {
            console.log(val);
          }}
        />
      </SearchContainer>
      <RestaurantInfoCardContainer>
        <RestaurantInfoCard />
      </RestaurantInfoCardContainer>
    </SafeArea>
  );
};
