import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFF",
        color: "#FFFF",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "1px solid #0061DF",
        color: "#FFFFFF",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF",
      };
  }
};

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};

  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};
  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.7;
  }
`;

export { Container };
