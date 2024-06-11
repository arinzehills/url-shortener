# url-shortener

# URL Shortener Service

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npx test
   ```

## API Endpoints

- `POST /api/encode`: Encodes a URL to a shortened URL.
- `POST /api/decode`: Decodes a shortened URL to its original URL.
- `GET /api/statistic/:urlPath`: Returns basic stats of a short URL path.
