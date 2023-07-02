import DarkModeToggleButton from "./dark-mode-toggle-button"
import Image from 'next/image'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}} href={'#'}> {children} </Link>
);

// const Links = ['Disscussion', 'Summary', 'Quiz', 'Q&A'];
const Links = ['토론', '요약', '퀴즈', '질의응답'];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <header className="">
        <Box px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Link href="/">
                        <Image src="/logo.png" width={180} height={180} alt={""}/>
                        {/* <span className="ml-3 text-xl">EduFusion</span> */}
                    </Link>
                </Box>
                <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    <DarkModeToggleButton />
                </HStack>
                <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
            </Flex>

            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    <DarkModeToggleButton />
                </Stack>
            </Box>
            ) : null}
        </Box>
        </header>
    </>)
}