import React, { useState } from 'react'
import { Form, Button,InputGroup,Col } from 'react-bootstrap'

import '../index.css'
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
       <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <i class="fas fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                                type='text'
                                name='q'
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder='Search Products...'
                              
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
     
      {/* <Button type='submit' variant='primary' className='p-2'>
        Search
      </Button> */}
    </Form>
  )
}

export default SearchBox
