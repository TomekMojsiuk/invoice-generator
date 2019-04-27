import React from 'react';

import '../../pages/_Pages.scss';
import LoadingBar from '../LoadingBar/LoadingBar';

//TODO jeśli nie używany, usunąć

//Main panel
class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  //TODO obsługa sideNava
  handleSideNav = () => {};

  //Renderujemy przełączniki
  render() {
    if (this.state.loading === false) {
      return <div className="row app" />;
    } else {
      return (
        <div className="col-12 app">
          <LoadingBar />
        </div>
      );
    }
  }
}

export default MainPanel;
