var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container-fluid" },
        React.createElement("br", null),
        React.createElement(
          "b",
          null,
          "Usage Information: "
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "enter a valid latitude longitude coordinate into each input box "
          ),
          React.createElement(
            "li",
            null,
            " specify the units of distance: miles or kilometers"
          )
        ),
        React.createElement(
          "b",
          null,
          "Accepted Coordinate Formats: "
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            " degrees minutes seconds: 40\xB0 26\u2032 46\u2033 N 79\xB0 58\u2032 56\u2033 W"
          ),
          React.createElement(
            "li",
            null,
            " degrees decimal minutes: 40\xB0 26.767\u2032 N 79\xB0 58.933\u2032 W"
          ),
          React.createElement(
            "li",
            null,
            " decimal degrees: 40.446\xB0 N 79.982\xB0 W "
          ),
          React.createElement(
            "li",
            null,
            " floating point 40.445 -79.982 "
          )
        )
      );
    }
  }]);

  return Box;
}(React.Component);

var UsageButton = function (_React$Component2) {
  _inherits(UsageButton, _React$Component2);

  function UsageButton(props) {
    _classCallCheck(this, UsageButton);

    var _this2 = _possibleConstructorReturn(this, (UsageButton.__proto__ || Object.getPrototypeOf(UsageButton)).call(this, props));

    _this2.state = { isHidden: true };
    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(UsageButton, [{
    key: "handleClick",
    value: function handleClick() {
      var isHidden = this.state.isHidden;

      this.setState({ isHidden: !this.state.isHidden });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "button",
          { className: "btn btn-outline-primary btn-sm active", onClick: this.handleClick },
          this.state.isHidden ? "Show Help" : "Hide Help"
        ),
        !this.state.isHidden && React.createElement(Box, null)
      );
    }
  }]);

  return UsageButton;
}(React.Component);

