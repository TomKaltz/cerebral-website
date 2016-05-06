var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div id="home" className="container">
        <h1>Cerebral</h1>
        <div className="main-logo"><img src="./logo.png" /></div>
        <section>
          <h3 className="center">Express your application flow with signals</h3>
          <div className="row">
            <div className="twelve columns">
              <h4 style={{textAlign: 'center'}}>What is Cerebral?</h4>
              <div className="clip" onClick={this.props.openVideo.bind(null, 'https://www.youtube.com/embed/kx8XoX_hV5s')}>
                <i className="icon icon-play-circle-o"/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="six columns">
              <h3>State</h3>
              <p className="text-small">
                Applications are stateful. The application needs to know what page to display,
                if a dropdown is opened or you are currently getting some data from the server. With
                Cerebral you define all the state of your application in one state tree. Think of it like
                a client database, but it holds all the data your applications needs, even if it is just for
                the client.
              </p>
            </div>
            <div className="six columns">
              <h3>UI</h3>
              <p className="text-small">
                The UI is produced using the application state. It is passed to a render function or exposed
                to a template. When you want your UI to change, your application state has to change. Your application
                listens to UI events and uses <i>Cerebral</i> to execute the state update. After an update is complete
                the UI will render the new state of the application.
              </p>
            </div>
          </div>
        </section>

        <section className="packages">
          <div className="row">
            <div className="six columns">
              <h4>Packages</h4>
              <div className="row">
                <div className="six columns">
                  <ul className="divided cerebral-list">
                    <li><i className="icon icon-television"/> <a href='/install/react'>React</a></li>
                    <li><i className="icon icon-television"/> <a href='/install/angular'>Angular</a></li>
                    <li><i className="icon icon-television"/> <a href='/install/angular2'>Angular2</a></li>
                    <li><i className="icon icon-television"/> <a href='/install/inferno'>Inferno</a></li>
                    <li><i className="icon icon-television"/> <a href='/install/snabbdom'>Snabbdom</a></li>
                  </ul>
                </div>
                <div className="six columns">
                  <ul className="divided cerebral-list">
                    <li><i className="icon icon-database"/> <a href='/install/baobab'>Baobab</a></li>
                    <li><i className="icon icon-database"/> <a href='/install/immutablejs'>ImmutableJS</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="six columns">
              <h4>Introductions</h4>
              <ul className="cerebral-list">
              <li>
                <i
                  className="icon icon-file-text link"
                  onClick={() => window.open('https://github.com/cerebral/cerebral-reference-app')}> A real life big Cerebral project</i>
              </li>
                <li>
                  <i
                    className="icon icon-file-text link"
                    onClick={() => window.open('https://gist.github.com/christianalfoni/e8dc5bfa79e7289a6258')}> Redux and Cerebral</i>
                </li>
                <li>
                  <i
                    className="icon icon-play-circle-o link"
                    onClick={this.props.openVideo.bind(null, 'https://www.youtube.com/embed/BfzjuhX4wJ0?start=20690&end=22260')}> ReactiveConf2015 Talk - <small>30:00</small></i>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Home;
