
# My Next.js Product App

A simple Next.js 15 app with authentication (NextAuth.js), product management (mock backend), and protected dashboard. Built for learning and demonstration purposes.

## Features
- Next.js 15 App Router
- NextAuth.js authentication (Google provider)
- Product listing, details, and add product (mock backend)
- Protected dashboard (visible after login)
- Responsive navigation bar

## Setup & Installation

1. **Clone the repository:**
	```sh
	git clone <your-repo-url>
	cd my-next-app
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Configure environment variables:**
	- Create a `.env.local` file in the root directory.
	- Add your Google OAuth credentials:
	  ```env
	  GOOGLE_CLIENT_ID=your-google-client-id
	  GOOGLE_CLIENT_SECRET=your-google-client-secret
	  NEXTAUTH_URL=http://localhost:3000
	  ```
4. **Run the development server:**
	```sh
	npm run dev
	```
5. **Open your browser:**
	- Visit [http://localhost:3000](http://localhost:3000)

## Route Summary

| Route                | Description                        | Auth Required |
|----------------------|------------------------------------|--------------|
| `/`                  | Home page, featured products       | No           |
| `/products`          | All products listing               | No           |
| `/products/[id]`     | Product details                    | No           |
| `/products/add-product` | Add a new product                | Yes (optional) |
| `/dashboard`         | User dashboard                     | Yes          |
| `/login`             | Login page (NextAuth)              | No           |
| `/api/auth/[...nextauth]` | NextAuth API route              | -            |

---

Feel free to customize and extend this project for your needs!
