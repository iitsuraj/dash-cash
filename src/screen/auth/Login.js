import React, { Component } from "react";
import { Dimensions, Image } from "react-native";
import { Layout, Button, Icon, Text } from "@ui-kitten/components";

import { FacebookIcon, GoogleIcon } from "../../constants/icons/index";

const ButtonWidth = (Dimensions.get("window").width * 75) / 100;

class AuthScreen extends Component {
  render() {
    const renderIcon = style => <Icon {...style} name="star" />;
    const { navigate } = this.props.navigation;
    return (
      <Layout
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{
              width: (Dimensions.get("window").width * 50) / 100,
              height: (Dimensions.get("window").width * 50) / 100
            }}
            source={require("../../../assets/icon.png")}
          />
        </Layout>
        <Layout
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15
          }}
        >
          <Text category="h1">DashCash</Text>
        </Layout>
        <Layout
          style={{
            maxWidth: ButtonWidth,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <Text appearance="hint" style={{ textAlign: "center" }}>
            Host or attend events and let others around know what you want to
            do!
          </Text>
        </Layout>
        <Button
          icon={renderIcon}
          status="primary"
          style={{
            width: ButtonWidth,
            marginBottom: 10
          }}
        >
          Login with Facebook
        </Button>
        <Button
          icon={renderIcon}
          status="primary"
          style={{ width: ButtonWidth }}
        >
          Login with Google
        </Button>
      </Layout>
    );
  }
}

export default AuthScreen;
