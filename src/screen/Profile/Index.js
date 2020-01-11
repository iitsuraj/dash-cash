import React, { Component } from "react";
import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../../components/Header";
import { Layout, Text, List, Button, Icon } from "@ui-kitten/components";
const AvatarSize = Math.round(Dimensions.get("window").width / 3);

const data = [
  { hint: "First Name", value: "Suraj Saini" },
  { hint: "Gender", value: "Male" },
  { hint: "Age", value: "25" },
  { hint: "DOB", value: "Not Provided" },
  { hint: "Email", value: "Myemail@m.m" }
];
const InfoList = ({ item }) => (
  <Layout style={styles.infolist}>
    <Text appearance="hint">{item.hint}</Text>
    <Text>{item.value}</Text>
  </Layout>
);
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header
    return {
      header: <Header title="Profile" />
    };
  };
  render() {
    const iconRef = React.createRef();

    const onPress = () => {
      iconRef.current.startAnimation();
    };
    const renderIcon = style => <Icon {...style} name="star" />;

    return (
      <React.Fragment>
        <Layout style={styles.container} level="2">
          <SafeAreaView>
            <ScrollView>
              <Layout
                style={{
                  backgroundColor: "transparent",
                  marginVertical: 40,
                  alignItems: "center"
                }}
              >
                <Image
                  style={{
                    width: AvatarSize,
                    height: AvatarSize,
                    borderRadius: AvatarSize / 2
                  }}
                  source={require("../../../assets/icon.png")}
                />
              </Layout>
              <Layout style={{ marginBottom: 15 }}>
                <List data={data} renderItem={InfoList} />
              </Layout>
              <Layout style={{ marginBottom: 15 }}>
                <Layout style={styles.infolist}>
                  <Layout>
                    <Text appearance="hint">Insurance Number</Text>
                    <Text appearance="hint" style={{ fontSize: 10 }}>
                      *long press to change
                    </Text>
                  </Layout>

                  <Text>99284558415</Text>
                </Layout>
                <Layout style={styles.infolist}>
                  <Layout>
                    <Text appearance="hint">Reward</Text>
                    <Text appearance="hint" style={{ fontSize: 10 }}>
                      *this reset after withdraw or after Logout
                    </Text>
                  </Layout>
                  <Text>666</Text>
                </Layout>
              </Layout>
              <Layout style={{ marginBottom: 15, marginHorizontal: 20 }}>
                <Button icon={renderIcon} onPress={onPress}>
                  withdraw
                </Button>
              </Layout>
              <Layout style={{ marginBottom: 15, marginHorizontal: 20 }}>
                <Button appearance="outline" status="danger">
                  Logout
                </Button>
              </Layout>
            </ScrollView>
          </SafeAreaView>
        </Layout>
      </React.Fragment>
    );
  }
}
export default createStackNavigator(
  { ProfileScreen },
  { headerMode: "screen" }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infolist: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f7f9fc"
  }
});
