import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import HabitCard from './HabitCard'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'



const MainTracker = () => {
  const [habits, setHabits] = useState([])
  const [quote, setQuote] = useState(null)
  const [calendarDate, setCalendarDate] = useState(new Date())




  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/habits/')
      setHabits(data)
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

  // console.log('QUOTES', quote)

  const filteredArray = habits.filter(habit => {
    return habit.owner === userID()
  })

  const mappedQuotes = quote.map(item => {
    return item.text
  })

  // console.log(mappedQuotes)

  const randomQuote = mappedQuotes[Math.floor(Math.random() * mappedQuotes.length)]
  // console.log('RANDOM QUOTE', randomQuote)


  const onChange = (calendarDate) => {
    setCalendarDate(calendarDate)
  }

  const changeColor = () => {
    
  }

  return (
    <>
      <h1 className="headers">YOUR HABITS</h1>
      <div className="cal-habit-container">
       
        <div className="habit-container"> 
          { filteredArray.map(habit => (
            <HabitCard key={habit.id} {...habit}/>
          ))}
        </div>

        <div className="cal-container">
          <Calendar 
            onChange={onChange}
            // onClickDay={(day) => console.log(day) }
            value={calendarDate}
            tileClassName={changeColor}
          />
        </div>
      </div>
      <div className="habit-section">
        <div className="add-habit-section">
          <Link to="/categories">
            <button className="ui inverted icon right labeled standard basic button"><i aria-hidden="true" className="add icon"></i>Add a habit</button>
          </Link>
        </div>
        <div className="rewards-container">
          <h3 className="headers">REWARDS</h3>
          <h3 className="headers">Keep at those habits and you will earn points towards resources on our site!</h3>
        </div>
      </div>
      <div className="quote-container">
        <h4 className="headers">{randomQuote}</h4>
      </div>

    </>
  )
}

export default MainTracker