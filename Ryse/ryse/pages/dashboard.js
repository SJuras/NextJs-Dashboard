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

  const [display, changeDisplay] = useState('hide');

  const [value, changeValue] = useState(1);

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

        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="images/amazon.jpeg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                        <Text fontSize="sm" color="gray">Apr 24, 2022 at 1:32pm</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+2$</Td>
                  <Td isNumeric><Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="images/starbucks.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">Starbucks</Heading>
                        <Text fontSize="sm" color="gray">Apr 24, 2022 at 12:23am</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Beverage</Td>
                  <Td isNumeric>0$</Td>
                  <Td isNumeric><Text fontWeight="bold" display="inline-table">-$12</Text>.00</Td>
                </Tr>

                {
                  display == 'show' &&
                  <>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="images/youtube.png" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">Youtube</Heading>
                          <Text fontSize="sm" color="gray">Apr 24, 2022 at 0:00am</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Ad Revenue</Td>
                    <Td isNumeric>0$</Td>
                    <Td isNumeric><Text fontWeight="bold" display="inline-table">+$500</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="images/amazon.jpeg" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                          <Text fontSize="sm" color="gray">Apr 23, 2022 at 2:20pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Toolkit</Td>
                    <Td isNumeric>+1$</Td>
                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$89</Text>.99</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="images/amazon.jpeg" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                          <Text fontSize="sm" color="gray">Apr 23, 2022 at 2:02pm</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+1$</Td>
                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$120</Text>.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="images/starbucks.png" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">Starbucks</Heading>
                          <Text fontSize="sm" color="gray">Apr 23, 2022 at 8:12am</Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Beverage</Td>
                    <Td isNumeric>+2$</Td>
                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$12</Text>.00</Td>
                  </Tr>
                  </>
                }
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />
            <IconButton icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />} onClick={() => {
              if(display == 'show'){
                changeDisplay('none')
              } else {
                changeDisplay('show');
              }
            }} />
            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex w="35%" bgColor="#f5f5f5" p="3%" flexDir="column" overflow="auto">
        <Flex alignContent="center">
          <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
            <InputLeftElement pointerEvents="none" children={<FiSearch  color="gray"/>} />
            <Input type="number" placeholder="Search" borderRadius="10px" />
          </InputGroup>
          <IconButton icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px"/>
          <Flex w={30} h={25} bgColor="#b57295" borderRadius="50%" color="#fff" align="center" justify="center" ml="-3" mt="-2" zIndex="100" fontSize="xs">
            2
          </Flex>
        </Flex>
        <Heading letterSpacing="tight">My Cards</Heading>
        {value == 1 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #B57295, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$5,750.10</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text fontWeight="bold">Ryse.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 1289</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 2 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, yellow.300, blue.500)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$350.00</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>Rise.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 8956</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">9/24</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 3 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, orange.300, pink.600)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$2,150.72</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>Rise.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 8353</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">11/22</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                }
      </Flex>
    </Flex>
  );
}
