// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable', // 1 year
//           },
//         ],
//       },
//     ];
//   }
// }