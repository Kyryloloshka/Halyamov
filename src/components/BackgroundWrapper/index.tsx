"use client";
import "./style.scss";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="gradient-bg overflow-x-hidden">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
    </>
  );
};

export default BackgroundWrapper;
