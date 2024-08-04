/** @type {import('next').NextConfig} */
const nextConfig = {
  staleTimes: {
    dynamic: 30,
    static: 180,
  },
}

export default nextConfig
