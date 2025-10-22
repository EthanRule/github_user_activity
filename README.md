# github_user_activity

project_url: https://roadmap.sh/projects/github-user-activity

roadmap.sh backend CLI beginner project

In this project I first started off with creating the main input loop. Since javascript
doesent seem to have a good way to take blocking cli input, I had to do this recursively.
Then I created an async function to handle the api request. Idealy in a web project this
would use a seperate api route, but for the simplicity for this project i decided to
just create a function and focus on learning the syntax.

I then made the basic fetch and then parsed the response into a json object string.
I learened that htere is like 4 steps to the api response at least for now. FIrst
you make the fetch/parse, then you try catch it, then you handle the errors, then
you optionally filter for the data you desire. And another thing to do is to createa
an interface to store the data for easier indexing.

Also I learned that the logging truncates to 20 objects.
