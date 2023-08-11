import Axios from "axios";
import React from 'react';
import { BandungComponent, getPrefix, getSessionToken, validSession } from "../lib/Bandung";
import Layout from "./Layout";

class EmailComponent extends React.Component {
    state = {
      email: '',
    };
  
    componentDidMount() {
      const { userEmailEntityId } = this.props;
      Axios.get(`${getPrefix()  }/app/useremail/view?sessionToken=${  getSessionToken()  }&userEmailEntityId=${  userEmailEntityId}`, null)
        .then((response) => {
          this.setState({
            email: response.data.email,
          });
        });
    }
  
    render() {
      return (
        <div>{this.state.email}</div>
      );
    }
} 
class PhoneComponent extends React.Component {
    state = {
        phoneNumber: '',
    };
    
    componentDidMount() {
    const { userEntityId } = this.props;
    Axios.get(`${getPrefix()  }/app/user/view?sessionToken=${  getSessionToken()  }&userEntityId=${  userEntityId}`, null)
        .then((response) => {
            this.setState({
                phoneNumber: response.data.phone,
            });
        });
    }

    render() {
        return (
            <div>{this.state.phoneNumber}</div>
        );
    }
} 

class AdminComponent extends BandungComponent {
    constructor (props)
      {
          super(props) ;
          this.state =
          {
              totalCustomers: 0,
              newCustomers: 0,
            userEntityList: [], 
          } ;
      }
  
    renderAdmin() {
      Axios.get(`${getPrefix()}/app/admin/statistics?sessionToken=${getSessionToken()}`, null)
      .then((response) => {
          this.setState({totalCustomers: response.data.UserEntity, newCustomers: response.data.UserEntity});
      })
  
      Axios.get(`${getPrefix()}/app/user/list?sessionToken=${getSessionToken()}&page=${this.page}`, null)
      .then((response) => {
          this.setState({userEntityList: response.data});
      })
  
      return (
        <div>
  
          <div className="quick-view-grid w-full flex justify-between items-center mt-3 ">
            <div className="box">
              <p className="text-xl text-black  mt-5">
                Total Customers
              </p>
              <span className="text-[40px] text-black font-bold leading-none mt-1 block">
                {this.state.totalCustomers}
              </span>
            </div>
  
            <div className="box">
              <p className="text-xl text-black  mt-5">
                New Customers
              </p>
              <span className="text-[40px] text-black font-bold leading-none mt-1 block">
                {this.state.totalCustomers}
              </span>
            </div>
          </div>
  
          <div className="margin-top-[10px] text-white" >.</div>
          <div className="space"></div>
  
          
  
          <div className="outter-box">
  
            <div className="quick-view-grid w-full flex justify-between items-center mt-3">
              <div>Name</div>
              <div >Email</div>
              <div >PhoneNumber</div>
            </div>
          </div>
  
  
          <div>
            <ul className='list-wrapper'>
              {this.state.userEntityList?.map(userEntity => {
                let email = '';
                Axios.get(`${getPrefix()}/app/useremail/view?sessionToken=${getSessionToken()}&userEmailEntityId=${userEntity.userEmailEntityId}`,null)
                .then((response) => {
                    email = response.data.email
                })
                
                return (
                  <div className="curved-box">
                    <li className="quick-view-grid w-full flex justify-between items-center">
  
                    <div>{userEntity.firstName} {userEntity.lastName}</div>
                    <EmailComponent userEmailEntityId={userEntity.userEmailEntityId} />
                    <PhoneComponent userEntityId={userEntity.userEntityId} />
                    </li>
                  </div>
                )
              })
            }
            </ul>
          </div>
        </div>
      );
    }
  
    render() {
      if (validSession()) return this.renderAdmin();
      return (
          <div>
            <p>Welcome.</p>
          </div>
        );
    }
  }
  

export default function Stats () {
    return (
        <Layout>
            <div className="login-page-wrapper w-full py-10">
                <div className="container-x mx-auto">
                    <AdminComponent />
                </div>
            </div>
        </Layout>
    );
}