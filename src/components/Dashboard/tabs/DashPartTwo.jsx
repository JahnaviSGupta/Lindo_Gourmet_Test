<<<<<<< HEAD
import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";

function DashPartTwo() {
  return (
    <Table className="PartTwoTable">
      <Row xs={1} md={2} className="g-4">
        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Profile</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Order History</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Wishlist</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Payment Methods</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4">
        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Login and Security</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Your Address</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Your Messages</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Gift Cards</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Table>
  );
}

export default DashPartTwo;
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function DashPartTwo() {
	return (
		<section className='w-full max-w-6xl grid grid-cols-4 grid-rows-2 gap-4 justify-items-center mt-5 mb-10'>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img src='assets/images/Dashboard/DashBoard-StoreSettings-Profile.png' alt='' />
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Profile
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img src='assets/images/Dashboard/DashBoard-StoreSettings-Time.png' alt='' />
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Order History
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img
						src='assets/images/Dashboard/DashBoard-StoreSettings-WishList.png'
						alt=''
					/>
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Wish List
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img
						src='assets/images/Dashboard/DashBoard-StoreSettings-Payments.png'
						alt=''
					/>
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Payment Methods
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img
						src='assets/images/Dashboard/DashBoard-StoreSettings-SecurityLock.png'
						alt=''
					/>
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Login And Security
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img src='assets/images/Dashboard/DashBoard-StoreSettings-Address.png' alt='' />
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Your Address
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img
						src='assets/images/Dashboard/DashBoard-StoreSettings-Messages.png'
						alt=''
					/>
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Your Messages
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className='DashPartTwoCard'>
				<picture className='w-full flex justify-center'>
					<img
						src='assets/images/Dashboard/DashBoard-StoreSettings-GiftCard.png'
						alt=''
					/>
				</picture>
				<div className='p-1'>
					<Link to='/Profile' className='text-2xl font-bold'>
						Gift Cards
					</Link>
					<p className='text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</section>
	);
}
>>>>>>> 61e41b56d30a51e59a6838fcb7c5d359e7241536
