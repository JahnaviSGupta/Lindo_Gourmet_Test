import Axios from "axios";
import React from 'react';
import { BandungComponent, adminPermission, getPrefix, getSessionToken } from "../lib/Bandung";
import Layout from "./Layout";


const itemsPerPage = 5;

class EmailComponent extends React.Component {
  state = {
    email: '',
  };

  componentDidMount() {
    const { userEmailEntityId } = this.props;
    Axios.get(`${getPrefix()}/app/useremail/view?sessionToken=${getSessionToken()}&userEmailEntityId=${userEmailEntityId}`, null)
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
    Axios.get(`${getPrefix()}/app/user/view?sessionToken=${getSessionToken()}&userEntityId=${userEntityId}`, null)
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

class PaginationComponent extends BandungComponent {
  constructor(props) {
    super(props);
    this.state = {
      userEntityList: [],
      currentPage: 1,
      itemsPerPage: 6,
      totalCustomers: 0,
      newCustomers: 0,
      userEntityList: [],
    };
  }

  handleNextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
  };

  renderAdmin() {
    const { userEntityList, currentPage, itemsPerPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEntities = userEntityList.slice(startIndex, endIndex);
    Axios.get(`${getPrefix()}/app/admin/statistics?sessionToken=${getSessionToken()}`, null)
      .then((response) => {
        this.setState({ totalCustomers: response.data.UserEntity, newCustomers: response.data.UserEntity });
      })

    Axios.get(`${getPrefix()}/app/user/list?sessionToken=${getSessionToken()}&page=${this.page}`, null)
      .then((response) => {
        this.setState({ userEntityList: response.data });
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

        <div className="outter-box">
          <div className="quick-view-grid w-full flex justify-between items-center mt-3">
            <div>Name</div>
            <div>Email</div>
            <div>PhoneNumber</div>
          </div>
        </div>

        <div>
          <ul className='list-wrapper'>
            {currentEntities.map(userEntity => (
              <div className="curved-box" key={userEntity.id}>
                <li className="quick-view-grid w-full flex justify-between items-center">
                  <div>{userEntity.firstName} {userEntity.lastName}</div>
                  <EmailComponent userEmailEntityId={userEntity.userEmailEntityId} />
                  <PhoneComponent userEntityId={userEntity.userEntityId} />
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="pagination-buttons">
          <button
            className="pagination-button"
            onClick={this.handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="current-page">{currentPage}</span>
          <button
            className="pagination-button"
            onClick={this.handleNextPage}
            disabled={endIndex >= userEntityList.length}
          >
            Next
          </button>
        </div>

      </div>
    );
  }

  render() {
    if (adminPermission()) return this.renderAdmin();
    return (
      <div className="center-content">
        <h2>Admin Access Needed</h2>
      </div>
    );
  }
}



export default function Stats() {
  return (
    <Layout>
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <PaginationComponent />
        </div>
      </div>
    </Layout>
  );
}