
**About Chunks of Canggu**
Chunks of Canggu is a web app that helps users to make their choice of what cafe, restaurant or bar to visit when in Canggu, Bali. Additionally, it gives an overview of events that take place in the spots that are available on the App

**Backend Stack**
MERN stack
REST API backend using Node & Express

CRUD operations managed with Mongoose.

**Models**
User (=> only 2 Admins, User model is not planned to take new entries)
Spot
Event
Consumable


**Routes**
Auth
POST /auth/signup — Handling signup form data
POST /auth/login — Handling login form data
GET /verify — Checking for authentification token

Spots
POST /spots - Handling spot form Data
GET /spots - Lists all spots
GET /spots/:spotId - Lists a specific spot
PUT /spots/:spotId - Edits specific spot
DELETE /spots/:spotId - Deletes specific spot

Events
POST /events - Handling event form Data
GET /events - Lists all events
PUT /events/:eventId - Edits specific event
DELETE /events/:eventId - Deletes specific event

Consumable
GET /consumable/:consumableId" - Lists specific consumable
POST /consumable/:consumableId" - Handling consumable form data
DELETE /consumable/:consumableId" - deletes specific consumable



Nodejs packages
bcryptjs
body-parser
cloudinary
cookie-parser
cors
dotenv
express
express-jwt
jsonwebtoken
mongoose
morgan
multer
multer-storage-cloudinary
