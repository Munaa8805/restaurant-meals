import React, { Fragment } from "react";
import {
  PriceContainer,
  PriceWrapper,
  PriceCard,
  PriceTitle,
  PriceDesc,
  PricePrice,
  PriceContent,
  PriceDiv,
  PriceTitleDescreption,
  BtnWrapper
} from "./PriceElements";
import { Button } from "../Button";
import { priceData } from "../../data";
const Price = () => {
  return (
    <Fragment>
      <PriceTitleDescreption id="price">
        <h1>Pricing</h1>
        <p>Eating well without breaking the bank</p>
      </PriceTitleDescreption>

      <PriceContainer>
        <PriceWrapper>
          {priceData.map((item) => (
            <PriceCard key={item.id} bg={item.bg} active={item.active}>
              <PriceTitle>{item.name}</PriceTitle>
              <PricePrice>
                <span>
                  <ion-icon
                    style={{
                      height: "2rem",
                      width: "2rem",
                      color: "#333",
                      marginBottom: "-0.2rem"
                    }}
                    name="logo-usd"
                  ></ion-icon>
                </span>
                {item.price}
              </PricePrice>
              <PriceDesc>{item.description}</PriceDesc>
              <PriceDiv>
                <ion-icon
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "#e67e22",
                    marginRight: "1.5rem"
                  }}
                  name={
                    item.descOne.length ? "checkmark-outline" : "close-outline"
                  }
                ></ion-icon>
                <PriceContent>{item.descOne}</PriceContent>
              </PriceDiv>
              <PriceDiv>
                <ion-icon
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "#e67e22",
                    marginRight: "1.5rem"
                  }}
                  name={
                    item.descTwo.length ? "checkmark-outline" : "close-outline"
                  }
                ></ion-icon>
                <PriceContent>{item.descTwo}</PriceContent>
              </PriceDiv>
              <PriceDiv>
                <ion-icon
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "#e67e22",
                    marginRight: "1.5rem"
                  }}
                  name={
                    item.descThree.length
                      ? "checkmark-outline"
                      : "close-outline"
                  }
                ></ion-icon>
                <PriceContent>{item.descThree}</PriceContent>
              </PriceDiv>
              <PriceDiv>
                <ion-icon
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "#e67e22",
                    marginRight: "1.5rem"
                  }}
                  name={
                    item.descFour.length ? "checkmark-outline" : "close-outline"
                  }
                ></ion-icon>
                <PriceContent>{item.descFour}</PriceContent>
              </PriceDiv>
              <BtnWrapper>
                <Button
                  fontsize="1.2rem"
                  bgHover="#767676"
                  colorHover="#e67e22"
                >
                  Start eating well
                </Button>
              </BtnWrapper>
            </PriceCard>
          ))}
        </PriceWrapper>
      </PriceContainer>
    </Fragment>
  );
};

export default Price;
