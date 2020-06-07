import React from "react";
import { Card, EmptyState } from "@shopify/polaris";

export default class App extends React.Component {
  render() {
    return (
      <EmptyState
        heading="Offline for maintenance"
        action={{ content: "Check status", url: "http://status.smile.io" }}
        secondaryAction={{
          content: "Contact support",
          url: "mailto:support@smile.io"
        }}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      />
    );
  }
}
