import React from 'react';
import styled from 'styled-components'

const ContentWrapper = styled.div`
    & p{
        margin : 15px 0;
        text-align: left;
        font-size: 18px;
        font-weight: 400;
        color: #333;
    }

`;
export const Content = ({content})=>{

    return(
        <ContentWrapper>
        {
            content && content.trim().split("\r\n").map((item, index)=>(
                <p key={index}>
                    &nbsp;&nbsp;{item}
                </p>
            ))
        }

        </ContentWrapper>
    )
}