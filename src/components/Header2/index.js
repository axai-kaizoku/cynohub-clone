import { Fragment, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Menu, Transition } from '@headlessui/react';

const HeaderSec = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="py-4 shadow-lg">
			<nav className="flex justify-between items-center w-[92%] mx-auto">
				<img
					src="/cynohub-students/logo.png"
					alt="logo"
					className="object-contain w-[118px] h-[36px] cursor-pointer "
				/>

				<div
					className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
						isMenuOpen ? 'top-[8%]  bg-white' : '-top-full'
					} md:w-auto w-full flex items-center px-5`}>
					<ul className="flex md:flex-row text-lg flex-col md:items-center md:gap-[4vw] gap-8">
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline "
								href="##1">
								Home
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Academics
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Placements
							</a>
						</li>
						<li>
							<Menu
								as="div"
								className="relative inline-block text-left">
								<div>
									<Menu.Button className="flex items-center">
										Upskilling
										<img
											src="/dropdown.svg"
											alt="drop"
											width={20}
											height={20}
											className="object-contain"
										/>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95">
									<Menu.Items className="absolute px-6 py-3 mt-2 origin-top-right bg-white divide-y rounded-lg w-60 ">
										<div className="px-1 py-1 ">
											<Menu.Item>
												<button>Robotics</button>
											</Menu.Item>
										</div>
										<div className="px-1 py-1 ">
											<Menu.Item>
												<button>IELTS</button>
											</Menu.Item>
										</div>

										<div className="px-1 py-1 ">
											<Menu.Item>
												<button className="block truncate">
													Full Stack Development
												</button>
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<FaBars
						name={isMenuOpen ? 'close' : 'menu'}
						onClick={toggleMenu}
						className="text-3xl text-black cursor-pointer md:hidden"
					/>
				</div>
			</nav>
		</header>
	);
};

export default HeaderSec;
