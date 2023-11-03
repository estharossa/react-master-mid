import PropTypes from 'prop-types'
import './Tweet.css';
import Avatar from '../avatar/Avatar'
import moment from 'moment'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'

function Tweet(props) {
  const { user, createdOn, children } = props
  const [liked, setLiked] = useState(false);

  function handleTweetLike() {
    setLiked(!liked)
  }

  const heartIconColor = liked ? 'red' : 'white';

  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
          <span className="tweet-user">@{user}</span>·
          <span className="tweet-created-on">
            {moment(createdOn).fromNow()}
          </span>
        </div>
        <div className="tweet-content">{children}</div>
        <div className="tweet-features" onClick={handleTweetLike}>
          <div className="like-icon-wrapper" onClick={handleTweetLike}>
            <FaHeart className="tweet-like" size="1em" style={{ color: heartIconColor }} />
          </div>
        </div>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  user: PropTypes.string,
  createdOn: PropTypes.string,
}

export default Tweet