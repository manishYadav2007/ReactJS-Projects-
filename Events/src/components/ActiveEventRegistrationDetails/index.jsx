
import React from 'react'
import './index.css'


const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}


class ActiveEventRegistrationDetails extends React.Component {


  clickOnImage = () => {
    console.log("Clicked Event Item");
  }


 render() {
  const { eventsList } = this.props
}
}

export default ActiveEventRegistrationDetails