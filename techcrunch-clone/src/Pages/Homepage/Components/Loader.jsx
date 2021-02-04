import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:200px;

    .loader {
        position: relative;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-gap: 5px;
        width: 75px;
        height: 75px;
        
        > div {
            position: relative;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right,#01a663,#03d206);
            transform: scale(0.0);
            transform-origin: center center;
            animation: loader 2s infinite linear;
            
            &:nth-of-type(7) {}
            
            &:nth-of-type(1),
            &:nth-of-type(5), 
            &:nth-of-type(9) {
                animation-delay: 0.4s;
            }
            
            &:nth-of-type(4),
            &:nth-of-type(8) {
                animation-delay: 0.2s;
            }
            
            &:nth-of-type(2),
            &:nth-of-type(6) {
                animation-delay: 0.6s;
            }
            
            &:nth-of-type(3) {
                animation-delay: 0.8s;
            }
        }
    }
    
    @keyframes loader {
        0%   { transform: scale(0.0); }
        40%  { transform: scale(1.0); }
        80%  { transform: scale(1.0); }
        100% { transform: scale(0.0); }
    }
`


export function Loader() {
    return (
        <LoadingContainer >
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoadingContainer>
    )
}
