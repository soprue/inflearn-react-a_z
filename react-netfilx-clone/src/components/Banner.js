import React, { useEffect, useState } from 'react';
import axios from "../api/axios";
import requests from "../api/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영 중인 영화 정보(여러 개) 가져오기 
    const request = await axios.get(requests.fetchNowPlaying);

    const movieId = 
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        // 랜덤 숫자 가져오기: Math.floor(Math.random() * max);
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  }
  
  return (
    <div>
      
    </div>
  )
}

export default Banner