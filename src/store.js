import React from 'react';
import ReactDOM from 'react-dom';

function connect(ComponentClass) {
  return class StoreConnector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true, accountManagerName: '',
      };
    }
    componentDidMount() {
      const { httpService } = this.props;

      httpService.fetch('/organizations/1')
        .then(({ data }) => {
          this.setState({
            isLoading: false,
            accountManagerName: data.attributes['account-manager-name'],
          });
        });
    }

    render() {
      const { isLoading, accountManagerName} = this.state;
      return <ComponentClass isLoading={isLoading} accountManagerName={accountManagerName} />;
    }
  }
};

export { connect };
