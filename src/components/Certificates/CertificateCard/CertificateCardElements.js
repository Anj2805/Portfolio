import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardLeft = styled.div`
  flex: 1;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  flex: 2;
  padding: 1rem;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    margin-bottom: 0.5rem;
    color: #666;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`; 