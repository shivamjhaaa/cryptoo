import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {server} from '../index'
import Error from './Error';
import Loader from './Loader';

const Exchanges = () => {

    const [exchanges,setexchanges] = useState([]);
    const [loading , setloading] = useState(true);
    const [error , seterror] = useState(false);

    useEffect(() => {
        
        const fetchexchanges = async () =>{

            try {
                
                const {data} = await axios.get(`${server}/exchanges`);
                setexchanges(data);
                setloading(false);
                // console.log(data);
            } catch (error) {
                seterror(true);
                setloading(false);
            }

            

        }

        
        fetchexchanges();

    }, []);

    if(error) return <Error message= 'Error While Fetching Exchanges' />
    else 
    return (
        <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {exchanges.map((i) => (
                <ExchangeCard
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                />
              ))}
            </HStack>
          </>
        )}
      </Container>

    );
};

const ExchangeCard = ({ name, img, rank, url }) => (
    <a href={url} target={"_blank"} rel='noreferrer'>
      <VStack
        w={"52"}
        h ={'52'}
        shadow={"lg"}
        p={"8"}
        justifyContent = 'center'
        border={'1px solid #756300'}
        borderRadius={"full"}
        bgColor = {'#FFDE2E'}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
  
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );

export default Exchanges;

