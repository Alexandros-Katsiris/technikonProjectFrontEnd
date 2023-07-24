import React from 'react'
import AxiosApproach from './refetch'
import {Container , Row,Col} from 'react-bootstrap'

const UserProperties = () => {
  return (
    <Container style={{marginTop: "50px", maxWidth: "1000px"}}>
    <Row>
      <Col xs="12">
        <AxiosApproach />
      </Col>
    </Row>
  </Container>
  )
}
export default UserProperties;
