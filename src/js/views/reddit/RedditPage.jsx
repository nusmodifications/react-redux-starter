import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchReddits } from 'actions/reddit';

class RedditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'reactjs',
    };
    autoBind(this);
  }

  componentDidMount() {
    this.search();
  }

  updateTopic(event) {
    this.setState({
      topic: event.target.value,
    });
  }

  search(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.fetchReddits(this.state.topic);
  }

  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <hr/>
        <p>Try searching for &#34;redux&#34; to see the failure case.</p>
        <form onSubmit={this.search}>
          <input className="form-control" value={this.state.topic} onChange={this.updateTopic}/>
        </form>
        <br/>
        {this.props.fetchRedditsRequest.isPending && <p>Loading...</p>}
        {this.props.fetchRedditsRequest.isFailure && <p>Request failed</p>}
        {this.props.fetchRedditsRequest.isSuccessful &&
          <ul>
            {this.props.items.map(item => <li key={item.data.id}>{item.data.title}</li>)}
          </ul>
        }
      </div>
    );
  }
}

RedditPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
  })).isRequired,
  fetchReddits: PropTypes.func.isRequired,
  fetchRedditsRequest: PropTypes.shape({
    isPending: PropTypes.bool,
    isFailure: PropTypes.bool,
    isSuccessful: PropTypes.bool,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.reddit,
    fetchRedditsRequest: state.requests.fetchRedditsRequest || {},
  };
}

export default connect(
  mapStateToProps,
  {
    fetchReddits,
  },
)(RedditPage);
