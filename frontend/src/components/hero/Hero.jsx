import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <svg
          className="svg1"
          viewBox="0 0 359 406"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-92 -39.9425L-50.7352 322.214L-41.5652 402.693C-36.9956 404.521 -21.0172 397.534 6.33924 354.963C40.5348 301.75 -8.62444 157.387 170.551 117.849C313.892 86.2177 353.976 -34.5633 356.101 -91L-92 -39.9425Z"
            stroke="#EA4235"
            stroke-width="5"
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
            stroke-width="5"
          />
        </svg>
        <div className="svg3"></div>
        <div className="svg4"></div>
        <div className="svg5"></div>
        <div className="svg6"></div>

        <div className="hero-wpr">
          <div className="hero-flex">
            <div className="hero-title">
              <h1>
                <span>G</span>oogle
              </h1>
              <h1>
                <span>D</span>eveloper
              </h1>
              <h1>
                <span>S</span>tudents
              </h1>
              <h1>
                <span>C</span>lub
              </h1>
              <h1>ADGIPS</h1>
            </div>
            <div>
              <img src="/hero/sideImg.png" alt="" />
            </div>
          </div>
          <div className="hero-para">
            <p>
              Through GSDC-ADGIPS We, developers and designers want to foster a
              healthy development culture. Developer Student Clubs is a program
              that will help students to learn mobile and web development,
              design thinking and leadership skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
