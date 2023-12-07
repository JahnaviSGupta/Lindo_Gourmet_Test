import { Link } from 'react-router-dom';
import Layout from '../Layout';
import DashDiagramLine from './tabs/DashDiagramLine';
import DashDiagramPie from './tabs/DashDiagramPie';
import DashPartTwo from './tabs/DashPartTwo';
import Payment from './tabs/Payment';

import UnevenSetsInfinite from './tabs/DashboardCarousel';

// TODO: On mobile the account settings will be hidden
// TODO: On desktop the account settings will be under the graph
// TODO: Create a carousel with those images for the Top Selling Products section/ check figma design

export default function Dashbaord() {
	return (
		<>
			<Layout>
				<section className='max-w-6xl mx-auto'>
					<header className='flex justify-between mt-8 mb-3 px-2'>
						<h1 className='text-3xl font-bold'>DashBoard</h1>
						<Link to='/admin' className='hidden sm:block'>
							<button type='button' className='btn bg-qteal w-[130px]'>
								<span className='text-white'>Admin</span>
							</button>
						</Link>
					</header>

					<hr />

					{/* Charts container */}
					<div className='flex justify-center flex-col-reverse gap-4 my-4 sm:flex-row'>
						<div className='p-4 sm:w-1/2'>
							<DashDiagramLine />
						</div>

						<div className='sm:w-1/2'>
							<DashDiagramPie />
						</div>
					</div>

					{/* Account Settings */}
					<header className='mt-8 mb-3 px-2 hidden lg:block'>
						<h1 className='text-3xl font-bold'>Account Settings</h1>
					</header>
					<hr className='hidden lg:block' />
					<div className='relative h-fit w-full hidden justify-center items-center px-4 lg:flex'>
						<DashPartTwo />
					</div>

					{/* Dashboard Carousel */}
					<header className='mt-8 mb-3 px-2'>
						<h1 className='text-3xl font-bold'>Top Selling Products</h1>
					</header>
					<hr />
					<UnevenSetsInfinite />
				</section>
			</Layout>
		</>
	);
}
