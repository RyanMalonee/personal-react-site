import data from "../../data/index.json";

export default function MyPortfolio() {
  const openGithub = () => {
    window.open("https://github.com/RyanMalonee", "_blank");
  };
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={openGithub}>
            <img
              className="github-logo"
              src="./img/github-mark-white.svg"
              alt="github"
            />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img className="portfolio-img" src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md portfolio-section-description">
                  {item.description}
                </p>
              </div>
              <p className="text-sm portfolio-link">
                <a className="portfolio-link" href={item.link} target="_blank">
                  View in GitHub
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
