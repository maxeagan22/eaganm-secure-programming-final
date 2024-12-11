# eaganm-secure-programming-final

### Running the Project Without Environment Variables

If you don't create a `.env` file, the application will use default values for local development:
- **MongoDB connection string**: `mongodb://localhost:27017/localdb`
- **Access token secret**: `local-secret`
- **Port**: `8000`

To override these defaults, create a `.env` file in the `server/` directory with the following variables:
```plaintext
CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
ACCESS_TOKEN_SECRET=<your-secret-key>
PORT=8000
