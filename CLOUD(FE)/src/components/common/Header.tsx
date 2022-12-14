import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import useSignin from '../../hooks/auth/useSignin';

const HeaderBlock = styled.div`
    padding-left : 2rem;
    position : fixed;
    width: 100%;
    z-index : 100;
    box-shadow : 0px 2px 4px rgba(0, 0, 0, 0.08);
    background : white;
    
    .logo-box{
        display: flex;
        flex-direction: row;
        .title{
            margin-left: 1rem;
            font-size : 0.925rem;
            margin-top : .125rem;
        }
        a{
            font-size : 1.125rem;
            text-decoration : none;
            color: black;
        }
    }
`;

const Wrapper = styled.div`
    height: 4rem;
    display : flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    justify-content : space-between;
    .logo{
        font-size : 1.125rem;
        font-weight : 800;
        letter-spacing : 2px;
    }
    .right{
        display : flex;
        align-items : center;
    }
`
const Spacer = styled.div`
    height : 4rem;
`
function Header() {
    const {handleLogout} = useSignin();
    return (
        <>
        <HeaderBlock>
            <Wrapper>
                <div className="logo-box">
                    <Link className="logo" to="/">Keep Your Endeavor</Link>
                    <div className="title" >관리자페이지</div>
                </div>
                <Button secondary onClick={()=>handleLogout()}>
                        로그아웃
                </Button>
            </Wrapper>
        </HeaderBlock>
        <Spacer/>
        </>
    )
}

export default Header;