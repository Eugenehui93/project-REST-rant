# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| Method | Path | Purpose |
| --- | --- | --- |
- [x] | GET | / | Home page |
- [x] | GET | /places | Places index page |
- [ ] | POST | /places | Create new places |
- [ ] | GET |  /places/new | Form page for creating a new place |
- [ ] | GET | /places/:id | Details about a particular place |
- [ ] | PUT | /places/:id | Update a particular place |
- [ ] | GET |  /places/:id/edit | Form page for editing an existing place |
- [ ] | DELETE | /places/:id | Delete a particular place |
- [ ] | POST | /places/:id/rant | Create a rant (comment) about a particular place |
- [ ] | DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
- [x] | GET | * | 404 page (matches any route not defined above)|