# FitVibe 
## Description deliverable
### Elvator pitch
For those of you in the fitness world, have you ever wanted to have a place where you could compete with others and become motivated to workout more?  FitVibe allows users to compete with others on the website thorugh calories burned during your workout session.  With just a few clicks, you are able to see what type of workouts other users are doing, calories burned, and the leaderboard for the day.  Come to compete, track and get motivated for your workouts at FitVibe. 

### Design
![Mock]()

Here is a sequence diagram that shows how two people would interact with the backend to view the FitVibe leadership board. 

![Creating Entry Sequence Diagram] ()

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
- **WebSocket** - As each user creates an entry, their entry is broadcasted to all other users.
- **React** - Application ported to use the React web framework.

