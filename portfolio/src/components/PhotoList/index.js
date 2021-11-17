import React from 'react';

const PhotoList = ({ category }) => {
  return (
    <div className="row">
      <div className="column">

        {/* Bardic */}
        <div className="img-container">
          <a href="http://bardic.herokuapp.com/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/0.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Bardic</div>
          </div>
          <a href="http://bardic.herokuapp.com/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/FanCinco/Bardic" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

        {/* Tech Blog */}
        <div className="img-container">
          <a href="https://module-14-tech-blog.herokuapp.com/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/4.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Tech&nbsp;Blog</div>
          </div>
          <a href="https://module-14-tech-blog.herokuapp.com/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/JustinWeicht/14-tech-blog" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

      </div>
      <div className="column">

        {/* Booklyst */}
        <div className="img-container">
          <a href="https://booklyst-project.herokuapp.com/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/1.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Booklyst</div>
          </div>
          <a href="https://booklyst-project.herokuapp.com/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/group3uoft/booklyst" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

        {/* Pizza Hunt */}
        <div className="img-container">
          <a href="https://creepy-nightmare-85054.herokuapp.com/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/5.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Pizza&nbsp;Hunt</div>
          </div>
          <a href="https://creepy-nightmare-85054.herokuapp.com/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/JustinWeicht/pizza-hunt" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

      </div>
      <div className="column">

        {/* Nutriquotient */}
        <div className="img-container">
          <a href="https://foodisfuel.github.io/gp5_project1/index.html" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/2.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Nutriquotient</div>
          </div>
          <a href="https://foodisfuel.github.io/gp5_project1/index.html" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/foodisfuel/gp5_project1" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

        {/* Taskmaster Pro */}
        <div className="img-container">
          <a href="https://justinweicht.github.io/taskmaster-pro/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/6.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Taskmaster&nbsp;Pro</div>
          </div>
          <a href="https://justinweicht.github.io/taskmaster-pro/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/JustinWeicht/taskmaster-pro" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

      </div>
      <div className="column">

        {/* Budget Tracker */}
        <div className="img-container">
          <a href="https://module-19-budget-tracker.herokuapp.com/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/3.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Budget&nbsp;Tracker</div>
          </div>
          <a href="https://module-19-budget-tracker.herokuapp.com/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/JustinWeicht/19-budget-tracker" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

        {/* Run Buddy */}
        <div className="img-container">
          <a href="https://JustinWeicht.github.io/run-buddy/" rel="noreferrer" target="_blank">
            <img src={require("../../assets/small/work/7.jpg").default} className="image" alt="gallery" />
          </a>
          <div className="work-title">
            <div className="work-title-text">Run&nbsp;Buddy</div>
          </div>
          <a href="https://JustinWeicht.github.io/run-buddy/" rel="noreferrer" target="_blank" className="top-button">
            <div className="button-text">Website</div>
          </a>
          <a href="https://github.com/JustinWeicht/run-buddy" rel="noreferrer" target="_blank" className="bot-button">
            <div className="button-text">GitHub</div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default PhotoList;
