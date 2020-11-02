<template>
  <v-container>
    <v-layout flex>
      <v-container>
        <v-container>
          <h2 class="display-2">7-in-7</h2>
          <h2 class="display-1">Design Challenge</h2>
        </v-container>
        <v-container>
          <h5 class="overline">Major Studio 1 - Project Overview</h5>
          <h5 class="font-weight-light">Conceptualize, produce, and document 7 projects in 7 days for Major Studio 1.</h5>
        </v-container>
      </v-container>
      <v-container>
        <v-list nav>
          <v-list-item class="overline">Day 1: Gears of Time</v-list-item>
          <v-list-item class="overline">Day 2: Brave New Password</v-list-item>
          <v-list-item class="overline">Day 3: Twitter in Text</v-list-item>
          <v-list-item class="overline">Day 4: Hash Rate Art</v-list-item>
          <v-list-item class="overline">Day 5: Transportive Film</v-list-item>
          <v-list-item class="overline">Day 6: Cognitive Behavioral Therapy Toolkit</v-list-item>
          <v-list-item class="overline">Day 7: Portfolio Redesign</v-list-item>
        </v-list>
      </v-container>
    </v-layout>
    <v-timeline>
      <v-timeline-item
        color="cyan"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold cyan--text"
            v-text="'Day 1'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 cyan--text">
            Gears of Time
          </h2>
          <div>
            <h4 class="text-h5">Overview</h4>
            <p class="font-weight-heavy">Gears of Time is a commentary and visual expression of time as expressed mechanically.</p>

            <p class="font-weight-light">A clock expresses time through a series of gears and parts, transferred energetically through a series of different parts of the whole. The first mechanical clock was implemented in the start of the 14th century. I wanted to create a visual exploration of time through shape and color.</p>

            <h4 class="text-h5">Questions</h4>
            <p class="font-weight-light">How might we express moments that seem to be fleeting, or slower than others?</p>
            <p class="font-weight-light">What would an abstracted take on time look like?</p>
            <p class="font-weight-light">How might this form differ from person to person?</p>

            <h4 class="text-h5">Process</h4>
            <p class="font-weight-light">My first sketch produced a series of lines of differing colors with alternating gaps</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/1_edited.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              height="25vh"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">This initial expression was highly abstract and honestly inspired by loading wheels often seen in web applications. I decided to recreate this form but on my computer, at first using Adobe Illustrator the create a similar structure.</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/1_digital.png"
              aspect-ratio="1"
              class="grey lighten-2"
              max-height="35vh"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">A few things happened in this digital iteration. First, each border (consistent lines around circle) differed in width. I think this adds a compelling visual element to each layer. When looking at the form, no single line assumes the role of subject, but rather the sum of the parts becomes the subject. I interpret this within the scope of time as a series of different experiences within unique timeframes collectively creating the perception of time throughout a fixed period. Some moments consciously appear to happen faster than others.</p>
            <p class="font-weight-light">I decided to export these layers into Adobe After Effects to create some movement within the layers. I was able to export each layer individually into the new composition, and changed the rotation intervals of each border.</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/1_video.png"
              aspect-ratio="1"
              class="grey lighten-2"
              max-height="35vh"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">Changing the rotation of each layer required an iterative process in itself. I wanted to observer to see a contrast in a constantly shifting rotational form, as well as what it would look like when unified with the same rotational cadence. After a shuffling of rotational keyframes, I ended up with a visualization I was happy with.</p>
            <p class="text-h5">Result</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/output.gif"
              aspect-ratio="1"
              class="grey lighten-2"
              max-height="35vh"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h5">Learnings</p>
            <p class="font-weight-light">The process was just as revealing to me as the final product. It required using several different mediums, from manual sketching with colored pencil to a digital conversion using Adobe Illustrator.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="orange"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold orange--text"
            v-text="'Day 2'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 orange--text">
            Brave New Password
          </h2>
          <div>
            <p class="text-h5">Problem</p>
            <p class="font-weight-light">No ability to dynamically create a secure password with an underlying meaning.</p>
            <p class="text-h5">Overview</p>
            <p class="font-weight-light">One of the strongest ways to create a password is to forge an amalgamation of different, unrelated words. This password creation process can be simplified in a web-based assistant tool.</p>
            <p class="font-weight-light">Brave New Password simplifies the password creation process by forming together one string from five random words, selected from the first chapter of Aldous Huxley’s novel, “Brave New World”. This novel was chosen because of its commentary on the tradeoff between privacy and happiness.</p>
            <blockquote class="blockquote">“But I don’t want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.”</blockquote>
            <p class="text-h5">Process</p>
            <p class="font-weight-light">I began with a sketch the technical architecture, as well as a low-fidelity mockup of the user interaction:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/sketch.png"
              class="grey lighten-2"
              max-height="35vh"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">My initial thought was to feed in the book text through Google’s Book API. This techincal process ended up impeding the iterative feedback flow of the design process, so instead I just copied and pasted the first chapter directly from this site into my own codebase.</p>
            <p class="font-weight-light">For the software itself, I ended up going with a combination of technologies I’m used to:</p>
            <ul>
              <li>VueJS (front-end framework)</li>
              <li>Vuetify (UI elements)</li>
              <li>Vercel (deployment infrastructure)</li>
              <li>Github (repository hosting)</li>
            </ul>
            <p class="font-weight-light">There are several features I definitely wanted to implement to smooth out the user experience of the application. First off, I wanted to depict each word in chips above the text, so that the user could view the words in a non-unified form.</p>
            <p class="font-weight-light">The next feature was borrowed from the password manager I currently use, LastPass. LastPass allows you to copy and paste generated passwords with ease. I implemented a Copy button to the dialog that appears when you generate a password. The copy button copies the generated password into your clipboard.</p>
            <p class="text-h5">Result</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/2_animated.gif"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">You can visit the live site <a href="https://bravenewpassword-f7yxs478t.vercel.app/" target="_blank">here</a>.</p>
            <p class="font-weight-light">Check out the codebase <a href="https://github.com/jbrill/bravenewpassword" target="_blank">here</a>.</p>
            <p class="text-h5">Learnings</p>
            <p class="font-weight-light">I am pretty happy with the result. It’s a fun tool to play with, and you can generate some funny combinations of words from the generator.</p>
            <p class="font-weight-light">In the future, I’d like to highlight the words in the text, but this turned out to be causing some technical glitches.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="green"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold green--text"
            v-text="'Day 3'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 green--text">
            Twitter in Text
          </h2>
          <div>
            <p class="text-h5">Overview</p>
            <p class="font-weight-heavy">Twitter in Text is a text-only version of Twitter, emphasizing readability and ease for the user.</p>
            <p class="font-weight-light">The project is inspired by NPR’s recent text-only site, found here. I was originally introduced to NPR’s text-only site through a tweet which received a lot of love.</p>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Best redesign of the year goes to... the text-only NPR site! <a href="https://t.co/ISHbLvSpMt">https://t.co/ISHbLvSpMt</a> My source of news for the last 12 months.</p>&mdash; Frank Chimero (@frank_chimero) <a href="https://twitter.com/frank_chimero/status/1319745714998726656?ref_src=twsrc%5Etfw">October 23, 2020</a></blockquote>
            <p class="font-weight-light">After using the NPR text-only site myself, I found myself digging the barebones design aesthetic. The lack of content makes the content present stand out. Quite frankly, it’s a sigh of relief for a user to find the content that they came for, without being bombarded by colors and media quarreling over your dopamine levels. I wanted to take this same principle of meaning through simplicity and apply it to Twitter, my most used social media source.</p>
            <p class="font-weight-light">By applying a text-only approach to Twitter, my guiding hypothesis was that we could return to (my take on) the roots of Twitter — to distribute information and let your voice be heard.</p>
            <p class="text-h5">Process</p>
            <p class="font-weight-light">I began my “Text in Twitter” design journey by simply copying NPR’s design over in a Figma sketch.</p>
            <p class="font-weight-light">Some core elements of the NPR site stayed constant (i.e. the anchor format, the title of the page, and the button and text-only indicator snippet). I inserted several elements, however,  to give it a Twittery aesthetic and feel. For example, the colors of the links and lines are all the “Twitter blue”. For functionality, I moved the trends section to the right of the page, to allow for the infinite scroll that Twitter implements. The content of each tweet was from my actual Twitter feed.</p>
            <v-layout flex>
              <v-img
                src="@/assets/images/portfolio/7-in-7/npr.png"
                class="grey lighten-2"
                width="50%"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-img
                src="@/assets/images/portfolio/7-in-7/twitter_1.jpg"
                class="grey lighten-2"
                width="50%"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-layout>
            <p class="font-weight-light">Once satisfied with the Artboard, I created a simple Wizard of Oz prototype with Figma, as well as a simple login page to gain access to the site. I took a screenshot of one of my tweets, and recorded the prototype using QuickTime Player.</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/figma.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h5">Prototype</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/3.gif"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h5">Learnings</p>
            <p class="font-weight-light">Unlike the NPR website, this website would require a dynamic login to access your feed via Twitter’s API, whereas NPR has a static list of articles. It could be interesting to explore a static set of tweets from the day, sorted by the most favorited or retweeted. These tweets would act as sorts of headlines, and perhaps the trends would follow the same pattern.</p>
            <p class="font-weight-light">I’m ultimately interested in how a simplified interface would influence user behavior on Twitter. I find myself going through replies and implicitly noting the favorites and retweets of every tweet I come across. Although the user would certainly lose ‘context’ in a text-only interface, it’s likely that it could shape the experience to be more of a newsreel, rather than an interactive ecosystem.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="red"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold red--text"
            v-text="'Day 4'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 red--text">
            Hash Rate Art
          </h2>
          <div>
            <p class="text-h5">Objectives</p>
            <p class="font-weight-light">The opportunity was to develop a visualization of the growth of the hash rate, a measurement of processing power, of the Ethereum network.</p>
            <p class="font-weight-light">Ethereum, a cryptocurrency that is second only to Bitcoin, operates as “a global, decentralized platform for money and new kinds of applications”. Vitalik, the founder of Ethereum, describes the technology as the potential to be the World Computer.</p>
            <p class="font-weight-light">I wanted to visualize the growth of the Ethereum network in the relatively short time period it’s been around. The network operates under connections between nodes in a decentralized manner. The greater the hash rate is of the network, the more secure the network.</p>
            <p class="text-h5">Guiding Questions</p>
            <v-list>
              <v-list-item>How can we translate hash power of the Ethereum network to a canvas?</v-list-item>
              <v-list-item>What does it mean to be decentralized in a visual space?</v-list-item>
              <v-list-item>Can you visualize vulnerability on the blockchain?</v-list-item>
            </v-list>
            <p class="text-h5">Tools</p>
            <v-list>
              <v-list-item>p5js</v-list-item>
              <v-list-item>Google Sheets</v-list-item>
            </v-list>
            <p class="text-h5">Research</p>
            <p class="font-weight-light">My first step was to find a source for the hash rate data historically. I came across several API’s, however they typically were all paid and the onboarding to integrate them successfully seemed pretty tedious.</p>
            <p class="font-weight-light">I was able to find a CSV with all the data since 2015, and translated this CSV to a Google Sheet.</p>
            <p class="font-weight-light">The data I found dated back from 2015, providing roughly 5 years of hash rates and dates.</p>
            <p class="font-weight-light">The next step was to open up my p5 sketch, and read in the sheets data. This process required some technical hacks, including publicizing the Google Sheet and changing the url to include a json query parameter.</p>
            <p class="text-h5">Prototypes</p>
            <p class="font-weight-light">My design process was highly iterative and visual. I wanted something that I felt held the integrity of a blockchain like Ethereum, while also addressing the aforementioned design questions.</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/hashrate.gif"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">I wanted to improve this iteration by creating an indicator of the date and hash rate that the canvas was referring to. I also changed the color scheme to be monochrome, as well as enlarged the canvas. Finally, I ensured that each set of lines was actually connected to each other to create a web-like decentralized form:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/has.gif"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">The quality is not great using screen record, but check out the project yourself <a href="https://editor.p5js.org/jbrill/sketches/ZyqXkWes-" target="_blank">here</a>.</p>
            <iframe style="background-color: black; min-height: 50vh" width="100%" src="https://editor.p5js.org/jbrill/embed/ZyqXkWes-"></iframe>
            <p class="text-h5">Learnings/Future Work</p>
            <p class="font-weight-light">I found this project to be highly explorative and fun!</p>
            <p class="font-weight-light">It would be cool to actually create a smart contract for a generative artwork by placing them on decentralized applications like SuperRare.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="purple"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold purple--text"
            v-text="'Day 5'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 purple--text">
            Transportive Film
          </h2>
          <div>
            <p class="text-h5">Overview</p>
            <p class="font-weight-light">At this point, fatigue is creeping in. I wanted to explore a medium I’m familiar with: 35mm film photography. The problem was losing energy for the last three days of this project. The proposed solution was a creative revitalization through the meditative practice of film photography. For me, there is something calming about the photographic process, the requirement of immersion in the present and the forced framework of thinking about what’s in front of you.</p>
            <p class="text-h5">Tools</p>
            <v-list>
              <v-list-item>Two rolls of 35mm Kodak 400</v-list-item>
              <v-list-item>Nikon F3</v-list-item>
            </v-list>
            <p class="text-h5">Process</p>
            <p class="font-weight-light">The photographic process took two trips, one in the day and one in the night, to encompass different lighting and scenery. I walked around me neighborhood in the Upper East Side of Manhattan, trying to frame the ordinary in a documentary fashion.</p>
            <p class="font-weight-light">I noticed several themes emerging from my shots, particularly garages, cars, bikes, bridges. What’s interesting is these, in hindsight, pertain to transportation, which I found to be a sort of subconscious interest that could make for an interesting photojournalist project.</p>
            <p class="font-weight-light">After my day and night film rolls were complete, I dropped off my roles, which were shared with me via Dropbox the next day. I assorted 15 of my favorite shots from the 80 total negatives on a Photoshop project:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/photos.jpg"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">At this point, I was curious if I could use these pictures in a photojournalist narrative of transportation. For the sake of ease, I’ll put the photographs in the intended order below on this blog. To create the order for the photographs, I’ll simply copy and paste. However, in an ideal world, I’d use a card sorting technique with the physical prints.</p>
            <p class="text-h5">Result</p>
            <a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/jlbrill/albums/72157716680337948" title="transportive"><img src="https://live.staticflickr.com/65535/50547914063_32cb225f1e_z.jpg" width="640" height="480" alt="transportive"></a>
            <p class="text-h5">Learnings</p>
            <p class="font-weight-light">I found this project to be a nice change from the other projects. Photography has sort of always been a hobby to get me out of my current frame of mind. In this since, film is transportive. Perhaps that is the reason why I also subconsciously shot subjects related to transportation.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="grey"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold grey--text"
            v-text="'Day 6'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 grey--text">
            Cognitive Behavioral Therapy Toolkit
          </h2>
          <div>
            <p class="text-h5">Objectives</p>
            <p class="font-weight-light">Implement Cognitive Behavioral Therapy (CBT) techniques into iOS devices.</p>
            <p class="text-h5">Design Questions</p>
            <p class="font-weight-light">How can we help to address mental health within the technology that consumes us?</p>
            <p class="text-h5">Design Values</p>
            <v-list>
              <v-list-item>Un-Ableism</v-list-item>
              <v-list-item>Compassion</v-list-item>
              <v-list-item>Value Sensitive Design</v-list-item>
            </v-list>
            <p class="text-h5">Users</p>
            <p class="font-weight-light">The target user would be anyone suffering from anxiety, depression, or any mental or physical health problem that could be addressed with CBT.</p>
            <p class="text-h5">Criteria</p>
            <p class="font-weight-light">The user should be willing to perform the task (CBT walkthrough).</p>
            <p class="text-h5">Constraints</p>
            <p class="font-weight-light">The walkthrough should not take more than 30-60 minutes.</p>
            <p class="text-h5">Research</p>
            <p class="text-h6">Talking with a Friend</p>
            <p class="font-weight-light">I began by reaching out to my friend who has personally used the Cognitive Behavioral Therapy framework. We talked a good amount about the technique, and he shared some resources.</p>
            <p class="font-weight-light">My initial idea was to create a gamify CBT, however in practice the framework made much more sense as an assistive tool. The next question I asked was where the application should be hosted? Perhaps an in-app tool in an application like Twitter or Instagram could make sense.</p>
            <p class="font-weight-light">I constructed a storyboard to flesh out my ideas, and iterated and digitized my storyboards to get a user flow that felt like it made sense.</p>
            <p class="text-h6">Storyboarding</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/storyboard.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h6">User Flow</p>
            <p class="font-weight-light">In addition to the storyboarding, I wanted the user flow to inform the prototype that I would later build out. The user flow revealed two cases that could launch the CBT walkthrough:</p>
            <v-list>
              <v-list-item>1.  Reaching the time limit in an app reveals a push notification to go to CBT module</v-list-item>
              <v-list-item>2.  Going through the CBT module directly from the native iOS Health application</v-list-item>
            </v-list>
            <v-img
              src="@/assets/images/portfolio/7-in-7/userflow.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">After having a basic understanding of the flow of the application, I started crafting a user interface using Figma, mocking up several screens that I’d later translate to a prototype:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/prototype-cbt.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h5">Prototype</p>
            <p class="font-weight-light">After feeling somewhat confident with my screens, I translated them to a prototype, which would be a new category within iOS’ Health application:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/prototype.gif"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="caption">Note: I’d like to implement an interface for both the CBT techniques and tools. Right now, the prototype skips the technique (i.e. journaling), but is the essential part of the CBT walkthrough.</p>
            <p class="text-h5">Proposed Solutions</p>
            <p class="font-weight-light">I do think an iOS-centric integration of Cognitive Behavioral Therapy would be the most effective way to implement CBT from both a design and technical perspective. I will say, that after working on this for a day, I feel that it could be a genuinely useful tool for Apple to implement in their suite of Health modules.</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        color="blue"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold blue--text"
            v-text="'Day 7'"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 blue--text">
            Portfolio Redesign
          </h2>
          <div>
            <p class="text-h5">Overview</p>
            <p class="font-weight-light">For the final day of the 7-in-7 project, I decided to redesign my own portfolio.</p>
            <p class="font-weight-light">I think the previous 6 days had gotten me into a weird state of both exhaustion and ambition. After so much work in both familiar and unfamiliar technologies, ideas, and processes, I wanted a place to showcase them that I was proud of.</p>
            <p class="font-weight-light">My portfolio had not been updated since last year, and the design had definitely grown stale to me:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/old-portfolio.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-h5">Objectives</p>
            <p class="font-weight-light">I wanted to both simplify and engage people viewing my portfolio. My goals in iterating on the site were the following:</p>
            <v-list>
              <v-list-item>Morph into a single-page experience</v-list-item>
              <v-list-item>No-scroll to view past projects</v-list-item>
              <v-list-item>Clearer outbound links</v-list-item>
              <v-list-item>More visual immersion</v-list-item>
            </v-list>
            <p class="text-h5">Process</p>
            <p class="font-weight-light">I started off the process by researching and studying portfolios that I found inspiring. I’d found two personal sites I found inspiring, Jason Yuan’s portfolio and Catherine Most’s portfolio.</p>
            <p class="font-weight-light">From these two websites, I began sketching my vision for the site:</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/sketch.jpg"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="font-weight-light">The sketch was relatively simple, I’d keep the name and title on the left, but add the description to be static. I’d also create cards for my portfolio in 3 columns, rather than have one column that requires the user to scroll.</p>
            <p class="font-weight-light">Before developing, I made some tweaks to my software stack to incorporate vuetify. In my old site, I had used vanilla css and html, which made everything quite a bit harder. With Vuetify, I could save tons of time and energy by using reusable components.</p>
            <p class="text-h5">Iterations</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/it1.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="caption">Iteration 1</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/it2.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="caption">Iteration 2</p>
            <v-img
              src="@/assets/images/portfolio/7-in-7/it4.png"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="caption">Iteration 3</p>
            <p class="text-h5">Reflections</p>
            <p class="font-weight-light">You can visit the site at https://jbrill.com. I still need to add my content to the 7-in-7 page, and definitely would like to read over and refine my past projects as well. I feel good about the redesign, and will reach out to peers to see how I could improve and iterate.</p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "SevenInSeven",
  data: () => ({
    days: [
      {
        color: 'cyan',
        day: '1',
      },
      {
        color: 'green',
        day: '2',
      },
      {
        color: 'pink',
        day: '3',
      },
      {
        color: 'amber',
        day: '4',
      },
      {
        color: 'orange',
        day: '5',
      },
    ],
  }),
  components: {
  }
};
</script>

<style scoped>
.about__contain__footnote:hover {
  background-color: coral;
}
img:hover {
  cursor: pointer;
  opacity: 0.7;
}
p {
  padding-top: 2vh;
}
</style>
