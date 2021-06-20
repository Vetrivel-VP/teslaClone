import React from "react";
import Section from "./Section";
import Styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desscription="Order online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-s.jpg"
      />

      <Section
        title="Model Y"
        desscription="Order online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        title="Model 3"
        desscription="Order online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-3.jpg"
      />

      <Section
        title="Model X"
        desscription="Order online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-x.jpg"
      />

      <Section
        title="Lowest solor panels in America"
        desscription="Money-back guarantee"
        leftButton="Order now"
        rightButton="Learn More"
        backgroundImg="solar-panel.jpg"
      />

      <Section
        title="Solor For New Roofs"
        desscription="Solor Roofs Costs Less Than a New Roof Plus Solor Panels"
        leftButton="Order now"
        rightButton="Learn More"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        desscription=""
        leftButton="Shop now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = Styled.div`
    height : 100vh;
`;
