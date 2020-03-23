

console.log(receipt1);

class ReceiptOne extends React.Component {
    render () {
        console.log(this.props);
    return (
        <div>
            <h1>{this.props.receipt.person}</h1>
        <p>Main: {this.props.receipt.order.main}</p> 
        <p>Protein: {this.props.receipt.order.protein}</p> 
        <p>Rice: {this.props.receipt.order.rice}</p> 
        <p>Sauce: {this.props.receipt.order.sauce}</p> 
        <p>Drink: {this.props.receipt.order.drink}</p> 
        <p>Cost: {this.props.receipt.order.cost}</p> 
        
            
            
            
           </div> 
    )
        }
    }

    class ReceiptTwo extends React.Component {
        render () {
            console.log(this.props);
        return (
            <div>
                <h1>{this.props.receipt.person}</h1>
            <p>Main: {this.props.receipt.order.main}</p> 
            <p>Protein: {this.props.receipt.order.protein}</p> 
            <p>Rice: {this.props.receipt.order.rice}</p> 
            <p>Sauce: {this.props.receipt.order.sauce}</p> 
            <p>Drink: {this.props.receipt.order.drink}</p> 
            <p>Cost: {this.props.receipt.order.cost}</p> 
            
                
                
                
               </div> 
        )
            }
        }

        class ReceiptThree extends React.Component {
            render () {
                console.log(this.props);
            return (
                <div>
                    <h1>{this.props.receipt.person}</h1>
                <p>Main: {this.props.receipt.order.main}</p> 
                <p>Protein: {this.props.receipt.order.protein}</p> 
                <p>Rice: {this.props.receipt.order.rice}</p> 
                <p>Sauce: {this.props.receipt.order.sauce}</p> 
                <p>Drink: {this.props.receipt.order.drink}</p> 
                <p>Cost: {this.props.receipt.order.cost}</p> 
                
                    
                    
                    
                   </div> 
            )
                }
            }






class App extends React.Component{

    state = {
receipt1,
receipt2,
receipt3
    }

    render () {
        return (
            <div>
                <ReceiptOne receipt={this.state.receipt1} />
                <ReceiptTwo receipt={this.state.receipt2} />
                <ReceiptThree receipt={this.state.receipt3} />
            
                
                
                
               </div> 
        )
            }
        }
  




ReactDOM.render(
    <App />,
    document.querySelector(".container")
);