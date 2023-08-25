import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step9.css";
const Step9 = () => {
  return (
    <div className="step-9">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="time-to-sit">{`Time to sit back, relax and give your valuable feedback of how everything is going. `}</div>
      <div className="you-did-so">
        You did so good, its the onboarding day 8. No tasks today!
      </div>
      <Button className="button" variant="primary">
        Click to relax
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step9;
