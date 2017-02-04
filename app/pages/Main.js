import React from 'react'

import { Container } from 'react-grid-system'

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// -----------------------------------------------------------------

import NavBar from '../Components/Navbar/NavBar'
import Footer from '../Components/Footer/Footer'
// adjust this style if the size of the nav or footer changes
const style = {
  marginTop: 90,
  marginBottom: 100
};

export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Container style={style}>
            {this.props.children}
          </Container>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
