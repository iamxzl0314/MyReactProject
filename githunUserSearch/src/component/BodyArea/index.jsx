import React from 'react'
import './index.css'

export default function BodyArea(props) {
  const { data, status } = props
  const [show, setShow] = React.useState(true)
  React.useEffect(() => {
    setShow(false)
    return () => {
      status.setLoading(false)
    }
  }, [])


  return (
    <div className='container'>
      {
        show ? <div className='container'><h1>LOADING.....</h1><h2>Wait For One Second</h2></div> :
          data.map((userObj) => {
            const { id, html_url, avatar_url, login } = userObj
            return <div className="user" key={id}>
              <a href={html_url}> <img src={avatar_url} alt={login} title={`${login}'s HTML`}></img></a>
              {login}
            </div>
          })

      }
    </div>
  )
}
