import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Resource.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import resourcesList from "../../data/resourcesList";

const Resource = () => {
  const { resourceId } = useParams();
  const [isDropdownoneVisible, setIsDropdownoneVisible] = useState(-1);

  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (checked.length !== 0) {
      localStorage.setItem("checked", JSON.stringify(checked));
    }
  }, [checked]);

  const [currentResource, setCurrentResource] = useState({
    name: "",
    resources: [],
  });

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem("checked")) || []);
    const resource = resourcesList.find(
      (resource) => resource.resourceId === resourceId
    );
    if (resource) {
      setCurrentResource(resource);
    }
  }, [resourceId]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <svg
        className="svg1"
        viewBox="0 0 359 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-92 -39.9425L-50.7352 322.214L-41.5652 402.693C-36.9956 404.521 -21.0172 397.534 6.33924 354.963C40.5348 301.75 -8.62444 157.387 170.551 117.849C313.892 86.2177 353.976 -34.5633 356.101 -91L-92 -39.9425Z"
          stroke="#EA4235"
          strokeWidth="5"
        />
      </svg>
      <svg
        className="svg2"
        viewBox="0 0 324 438"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M448.973 -16H84.4732H3.47323C1.13989 -11.6667 6.27323 5 45.4732 37C94.4732 77 243.473 44.5 262.473 227C277.673 373 393.14 426.5 448.973 435V-16Z"
          stroke="#4286F5"
          strokeWidth="5"
        />
      </svg>
      <div className="SVG3" style={{ background: "#34A853" }}></div>
      <div className="SVG4"></div>
      <div className="SVG5" style={{ background: "#FBBC05" }}></div>
      <div className="SVG6"></div>
      <div className="hero-wpr resource-div">
        <p>{currentResource.name}</p>
        <span>Welcome Developers!</span>
      </div>
      <div className="resource-div2">
        <h4>Frontend:</h4>
        <div className="dropDownContainer">
          {currentResource.resources.map((resource, index) => {
            return (
              <div key={index} className="dropDown">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setIsDropdownoneVisible(
                      isDropdownoneVisible === index ? -1 : index
                    )
                  }
                >
                  <span>{resource.id}</span>
                  <FontAwesomeIcon
                    style={{
                      height: "25px",
                      width: "25px",
                    }}
                    icon={
                      isDropdownoneVisible === index
                        ? faCircleChevronDown
                        : faCircleChevronRight
                    }
                  />
                </div>
                {isDropdownoneVisible === index && (
                  <div className="">
                    {resource.headings.map((heading, index) => {
                      return (
                        <p className="checkBox" key={index}>
                          <input
                            type="checkbox"
                            name={heading}
                            id={heading}
                            checked={checked.includes(heading)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setChecked([...checked, heading]);
                              } else {
                                setChecked(
                                  checked.filter((item) => item !== heading)
                                );
                              }
                            }}
                          />
                          <label htmlFor={heading}>{heading}</label>{" "}
                          <a
                            href={resource.links[heading]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {"(" +
                              "https://www.youtube.com/watch?v=Edsxf_NBFrw" +
                              ")"}
                          </a>
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resource;
