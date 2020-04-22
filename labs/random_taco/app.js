import React from 'react';


class App extends React.Component {

    state = {
        url = "",
        slug = "",
        name = "",
        recipe = ""
    }

    getRandomTaco = (event) => {
        event.preventDefault()
        this.setState({
              searchURL: this.state.url + this.state.slug + this.state.name + this.state.recipe
            }, () => {
        fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
  .then(response => {
    return response.json()
  }).then(json => console.log(json),
      err => console.log(err))
    })
}


    render() {

        console.log(getRandomTaco())

        return (
            <h2> ${this.state.name}</h2>
            <h3> ${this.state.recipe}</h3>
            <h2> ${this.state.slug}</h2>
        )
    }
}






ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )