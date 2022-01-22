import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell
} from 'react-icons/fi';

import MyChart from '../components/MyChart';

export default function dashboard() {
  return(
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex w="15%" flexDir="column" alignItems="center" backgroundColor="#020202" color="#fff">
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading mt={50} mb={100} fontSize="4xl" alignSelf="center" letterSpacing="tight">Ryse.</Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                  </Link>
                  <Link _hover={{ TextDecor: 'none' }}>
                    <Text className="active">Home</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiPieChart} fontSize="2xl"/>
                  </Link>
                  <Link _hover={{ TextDecor: 'none' }}>
                    <Text>Credit</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiDollarSign} fontSize="2xl"/>
                  </Link>
                  <Link _hover={{ TextDecor: 'none' }}>
                    <Text>Wallet</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon as={FiBox} fontSize="2xl"/>
                  </Link>
                  <Link _hover={{ TextDecor: 'none' }}>
                    <Text>Services</Text>
                  </Link>
                </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            {/* bottom with profile image */}
            <Avatar my={2} src="images/profilePicMe.png"  />
            <Text textAlign="center">Stjepko Juras</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">Welcome back, <Flex fontWeight="bold" display="inline-flex">Stjepko</Flex></Heading>
        <Text color="gray" fontSize="small">My balance: </Text>
        <Text fontWeight="bold" fontSize="2xl">$5,750.10 </Text>
        <MyChart />
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" isze="lg" letterSpacing="tight">Transactions</Heading>
            <Text fontSize="small" color="gray" ml={4}>Apr 2022</Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>

        
      </Flex>

      {/* Column 3 */}
      <Flex w="35%" bgColor="#f5f5f5" p="3%" flexDir="column" overflow="auto">

      </Flex>
    </Flex>
  );
}
