import React from "react";
import Head from "next/head";
import { Sidebar, BottomSidebar } from "@components/navbars";
import {
	INestSidebarItem,
	ISidebarItem,
	NestSidebarItem,
	SidebarItem,
} from "@components/navbars/Sidebar";
import { sidebarConfig, nestSidebarConfig } from "@config/sidebar";

//mock data
import userData from "@mocks/userData";

export type LayoutProps = {
	title?: string;
	description?: string;
	children: JSX.Element | JSX.Element[] | string;
	sidebar?: boolean;
};

let placeholderDesc =
	"Getbak is Myanmar's first redemption software to solve difficulties & problems of Lucky Draw program.";
let placeholderTitle = "Getbak Merchent";

const Layout: React.FC<LayoutProps> = ({
	title,
	description,
	children,
	sidebar,
}) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title || placeholderTitle}</title>
				<meta name="description" content={description || placeholderDesc} />
				<link rel="icon" href="/getbak.svg" />
			</Head>

			<div className="grid grid-cols-11 w-full h-screen">
				{sidebar !== false ? (
					<>
						<div className="relative col-span-2 h-full border-r bg-secondary_bg">
							<Sidebar>
								<>
									{sidebarConfig?.map((item: ISidebarItem, key: React.Key) => {
										return (
											<SidebarItem
												key={key}
												label={item.label}
												Icon={item.Icon}
												link={item.link}
											/>
										);
									})}
									{nestSidebarConfig?.map(
										(item: INestSidebarItem, key: React.Key) => {
											return (
												<NestSidebarItem
													key={key}
													label={item.label}
													items={item.items}
												/>
											);
										}
									)}
								</>
							</Sidebar>
							<BottomSidebar
								name={userData.name}
								image={userData.image}
								email={userData.email}
								classname="absolute bottom-0"
							/>
						</div>
						<div className="col-span-9 h-full overflow-hidden">{children}</div>
					</>
				) : (
					<div className="col-span-11">{children}</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Layout;
