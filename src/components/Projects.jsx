import React, { useState } from 'react';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="section-container">
      <div className="read" onClick={() => setShowProjects(!showProjects)}>
        Previous Projects
        <span className="label">{showProjects ? 'Show Less' : 'Show More'}</span>
      </div>
      
      {showProjects && (
        <div className="content">
          <h2>1. Med-Mobi:</h2>
          <div className="description">
            <p>
              <i>Link: </i>
              <a href="https://github.com/TDEEZYpro/Med-Mobi" target="_blank" rel="noopener noreferrer">
                https://github.com/TDEEZYpro/Med-Mobi
              </a>
            </p>
            <p>
              Med-Mobi, this is a medical chatbot I created with my group members: Nkosinathi Mnguni and Lawrence Sipopo.
              <br /><br />
              I handled 90% of the python, I got the training model from online, I created all the functions for booking, cancelling and reschedule appointments, added all the intents in the intents.json file. I was involved in 40% of the logic behind fetching and storing data in firebase and creating firebase queries. 45% in the overall layout and how the app should look but I didn't know react at the time. Designed the structure of the database which we used firebase for it.
              <br /><br />
              Mobi can be greeted and talked to, it can: book, cancel, reschedule and display appointments. Additional features such as calculating difference between dates, getting the users latitude and longitude, and connecting with firebase.
            </p>
          </div>

          <h2>2. My Profile:</h2>
          <div className="description">
            <p>
              <i>Link: </i>
              <a href="https://khulanathi.github.io/" target="_blank" rel="noopener noreferrer">
                https://khulanathi.github.io/
              </a>
            </p>
            <p>
              I created this page or website on my own by myself, it's purely HTML and CSS, front-end development has not been my strong point but I would be lying if I said it was my weak point.
              <br /><br />
              This webpage is my portfolio, details about me can be found here, my previous projects, all my certificates and my programming skills. This page is just to illustrate my front-end development and my knowledge of HTML and CSS and at the same time fit details that can't fit in my cv and my cv at the same time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;