import { Meta, StoryFn } from '@storybook/react';

import { IMovieCard } from './types';
import MovieCard from './MovieCard';
import React from 'react';

const meta = {
    title: 'Components/MovieCard',
    component: MovieCard,
    parameters: {
        layout: "fullscreen",
        docs: {
            story: {
                inline: false,
                iframeHeight: 700,
            }
        }
    },
    argTypes: {
        title: {control: 'text'},
        genreId: { control: 'number' },
        movieId: { control: 'number' },
        voteAverage: { control: 'number'},
        posterPath: { control: 'text'},
    },
    tags: ["autodocs"],
} as Meta;

export default meta;

const Template: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />

/*
 * A default moviecard with all props
*/
export const Default = Template.bind({});
Default.args = {
    title: 'John Wick: Chapter 4',
    voteAverage: 8.1,
    movieId: 603692,
    genreId: 28,
    posterPath: 'https://image.tmdb.org/t/p/w500/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg'
}

/*
 * A default 2 moviecard with all props
*/
export const Default2 = Template.bind({});
Default.args = {
    title: 'John Wick: Chapter 4',
    voteAverage: 8.1,
    movieId: 603692,
    genreId: 28,
    posterPath: 'https://image.tmdb.org/t/p/w500/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg'
}
