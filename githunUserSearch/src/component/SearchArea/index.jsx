import React, { createRef } from 'react'
import { RightCircleOutlined, GithubOutlined } from '@ant-design/icons';
import "./index.css"

export default function SearchArea(props) {
  const refs = createRef()

  async function show() {
    const { value } = refs.current

    fetch(`https://api.github.com/search/users?q=${value}`).then((value) => {
      return value.json()
    }).then((data) => {
      props.status.setLoading(true)
      props.status.setBegin(false)
      props.data(data.items || [])
    }).catch((error) => {
      console.log(error)
      props.status.setError(error)
    })





  }

  return (
    <div className='search-box'>
      <GithubOutlined style={{ fontSize: "50px" }} />
      <input ref={refs} type="text" className='serachipt' placeholder='Input The User Name you Want to Search In GitHub' />
      <RightCircleOutlined onClick={show} style={{ fontSize: "27px", marginLeft: "10px" }} />
    </div>
  )
}
