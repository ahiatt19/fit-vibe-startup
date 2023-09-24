# FitVibe 
## Description deliverable
### Elvator pitch
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
