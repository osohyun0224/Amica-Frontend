import PropTypes from "prop-types";
import { styled } from "styled-components";

const Outer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background: #dfdfdf;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #ffffff;
`;

const CircularChart = ({ className, data }) => {
  const chartData = data ? [...data] : [];
  const sum = chartData.reduce((result, item) => result + item.value, 0);

  chartData.reduce((result, item) => {
    const value = Math.round((item.value / sum) * 360);
    item.css = `${item.color} ${result}deg ${result + value}deg`;
    return result + value;
  }, 0);

  const gradientCss = `conic-gradient(${chartData
    .map((item) => item.css)
    .join(",")})`;

  return (
    <Outer className={className} style={{ background: gradientCss }}>
      <Inner></Inner>
    </Outer>
  );
};

CircularChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

export default CircularChart;
