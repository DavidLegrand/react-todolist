import React from 'react'
import withList from '../hoc/withList'
import List from '../helpers/List'
import Title from '../helpers/Title'
import Post from './Post'

const endpoint = `https://jsonplaceholder.typicode.com/posts?userId=`

const PostList = ({ list, removeItem, updateList }) => {
  return (
    <div>
      <Title>Posts</Title>
      <List list={list} remove={removeItem} update={updateList}>
        <Post />
      </List>
    </div>
  )
}

const PostWithList = withList(PostList, endpoint)

export default PostWithList