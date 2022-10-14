import React, { useEffect, useState, memo, useRef } from 'react';
import { key } from '../../Requests';
import axios from 'axios';

const VideoLists = props => {
    const id = props.id;
    //console.log(id);

    const API_KEY = key;
    const API_URL = "https://api.themoviedb.org/3";

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async (id) => {
            const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    append_to_response: 'videos',
                }
            })

            setVideos(data.videos.results.slice(0, 6))
        }

        fetchVideos(id);
    })

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    )
}


const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="text-center mb-12">
            <div className="text-white text-2xl font-bold mb-6">
                <h2>{item.name}</h2>
            </div>
            <div className='flex justify-center items-center'>
                <iframe
                    src={`https://www.youtube.com/embed/${item.key}`}
                    ref={iframeRef}
                    width="75%"
                    title="video"
                ></iframe>
            </div>
        </div>
    )
}


export default memo(VideoLists);