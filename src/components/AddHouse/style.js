import { Select } from "antd";
import styled from "styled-components";

import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #ffff;
  border: 1px solid #e6e9ec;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column " : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectAnt = styled(Select)`
  max-width: 200px;
  min-width: 200px;
  width: 100%;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
  :hover {
    & path {
      fill: blue;
    }
  }
`;

export { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete };
