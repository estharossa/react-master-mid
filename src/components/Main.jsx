import Form from './form/Form'
import Timeline from './list/Timeline'
import Header from './header/Header'
import initialTweets from '../tweets.json'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const CURRENT_USER = 'daniyar'

export default function Main() {
    const [tweets, setTweets] = useState(initialTweets)

    const handlePostTweet = (content) => {
        const newTweet = {
            content,
            id: nanoid(),
            created_on: Date(Date.now()),
            user: CURRENT_USER,
            comments_count: 0,
            retweets_count: 0,
            favorites_count: 0,
        }
        setTweets([...tweets, newTweet])
    }

    return (
        <div className="app">
            <Header />
            <Form onSubmit={handlePostTweet} />
            <div className="separator" />
            <Timeline tweets={tweets} />
        </div>
    )
}