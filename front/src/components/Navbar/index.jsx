import { Link, useRoute } from "wouter";
import Styled from "./styles"

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href);

    return (
        <Link {...{ href }}>
            <Styled.Anchor {...{ href, isActive }}>
                {children}

            </Styled.Anchor>
        </Link>
    )
}

const NavBar = () => {
    return (

        <Styled.Nav>
            <CustomLink href="/home">Home</CustomLink>
            <CustomLink href="/products">Products</CustomLink>
            <CustomLink href="/">User</CustomLink>
            <CustomLink href="/register">Register</CustomLink>
            <CustomLink href="/login">Login</CustomLink>
        </Styled.Nav>

    )
}

export default NavBar