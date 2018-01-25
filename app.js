class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Blake Troksa</h1>
        <p>
          2026 Alpine Drive Boulder, CO 80304
          <br />
          Phone: 720-988-6747 email: btroksa@rams.colostate.edu
        </p>
      </div>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
        <h3>Education</h3>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th>Bachelor of Science</th>
              <td>Electrical Engineering</td>
            </tr>
            <tr>
              <th>Bachelor of Science</th>
              <td>Computer Science</td>
            </tr>
            <tr>
              <th>Tau Beta Pi Engineering Honor Society</th>
              <td>Special Projects Coordinator</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <h3>Skills</h3>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th>Programming Languages</th>
              <td>Python, Java, MatLab, Assembly</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h3>Experience</h3>
        <table className="table table-lg">
          <tbody>
            <tr>
              <th>
                F5 Networks <br /> San Jose, CA
              </th>
              <td>
                <ul>
                  <li>
                    Implemented techniques for Container Application Security
                    using the Docker platform
                  </li>
                  <li>
                    Employed machine learning and statistics to detect anomalous
                    behavior in containerized applications
                  </li>
                  <li>
                    Simulated malicious behavior and analyzed its effects on
                    different containerized applications
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                High Energy Physics Research <br /> Fort Collins, CO
              </th>
              <td>
                <ul>
                  <li>
                    Designed printed circuit boards with PCB Artist design
                    software for use in cryogenic particle detectors
                  </li>
                  <li>
                    Wrote code in LabVIEW for automation and experimental
                    measurements
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h3>Projects</h3>
        <table className="table table-lg">
          <tbody>
            <tr>
              <th>Wireless Signal Characterization</th>
              <td>
                <ul>
                  <li>
                    Developed a ray tracing approach for solving wireless
                    communication computational electromagnetic problems{" "}
                  </li>
                  <li>
                    Designed software to harness the parallelism of graphics
                    processing units to accelerate computations
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Basketball Score Predictor</th>
              <td>
                <ul>
                  <li>
                    Collected statistics and created a neural network for use in
                    predicting the over/under of NCAA basketball games
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Scanner Automation</th>
              <td>
                <ul>
                  <li>
                    Programmed the movement of a dual axis scanner and a
                    cryogenic particle detector in LabVIEW that moves based on a
                    coordinate system using stepper motors and limit switches
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Analog Amplifier Readout Circuit</th>
              <td>
                <ul>
                  <li>
                    Designed and assembled a circuit that provides variable
                    amplification for the output of Silicon Photomultipliers and
                    converts and lengthens an analog pulse to a digital pulse
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Leadership extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h3>Leadership and Service</h3>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th>National Society of Collegiate Scholars</th>
              <td>
                Assist elderly and/or physically limited members of the
                community with outdoor yard work and volunteer at the Fort
                Collins Rescue Mission
              </td>
            </tr>
            <tr>
              <th>Camp Wapiyapi Counselor</th>
              <td>
                Served as camp counselor for children directly affected by
                various types of cancer
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Ending extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <p>Updated January 25, 2018</p>
      </div>
    );
  }
}

class Body extends React.Component {
  render(){
    return (
    <div className='container'>
        <div className='row'>
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
     </div>
        </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
        <div>
        <Header />
        <hr />
        <Body />
        <Ending />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

