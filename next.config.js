/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    //uzaktan bir urli sayfaya eklemek için
    domains:["image.tmdb.org"]
  }
}

module.exports = nextConfig
