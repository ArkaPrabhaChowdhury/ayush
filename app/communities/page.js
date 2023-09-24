import Sidebar from "../(components)/Sidebar";
import Navbar from "../(components)/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div class="p-4 sm:ml-64">
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
	<div class="flex flex-wrap w-full mb-20">
	  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
		<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Popular communities</h1>
		<div class="h-1 w-20 bg-[#5dd0ab] rounded"></div>
	  </div>
	  
	</div>
	<div class="flex flex-wrap -m-4">
	  <div class="xl:w-1/4 md:w-1/2 p-4">
		<div class="bg-gray-100 p-6 rounded-lg">
		  
		  <h3 class="tracking-widest text-[#5dd0ab] text-xs font-medium title-font">SUBTITLE</h3>
		  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
		  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		</div>
	  </div>
	  <div class="xl:w-1/4 md:w-1/2 p-4">
		<div class="bg-gray-100 p-6 rounded-lg">

		  <h3 class="tracking-widest text-[#5dd0ab] text-xs font-medium title-font">SUBTITLE</h3>
		  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
		  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		</div>
	  </div>
	  <div class="xl:w-1/4 md:w-1/2 p-4">
		<div class="bg-gray-100 p-6 rounded-lg">

		  <h3 class="tracking-widest text-[#5dd0ab] text-xs font-medium title-font">SUBTITLE</h3>
		  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
		  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		</div>
	  </div>
	  <div class="xl:w-1/4 md:w-1/2 p-4">
		<div class="bg-gray-100 p-6 rounded-lg">

		  <h3 class="tracking-widest text-[#5dd0ab] text-xs font-medium title-font">SUBTITLE</h3>
		  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
		  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
		</div>
	  </div>
	</div>
  </div>
</section>
      </div>
    </div>
  );
};

export default page;
