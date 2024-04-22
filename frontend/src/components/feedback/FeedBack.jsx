import "./FeedBack.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronDown,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import emailjs from "@emailjs/browser";
import { Row, Col } from "react-bootstrap";

const SendImg = ({ onClick }) => (
  <button onClick={onClick} className="svgicon">
    {" "}
    Submit{" "}
  </button>
);

const BackgroundPropsLine = () => (
  <svg
    width="462"
    height="1138"
    viewBox="0 0 462 1138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M524 5.75912e-05C522.75 3.3692 506.349 8.07969 502.341 9.77672C492.507 13.9411 484.667 19.6921 475.225 24.5589C462.635 31.0478 449.624 38.4279 438.113 46.6527C429.12 53.0788 419.821 57.3334 410.785 63.3817C397.753 72.1053 385.166 81.38 372.036 89.9631C355.573 100.726 337.497 110.241 322.359 122.822C307.487 135.181 292.064 144.178 278.072 158.029C263.569 172.386 257.562 186.388 249.707 204.504C242.67 220.736 241.484 240.124 237.799 257.329C232.461 282.25 231.27 303.795 238.405 328.724C253.19 380.389 295.503 415.835 315.824 464.867C332.463 505.013 343.719 550.685 338.981 594.283C336.328 618.7 323.114 639.61 312.855 661.53C302.592 683.459 284.867 700.925 272.473 721.421C262.668 737.636 249.024 750.866 236.006 764.528C229.151 771.721 223.215 779.981 216.018 786.824C209.012 793.485 201.613 798.137 195.539 805.956C175.982 831.127 153.894 854.368 134.027 879.414C116.031 902.099 96.7663 922.944 81.3571 947.508C62.3818 977.757 46.0595 1006.81 33.6363 1040.3C22.6354 1069.95 12.0684 1097.88 7.96169 1129.36C4.74095 1154.06 1.20952 1180.71 3.02881 1205.55C3.70187 1214.74 3.47849 1223.86 4.63587 1233.09C5.28383 1238.26 3.24672 1245.11 4.69204 1249.9C6.43184 1255.66 4.38479 1261.38 5.73697 1267.22C7.10606 1273.13 6.9075 1277.62 6.251 1283.66"
      stroke="#5A5A5A"
      strokeOpacity="0.46"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="13 13"
    />
  </svg>
);

