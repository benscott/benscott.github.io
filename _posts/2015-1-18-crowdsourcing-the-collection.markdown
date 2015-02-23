---
layout: post
title:  "Crowdsourcing the collection"
subtitle:  "Building a live digitisation and transcription showcase"
image:  /assets/beetles.jpg
date:   2015-1-18 16:18:38
tags:
- Crowdsourcing
- Citizen science
- Public engagement

---
Once a year the Natural History Museum hosts <em>Science Uncovered</em>, an evening celebrating its science and research with visitors.  My team - Biodiversity Informatics - has always taken part but since most of our work is computer-based, we often struggle to find ways of engaging the public with a monitor screen. That becomes even more of a challenge when we're competing with an entire Museum of exciting science to explore! This year I wanted to try something a bit different.

One of the Museum's key challenges is digitising its vast collection and making it available online. The Museum has embarked on an ambitious programme to photograph every one of its 80 million specimens, and transcribe the information on each label (what it is and where/when it was found).  I wanted to tell the story of this huge task, showing visitors the process of taking a specimen from the Museum's collection, photographing it, copying the labels, and then publishing the information on the new Data Portal.  Each step would happen in real-time and use real specimens, and the public themselves would be asked to transcribe the specimen labels - crowdsourcing performed by a live crowd.  

<figure>
    <img src="/assets/DSC_0710.jpg" title="Crowdsourcing the collection" />
    <figcaption>Crowdsourcing the collection in action.</figcaption>
</figure>

The Museum's coleoptersists have been making great efforts digitising their specimens, and have been publishing their <a href="https://www.flickr.com/photos/nhm_beetle_id/" target="_blank" title="NHM Beetles and Bugs' Photostream">stunning photos on Flickr</a>.  Many of these images still required transcribing, so they made the perfect seed dataset.  On the night, Museum curators would take more beetle specimens from the collection, photograph and add them to Flickr. To ensure a steady stream of photos flowing through the pipeline, I set up <a href="https://ifttt.com/" title="If This Then That" target="_blank">IFTTT</a> to automatically push the new photographs to Flickr.

<figure>
    <img src="/assets/DSC_0684.jpg" title="Beetle specimens" />
    <figcaption>Curators preparing specimens on the stand for digitisation.</figcaption>
</figure>

The success of the project would rely on the transcription app. It had to pull an image from Flickr, allow members of the public to easily enter information from the label, and then push the data to the Museum data portal.  The app needed a simple and intuitive UI - each member of the public would probably perform just one transcription, so there could be no overhead in learning to use it.  On the night we had 3 iPads running the app, each chaperoned by a member of the informatics team.  We would help visitors decipher the labels, and discuss our work and why digitising the collection is important. The app was also accessible throughout the Museum on visitors' own devices - we even produced beer mats to encourage people to transcribe a specimen over a drink!

<figure>
    <img src="/assets/beer-mat.gif" title="Transcribe a specimen beer mats" />
    <figcaption><em>Transcribe a specimen</em> beer mats.</figcaption>
</figure>

After evaluating existing free (there was no budget for this) crowdsourcing apps, I decided to build one myself.  The tools avilable were far more complex than we required - with user accounts, leaderboards etc., and a correspondingly complex UI. Few worked well on handhelds (phones especially), and none could consume a live stream of flickr images, instead requiring tasks to be preloaded. Our app is a simple, stripped-back version - it's little more than an image and multi-step form - and optimised for tablet and phones.  You can <a href="http://su2014.benscott.co.uk/" title="Crowdsourcing the collection app" target="_blank">try it out here</a> - and the <a href="https://github.com/NaturalHistoryMuseum/su2014" target="_blank">source code is available on Github</a>.

<figure>
    <img src="/assets/DSC_0752.jpg" title="Visitors using the app to transcribe specimens" />
    <figcaption>Visitors using the app to transcribe specimens.</figcaption>
</figure>

The event itself was a big success.  The public really engaged with our work - so much so that people continued to use the app for days after the event - and we received some excellent feedback.  The app was even demo'd to the Museum's board of trustees as an example of digital innovation. Though the <a href="http://data.nhm.ac.uk/dataset/crowdsourcing-the-collection/resource/07555c45-ed3f-4178-83a4-dfa0144e35d2" title="Crowdsourcing the collection dataset" target="_blank">dataset</a> created is small - we received 162 transcriptions over four hours, peaking at 3 submissions per minute - the accuracy is extremely high.  In a first for Science Uncovered, visitors have made a real and useful contribution to our science.  And, more importantly, learnt and had fun whilst doing so.   



<p class="credits">With thanks to: Ivvet Modinou for developing the idea, Laurence Livermore for helping organise, Libby Livermore for the photos, and members of the Museum Biodiversity Informatics, Coleopterist and Digitisation Teams.</p>