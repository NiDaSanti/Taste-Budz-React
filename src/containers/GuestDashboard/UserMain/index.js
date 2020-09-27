import React, { Component } from 'react';

class UserMain extends Component {
  state = {

  }

  getFirebase(){
    this.unsubscribe = this.props.firebase.articles().onSnapshot((snapshot) => {
      
    })
  }
  render(){
    return(
      <></>
    )
  }
}

export default UserMain;