import React, { useState } from 'react';
import styled from 'styled-components';

const fakeData = [
  {name: 'Brekky with Friends',
  organizer: 'Todd Howard',
  date: '11/28/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},
  {name: 'Brekky with Friends',
  organizer: 'Todd Howard',
  date: '11/27/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']}, 
  {name: 'Brekky with Friends',
  organizer: 'Todd Howard',
  date: '11/24/2021',
  location: '4231 Westover St Georgetown, SD, 54063',
  guests: ['Millie', 'Maggie', 'Melvin', 'Murry', 'Murphy'],
  food: ['Potatoes & Gravy', 'Roles', 'Ham', 'Drinks', 'stuffing']},]

  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  `
  const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 450px;
  `
  const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
  height: auto;
  border-radius: 15px;
  `

const StyledButton = styled.label`
display: flex;
flex-direction: row;
margin: 20px;
justify-content: center;
height: 20px;
`

const NewEvent = () => {

    const [ formValues, setFromValues ] = useState({name: '', organizer: '', date: '', location: '', guests: '', food: ''});
    const [ potluck, setPotluck ] = useState(fakeData);

    const submit = (evt) => {
        evt.preventDefault();
        const newPotluck = {
            name: formValues.name.trim(),
            organizer: formValues.organizer.trim(),
            date: formValues.date.trim(),
            location: formValues.location.trim(),
            guests: formValues.guests.trim(),
            food: formValues.food.trim(),
        }
        setPotluck(potluck.concat(newPotluck))
        setFromValues({date: '', location: '', guests: '', food: ''})
    }

    const change = (evt) => {
        const {name, value} = evt.target;
        setFromValues({...formValues, [name]: value})
    }

    return (
        <StyledDiv>
            <h2>Start Planning!</h2>
            <StyledForm onSubmit={submit}>
            <StyledLabel>
                <p>Name:</p>
                    <input
                        value={formValues.name}
                        name="name"
                        type="text"
                        onChange={change}
                        placeholder="Enter your name"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Organizer:</p> 
                    <input
                        value={formValues.organizer}
                        name="organizer"
                        type="text"
                        onChange={change}
                        placeholder="Organizer of Potluck"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Date:</p> 
                    <input
                        value={formValues.date}
                        name="date"
                        type="text"
                        onChange={change}
                        placeholder="Date of Potluck"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Location:</p> 
                    <input
                        value={formValues.location}
                        name="location"
                        type="text"
                        onChange={change}
                        placeholder="Address of Location"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Add Guests:</p>
                    <input
                        value={formValues.guests}
                        name="guests"
                        type="text"
                        onChange={change}
                        placeholder="Invite Guests"
                    />
                </StyledLabel>
                <StyledLabel>
                    <p>Food Items:</p>
                    <input
                        value={formValues.food}
                        name="food"
                        type="text"
                        onChange={change}
                        placeholder="Add Food Items"
                    />
                </StyledLabel>
                <StyledButton>
                    <input type="submit" value="Add a Potluck" />
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}

export default NewEvent