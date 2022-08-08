import React from 'react'
import BodyArea from './component/BodyArea'
import SearchArea from './component/SearchArea'

export default function App() {
  
  const [data, setData] = React.useState([])
  const [Loading, setLoading] = React.useState(false)
  const [Begin, setBegin] = React.useState(true)
  const [error, setError] = React.useState()


  function deliveryData(e) {
    setData(e)
  }

  return (
    <div>
      <SearchArea data={deliveryData} status={{ setLoading, setBegin, setError }}></SearchArea>
      {
        error ? <div className='container'><h1>Error</h1><h2>{error.message}</h2></div> :
          Begin ? <div className='container'><h1>Hello</h1><h2>Welcome To Our User Search Page</h2></div> :
          Loading ? <BodyArea data={data} status={{ Loading, setLoading }}></BodyArea> : <div className='container'><h1>LOADING.....</h1><h2>Wait For One Second</h2></div>}
    </div>
  )
}
