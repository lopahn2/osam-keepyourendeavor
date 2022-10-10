import React from 'react';
import styled from 'styled-components';

import {
    Button,
    Input,
    Pagination,
    Table,
  } from 'semantic-ui-react'
import moment  from 'moment';
import useAuth from '../../hooks/user/useAuth';

const MainBlock = styled.div`
    background-color: rgba(0, 0, 0, 0.03);
    
    header{
        padding: 2rem;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        img{
            width: 40rem;
        }
    }
    .card-group{
        background-color: white;
        display: flex;
        flex-direction: row;
        margin-top: 1.5rem;
        padding: 2rem;
        margin-bottom: 1.5rem;
        .card{
            margin-right: 1.5rem;
            padding: 2.5rem;
            padding-bottom: 2.2rem;
            box-shadow : 0px 0px 8px rgba(0, 0, 0, 0.125);
            font-size: 3rem;
            font-weight: bold;
            min-width: 15rem;
            span{
                font-weight: lighter;
                font-size: 1.5rem;
            }
        }
        
    }
    .list{
        padding: 2rem;
        background-color: white;
    }
    footer{
        background-color: white;
        display: flex;
        justify-content: center;
    }
    
`;
const Main = () => {
    const {handleLogout} = useAuth();


    return (
        <MainBlock>
            <div>
                <header>
                    <div>

                    </div>
                    <img src='/logo.png'/>
                    <Button secondary onClick={()=>handleLogout()}>
                        로그아웃
                    </Button>
                </header>
                <div className='card-group'>
                    <div className='card'>
                        5 <span>Node</span>
                    </div>
                    <div className='card'>
                        2 <span>Blocks</span>
                    </div>
                    <div className='card'>
                        1 <span>Orgs</span>
                    </div>
                    <div className='card'>
                        3 <span>Cluster</span>
                    </div>
                </div>
                <div className='list'>
                    <Input fluid size="big" icon='search' placeholder='Search...' />
                    <Table celled  selectable>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>id</Table.HeaderCell>
                            <Table.HeaderCell>generated_time</Table.HeaderCell>
                            <Table.HeaderCell>event_id</Table.HeaderCell>
                            <Table.HeaderCell>data</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
 
                        </Table.Body>
                    </Table>
                </div>
                <footer>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </footer>
            </div>      
        </MainBlock>
    )
}

export default Main;