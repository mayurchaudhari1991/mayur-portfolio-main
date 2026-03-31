import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Bitsmith Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Contributed to backend development using Node.js and Express.js.
              Worked on database operations and backend performance improvements.
              Assisted in debugging and maintaining production APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Bitsmith Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed full-stack web applications using the MERN stack.
              Refactored backend APIs into modular architecture improving
              performance by ~20%. Implemented reusable React components
              and collaborated with UI/UX teams on responsive design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>HireCorrecto Solutions Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed scalable backend APIs for candidate assessment and
              recruitment workflows. Built microservices for evaluation and
              interview scheduling. Optimized MongoDB queries improving
              response time by ~30%. Implemented role-based authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
