import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component{

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushis.map(sushi => <Sushi sushi={sushi} eaten={this.props.eaten} handleEatSushi={this.props.handleEatSushi}/>)}
            <MoreButton renderFourSushi={this.props.renderFourSushi} />
        </div>
      </Fragment>
    )
  }
}
export default SushiContainer

// Only 4 sushi are rendered at a time