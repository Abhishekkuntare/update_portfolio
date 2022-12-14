import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
          <Text
            className="fonts"
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Major Mono Display"
            // fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Abhishek Kuntare
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
