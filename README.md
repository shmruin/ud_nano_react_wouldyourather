# ud_nano_react_wouldyourather

**1. main page**

![Alt text](screenshots/wyr1.PNG?raw=true "main page view")

**2. overall process**

![Alt text](screenshots/totla1.gif?raw=true "overall gif")

**3. voting, leaderboard, creating a poll**

![Alt text](screenshots/totla2.gif?raw=true "overall gif")

**4. sign up & sign in**

![Alt text](screenshots/totla3.gif?raw=true "overall gif")


## Introduction

Udacity React nanodegree course **Would Your Rather project**.

Simple site that is known as 'Would You Rather...?' - User can vote between two options in every poll.

There are three users as default that you can login with its password(same as the ID, initially).

Also you can sign up and make your own accout.

After that, You can enjoy voting with others! (**IMPORTANT** : No real server running on here. Only with Dummy Data set)

Starter code is provided with Udactiy. Will be graded & feedback by their rubric and review.

Working on the structure of js files, all code inside them, and dealing with features of react

## Main features

* Sign in & Sign up - Sign in requires password. Sign up contains uploading user image, which is linked to AWS S3 bucket (also, Api-Gateway & Lambda feature).
* Dashboard - Unanswerd and Answered polls are listed. You can Check the result on answered poll, and can give a vote on unanswered one.
* Voting - You can check A or B. After you vote on one, the Result(# of users on that option, the percentage) would be shown immediately.
* Leaderboard - The scoring board. Ranking is calculated by the # of questions user made and answered polls.
* Create a new poll - A user can create his own poll, sharing with others.
* Sign out - You can sign out and enter with other account.


## Stucture




## How to run
- `yarn install` and then `yarn start` in this root folder
- Web page will be appeared automatically


## Environment
- Tested in window 10, chrome
- Backend Server is provided with Udacity's `_DATA.js` file. There are some modification on this(User password, Creating a user).