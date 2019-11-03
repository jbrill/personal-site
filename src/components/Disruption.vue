<template>
  <div>
    <Base>
      <h2 style="margin: 0;">DISRUPTION</h2>
      <p style="font-style: italic;">Technology’s Grasp: A Photojournalist Perspective</p>
      <h4>Course</h4>
      <p>University of Michigan, Ann Arbor</p>
      <p><i>Course:</i>&nbsp RCARTS 385, Advanced Photography</p>
      <p><i>Professor:</i>&nbsp Isaac Wingfield</p>
      <h4>Prompt</h4>
      <p>The aim of this project is to serve as an opportunity for exploration and discovery within photography, revealing your personal interests and the skills you gain over the semester. On completing this portfolio you should be prepared to move into your own creative practice as a photographer, using photography to accomplish goals you set, appropriately using the methods, tools and techniques available.</p>
      <p><i>Final Deliverable:</i>&nbsp Twenty (20) rolls with contact sheets, twenty (20) finished prints, and a written statement</p>
      <h4>Tools</h4>
      <p>Nikon F3 📷</p>
      <p>Ilford HP5 Plus B+W</p>
    <h4>Ideation Process</h4>
    <ul id="ideation--process">
    <li>Mapping</li>
    <ul id="ideation--process-mapping">
        <li>Key Words</li>
        <li>Thinking and Working Process</li>
        <li>Matrix Map</li>
        <li>Five-word composite map</li>
    </ul>
    <li style="margin-bottom: 3vh;">Gathering Inspiration</li>
    <p>After developing key words fom my mapping exercise, I sought inspiration from previous artists. My search consisted of artists recommended from my professor, as well as self-directed research on Man-Altered Landscapes.</p>
      <div class="photography__contain">
        <img src="@/assets/images/portfolio/machinist/inspiration/gohlke.jpg"/>
        <p>Frank Gohlke - Measure of Emptiness, 1992</p>
        <img src="@/assets/images/portfolio/machinist/inspiration/baltz.jpg"/>
        <p>Lewis Baltz - The New Industrial Parks, 1979</p>
        <img src="@/assets/images/portfolio/machinist/inspiration/sheeler.jpg"/>
        <p>Charles Sheeler - STACKS IN CELEBRATION, 1954</p>
        <img src="@/assets/images/portfolio/machinist/inspiration/burtynsky.jpg"/>
        <p>Edward Burtynsky - Highway #1, 2003</p>
      </div>
    </ul>
    <h4>Thesis</h4>
      <p>"DISRUPTION" developed my curiosity for human interaction. As a software engineer, I believe it's imperative to dwell on the affect that software has on the developer, and the effect that software has on the world.</p>
      <p>"DISRUPTION" sets out to weigh the tension between technology's utopian intention -- making human lives easier -- with the brutally realist depiction of technology's place in our world.</p>
    <h4>Artist Statement</h4>
    <p>"This project started out as a fascination with computers and phones on my generation. Screens have a collective affect on state of mind. The human mind responds to its environment… yet this environment changes as we as humans change. I question the meaning of technological innovation. Is our progress as human beings measured by more complexity? Are the objects we, as humans, create natural? As we shape the environment around us, how does this environment affect our own minds?</p>
    <p>These images span from screens and phones to architecture and nature, and from factories and industry to tourism and medicine. My hope is that some of these images spark a response in the viewer. We, as human beings, create complex forms full of symmetry and patterns, and yet the beauty of nature outmatches these forms. Nonetheless, advances in medicine allow us to live longer; developments in industry instill huge economic progress."
    </p>
    <h4>Final Product</h4>
      <div class="photography__contain">
        <img src="@/assets/images/portfolio/machinist/final/airport.jpg"/>
        <p>McNamara Terminal, Detroit, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/lift.jpg"/>
        <p>Beaver Creek, CO</p>
        <img src="@/assets/images/portfolio/machinist/final/steel.jpg"/>
        <p>Steelstacks, Bethlehem, PA</p>
        <img src="@/assets/images/portfolio/machinist/final/bridgelift.jpg"/>
        <p>Brooklyn Bridge, New York City, NY</p>
        <img src="@/assets/images/portfolio/machinist/final/devices.jpg"/>
        <p>Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/building.jpg"/>
        <p>Wall Street, New York City, NY</p>
        <img src="@/assets/images/portfolio/machinist/final/nano.jpg"/>
        <p>Laboratory for Computational Nanoscience and Soft Matter Simulation, Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/crane.jpg"/>
        <p>Bethlehem, PA</p>
        <img src="@/assets/images/portfolio/machinist/final/duderstadt.jpg"/>
        <p>Duderstadt Library, Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/framedstacks.jpg"/>
        <p>Steelstacks, Bethlehem, PA</p>
        <img src="@/assets/images/portfolio/machinist/final/iphone.jpg"/>
        <p>Denver, CO</p>
        <img src="@/assets/images/portfolio/machinist/final/north.jpg"/>
        <p>North Campus, Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/puddle.jpg"/>
        <p>North Campus, Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/pipes.jpg"/>
        <p>Brooklyn Bridge, New York City, NY</p>
        <img src="@/assets/images/portfolio/machinist/final/solar.jpg"/>
        <p>North Campus, Ann Arbor, MI</p>
        <img src="@/assets/images/portfolio/machinist/final/train.jpg"/>
        <p>Steelstacks, Bethlehem, PA</p>
        <img src="@/assets/images/portfolio/machinist/final/wallstreet.jpg"/>
        <p>Wall Street, New York City, NY</p>
        <img src="@/assets/images/portfolio/machinist/final/dam.jpg"/>
        <p>Gross Reservoir, Near Boulder, CO</p>
        <img src="@/assets/images/portfolio/machinist/final/brooklynbridge.jpg"/>
        <p>Brooklyn Bridge, New York City, NY</p>
        <img src="@/assets/images/portfolio/machinist/final/hospital.jpg"/>
        <p>Beaumont Hospital, Royal Oak, MI</p>
      </div>
      <h4>Reflections</h4>
      <p>Our economic mobility relies on technological disruption. Technological disruption is encourage without consideration of environmental consequences.</p>
      <p>As we continue to innovate, we must remember to look back at how our innovation has served us to better design for the future.</p>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Disruption",
  components: {
    Base
  }
};
</script>

<style scoped>
#ideation--process {
  list-style-type: lower-roman;
}
.photography__contain img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.photography__contain p {
  font-size: small;
  text-align: right;
  margin-bottom: 3vh;
  color: darkgrey;
}
.photography__contain img {
  width: 100%;
}
p {
  font-size: smaller;
}
h2 {
  margin-top: 0;
  margin-bottom: 10vh;
}
.portfolio__contain {
  margin-bottom: 8vh;
  padding: 2vh;
  border: 1px solid #F1F1F1;
  border-left: 2px solid coral;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
}
.portfolio__medium {
  margin: 0;
  color: darkgrey;
}
.portfolio__contain:hover {
  cursor: pointer;
  margin-left: 5px;
}
</style>
