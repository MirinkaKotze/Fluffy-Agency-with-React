import "./assets/styles/mainStats.css";

function StatsBlock() {
  return (
    <section className="stats_container stats">
      <div className="stats_subcontainer">
        <p className="stats_subcontainer--number text_subhead">7.5k</p>
        <p className="stats_subcontainer--plus text_subhead">+</p>
        <div className="stats_subcontainer--text text_intro">
          <p>Websites, Softwares & Apps.</p>
        </div>
      </div>
      <div className="stats_subcontainer">
        <p className="stats_subcontainer--number text_subhead">15yrs</p>
        <p className="stats_subcontainer--plus text_subhead">+</p>
        <div className="stats_subcontainer--text text_intro">
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="stats_subcontainer">
        <p className="stats_subcontainer--number text_subhead">6.2k</p>
        <p className="stats_subcontainer--plus text_subhead">+</p>
        <div className="stats_subcontainer--text text_intro">
          <p>Customers Served</p>
        </div>
      </div>
    </section>
  );
}

export default StatsBlock;
