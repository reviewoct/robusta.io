Robusta.io Todos
=====

My goal is to write some blog post in french and english and sell training sessions in Europe, as I do in France. Mostly
about Java, Javascript and Web architecture. 
We will focus on displaying Home page, then blog posts, and lastly training session programs. We will do it first in english,
 then use translation when we will feel confident with Gatsby. 

GatsbyJS is not that new and really growing, especially since the React superstar Dan Abramov has moved to Gatsby in late 2018. 



Home page
----

* npm install / npm start -> localhost:8000 
* Add the header of the index.html in layout.js
    - There is no `if`. The header is always the same 
* Same thing, but with a dedicated component `component/Header.js`


## More simple components 

* Create `MarketColumns` component for the Training/Coding/Thinking columns
    - just make fake links for the moment
* Create a `About` component      




## Training section and Blog posts

The blog posts are tutorials that have some tags. For exemple the *AngularJS Dot problem* post will have **Javascript** 
, **Front** and **AngularJS** tags.

I will add a few blog post to `blog`, then the Training component on the first page will present those blog post

So we will have to write our first cutom graphql queries to grab blog post with tag *Front*, then those with *Back*,
then those with *Architecture*


# Masala-Parser

Masala Parser is kind of my Flagship, so I present this library here. 


# Last post

We will use the right query to find last three posts by date.

