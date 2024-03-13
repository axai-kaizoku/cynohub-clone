import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Header() {
	return (
		<header>
			<nav className="h-16 w-full flex justify-between shadow-lg items-center px-8 lg:px-20 xl:px-32 ">
				<img
					src="/cynohub-students/logo.png"
					alt="logo"
					className="object-contain w-[118px] h-[36px] "
				/>
				<ul className="max-sm:hidden max-md:hidden flex text-[18px] gap-8 lg:gap-14 font-bold">
					<li className="hover:underline transition duration-1000 ease-in-out cursor-pointer">
						Home
					</li>
					<li className="hover:underline transition duration-1000 ease-in-out cursor-pointer">
						Academics
					</li>
					<li className="hover:underline transition duration-1000 ease-in-out cursor-pointer">
						Placements
					</li>
					<li className="hover:underline transition duration-1000 ease-in-out cursor-pointer ">
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
								<Menu.Items className="absolute bg-white rounded-lg px-6  py-3 mt-2 w-60  origin-top-right divide-y ">
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
					<li className="hover:underline transition duration-1000 ease-in-out cursor-pointer">
						Contact
					</li>
				</ul>
				<div className="md:hidden">
					<Menu
						as="div"
						className="relative bg-white w-full ">
						<div>
							<Menu.Button className="flex items-center">
								<img
									src="/bars.svg"
									alt="navbar"
									width={30}
									height={30}
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
							<Menu.Items className="absolute right-0 mt-2 mx-auto origin-top divide-y text-center bg-white ">
								<div className="p-1">
									<Menu.Item>
										<button>Home</button>
									</Menu.Item>
								</div>
								<div className="p-1">
									<Menu.Item>
										<button>Academics</button>
									</Menu.Item>
								</div>
								<div className="p-1">
									<Menu.Item>
										<button>Placements</button>
									</Menu.Item>
								</div>
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
										<Menu.Items className="p-4 bg-white rounded-lg  w-fit  origin-top divide-y ">
											<div>
												<Menu.Item>
													<button>Robotics</button>
												</Menu.Item>
											</div>
											<div>
												<Menu.Item>
													<button>IELTS</button>
												</Menu.Item>
											</div>
											<div>
												<Menu.Item>
													<button className="block truncate">
														Full Stack Development
													</button>
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
								<div className="p-1">
									<Menu.Item>
										<button>Contact</button>
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</nav>
		</header>
	);
}