export default function FeedBack() {
  const [isDropdownoneVisible, setIsDropdownoneVisible] = useState(false);
  const [isDropdowntwoVisible, setIsDropdowntwoVisible] = useState(false);
  const [isDropdownthreeVisible, setIsDropdownthreeVisible] = useState(false);
  const [isDropdownfourVisible, setIsDropdownfourVisible] = useState(false);
  const [isDropdownfiveVisible, setIsDropdownfiveVisible] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleDropdownClick = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setIsDropdownoneVisible(!isDropdownoneVisible);
        break;
      case 2:
        setIsDropdowntwoVisible(!isDropdowntwoVisible);
        break;
      case 3:
        setIsDropdownthreeVisible(!isDropdownthreeVisible);
        break;
      case 4:
        setIsDropdownfourVisible(!isDropdownfourVisible);
        break;
      case 5:
        setIsDropdownfiveVisible(!isDropdownfiveVisible);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const trimmedFeedback = feedback.trim();
    if (!feedback || Object.keys(feedback).length || !trimmedFeedback === 0) {
      console.log("Feedback is null or empty. Email not sent.");
      return;
    }

    console.log("Form Data:", feedback);
    emailjs
      .send(
        "service_cfqbgtu",
        "template_uvi4g37",
        { feedback },
        "49d2lQplNu6mw181N"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="feedback-flex-container">
      <div className="feedbackcontainer">
        <p className="feedbackheading">
          Blast us with your feedback rockets - We'll make it rain improvements!
        </p>
        <p className="feedbacktext">
          We value your thoughts like a treasure map!<br/> Care to share your feedback and help us navigate towards perfection!
        </p>
        <p className="feedbackinputline">Your feedback magic works here!</p>
        <div className="feedbackdiv">
          <textarea
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Write here..."
            className="feedbackform "
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="feedbacksvg">
            <SendImg onClick={sendEmail} />
          </div>
        </div>

        <div className="faqcont">
          <img src={"/feedback/Rectangle623.png"} className="faqimg" />
          <p className="faq">FAQs</p>
        </div>
        <div className="dropdowncontainer">
          {/* start */}
          <div
            onClick={() => handleDropdownClick(1)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownoneVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_one"
          >
            Q1. What is GDSC ADGIPS?
            <div className="drp_icon">
              {isDropdownoneVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownoneVisible && (
            <div className="drp_content">
              <p>
                GDSC ADGIPS is a student-led community supported by Google that aims to bridge the gap between theory and practical application of technology.
              </p>
            </div>
          )}
          {/* end */}
          <div
            onClick={() => handleDropdownClick(2)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdowntwoVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_two"
          >
            Q2. How to join us?
            <div className="drp_icon">
              {isDropdowntwoVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdowntwoVisible && (
            <div className="drp_content">
              <p>
              To join GDSC, attend our events, workshops, and join our online platforms to stay updated. 
              </p>
            </div>
          )}

          <div
            onClick={() => handleDropdownClick(3)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownthreeVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_three"
          >
            Q3. What events does GDSC organise?
            <div className="drp_icon">
              {isDropdownthreeVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownthreeVisible && (
            <div className="drp_content">
              <p>
              GDSC hosts a variety of events, including workshops, hackathons, tech talks, and networking sessions. Stay tuned to our social media and website for event and community meet ups announcements.
              </p>
            </div>
          )}

          <div
            onClick={() => handleDropdownClick(4)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownfourVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_four"
          >
            Q4. How to collaborate with us ?
            <div className="drp_icon">
              {isDropdownfourVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownfourVisible && (
            <div className="drp_content">
              <p>
              If you're interested in collaboration, reach out to the GDSC core team.
              </p>
            </div>
          )}
          <div
            onClick={() => handleDropdownClick(5)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownfiveVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_five"
          >
            Q5. How to contact us for support and enquiry ?
            <div className="drp_icon">
              {isDropdownfiveVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownfiveVisible && (
            <div className="drp_content">
              <p>
                Reach out to us through our contact form on the website, or connect with us on social media. We're here to help with any questions you may have.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="feedbackcardcontainer">
        <div className="feedbacklinecontainer">
          <span className={"feedbackLineDashed"}>
            <BackgroundPropsLine />
          </span>
        </div>
        <img src={"/feedback/rocket.png"} className="rocketimg" />

        <Card className="card-one feedback-card">
          <Card.Body>
            <Row>
              <Col xs={4} className="text-center">
                <img
                  src="team/img1.png"
                  className="rounded-circle"
                  alt="Testimonial Image"
                  style={{ width: "50px", height: "50px" }}
                />
              </Col>

              <Col xs={8} className="feedback-title">
                <Card.Title>Testimonial</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Nandini Aggarwal
                </Card.Subtitle>
              </Col>
            </Row>

            <hr></hr>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-two feedback-card">
          <Card.Body>
            <Row>
              <Col xs={4} className="text-center">
                <img
                  src="team/img1.png"
                  className="rounded-circle"
                  alt="Testimonial Image"
                  style={{ width: "50px", height: "50px" }}
                />
              </Col>

              <Col xs={8} className="feedback-title">
                <Card.Title>Testimonial</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Nandini Aggarwal
                </Card.Subtitle>
              </Col>
            </Row>

            <hr></hr>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-three feedback-card">
          <Card.Body>
            <Row>
              <Col xs={4} className="text-center">
                <img
                  src="team/img1.png"
                  className="rounded-circle"
                  alt="Testimonial Image"
                  style={{ width: "50px", height: "50px" }}
                />
              </Col>

              <Col xs={8} className="feedback-title">
                <Card.Title>Testimonial</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Nandini Aggarwal
                </Card.Subtitle>
              </Col>
            </Row>

            <hr></hr>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="feedbacklinecontainer">
          <img
            src={"/feedback/rocket-2.png"}
            className="rocket1img"
            style={{ height: "152px", bottom: "60px", right: "150px" }}
          />
        </div>
      </div>
    </div>
  );
}
