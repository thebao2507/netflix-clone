import axios from 'axios';
import React, { useEffect, useState, memo, useRef } from 'react';
import requests from '../Requests';
import { key } from '../Requests';
import Modal, { ModalContent } from './modal/Modal';
import tmdbApi, { category, movieType } from '../api/tmdbApi';


const Main = () => {
    const API_URL = "https://api.themoviedb.org/3/";
    const API_KEY = key;

    const [movies, setMovies] = useState([]);
    //const [videos, setVideos] = useState({ title: 'darling' });

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, []);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    
    /*
        const fetchMovie = async (id) => {
        const { data }  = await axios.get(`${API_URL}movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })
        //console.log(data)
        //console.log(data.videos.results);
        //console.log(typeof data);
        console.log(data);
    }

    //fetchMovie(movie?.id);

    */

    return (
        <>
            <div className='w-full h-[550px] text-white'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                    <img
                        className='w-full h-full object-cover'
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                    />
                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                        <div className='my-4'>
                            <button 
                                className='border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:opacity-80'
                                onClick={() => alert('có cái đầu bùi mà xem phim')}
                            >
                                    Xem ngay
                            </button>
                            <HeroTrailer item={movie}/>
                        </div>
                        <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>
                    </div>
                </div>
            </div>
            <TrailerModal item={movie}/>
        </>
    )
};

const HeroTrailer = props => {
    const item = props.item;

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);
        //console.log(videos);

        if (videos.results.length > 0) {
            const officialTrailer = videos.results.find(vid => vid.name === 'Official Trailer');
            //console.log(officialTrailer);
            const videSrc = 'https://www.youtube.com/embed/' + officialTrailer.key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    return (
        <button
            className='border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-red-600'
            onClick={setModalActive}
        >
            Xem Trailer
        </button>
    )
}


const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width='100%' height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}


export default memo(Main);