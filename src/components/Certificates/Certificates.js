import React from "react";
import styled from "@emotion/styled";
import CertificateCard from "./CertificateCard/CertificateCard";

const CertificateWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
`;

function Certificates() {
  return (
    <>
      <CertificateWrapper id="certificates">
        <div className="Container">
          <div className="SectionTitle">Certifications</div>
          <CertificateCard />
        </div>
      </CertificateWrapper>
    </>
  );
}

export default Certificates; 