import React, { useState } from "react";
import styled from "@emotion/styled";

const ResumeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

const ResumeWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeImage = styled.img`
  width: ${props => props.zoom}%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
`;

const ZoomControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ZoomButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #151418;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a2a2a;
  }
`;

const ZoomSlider = styled.input`
  width: 200px;
  margin: 0 1rem;
`;

const ZoomValue = styled.span`
  min-width: 50px;
  text-align: center;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
`;

function Resume() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const handleSliderChange = (e) => {
    setZoom(parseInt(e.target.value));
  };

  return (
    <ResumeContainer id="resume">
      <TitleContainer>
        <div className="SectionTitle">Resume</div>
        <ZoomControls>
          <ZoomButton onClick={handleZoomOut}>-</ZoomButton>
          <ZoomSlider
            type="range"
            min="50"
            max="200"
            value={zoom}
            onChange={handleSliderChange}
          />
          <ZoomValue>{zoom}%</ZoomValue>
          <ZoomButton onClick={handleZoomIn}>+</ZoomButton>
        </ZoomControls>
      </TitleContainer>
      <ResumeWrapper>
        <ResumeImage src="/resume.png" alt="Resume" zoom={zoom} />
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume; 