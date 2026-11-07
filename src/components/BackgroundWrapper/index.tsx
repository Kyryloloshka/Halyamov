import "./style.scss";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="gradient-bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
    </>
  );
};

export default BackgroundWrapper;
