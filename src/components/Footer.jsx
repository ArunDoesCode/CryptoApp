import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
		<Box
			bgColor={"blackAlpha.900"}
			color={"whiteAlpha.700"}
			minH={"48"}
			px={"15"}
			py={["16", "8"]}
		>
			<Stack
				direction={["column", "row"]}
				h={"full"}
				alignItems={"center"}
				p={"4"}
			>
				<VStack w={"full"} alignItems={["center", "flex-start"]}>
					<Text fontWeight={"bold"}>About Us</Text>
					<Text
						fontSize={"sm"}
						letterSpacing={"widest"}
						textAlign={["center", "left"]}
					>
						Best Crypto Trading app in the world
					</Text>
				</VStack>

				<VStack p={"4"}>
					<Avatar boxSize={"28"} mt={["4", "0"]} />
					<Text>Our founder</Text>
				</VStack>
			</Stack>
		</Box>
	);
}

export default Footer