import React from "react";
import { CertificateList } from "../../../data/CertificateData";
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
} from "./CertificateCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function CertificateCard() {
  return (
    <>
      {CertificateList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.title} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <p><strong>Issued by:</strong> {list.issuer}</p>
              <p><strong>Date:</strong> {list.date}</p>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default CertificateCard; 