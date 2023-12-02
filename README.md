# FitVibe 
## Description deliverable
### Elevator pitch
For those of you in the fitness world, have you ever wanted to have a place where you could compete with others and become motivated to workout more?  FitVibe allows users to compete with others on the website through calories burned during your workout session.  With just a few clicks, you are able to see what type of workouts other users are doing, their calories burned, and the leaderboard for the day.  You also are able to track your own progress with the personal past entries  log. Come to compete, track and get motivated for your workouts at FitVibe. 

FitVibeU1.jpg

### Design
![Mock of User Interface for FitVibe](https://attachments.office.net/owa/aubry.hiatt%40byu.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADM4OTBhY2U3LWNlZmYtNGY0Yy04MWVkLTFkNjc1ODFmZmY4MABGAAAAAACgd%2F%2FmFaHZTYcRD5qnVJzDBwAtSSzzueAlT7520vQCYMUKAAAAAAEMAAAtSSzzueAlT7520vQCYMUKAAF%2BoMsJAAABEgAQAJDTIPYPACpMpipOcgtlHTQ%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiNmJiNGVlNmMyNWYzNGQ5ZTg1ZDU0ZWRiZTg1MjRmNTMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjNmZjNmU5Yi01MWZiLTQ4YTgtYjc3OS05ZWU1NjRiNDA0MTMiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjE5MTE2OTY4NzVcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwNDZkNmNiOS1mMTFjLTQ4OTItOGQ1Mi03ZjIzYmIxMjllYmJcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTI4NzcwNzc5NDctNDExNTg5NDM4LTQwNzk5MDU4NDctMzUwODgyNTdcIn0iLCJuYmYiOjE2OTU1MzM3MzEsImV4cCI6MTY5NTUzNDMzMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGM2ZmM2ZTliLTUxZmItNDhhOC1iNzc5LTllZTU2NGI0MDQxMyIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGM2ZmM2ZTliLTUxZmItNDhhOC1iNzc5LTllZTU2NGI0MDQxMyIsImhhcHAiOiJvd2EifQ.N4RRvxFTZNAcJL6yAwECAw0Smwm76wYKnqAXVempgdxiSGsgd6Kswc7H2wDK2d0wMk8spuFD1imPgYB1PxC-m0trsLn5PJViPqdYKgwcSmO2XoeqJf1YAQolMoJfuZu3RuDNTkZGibDzV4SuHZX0NpUoPXpDKECrnHzBNztYNeMce-37m7d0cEfFg_BFBoFBlrHhp4jRUUz5ht5DaVlcUlLfl_-j9JWI4oqO1w0SHaYl3x-WF3TnIlKzCj4R7k_ImfPQ-OB9U4nRsG6koSlQZIvoLHhVBA9g0lJMs3BQV-wlNiK7jZnOzIyPx-wKBgotjndnRZ3hfc3nnRx9w_XyBw&X-OWA-CANARY=NQG8Qpg42EiwQXRnAxlWR2A48h7AvNsYI2QKTy0D-LdYjBXLutUxwt7p1X5md6kppR3Lpeiulg4.&owa=outlook.office.com&scriptVer=20230915006.14&animation=true)

Here is a sequence diagram that shows how two people would interact with the backend to view the FitVibe leadership board. 

![Mock Entry Sequence Diagram](https://attachments.office.net/owa/aubry.hiatt%40byu.edu/service.svc/s/GetAttachmentThumbnail?id=AAMkADM4OTBhY2U3LWNlZmYtNGY0Yy04MWVkLTFkNjc1ODFmZmY4MABGAAAAAACgd%2F%2FmFaHZTYcRD5qnVJzDBwAtSSzzueAlT7520vQCYMUKAAAAAAEMAAAtSSzzueAlT7520vQCYMUKAAF%2BoMsJAAABEgAQAK%2Fjdg%2FSps1ImhMsY2Z1bXk%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiNmJiNGVlNmMyNWYzNGQ5ZTg1ZDU0ZWRiZTg1MjRmNTMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjNmZjNmU5Yi01MWZiLTQ4YTgtYjc3OS05ZWU1NjRiNDA0MTMiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjE5MTE2OTY4NzVcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwNDZkNmNiOS1mMTFjLTQ4OTItOGQ1Mi03ZjIzYmIxMjllYmJcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTI4NzcwNzc5NDctNDExNTg5NDM4LTQwNzk5MDU4NDctMzUwODgyNTdcIn0iLCJuYmYiOjE2OTU1MzM3MzEsImV4cCI6MTY5NTUzNDMzMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGM2ZmM2ZTliLTUxZmItNDhhOC1iNzc5LTllZTU2NGI0MDQxMyIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGM2ZmM2ZTliLTUxZmItNDhhOC1iNzc5LTllZTU2NGI0MDQxMyIsImhhcHAiOiJvd2EifQ.N4RRvxFTZNAcJL6yAwECAw0Smwm76wYKnqAXVempgdxiSGsgd6Kswc7H2wDK2d0wMk8spuFD1imPgYB1PxC-m0trsLn5PJViPqdYKgwcSmO2XoeqJf1YAQolMoJfuZu3RuDNTkZGibDzV4SuHZX0NpUoPXpDKECrnHzBNztYNeMce-37m7d0cEfFg_BFBoFBlrHhp4jRUUz5ht5DaVlcUlLfl_-j9JWI4oqO1w0SHaYl3x-WF3TnIlKzCj4R7k_ImfPQ-OB9U4nRsG6koSlQZIvoLHhVBA9g0lJMs3BQV-wlNiK7jZnOzIyPx-wKBgotjndnRZ3hfc3nnRx9w_XyBw&X-OWA-CANARY=NQG8Qpg42EiwQXRnAxlWR2A48h7AvNsYI2QKTy0D-LdYjBXLutUxwt7p1X5md6kppR3Lpeiulg4.&owa=outlook.office.com&scriptVer=20230915006.14&animation=true)

### Key features

- Secure login over HTTPS
- Ability to create an entry
  - Select date and time
  - Input calories burned
  - Choose workout type
  - Optional: add a note
- Entries from all users displayed on leaderboard in realtime
- Entries are persistently stored
- Ability to look at personal past entries
- Ability to look at the current dates leadership board

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login page and one for creating an entry. 
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides username, displays past entry tab, adds entires on leadership board, calculates who is on top of leadership board, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving past entries
  - retrieving leadership board
- **DB** - Store users, and entries in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't create an entry unless authenticated.
- **WebSocket** - As each user submits an entry, their entry is broadcasted to all other users.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages that represent the ability to login, create a new entry, view a leaderboard, and view past entries.
- **Links** - The login page automatically links to the new entry page. The new entry page links to the past entry page. And you can access the Leaderboard thorugh the links at the top of the page.
- **Entry** - The create new entry page allows users to send their entry info to the database.  The test later seen in the Leaderboard and Past Entried has imaginary inputs therefore fake entries, to show what it may look like in the future.  
- **Images** - There are included pictures at the bottom of each html page.
- **Login** - Input box and submit button for login.
- **Database** - The database holds username and passwords. It also holds each users entries.
- **WebSocket** - The submission of an entry results in real time addition to the leaderboard and the users personal past entry page

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** 
- **Navagational elements** - I changed the color of the text, and got rid of the underlines aswell.
- **Responsive to window resizing** - My app looks great on all window sizes and devices.
- **Application Images** - There is one included picture at the bottom of the past entries page.
- **Aplacation elements** - I used contrasting colors and stayed on a fun theme.
- **Application text content** - Consistent fonts.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **Login** - when you enter a username and password it takes you to the form/ new entry page.
- **Database** - Displays the leaderboard of entries based on the amount of calories burned from the local storage and the past entries from the local stoare based on date entered.
- **WebSocket** - This will be implemented through the Leaderboard page when other users submit entries to it
- **Application Logic** - The calories and dates entered determine where on the tables the entries end up.
- **Application Picture** - One picture on the Past Entries page.

## Service deliverable

For this deliverable I added backend endpoints that receives an entry and returns the entrie leaderboard and past entry table.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - done, I did this with quotes.
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for entries.
- **Frontend calls service endpoints** - I did this using the fetch function to get the entries.

## DB deliverable

For this deliverable I stored the leaderboard and user entries in the database.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I made the login authenticated to the db.

- **User Registration** - creates a new account in the database.
- **Exsisting User** - You can create a new entry and check old entries
- **Uses MongoDB to store credentials** - Store both user and entries
- **Restricts Functionality**- You can only track your workout if you log in.

## Websocket deliverable

For this deliverable I used WebSocket to communicate between users of who else is on the app.
- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All users logging in and user calories are displayed in realtime.
