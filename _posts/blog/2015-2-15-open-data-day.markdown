---
title:  "Open Data Day Hackathon"
subtitle:  "Mapping species in the Greater London National Park"
thumbnail:  /assets/images/thumbnails/bats.jpg
date:   2015-02-22 16:18:38
tags:
- Open Data
- Hackathon
- Visualisation
- Geospatial
---

At this year's International Open Data Day, I was part of a team hacking natural history data to tell a compelling story about our changing environment.
 
 
 
 

I teamed up with <a target="_blank" rel="nofollow" href="https://twitter.com/ivvetm">@ivvetm</a>, <a target="_blank" rel="nofollow" href="https://twitter.com/sequencefree">@sequencefree</a> and <a target="_blank" rel="nofollow" href="https://twitter.com/alexwalters75">@alexwalters75</a>, and after brainstorming ideas we settled on mapping protected species found in the proposed <a target="_blank" rel="nofollow" href="http://www.greaterlondonnationalpark.org.uk">Greater London National Park</a>.

To start, we extracted a list of protected species from the Greater London Authority's <a target="_blank" rel="nofollow" href="http://legacy.london.gov.uk/mayor/environment/biodiversity/docs/protected_species_in_london.pdf">Protected Species Report</a>.

We then queried each of these species names against the <a target="_blank" rel="nofollow" href="http://data.nhm.ac.uk/">Natural History Museum's Data Portal</a> and <a target="_blank" rel="nofollow" href="http://www.gbif.org/">Global Biodiversity Information Facility</a> APIs, to find occurrences within the boundaries of the proposed London National Park. 

Parse the data, upload it into CartoDB, and we had an interactive map showing sightings within the park.     

<a href="/opendataday/species.html" target="_blank">
    <img src="/assets/140222-specimen-map.jpg" title="London National Park Specimen Map" />
</a>

There were some interesting discoveries - the <a href="http://www.wwww.rspb.org.uk/discoverandenjoynature/seenature/datewithnature/146957-peregrines-at-the-tate-modern">Peregrine Falcons at the Tate Modern</a> were new to me, but clearly represented in the dataset.

To finish, we wanted to map the change in occurrences through time.  Displaying fewer species worked better visually, so we created another map showing bat species sightings since 1900.

<a href="/opendataday/bats.html" target="_blank">
    <img src="/assets/140222-bats-map.jpg" title="London National Park Bats since 1900" />
</a>

The maps and data aren't perfect.  The London shape geometry we used to query against needs refining, so some occurrences fall beyond the boundaries of the proposed park.  But we produced a really satisfying result for a such short hackathon - and had great fun doing so. Thanks to everyone involved, and especially Team Nature!



