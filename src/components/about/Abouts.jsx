import "./Abouts.css";
import ross1 from "../../assets/ross1.png";
import { InlineWidget } from "react-calendly";

const Abouts = () => {
  return (
    <div className="abouts">
      <div className="abouts__heading">
        <h1>Let book a call,</h1>
        <h1>so that we can book your next step.</h1>
      </div>
      <div className="abouts__col">
        <div className="abouts__rows1">
          <img src={ross1} />
        </div>
        <div className="abouts__rows">
          <InlineWidget url="https://calendly.com/obi75309/ro?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=299ac4&primary_color=ffffff" />
        </div>
      </div>
    </div>
  );
};

export default Abouts;
