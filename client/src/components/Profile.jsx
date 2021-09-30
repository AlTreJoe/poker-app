import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import axios from 'axios';

class Profile extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: [] 
    };
    this.getUser = this.getUser.bind(this);
  }


  async getUser() {
    const data = await axios.get('/routes/profile/user'); 
    console.log('user:', data.data.money);
    return data.data;
   
      
  }
  async componentDidMount() {
    const userData = await this.getUser(); 
    //console.log(Object.values(userData));
    this.setState({
      user: [Object.values(userData)] 
    });
    
  }

  render() {
    return (
      <div>profile component
        
        {
          this.state.user.map((info, i) => {
            return (
              <div key={i}>
                <h1>{info[2]}</h1>
                <img src={info[3]}/>
                <h3>{info[4]}</h3>
                <h4>Baller Status: {info[5] > 75 ? 'Baller' : info[5] <= 75 && info[5] >= 35 ? 'Bum' : 'Broke!!!'}</h4>
                <h3>$: {info[5]}</h3>
              </div>
            );
          })
        }
        <button onClick={this.getUser}>get user</button>
      </div>
    );
  }

}

export default Profile;