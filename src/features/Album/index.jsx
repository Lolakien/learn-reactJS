import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './Components/AlbumList';

AlbumFeatures.propTypes = {};



function AlbumFeatures(props) {
    const albumFeatures = [
        {
            id: 1,
            name: 'Muahaha1',
            thumbnaiURL: 'https://imgcdn.stablediffusionweb.com/2024/5/19/3ddca8a8-a012-4352-9475-16d87aaa5d5f.jpg'
        },
        {
            id: 2,
            name: 'Muahaha2',
            thumbnaiURL: 'https://imgcdn.stablediffusionweb.com/2024/5/19/3ddca8a8-a012-4352-9475-16d87aaa5d5f.jpg'
        },
        {
            id: 3,
            name: 'Muahaha3',
            thumbnaiURL: 'https://imgcdn.stablediffusionweb.com/2024/5/19/3ddca8a8-a012-4352-9475-16d87aaa5d5f.jpg'
        },
        {
            id: 4,
            name: 'Muahaha4',
            thumbnaiURL: 'https://imgcdn.stablediffusionweb.com/2024/5/19/3ddca8a8-a012-4352-9475-16d87aaa5d5f.jpg'
        },
    ]
    return (
        <div>
            <h2>Cóa thẻ pẹn xẽ thíck đếy</h2>
            <AlbumList albumList={albumFeatures} />
        </div>
    );
}

export default AlbumFeatures;