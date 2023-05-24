export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>https://tremetails.com/</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/about</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/services</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/blog</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/contact</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/dog-walking</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/pet-sitting</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
       <url>
        <loc>https://tremetails.com/in-home-boarding</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/house-check-ins</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/services-area</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/posts/new-orleans-dogs</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/posts/new-orleans-dog-friendly-bars</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      <url>
        <loc>https://tremetails.com/posts/barkus-mardi-gras</loc>
        <lastmod>2023-05-24</lastmod>
      </url>
      </urlset>`
  
    res.end(xml)
    }