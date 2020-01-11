import React, { Component } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProgressCircle from "react-native-progress-circle";
import { Layout, Text, Card } from "@ui-kitten/components";
import Header from "../../components/Header";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryGroup
} from "victory-native";
import { BackIcon, HomeIcon } from "../../constants/icons/index";

const DeviceWidth = Math.round(Dimensions.get("window").width / 5);
const { width } = Dimensions.get("window");
const itemWidth = (width * 80) / 100;
const CustomHeader = title => () => (
  <React.Fragment>
    <Layout
      style={{ alignSelf: "flex-start", flexDirection: "row", padding: 10 }}
    >
      <HomeIcon fill="#3366FF" width={20} height={20} />
      <Text
        appearance="hint"
        style={{ textAlignVertical: "bottom", marginLeft: 10 }}
      >
        {title}
      </Text>
    </Layout>
  </React.Fragment>
);

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header
    return {
      header: <Header title="Home" />
    };
  };
  render() {
    const data = [
      { quarter: 0, earnings: 0 },
      { quarter: 1, earnings: 2 },
      { quarter: 2, earnings: 3 },
      { quarter: 3, earnings: 1 },
      { quarter: 4, earnings: 2 }
    ];
    const data2 = [
      { quarter: 0, earnings: 0 },
      { quarter: 1, earnings: 1 },
      { quarter: 2, earnings: 2 },
      { quarter: 3, earnings: 4 },
      { quarter: 4, earnings: 3 }
    ];
    return (
      <React.Fragment>
        <Layout style={styles.container} level="3">
          <SafeAreaView>
            <ScrollView>
              <Card
                style={{
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 8,
                  alignItems: "center"
                }}
                appearance={"filled"}
              >
                <ProgressCircle
                  percent={30}
                  radius={DeviceWidth}
                  borderWidth={8}
                  color="#00FF00"
                  shadowColor="#999"
                  bgColor="#fff"
                  containerStyle={{ justifyContent: "flex-end" }}
                >
                  <Text category="h1">30</Text>
                  <Text category="s1" style={{ marginBottom: 20 }}>
                    /6000
                  </Text>
                </ProgressCircle>
              </Card>
              <Card
                header={CustomHeader("Steps")}
                style={{
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 8,
                  alignItems: "center"
                }}
                appearance={"filled"}
              >
                <Layout>
                  <Text category="h4">666 Steps</Text>
                </Layout>
              </Card>
              <Card
                header={CustomHeader("Walking and Running Distance")}
                style={{
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 8,
                  alignItems: "center"
                }}
                appearance={"filled"}
              >
                <Layout>
                  <Text category="h4">666 Steps</Text>
                </Layout>
              </Card>
              <Card
                header={CustomHeader("Walking and Running Distance")}
                style={{
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 8,
                  alignItems: "center",
                  paddingBottom: 10
                }}
                appearance={"filled"}
              >
                <Layout>
                  <VictoryChart
                    domainPadding={{ x: 40 }}
                    width={itemWidth}
                    theme={VictoryTheme.material}
                  >
                    <VictoryGroup colorScale={"qualitative"}>
                      <VictoryLine data={data} x="quarter" y="earnings" />
                      <VictoryLine data={data2} x="quarter" y="earnings" />
                    </VictoryGroup>
                  </VictoryChart>
                </Layout>
              </Card>
            </ScrollView>
          </SafeAreaView>
        </Layout>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default createStackNavigator({ HomeScreen }, { headerMode: "screen" });
