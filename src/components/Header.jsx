import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
		<HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
			<Button
				variant={"Link"}
				color={"white"}
				_hover={{
					color: "yellow", // Change text color on hover
				}}
			>
				<Link to="/">Home</Link>
			</Button>

			<Button
				variant={"Link"}
				color={"white"}
				_hover={{
					color: "yellow", // Change text color on hover
				}}
			>
				<Link to="/exchanges">Exchanges</Link>
			</Button>

			<Button
				variant={"Link"}
				color={"white"}
				_hover={{
					color: "yellow", // Change text color on hover
				}}
			>
				<Link to="/coins">Coins</Link>
			</Button>
		</HStack>
	);
};

export default Header;

