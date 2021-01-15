import React, { Component } from 'react'
import UsersService from '../../services/UsersService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }        
    }

    componentDidMount(){
        UsersService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Voir le compte</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label><strong> Nom : &nbsp;</strong></label>
                            <div> { this.state.user.name }</div>
                            
                        </div>
                        <div className = "row">
                            <label><strong> Email : &nbsp;</strong></label>
                            <div> { this.state.user.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent