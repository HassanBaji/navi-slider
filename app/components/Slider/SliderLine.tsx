const SliderLine = ({
  children,
  sliderRef
}: {
  children: React.ReactNode;
  sliderRef: any;
}) => {
  return (
    <div
      ref={sliderRef}
      style={{
        ...styles.line,
        position: 'relative'
      }}>
      {children}
    </div>
  );
};

const styles = {
  line: {
    backgroundColor: 'black',
    height: 2
  }
};

export default SliderLine;
