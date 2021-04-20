import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const [userData, setUserData] = useState('')
  const [resources, setResources] = useState('')
  const params = useParams()
  const [quote, setQuote] = useState(null)

  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${params.id}`)
      setUserData(data)
      const allResources = await axios.get('/api/resources/') 
      setResources(allResources.data)
    }
    getData()
  }, [])

  useEffect(() =>{
    const getData = async() => {
      const response = await axios.get('/api/quotes/')
      setQuote(response.data)
      
    }
    getData()
  }, [])

  if (!quote) return ''

  const mappedQuotes = quote.map(item => {
    return item.text
  })

  const randomQuote = mappedQuotes[Math.floor(Math.random() * mappedQuotes.length)]

  console.log('DATA1', userData)
  console.log('DATA2', resources)

  const { username, fullName, email, profileImage, points, wishlist } = userData


  return (
    <>
      <div className="user-hero-section">
        {profileImage}
      </div>
      <div className="ui horizontal divider"><h1 >{`Great to see you again, ${username}!`}</h1></div>

      <div className="main-user-section">
        <div className="headers">
          <div className="user-info">
            
            <h2>Full Name: {fullName}</h2>
            <h2>Email: {email}</h2>
            <h2>Username: {username}</h2>
            <h2>Total points: {points}</h2>
       
            <Link to={`/auth/profile/${params.id}/edit`}>
              <button className="ui icon right labeled standard basic button"><i aria-hidden="true" className="edit icon"></i>Edit profile</button>
            </Link>
          </div>
        </div>
        <div className="user-saved-resources">
          <h2>Saved resources</h2>
          <p>{wishlist}</p>
        </div>
      </div>
      
      <div className="user-quote">
        {randomQuote}
      </div>
    </>
  )
}

export default UserProfile