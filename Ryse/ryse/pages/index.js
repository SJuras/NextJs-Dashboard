import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {
  Flex, Button, Text, Heading
} from '@chakra-ui/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryse | Payment App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex h="100%" w="100%" justifyContent="center" alignItems="center" flexDir="column" backgroundColor="#020202" color="#fff">
        <Text>Welcome to</Text>
        <Heading fontSize="6xl" mb={6}>Ryse.</Heading>
        <Heading fontSize="2xl" mb={8} textAlign="center">Your Number One Payment Service</Heading>


        <Link href="/dashboard">
          <Button color="#020202">To Dashboard</Button>
        </Link>
      </Flex>

    </div>
  )
}
