import {  Container, Heading, HStack, Image, Radio, RadioGroup, Text, VStack, Button} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {server} from '../index'
import Error from './Error';
import Loader from './Loader';



const Coins = () => {

    const [coins,setcoins] = useState([]);
    const [loading , setloading] = useState(true);
    const [error , seterror] = useState(false);
    const [page , setpage] = useState(1);
    const [currency , setcurrency] = useState('inr');

    const currencySymbol = 
        currency==='inr'?'₹' : currency === 'eur' ?  '€' : '$' ;
    
    const btns = new Array(132).fill(1);

    const changePage = (page) => {
      setpage(page);
      setloading(true);
    };

      useEffect(() => {
          
          const fetchcoins = async () =>{

              try {
                  
                  const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                  setcoins(data);
                  setloading(false);
                  console.log(data);
              } catch (error) {
                  seterror(true);
                  setloading(false);
              }

              

          }

          
          fetchcoins();

      }, [currency,page]);

      if(error) return <Error />
      else 
    return (
        <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
            <HStack spacing={"4"} width={'fit-content'} p='3' borderRadius={'full'} bgColor = {'gold'} >
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

            <HStack wrap={"wrap"} justifyContent={"space-evenly"} >
              {coins.map((i) => (
                <Card
                bgColor = {'gold'}
                  key={i.id}
                  id = {i.id}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  price={i.current_price}
                  currencySymbol = {currencySymbol}
                />
              ))}
            </HStack>
            <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                border={'1px solid'}
                bgColor={page===index+1?"whiteAlpha.900":"blackAlpha.900"}
                color={page===index+1?"blackAlpha.900":"whiteAlpha.900"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
          </>
        )}
      </Container>

    );
};

const Card = ({ id, name, img, symbol, price , currencySymbol = '₹'}) => (
    <Link to={`/coin/${id}`}  rel='noreferrer'>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"full"}
        transition={"all 0.3s"}
        bgColor = {'#FFDE2E'}
        
        border={'1px solid #756300'}
      
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
        <Heading size={"md"} noOfLines={1} textTransform='uppercase'>
          {symbol}
        </Heading>
  
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
      </VStack>
    </Link>
  );

export default Coins;

