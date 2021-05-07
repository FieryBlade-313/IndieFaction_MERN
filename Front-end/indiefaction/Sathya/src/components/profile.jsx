import React, { Component } from 'react';
import axios from 'axios';

import './css/profile.css';

class Profile extends Component {
    
    
    constructor(props){
        super(props)
        
        this.state = {
            username : 'def',
            email : 'def',
            contact : 'def',
            facebook : 'def',
            linkedin : 'def',
            github : 'def',
            website : 'def',
            steam : 'def',
            doj: 'def' 
        }
    }


    componentDidMount = () => {
        axios.get('/api/user/name',{params:{username: "sathya"}}).then(resp => {
            const obj =  resp.data.user[0];
            this.setState({
                username: obj['username'] ,
                email: obj['email'],
                contact: obj['contact'],
                facebook: obj['facebook'],
                linkedin: obj['linkedin'],
                github: obj['github'],
                website: obj['website'],
                steam: obj['steam'],
                doj: obj['doj']
            })
            console.log(resp.data.user[0]['username'],'done');
        }).catch(err => {
            console.log(err);
        });
    };

    render() { 

        const col_style = {
            padding: "10px",
            fontSize: "20px",
        };

        return ( 

        <div className="profile">
            <h1 style={ { fontSize: "35px" , padding: "15px"}}> Profile </h1>  
            <table>
                <th>
                    <td></td>
                    <td></td>
                </th>
                <tr>
                    <th>Username</th>
                    <th>{this.state.username}</th>
                </tr>
                <tr>
                    <th>Date of Joining</th>
                    <th>{this.state.doj}</th>
                </tr>
                <tr>
                    <th id='handles'>Handles</th>
                </tr>
                <tr>
                    <th>Facebook</th>
                    <th>{this.state.facebook}</th>
                </tr>
                <tr>
                    <th>Linkedin</th>
                    <th>{this.state.linkedin}</th>
                </tr>
                <tr>
                    <th>Github</th>
                    <th>{this.state.github}</th>
                </tr>
                <tr>
                    <th>Website</th>
                    <th>{this.state.website}</th>
                </tr>
            </table>

        </div>
         );
    }
}
 
export default Profile;