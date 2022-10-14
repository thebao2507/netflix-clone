const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5a2c528f7f370496ab1e44229bb9ded9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;