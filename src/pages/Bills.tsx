import React, { CSSProperties, useEffect, useState } from 'react'
import { AppContext, AppDispatch } from '../store/BillsContext'
import {
  InputGroup,
  FormControl,
  Card,
  CardColumns,
  Form,
  Button
} from 'react-bootstrap'
import { IBill } from '../Interfaces/AppInterface'

const App: React.FC = () => {
  const { bills } = React.useContext(AppContext)
  const dispatch = React.useContext(AppDispatch)

  let billStyle: CSSProperties = {
    minHeight: '5vh',
    width: '100vw'
  }

  useEffect(() => {}, [billStyle])

  const [validated, setValidated] = useState()

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    let form = e.target
    if (form.checkValidity()) {
      dispatch({
        type: 'ADD_BILL',
        payload: {
          amount: form.billAmount.value,
          billDate: new Date(),
          billDetails: 'new bill'
        }
      })

      setValidated(true)
    } else {
      setValidated(false)
    }
  }

  return (
    <div>
      <Form onSubmit={submitForm} validated={validated}>
        <Card border='secondary' style={{ marginBottom: 15, padding: '2vw' }}>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>₹</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              required
              id='billAmount'
              as='input'
              type='numeric'
              placeholder='bill amount'
              aria-label='Bill Amount'
            />
          </InputGroup>

          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>...</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              required
              id='billDescription'
              as='textarea'
              placeholder='bill description'
              aria-label='bill description'
            />
          </InputGroup>

          <Button size='lg' block variant='primary' type='submit'>
            Add Bill
          </Button>
        </Card>
      </Form>

      <CardColumns>
        {bills.map((bill, index) => (
          <Card
            style={{ maxWidth: '18em', margin: '0.1vw' }}
            key={index}
            bg='dark'
            text={bill.amount > 10 ? 'success' : 'warning'}>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                <p>{bill.id}</p>
                <p>{bill.amount}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                {bill.date.toLocaleDateString()}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </div>
  )
}

export default App
