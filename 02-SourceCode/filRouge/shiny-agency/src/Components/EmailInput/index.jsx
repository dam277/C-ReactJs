import { Component } from 'react'
 
class EmailInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }

    updateInputValue = (value) => {
        this.setState({ inputValue: value })
    }

    componentDidMount() 
    {
        console.log("Component Did Mount")
    }

    componentDidUpdate(prevProps, prevState) 
    {
        console.log("Component Did Update")
    }

    componentWillUnmount() 
    {
        console.log("Component Will Unmount")
    }
 
    render() {
    // Ici on récupère theme en destructurant this.props
        const { theme } = this.props
        return (
            <div>
                {this.state.inputValue}
                <input onChange={(e) => this.updateInputValue(e.target.value)}/>
            </div>
        )
    }
}
 
export default EmailInput