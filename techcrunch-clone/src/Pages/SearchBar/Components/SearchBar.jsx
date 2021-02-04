import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    position: relative;
`

const IconImage = styled.img`
  height: 20px;
  padding-right: 20px;
`

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
`

const RightSide = styled.div`
    display: flex;
    flex: 0 0 auto;
    padding-right: 10px
`

const Spinner = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState("")
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");

    const handleInputChange = (e) => {
        setTitle(e.target.value);
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        },1000)
    }

    const handleClear = () => {
        setTitle("")
        setLoading(false)
    }

    useEffect(() => {
        if(title === "") {
            setSuggestions([])
        }
        else {
            
        }
    })
    
    return (
        <SearchBarWrapper>
            <IconImage 
                src = "https://image.flaticon.com/icons/png/512/49/49116.png"
                alt = "search icon"
            />
            <Input
                value = { title }
                onChange = { handleInputChange }
            />
            <RightSide>
                {
                   title && <div onClick = { handleClear } > X </div> 
                }
                {
                    loading && <Spinner />
                }
            </RightSide>
        </SearchBarWrapper>
    )
}
