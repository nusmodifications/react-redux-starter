// @flow
import type { StoreState } from 'reducers';
import type { RequestStates } from 'types/redux';
import type { RedditsState } from 'reducers/reddits';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { fetchReddits } from 'actions/reddits';

type Props = {
  items: RedditsState,
  fetchReddits: Function,
  fetchRedditsRequest: RequestStates,
};

type State = {
  topic: string,
};

class RedditPage extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      topic: 'reactjs',
    };
    autoBind(this);
  }

  state: State;

  componentDidMount() {
    this.search();
  }

  props: Props;

  search() {
    this.props.fetchReddits(this.state.topic);
  }

  render() {
    return (
      <DocumentTitle title="Reddit">
        <div>
          <h1>Reddit</h1>
          <hr/>
          <p>Try searching for &#34;redux&#34; to see the failure case.</p>
          <form onSubmit={(event) => {
            event.preventDefault();
            this.search();
          }}
          >
            <input className="form-control" value={this.state.topic} onChange={(event) => {
              this.setState({
                topic: event.target.value,
              });
            }}
            />
          </form>
          <br/>
          {this.props.fetchRedditsRequest.isPending && <p>Loading...</p>}
          {this.props.fetchRedditsRequest.isFailure && <p>Request failed</p>}
          {this.props.fetchRedditsRequest.isSuccessful &&
            <ul>
              {this.props.items.map((item) => {
                return (
                  <li key={item.data.id}>
                    <a href={`https://reddits.com${item.data.permalink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.data.title}
                    >
                      {item.data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    items: state.reddits,
    fetchRedditsRequest: state.requests.fetchRedditsRequest || {},
  };
}

export default connect(
  mapStateToProps,
  {
    fetchReddits,
  },
)(RedditPage);
