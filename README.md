# Book Catalog Backend

This is the backend API for the Book Catalog application. It provides endpoints to manage users, categories, books, and orders.

## Live Link

[Live Link to the API](https://catelog-book.vercel.app/api/v1/)

## Application Routes

### User

- `POST https://catelog-book.vercel.app/api/v1/auth/signup`: Create a new user.
- `GET https://catelog-book.vercel.app/api/v1/users`: Get a list of all users.
- `GET https://catelog-book.vercel.app/api/v1/users/:id`: Get a single user by ID. Replace `:id` with a valid user ID from the database.
- `PATCH https://catelog-book.vercel.app/api/v1/users/:id`: Update a user's information by ID. Replace `:id` with a valid user ID from the database.
- `DELETE https://catelog-book.vercel.app/api/v1/users/:id`: Delete a user by ID. Replace `:id` with a valid user ID from the database.
- `GET https://catelog-book.vercel.app/api/v1/profile`: Get the profile information of the currently authenticated user.

### Category

- `POST https://catelog-book.vercel.app/api/v1/categories/create-category`: Create a new category.
- `GET https://catelog-book.vercel.app/api/v1/categories`: Get a list of all categories.
- `GET https://catelog-book.vercel.app/api/v1/categories/:id`: Get a single category by ID. Replace `:id` with a valid category ID from the database.
- `PATCH https://catelog-book.vercel.app/api/v1/categories/:id`: Update a category by ID. Replace `:id` with a valid category ID from the database.
- `DELETE https://catelog-book.vercel.app/api/v1/categories/:id`: Delete a category by ID. Replace `:id` with a valid category ID from the database.

### Books

- `POST https://catelog-book.vercel.app/api/v1/books/create-book`: Create a new book.
- `GET https://catelog-book.vercel.app/api/v1/books`: Get a list of all books.
- `GET https://catelog-book.vercel.app/api/v1/books/:categoryId/category`: Get all books within a specific category. Replace `:categoryId` with a valid category ID from the database.
- `GET https://catelog-book.vercel.app/api/v1/books/:id`: Get a single book by ID. Replace `:id` with a valid book ID from the database.
- `PATCH https://catelog-book.vercel.app/api/v1/books/:id`: Update a book by ID. Replace `:id` with a valid book ID from the database.
- `DELETE https://catelog-book.vercel.app/api/v1/books/:id`: Delete a book by ID. Replace `:id` with a valid book ID from the database.

### Orders

- `POST https://catelog-book.vercel.app/api/v1/orders/create-order`: Create a new order.
- `GET https://catelog-book.vercel.app/api/v1/orders`: Get a list of all orders.
- `GET https://catelog-book.vercel.app/api/v1/orders/:orderId`: Get a single order by order ID. Replace `:orderId` with a valid order ID from the database.

Feel free to use these routes to interact with the Book Catalog Backend API. Make requests to the appropriate endpoints to manage users, categories, books, and orders.

