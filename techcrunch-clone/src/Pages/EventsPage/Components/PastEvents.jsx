import React, { useState } from 'react';
import styled from 'styled-components';
import { PastEventsList } from './PastEventsList';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      width : "230px",
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    }
  
  }))(InputBase);

const PastEventsWrapper = styled.div`

`;
const Header = styled.h1`
    font-weight : 900;
    font-size : 35px;
`;
const Body = styled.div`

`;
const SelectGroup = styled.div`
    display : flex;
    & span{
        margin: 10px 20px;

    }
`;
const FilterText = styled.div`
    cursor: pointer;
    border-bottom: 1px solid black;
    & strong{
        color: red;
        padding-right: 5px;
    }
`;
export const PastEvents = ({events}) =>{
    const [eventType, setEventType] = useState("")
    const [yearText, setYearText] = useState("")
    const years = [2021, 2020, 2019,2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008];

    let updatedData = []
    if(Object.keys(events).length > 0){
        let data;
        if(eventType !== "" && yearText !== ""){
            data = events.allEvents.find(item => item.id === Number(eventType))
            data.events.map(item => {
                let d = new Date(item.date)
                if(d.getFullYear() === Number(yearText)){
                    updatedData.push(item)
                }
            })
        }else if(eventType !== "" && yearText === ""){
            data = events.allEvents.find(item => item.id === Number(eventType))
            updatedData = data.events
        }else if(eventType === "" && yearText !== ""){
            events.allEvents.map(item=>{
                item.events.map(item=>{
                    let d = new Date(item.date)
                    if(d.getFullYear() === Number(yearText)){
                        updatedData.push(item)
                    }
                })
            })
        }else{
            let data = events.allEvents.filter((item, index)=> index < 4)
            data.map(item=>{
                item.events.map(item=>{
                    updatedData.push(item)
                })
            })
            
        }

    }
    const handleclearfilters = () =>{
        setYearText("")
        setEventType("")
    }
    return(
        <PastEventsWrapper>
            <Header>
                Where we'll Be Next
            </Header>
            <Body>
                <p>Filter by:</p>
                <SelectGroup>
                    <span>
                        <h5>Event Type</h5>
                        <FormControl >
                            <NativeSelect
                              id="customized-select-native"
                              value={eventType}
                              onChange={e => setEventType(e.target.value)}
                              input={<BootstrapInput />}
                            >
                                <option aria-label="None" value=""/>
                            {
                                events && events.allEvents && events.allEvents.map(item =>(

                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                    
                            }
                            </NativeSelect>
                        </FormControl>
                   
                    </span>
                    <span>
                        <h5>Years</h5>
                        <FormControl >
                            <NativeSelect
                              id="customized-select-native"
                              value={yearText}
                              onChange={e => setYearText(e.target.value)}
                              input={<BootstrapInput />}
                            >
                                <option aria-label="None" value=""/>
                            {

                                years.map(item => (
                                  <option value={item} key={item}>{item}</option>
                                ))
                            }
                            </NativeSelect>
                        </FormControl>
                    </span>
                    <span>
                    {
                        yearText !== "" || eventType !== "" ? <FilterText onClick={handleclearfilters}><strong>X</strong>clear filters</FilterText> : null
                    }
                    </span>
                </SelectGroup>
                <hr/>
                <PastEventsList data={updatedData}/>
            </Body>
        </PastEventsWrapper>
    )
}