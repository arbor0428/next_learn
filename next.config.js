/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/about",
                destination: "/about",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [{
            source: "/api/movies",
            destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        },
        ];
    },
}

module.exports = nextConfig
