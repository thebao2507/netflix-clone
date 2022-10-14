import React, { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../images/Image';
import axios from 'axios';
import { key } from '../../Requests';
import Footer from '../../components/Footer';
import CastLists from './CastLists';
import VideoLists from './VideoLists';

const Detail = () => {
    const { id } = useParams();

    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = key;

    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchMovie = async (id) => {
            const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    //append_to_response: "videos"
                }
            })
            //console.log(data);
            setItem(data);
            //return data;
        }
        fetchMovie(id);
    })

    return (
        <>
            <div className='bg-black/60 absolute top-0 left-0 w-full h-[600px] bg-gradient-to-t from-black'></div>
            <img
                className='w-full h-[600px] object-cover'
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt='darling'
            />
            <div className='w-full flex justify-center items-end -translate-y-1/2'>
                <div className='w-full h-[500px] flex justify-center items-center'>
                    <div className='rounded-xl pr-5 h-[520px]'>
                        <img
                            className='w-[350px] h-[520px] object-cover rounded-3xl'
                            src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                            alt='darling'
                        />
                    </div>
                    <div className='h-[520px] w-2/4'>
                        <h1 className='text-white font-bold text-5xl mb-2'>{item?.title || item?.name}</h1>
                        <div className='h-[80px] flex items-center'>
                            {
                                item?.genres.slice(0, 5).map((genre, i) => (
                                    <span
                                        key={i}
                                        className='text-white text-base font-semibold mr-4 py-2 px-6 
                                            rounded-3xl border-2 border-white hover:opacity-80 hover:cursor-pointer'
                                    >
                                        {genre.name}
                                    </span>
                                ))
                            }
                        </div>
                        <p className='text-white'>{item?.overview}</p>
                        <div className='mt-4'>
                            <div>
                                <h2 className='text-white text-2xl font-bold'>Casts</h2>
                            </div>
                            <CastLists id={id}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <VideoLists id={id}/>
            </div>
        </>
    )
}

export default memo(Detail);