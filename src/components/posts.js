import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Store from '../store/store'
import { connect, Provider } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts:[]
    }
  }
  componentWillMount() {
    this.props.fetchPosts()
    console.log(this.props.posts)
  }

  callingKanye() {
    this.props.fetchPosts()

  }

  render() {

    return (
      <Provider store={Store}>
        <div onClick={() => this.callingKanye()}>
              {this.props.posts.quote}
        </div>
      </ Provider>
    )
  }
}


Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
