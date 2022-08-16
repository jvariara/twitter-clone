import { Button, Avatar } from '@mui/material'
import React from 'react'
import '../css/TweetBox.css'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar></Avatar>
                <input placeholder="What's happening?" type='text' />
            </div>
            <input className='tweetBox__inputImg' placeholder="OPTIONAL: Enter image URL" type='text' />
            <Button className='tweetBox__tweetBtn'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox