import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsWrap = styled.section`
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StatTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const StatisticsStats = styled.ul`
  display: inline-flex;
  width: 200px;
  padding: 2px 6px;
  span {
    display: flex;
    justify-content: center;
  }
`;
export const StatItem = styled.li`
  flex-basis: calc((100% - 16px) / 4);
  background-color: #ffffff;
  border: 1px solid #000000;
  gap: 4px;
  background-color: ${getRandomHexColor};
`;
