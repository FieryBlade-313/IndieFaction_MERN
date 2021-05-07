import axios from 'axios';
import React, { Component } from 'react';
import './css/editProfile.css';

class EditProfile extends Component {
    
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
                doj: obj['doj'],
            })
            console.log(resp.data.user[0]['username'],'done');
        }).catch(err => {
            console.log(err);
        });
    }

    handleEmail = (event) => {
        this.setState(
            {
                email: event.target.value,
            }
        )
    }


    handleContact = (event) => {
        this.setState(
            {
                contact: event.target.value,
            }
        )
    }


    handleFacebook = (event) => {
        this.setState(
            {
                facebook: event.target.value,
            }
        )
    }



    handleLinkedin = (event) => {
        this.setState(
            {
                linkedin: event.target.value,
            }
        )
    }


    handleGithub = (event) => {
        this.setState(
            {
                github: event.target.value,
            }
        )
    }


    handleWebsite = (event) => {
        this.setState(
            {
                website: event.target.value,
            }
        )
    }

    handleSubmit = (event) => {
        // alert(`${this.state} `);

        axios.put('/api/user/editprofile',{ ...this.state }).then(resp=>{
            console.log(resp,"oof");
        }).catch(err=>{
            console.log(err);
        })
        event.preventDefault();
    }


    render() { 


        const button_style = {
            margin: "1%",
            padding: "1%",
            backgroundColor: "#3E7E93",
            color: "white",
        };


        return ( 
            <div className='profile'>
                
            <h1 style={ { fontSize: "35px", margin: "15px" }}> Edit Profile </h1> 
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <th> <label >Username</label> </th>
                        <th> <input id='username' type='text' value={this.state.username} disabled></input> </th>
                    </tr>

                    <tr>
                        <th> <label>Email</label> </th>
                        <th> <input type='text' value={this.state.email} onChange={this.handleEmail}></input> </th>
                    </tr>

                    <tr>
                        <th> <label>Contact No</label> </th>
                      <th>  <input type='text' value={this.state.contact} onChange={this.handleContact}></input> </th>
                    </tr>

                    <tr> 
                        <th>Handles</th> </tr>
                    
                    <tr>
                        <th><label>Facebook</label></th>
                        <th><input type='text' value={this.state.facebook} onChange={this.handleFacebook}></input> </th>
                    </tr>

                    <tr>
                        <th><label>Linkedin</label></th>
                        <th><input type='text' value={this.state.linkedin} onChange={this.handleLinkedin}></input> </th>
                    </tr>

                    <tr>
                        <th><label>Github</label></th>
                        <th> <input type='text' value={this.state.github} onChange={this.handleGithub}></input> </th>
                    </tr>

                    <tr>
                        <th><label>Website</label></th>
                        <th><input type='text' value={this.state.website} onChange={this.handleWebsite}></input> </th>
                    </tr>

                    <tr>
                        <th><label>Steam Profile</label></th>
                        <th><input id='steam' type='text' value={this.state.steam} disabled></input></th>
                    </tr>
                </table>
                <button style={button_style} type='submit'>Save Changes</button>
                
            </form>



            </div>

         );
    }
}
 
export default EditProfile;