Around the start of January this year, I became aware of a tool Spotify had hidden away on their website that allowed you to download a file containing your listening history for the past year or so.
As someone who loves being able to dive into data, this made me really excited about what could be done with those records.
I filled out the form to request my data, and a few days later I received an email with a link to download my listening history.

Upon downloading the data, I found that it included much more information than I originally expected.
Among the files was one containing everything that I had saved to my library, another containing information about all the searches I had made in the past 3 months.
One that really piqued my interest was a file titled 'Inferences'.
With some inspection, I realized it contained various markers the Spotify believed were accurate descriptions of me.
It included simple things, such as what phone I used, what sorts of music I liked to listen to, and the makes of some cars I had connected to with my phone while listening to music.
Some other inferences were much more interesting.
Spotify had determined that I was a college student, that I was a runner, and that I was outdoorsy.
I'd love to figure out more about how they were able to determine this from my listening history, or what other information they had access to when making those judgements.

I turned my attention towards three files labeled 'StreamingHistory'.
They contained records of every time I had listened to any track or podcast using Spotify.
Each entry (of which there were almost 56k) contained the time and date that I finished listening to the song, the name of the artist and the track, and the number of milliseconds I listened for.
I had really hoped that the entries would include the URI which spotify associates with every form of media on the platform (this did cause some difficulties later down the line).

While I do like JSON data quite a lot, the volume of the data meant that it would be much easier to load it into a database.
I chose SQLite, because that's the database I'm most familiar with. I created a table titled 'play' to hold each play in my listening history.
I added all the data from each entry in my history to this database, except the 'endTime' field, which I split into separate date and time columns.
While this data alone would enable some interesting insights into my listening, I knew that I could do much more if I was able to utilise Spotify's track features which are generated for each track.
These features include values quantifying energy, acousticness, liveness, and even a measure of how danceable a track is.

Here's where the issue with not having the URIs comes in.
In order to obtain the track features, I need to make a call to the Spotify API in which I provide the URI for the track I want features for.
After a little investigation, I figured that the easiest way to gather all the URIs for tracks I listened to was to call the 'search' API endpoint with a query string of the track's title followed by the artist's name.
While I could make those calls myself with Python's Request library, OAuth has always eluded my understanding, and the Spotify API documentation lists bindings for many languages.
Of the offerings for Python, I chose Spotipy, as it seemed to be the most complete implementation available.