var Distance = function (_React$Component3) {
  _inherits(Distance, _React$Component3);

  function Distance(props) {
    _classCallCheck(this, Distance);

    /* state variables */
    var _this3 = _possibleConstructorReturn(this, (Distance.__proto__ || Object.getPrototypeOf(Distance)).call(this, props));

    _this3.state = {
      distance: "",
      coordinate1: "",
      coordinate2: "",
      unit: "",
      miles: false,
      kilometers: false
    };

    /* must bind all functions in constructor */
    _this3.ParseInput = _this3.ParseInput.bind(_this3);
    _this3.chord = _this3.chord.bind(_this3);

    _this3.calc = _this3.calc.bind(_this3);
    _this3.updateCoordinate1 = _this3.updateCoordinate1.bind(_this3);
    _this3.updateCoordinate2 = _this3.updateCoordinate2.bind(_this3);
    _this3.setToMiles = _this3.setToMiles.bind(_this3);
    _this3.setToKilometers = _this3.setToKilometers.bind(_this3);
    _this3.switchUnit = _this3.switchUnit.bind(_this3);
    return _this3;
  }

  _createClass(Distance, [{
    key: "updateCoordinate1",
    value: function updateCoordinate1(event) {
      /* update the value of operand 1.  needs validation */
      this.setState({ coordinate1: event.target.value });
      /* this.setState({distance : this.chord(1,1,1,1)}) */
      this.setState({
        distance: this.chord(Number(this.ParseInput(event.target.value).Latitude), Number(this.ParseInput(event.target.value).Longitude), Number(this.ParseInput(this.state.coordinate2).Latitude), Number(this.ParseInput(this.state.coordinate2).Longitude))
      });
    }
  }, {
    key: "updateCoordinate2",
    value: function updateCoordinate2(event) {
      /* update the value of operand 2.  needs validation */
      this.setState({ coordinate2: event.target.value });
      this.setState({
        distance: this.chord(Number(this.ParseInput(this.state.coordinate1).Latitude), Number(this.ParseInput(this.state.coordinate1).Longitude), Number(this.ParseInput(event.target.value).Latitude), Number(this.ParseInput(event.target.value).Longitude))
      });
    }
  }, {
    key: "calc",
    value: function calc(event) {
      /* Operands are text.  Must convert to add rather than concatenate. */
      var phi1 = this.ParseInput(this.state.coordinate1).Latitude;
      var lambda1 = this.ParseInput(this.state.coordinate1).Longitude;
      var phi2 = this.ParseInput(this.state.coordinate2).Latitude;
      var lambda2 = this.ParseInput(this.state.coordinate2).Longitude;
      /* this.setState({distance : chord(1,2,3,4) }) */
      this.setState({
        distance: this.chord(Number(phi1), Number(lambda1), Number(phi2), Number(lambda2))
      });
    }
  }, {
    key: "chord",
    value: function chord(phi1, lambda1, phi2, lambda2) {
      var earth_radius_mi = 3958.7613;
      var earth_radius_km = 6371.0088;
      var dx = Math.cos(phi2) * Math.cos(lambda2) - Math.cos(phi1) * Math.cos(lambda1);
      var dy = Math.cos(phi2) * Math.sin(lambda2) - Math.cos(phi1) * Math.sin(lambda1);
      var dz = Math.sin(phi2) - Math.sin(phi1);
      sumOfSqrs = Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2);
      var C = Math.sqrt(sumOfSqrs);
      dsigma = 2 * Math.asin(C / 2);
      console.info(dsigma);
      if (this.state.miles) {
        dist = earth_radius_mi * dsigma;
      } else if (this.state.kilometers) {
        dist = earth_radius_km * dsigma;
      } else {
        dist = "Choose Miles or Kilometers";
      }
      console.info(dist);

      return dist;
    }
  }, {
    key: "ParseInput",
    value: function ParseInput(input) {
      var parts = input.split(/[^\d\w\.]+/);
      console.info("parts " + parts);

      var Longitude = 0;
      var Latitude = 0;

      if (parts.length == 8) {
        Latitude = Number(parts[0]) + Number(parts[1]) / 60 + Number(parts[2]) / 3600;
        Longitude = Number(parts[4]) + Number(parts[5]) / 60 + Number(parts[6]) / 3600;
        if (parts[3] == "S") {
          Latitude *= -1;
        }
        if (parts[7] == "W") {
          Longitude *= -1;
        }
        Longitude = Longitude * (Math.PI / 180);
        Latitude = Latitude * (Math.PI / 180);
        return {
          Longitude: Longitude,
          Latitude: Latitude
        };
      } else if (parts.length == 6) {
        Latitude = Number(parts[0]) + Number(parts[1]) / 60;
        Longitude = Number(parts[3]) + Number(parts[4]) / 60;
        if (parts[2] == "S") {
          Latitude *= -1;
        }
        if (parts[5] == "W") {
          Longitude *= -1;
        }
        Longitude = Longitude * (Math.PI / 180);
        Latitude = Latitude * (Math.PI / 180);
        return {
          Longitude: Longitude,
          Latitude: Latitude
        };
      } else if (parts.length == 4) {
        Latitude = Number(parts[0]);
        Longitude = Number(parts[2]);
        if (parts[1] == "S") {
          Latitude *= -1;
        }
        if (parts[4] == "W") {
          Longitude *= -1;
        }
        Longitude = Longitude * (Math.PI / 180);
        Latitude = Latitude * (Math.PI / 180);
        return {
          Longitude: Longitude,
          Latitude: Latitude
        };
      } else if (parts.length == 2) {
        Latitude = Number(parts[0]) * (Math.PI / 180);
        Longitude = Number(parts[1]) * (Math.PI / 180);
        return {
          Longitude: Longitude,
          Latitude: Latitude
        };
      } else return null;
    }
  }, {
    key: "setToMiles",
    value: function setToMiles(event) {
      /*Changes state variables to Miles*/
      this.setState({ miles: true, kilometers: false, unit: "Miles" }, this.calc.bind(this));
      /* this.setState({ unit: "Miles" }); */
      /* this.calc(event); */
    }
  }, {
    key: "setToKilometers",
    value: function setToKilometers(event) {
      /*Changes state variables to Kilometers*/
      this.setState({ kilometers: true, miles: false, unit: "Kilometers" }, this.calc.bind(this));
      /* this.setState({ unit: "Kilometers" } ); */
      /* this.calc(event); */
    }
  }, {
    key: "switchUnit",
    value: function switchUnit(event) {
      if (this.state.miles == true) {
        this.setToKilometers(event);
      } else {
        this.setToMiles(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "form",
            { className: "form-inline", onSubmit: this.calc },
            React.createElement(
              "div",
              { className: "col-md-4 col-xs-12 col-sm-12" },
              React.createElement(
                "h6",
                null,
                "Coordinate 1"
              ),
              React.createElement("input", {
                type: "text",
                className: "text-right form-control mr-sm-2",
                value: this.state.coordinate1,
                onChange: this.updateCoordinate1
              })
            ),
            React.createElement(
              "div",
              { className: "col-md-4 col-xs-12 col-sm-12" },
              React.createElement(
                "h6",
                null,
                "Coordinate 2"
              ),
              React.createElement("input", {
                type: "text",
                className: "text-right form-control mr-sm-2",
                value: this.state.coordinate2,
                onChange: this.updateCoordinate2
              })
            ),
            React.createElement(
              "div",
              { className: "col-md-4 col-xs-12 col-sm-12" },
              React.createElement(
                "h6",
                null,
                "Distance"
              ),
              React.createElement("input", {
                type: "text",
                className: "text-right form-control mr-sm-2",
                value: this.state.distance,
                disabled: true
              })
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" },
            React.createElement(
              "h6",
              null,
              "Units"
            ),
            React.createElement(
              "div",
              { className: "btn-group", "data-toggle": "buttons" },
              React.createElement(
                "button",
                { type: "button",
                  onMouseUp: this.setToMiles.bind(this),
                  className: "btn btn-outline-primary btn-sm"

                },
                React.createElement("input", { type: "radio", checked: true, autocomplete: "off" }),
                " Miles"
              ),
              React.createElement(
                "button",
                { type: "button",
                  onMouseUp: this.setToKilometers.bind(this),
                  className: "btn btn-outline-primary btn-sm"

                },
                React.createElement("input", { type: "radio", autocomplete: "off" }),
                " Kilometers"
              )
            )
          )
        )
      );
    }
  }]);

  return Distance;
}(React.Component);

var Application = function (_React$Component4) {
  _inherits(Application, _React$Component4);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).apply(this, arguments));
  }

  _createClass(Application, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "jumbotron" },
          React.createElement(
            "h3",
            null,
            "T15 - Distance Calculator"
          ),
          React.createElement("hr", null),
          React.createElement(Distance, null),
          React.createElement("hr", null),
          React.createElement(UsageButton, null)
        )
      );
    }
  }]);

  return Application;
}(React.Component);

ReactDOM.render(React.createElement(Application, null), document.getElementById("application"));