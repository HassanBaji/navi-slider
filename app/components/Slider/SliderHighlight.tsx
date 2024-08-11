const SliderHighlight = ({
  leftValue,
  widthValue
}: {
  leftValue: number;
  widthValue: number;
}) => {
  return (
    <div
      style={{
        ...styles.highlight,
        position: 'absolute',
        left: `${leftValue}%`,
        width: `${widthValue}%`
      }}
    />
  );
};

const styles = {
  highlight: {
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    height: 2,
    backgroundColor: 'red'
  }
};

export default SliderHighlight;
