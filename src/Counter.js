import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '8px'
  }
}

class Counter extends Component {
  state = {
    number: this.props.number
  }

  inc1(){
    this.setState({number: this.state.number + 1})
  }

  dec1(){
    this.setState({number: this.state.number - 1})
  }

  inc5(){
    this.setState({number: this.state.number + 5})
  }

  dec5(){
    this.setState({number: this.state.number - 5})
  }

  reset(){
    this.setState({number: this.props.number})
  }

  render() {
    return (
      <div
        style={styles.container}
      >
        <h1>
          {this.state.number}
        </h1>
        <div>
          <Button
            style={styles.button}
            variant="outlined"
            onClick={() => this.dec1()}
            >
            - 1
          </Button>
          <Button
            style={styles.button}
            variant="outlined"
            onClick={() => this.inc1()}
          >
            + 1
          </Button>
        </div>
        <div>
          <Button
            style={styles.button}
            variant="outlined"
            onClick={() => this.dec5()}
            >
            - 5
          </Button>
          <Button
            style={styles.button}
            variant="outlined"
            onClick={() => this.inc5()}
          >
            + 5
          </Button>
        </div>
        <Button
          style={styles.button}
          variant="outlined"
          onClick={() => this.reset()}
        >
          RESET
        </Button>
      </div>
    )
  }
}

export default Counter
