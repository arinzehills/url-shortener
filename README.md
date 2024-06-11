# URL Shortener Service

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/arinzehills/url-shortener.git
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

### Post man Docs

You can import the Postman collection to easily test the API endpoints. click the link below to do that
[Postman collection docs](https://documenter.getpostman.com/view/16821985/2sA3XMjP7r)
