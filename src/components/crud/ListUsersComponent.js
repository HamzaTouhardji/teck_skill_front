import React, { Component } from 'react'
import UsersService from '../../services/UsersService'

class ListUsersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UsersService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/update-user/${id}`);
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    componentDidMount(){
        UsersService.getUser().then((res => {
            this.setState({ users : res.data});
        }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center text-white">La liste des utilisateurs :</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Ajouter un utilisateur</button>
                 </div>
                 <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered text-white">
                        <thead>
                            <tr>
                                <th>ID: </th>
                                <th>Nom :</th>
                                <th>Email :</th>
                                <th>Action :</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td> {user.id} </td>
                                        <td> {user.username} </td>
                                        <td> {user.email} </td>
                                        <td>
                                            <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Modifier </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Supprimer </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">Voir </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUsersComponent 
