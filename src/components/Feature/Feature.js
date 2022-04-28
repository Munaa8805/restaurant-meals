import React from "react";
import {
  FeatureContainer,
  FeatureWrapper,
  FeauterCard,
  FeatureH2,
  FeatureP
} from "./FeatureElements";

const Feature = () => {
  const array1 = [
    {
      icon: "infinite-outline",
      title: "Never cook again!",
      p:
        " Our subscriptions cover 365 days per year, even including major holidays."
    },
    {
      icon: "nutrition-outline",
      title: "Local and organic",
      p:
        " Our cooks only use local, fresh, and organic products to prepare your meals."
    },
    {
      icon: "leaf-outline",
      title: "No waste",
      p:
        "All our partners only use reusable containers to package all your meals."
    },
    {
      icon: "pause-outline",
      title: "Pause anytime",
      p:
        "Going on vacation? Just pause your subscription, and we refund unused days."
    }
  ];
  return (
    <FeatureContainer>
      <FeatureWrapper>
        {array1.map((array, i) => (
          <FeauterCard>
            <ion-icon
              name={array.icon}
              style={{
                color: "#e67e22",
                height: "2.4rem",
                width: "2.4rem",
                backgroundColor: "#fdf2e9",
                marginBottom: "0.5rem",
                padding: "1.0rem",
                borderRadius: "50%"
              }}
            ></ion-icon>
            <FeatureH2>{array.title}</FeatureH2>
            <FeatureP>{array.p}</FeatureP>
          </FeauterCard>
        ))}
      </FeatureWrapper>
    </FeatureContainer>
  );
};

export default Feature;
