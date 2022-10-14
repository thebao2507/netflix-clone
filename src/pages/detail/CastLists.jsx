import React, {useEffect, useState, memo} from 'react';
import { key } from '../../Requests';
import axios from 'axios';
import './detail.scss';

const CastLists = props => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = key;

    const [casts, setCasts] = useState([]);

    const id = props.id;
    //console.log(id);

    useEffect(() => {
        const fetchCreadits = async (id) => {
            const {data} = await axios.get(`${API_URL}/movie/${id}/credits`, {
                params: {
                    api_key: API_KEY,
                }
            })
            setCasts(data.cast.slice(0, 5));
            //console.log(data)
        }
        fetchCreadits(id);
        //console.log(credits);
    })

    return (
        <div className='casts'>
            {
                casts.map((item, i) => (
                    <div key={i}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`} 
                            alt="credit"
                            className='hover:opacity-50'
                        />
                        <p className='text-white text-center'>{item?.original_name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default memo(CastLists);