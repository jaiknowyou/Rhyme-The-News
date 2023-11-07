# Rhyme-The-News

I learned to make extensions in the process and about dependency like babel in the process.
I divided this interesting task into three steps:

Making a Rhyming API: To Rhyme the headline, I choose to use openAI API. I thought of using beautifulSoup to extract the headline.
Building extension to change UI (the headline into specific string like “A New Headline”)
Using Step 1 API and integrating in extension. 
Instead of Step1, I directly fetched the headline from the UI and use openAI API using the JavaScript built-in fetch function


This extension can work on these two website:
https://www.thehindu.com/
https://www.thequint.com/

Note: Please reload if the api doesn’t work. It takes a timeout of 4 seconds so that the process starts only after the website is fully loaded.
