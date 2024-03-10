/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverActions: true,
    },

    images: {
        domains: ['lh3.googleusercontent.com',
                    'res.cloudinary.com'],
    },

  //   externals:{
  //       '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp'
  // },

  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // クライアントサイドのバンドルからnode-pre-gypを除外
  //     config.externals.push('@mapbox/node-pre-gyp');
  //   }

  //   return config;
  // },
    
    

};
// export default nextConfig;
// module default nextConfig;
module.exports = nextConfig
