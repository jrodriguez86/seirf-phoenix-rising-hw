
class DivOne extends React.Component {
    render() {
        return (
            <div>
                <h3 onClick={() => this.changeIt(this.props.tardis.name)}>{this.props.tardis.name}</h3> 
            </div>
        )
    }
}




class App extends React.Component {

    state = {
        tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
        }
    }

    changeIt = (text) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }


    render () {
        return (
            <div>
              <DivOne tardis={this.state.tardis}/>  
            </div>
            
        )

        
    }
}




ReactDOM.render(
    <App />, document.querySelector(".container")
);