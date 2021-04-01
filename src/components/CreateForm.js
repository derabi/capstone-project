import { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateForm({ onAddNewCard }) {
  const [images, setImages] = useState([])
  const [dateInput, setDateInput] = useState(false)
  const [dayInput, setDayInput] = useState(false)

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Erstelle ein Sportangebot</Header>
      <label>
        Titel
        <input name="title" placeholder="z.B. Fußball beim FC Musterverein" />
      </label>
      <label for="category">
        Sportart
        <select name="category">
          <option value="fussball">Fußball</option>
          <option value="laufen">Laufen</option>
          <option value="basketball">Basketball</option>
          <option value="fitness">Fitness</option>
        </select>
      </label>
      <label>
        Adresse
        <input name="address" />
      </label>
      <label>
        Postleitzahl
        <input name="zip" />
      </label>
      <label>
        Stadt
        <input name="city" />
      </label>
      <Dates>
        Termine
        <SingleDateLabel>
          Einmalig
          <SingleDateRadio
            name="dates"
            type="radio"
            value="einmalig"
            onChange={() => {
              setDateInput(true)
              setDayInput(false)
            }}
          />
        </SingleDateLabel>
        {dateInput ? (
          <Test>
            {' '}
            <input name="dates" type="date" /> <input name="es" type="time" />{' '}
          </Test>
        ) : null}
        <MultiDatesLabel>
          <span>Regelmäßig</span>
          <MultiDatesRadio
            name="dates"
            type="radio"
            value="regelmäßig"
            onChange={() => {
              setDateInput(false)
              setDayInput(true)
            }}
          />
        </MultiDatesLabel>
        {dayInput ? (
          <DayContainer>
            <DayLabel>
              Montag
              <input name="dates" type="checkbox" value="monday" />
            </DayLabel>
            <DayLabel>
              Dienstag
              <input name="dates" type="checkbox" value="tuesday" />
            </DayLabel>
            <DayLabel>
              Mittwoch
              <input name="dates" type="checkbox" value="wendnesday" />
            </DayLabel>
            <DayLabel>
              Donnerstag
              <input name="dates" type="checkbox" value="thursday" />
            </DayLabel>
            <DayLabel>
              Freitag
              <input name="dates" type="checkbox" value="friday" />
            </DayLabel>
            <DayLabel>
              Samstag
              <input name="dates" type="checkbox" value="saturday" />
            </DayLabel>
            <DayLabel>
              Sonntag
              <input name="dates" type="checkbox" value="sunday" />
            </DayLabel>
          </DayContainer>
        ) : null}
      </Dates>
      <DescriptionLabel>
        Beschreibung
        <Description
          name="description"
          placeholder="Schreibe eine Beschreibung zu deinem Angebot"
        />
      </DescriptionLabel>
      <PriceWrapper>
        <label>
          Preis
          <input
            placeholder="35"
            name="price"
            type="number"
            step="0.01"
            min="0"
          />
        </label>
        <label for="frequency">
          <select name="frequency">
            <option value="einmalig">einmalig</option>
            <option value="täglich">täglich</option>
            <option value="wöchentlich">wöchentlich</option>
            <option value="monatlich">monatlich</option>
            <option value="jährlich">jährlich</option>
          </select>
        </label>
      </PriceWrapper>
      <br />
      <SubmitButton text="add"> Hinzufügen </SubmitButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
      title,
      category,
      address,
      zip,
      city,
      dates,
      description,
      price,
      frequency,
    } = form.elements
    onAddNewCard({
      title: title.value,
      images: images.map(img => img.data_url),
      category: category.value,
      address: address.value,
      zip: zip.value,
      city: city.value,
      dates: dates.value,
      description: description.value,
      price: price.value,
      frequency: frequency.value,
    })
    form.reset()
  }
}

const Header = styled.p`
  font-size: 14px;
  margin: 0;
`

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 10px;
  h2 {
    font-size: 16px;
    margin: 25px 0 0 0;
    color: grey;
  }
  h3 {
    font-size: 12px;
    margin: 0;
  }
  label {
    font-size: 12px;
  }
  input {
    padding: 10px;
    border: 0.5px solid grey;
    width: 100%;
    margin: 0;
    color: #000;
    outline: none;
  }
  select {
    border: 0.5px solid grey;
    width: 100%;
    height: 30px;
    font-size: 14px;
    outline: none;
  }
`

const PriceWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Dates = styled.label`
  display: grid;
  gap: 15px;
  margin-top: 10px;
`

const SingleDateLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`

const SingleDateRadio = styled.input``

const MultiDatesLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`

const MultiDatesRadio = styled.input``

const DayLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`

const DayContainer = styled.div`
  display: grid;
  gap: 10px;
`

const DescriptionLabel = styled.label`
  display: grid;
  margin-top: 10px;
`

const Description = styled.textarea`
  height: 100px;
  padding: 10px;
  outline: none;
  font-family: sans-serif;
  font-size: 12px;
`

const SubmitButton = styled.button`
  background-color: #eee;
  border: 0.5px solid black;
  box-shadow: 1px 1px 1px darkgrey;
  font-size: 16px;
  width: 80%;
  height: 50px;
  margin: 0 auto;
`

const Test = styled.div`
  display: flex;
  gap: 10px;
`
