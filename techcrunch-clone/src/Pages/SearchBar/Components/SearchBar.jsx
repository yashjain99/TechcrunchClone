import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery } from '../Redux/action';

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

const SuggestionBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    max-height: 150;
    min-width: 550;
    overflow: auto;
    border: 1px solid black;
    border-top-color: transparent;
    position: absolute;
    z-index: 20;
    background: white;

    & * {
        flex: 1;
        padding: 5px;
        text-align: left;
        padding-left: 30px;
    }

    & :hover {
        background: gray;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`

const DeleteTitleButton = styled.div`
    cursor: pointer;
`

export function SearchBar({ placeholder }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const searchKeywords = useSelector(state => state.search.searchKeywords);

    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleSearchResult = (text) => {
        history.push(`/search/${text}`)
    }

    useEffect(() => {
        dispatch(getSearchQuery(title))

        if(title === "") {
            setSuggestions([])
        }
        else if(searchKeywords) {
            let output = searchKeywords.filter((item) => 
                    item.query.indexOf(title) !== -1 ? true : false
                ).map((item) => item.query);
            
            setSuggestions(output);
            console.log(suggestions)
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000)

    },[title])
    
    return (
        <>
            <SearchBarWrapper>
                <IconImage 
                    src = "https://image.flaticon.com/icons/png/512/49/49116.png"
                    alt = "search icon"
                />
                <Input
                    value = {title}
                    placeholder = "Search something"
                    onChange = { handleInputChange }
                />
                <RightSide>
                    {
                    title && (
                            <DeleteTitleButton onClick = { handleClear } > 
                                X 
                            </DeleteTitleButton>
                        )
                    }
                    {
                        loading && <Spinner />
                    }
                </RightSide>
            </SearchBarWrapper>
            {
                !loading && (
                    <SuggestionBox>
                        {
                            suggestions.map((item) => {
                                console.log(item)
                                return (
                                    <div key = { item } onClick = {() => handleSearchResult(item) } >
                                        { item }
                                    </div>
                                )
                            })
                        }
                    </SuggestionBox>
                )
            }
        </>
    )
}