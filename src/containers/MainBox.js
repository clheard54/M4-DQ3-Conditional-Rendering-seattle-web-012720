import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 'profile'
    }
  }

  selectPage = (id) => {
    this.setState({
      selection: id
    })
  }

  render() {

  let detailsToDisplay = <div>Hi, I'm a div!</div>
    if (this.state.selection == "profile"){
      detailsToDisplay = <Profile />
    } 
    if (this.state.selection == "photo"){
        detailsToDisplay = <Photos />
      }
    if (this.state.selection == "cocktail"){
        detailsToDisplay = <Cocktails />
  }
    if (this.state.selection == "pokemon"){
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar selection={this.state.selection} onSelectPage={this.selectPage} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
