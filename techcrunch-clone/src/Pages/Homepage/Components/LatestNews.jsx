import React from 'react';
import {
    Grid
} from "@material-ui/core";
import { LargeNewsBlock } from './LargeNewsBlock';
import { EventAds } from "./EventAds";

export function LatestNews(props) {
    const { 
        newsSix,
        newsSeven,
        newsEight,
        newsNine,
        newsTen,
        newsEleven,
        newsTweleve,
        newsThirteen,
        newsFourteen 
    } = props

    return (
        <Grid item container>
            <Grid item container>
                <LargeNewsBlock news = {newsSix} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsSeven} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsEight} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsNine} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsTen} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsEleven} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsTweleve} />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsThirteen} />
            </Grid>
            <Grid item container>
                <EventAds />
            </Grid>
            <Grid item container>
                <LargeNewsBlock news = {newsFourteen} />
            </Grid>
        </Grid>
    )
}
