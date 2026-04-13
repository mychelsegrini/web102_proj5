import { Link, useLocation } from 'react-router-dom'
import Card from './components/Card.jsx'

const descriptions = {
  "Algeria": "A large North African nation characterized by its vast Sahara Desert interior and Mediterranean coastline.",
  "Andorra": "A tiny, independent principality situated between France and Spain in the Pyrenees mountains.",
  "Angola": "A southwestern African country known for its extensive oil and mineral reserves, and a long Atlantic coastline.",
  "Antigua and Barbuda": "An independent Commonwealth country comprising its two namesake islands and several smaller ones in the Caribbean.",
  "Argentina": "A massive South American nation with terrain encompassing Andes mountains, glacial lakes, and Pampas grassland.",
  "Armenia": "A mountainous, landlocked nation in the South Caucasus region of Eurasia, known for its ancient cultural heritage.",
  "Aruba": "A constituent country of the Kingdom of the Netherlands in the southern Caribbean Sea, famous for its blond beaches.",
  "Australia": "A sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.",
  "Austria": "A landlocked East Alpine country in the southern part of Central Europe, famous for its castles, palaces, and classical music.",
  "Azerbaijan": "A nation and former Soviet republic bounded by the Caspian Sea and Caucasus Mountains, which span Asia and Europe.",
  "Bahamas, The": "A coral-based archipelago in the Atlantic Ocean comprising more than 700 islands and cays.",
  "Bahrain": "A sovereign state in the Persian Gulf comprising a small archipelago centered around Bahrain Island.",
  "Bangladesh": "A South Asian country marked by lush greenery and many waterways, situated on the Bay of Bengal.",
  "Barbados": "An eastern Caribbean island and an independent British Commonwealth nation, known for its beaches and botanical gardens.",
  "Belarus": "A landlocked country in Eastern Europe known for its Stalinist architecture, grand fortifications, and primeval forests.",
  "Belgium": "A country in Western Europe known for medieval towns, Renaissance architecture, and its headquarters of the European Union.",
  "Belize": "A nation on the eastern coast of Central America, with Caribbean Sea shorelines to the east and dense jungle to the west.",
  "Benin": "A French-speaking West African nation, a birthplace of the vodun (voodoo) religion and home to the former Dahomey Kingdom.",
  "Bermuda": "A British island territory in the North Atlantic Ocean known for its pink-sand beaches and blend of British and American culture.",
  "Bolivia": "A central South American country with a varied terrain spanning Andes Mountains, the Atacama Desert, and Amazon Basin rainforest.",
  "Bosnia and Herzegovina": "A country on the Balkan Peninsula in southeastern Europe, encompassing mountainous terrain, medieval villages, and Muslim and Christian landmarks.",
  "Botswana": "A landlocked country in Southern Africa with a landscape defined by the Kalahari Desert and the Okavango Delta.",
  "Brazil": "The largest country in both South America and Latin America, famous for its diverse Amazon basin and vibrant Carnival festival.",
  "Brunei Darussalam": "A tiny nation on the island of Borneo, in distinct sections surrounded by Malaysia and the South China Sea, known for its beaches and biodiverse rainforest.",
  "Bulgaria": "A Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior, and rivers, including the Danube.",
  "Burkina Faso": "A landlocked country in West Africa with significant reserves of gold, surrounded by six coastal and landlocked nations.",
  "Burundi": "A landlocked country in the Great Rift Valley where the African Great Lakes region and East Africa converge.",
  "Cabo Verde": "An archipelago and island country in the central Atlantic Ocean, consisting of ten volcanic islands.",
  "Cambodia": "A Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains, and Gulf of Thailand coastline.",
  "Cameroon": "A Central African country of varied terrain and wildlife, often referred to as 'Africa in miniature'.",
  "Canada": "A country in the northern part of North America, known for its vast, pristine landscapes and multicultural cities.",
  "Central African Republic": "A landlocked country in Central Africa known for its significant mineral deposits and diverse wildlife.",
  "Chad": "A landlocked country at the crossroads of North and Central Africa, characterized by its arid, desert landscape.",
  "Chile": "A long, narrow country stretching along South America's western edge, with more than 6,000km of Pacific Ocean coastline.",
  "China": "A populous nation in East Asia whose vast landscape encompasses grassland, desert, mountains, lakes, rivers, and more than 14,000km of coastline.",
  "Colombia": "A country at the northern tip of South America, with rainforests, Andes mountains, and numerous coffee plantations.",
  "Comoros": "A volcanic archipelago off Africa's east coast, in the warm Indian Ocean waters of the Mozambique Channel.",
  "Congo, Dem. Rep.": "A large country in Central Africa, extremely rich in natural resources and home to a vast portion of the Amazonian-like Congo Rainforest.",
  "Congo, Rep.": "Also known as Congo-Brazzaville, a central African nation with rainforest reserves that are habitats for gorillas.",
  "Costa Rica": "A rugged, rainforested Central American country with coastlines on the Caribbean and Pacific, known for its beaches and biodiversity.",
  "Cote d'Ivoire": "A West African country with beach resorts, rainforests, and a French-colonial legacy.",
  "Croatia": "An Eastern European country with a long coastline on the Adriatic Sea, encompassing more than a thousand islands.",
  "Curacao": "A Lesser Antilles island country in the southern Caribbean Sea and the Dutch Caribbean region, known for its beaches tucked into coves and its expansive coral reefs.",
  "Cyprus": "An island country in the eastern Mediterranean Sea, known for its ancient ruins, beaches, and rugged interior.",
  "Czechia": "Also known as the Czech Republic, a landlocked country in Central Europe known for its ornate castles, native beers, and long history.",
  "Denmark": "A Scandinavian country comprising the Jutland Peninsula and numerous islands, linked to nearby Sweden via the Öresund bridge.",
  "Djibouti": "A country in the Horn of Africa, bordered by Somaliland in the south, Ethiopia in the southwest, Eritrea in the north, and the Red Sea and the Gulf of Aden in the east.",
  "Dominica": "A mountainous Caribbean island nation distinguished by geothermal hot springs, encompassing the Boiling Lake.",
  "Dominican Republic": "A Caribbean nation that shares the island of Hispaniola with Haiti to the west, known for its beaches, resorts, and golfing.",
  "Ecuador": "A country straddling the equator on South America's west coast, featuring diverse landscapes from the Amazon jungle to the Andean highlands and the wildlife-rich Galápagos Islands.",
  "Egypt, Arab Rep.": "A country linking northeast Africa with the Middle East, dating to the time of the pharaohs, featuring monuments like the Pyramids of Giza.",
  "El Salvador": "A small Central American nation known for its Pacific Ocean beaches, surf spots, and mountainous landscape.",
  "Equatorial Guinea": "A Central African country comprising the Rio Muni mainland and 5 volcanic offshore islands.",
  "Estonia": "A country in Northern Europe bordering the Baltic Sea and Gulf of Finland, with more than 1,500 islands, diverse terrain, and old-growth forests.",
  "Eswatini": "A small, landlocked monarchy in southern Africa, known for its wilderness reserves and festivals showcasing traditional Swazi culture.",
  "Ethiopia": "A rugged, landlocked country split by the Great Rift Valley in the Horn of Africa, with archaeological finds dating back more than 3 million years.",
  "Faroe Islands": "A self-governing archipelago, part of the Kingdom of Denmark, situated between Iceland and Norway in the North Atlantic Ocean.",
  "Fiji": "A country in the South Pacific, an archipelago of more than 300 islands famous for rugged landscapes, palm-lined beaches, and coral reefs.",
  "Finland": "A Northern European nation bordering Sweden, Norway, and Russia, known for its capital Helsinki, the Northern Lights, and numerous lakes.",
  "France": "A country in Western Europe encompassing medieval cities, alpine villages, and Mediterranean beaches.",
  "French Polynesia": "An overseas collectivity of France comprising more than 100 islands in the South Pacific, known for its turquoise lagoons and overwater bungalows.",
  "Gabon": "A country along the Atlantic coast of Central Africa with significant areas of protected parkland.",
  "Gambia, The": "A small West African country bounded by Senegal, with a narrow Atlantic coastline and defined by the Gambia River that flows through its center.",
  "Georgia": "A country at the intersection of Europe and Asia, home to Caucasus Mountain villages and Black Sea beaches.",
  "Germany": "A Western European country with a landscape of forests, rivers, mountain ranges, and North Sea beaches.",
  "Ghana": "A nation on West Africa's Gulf of Guinea known for diverse wildlife, old forts, and secluded beaches.",
  "Greece": "A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas, known as the cradle of Western civilization.",
  "Grenada": "A Caribbean country comprising a main island, also called Grenada, and smaller surrounding islands, known as the 'Spice Isle'.",
  "Guatemala": "A Central American country south of Mexico featuring volcanoes, rainforests, and ancient Mayan sites.",
  "Guinea": "A country in West Africa known for the Mount Nimba Strict Nature Reserve, which shelters a rich variety of flora and fauna.",
  "Guinea-Bissau": "A tropical country on West Africa's Atlantic coast that's known for national parks and wildlife.",
  "Guyana": "A country on South America's North Atlantic coast, defined by its dense rainforest and British colonial heritage.",
  "Haiti": "A Caribbean country that shares the island of Hispaniola with the Dominican Republic, possessing a unique history as the first independent nation of Latin America and the Caribbean.",
  "Honduras": "A Central American country with Caribbean Sea coastlines to the north and the Pacific Ocean to the south.",
  "Hong Kong SAR, China": "A vibrant, densely populated urban center and special administrative region of China, serving as a major global financial hub.",
  "Hungary": "A landlocked country in Central Europe with a capital, Budapest, bisected by the Danube River.",
  "Iceland": "A Nordic island nation defined by its dramatic landscape with volcanoes, geysers, hot springs, and lava fields.",
  "India": "A vast South Asian country with diverse terrain from Himalayan peaks to Indian Ocean coastline, and a history reaching back 5 millennia.",
  "Indonesia": "A Southeast Asian nation made up of thousands of volcanic islands, known for its beaches, volcanoes, and Komodo dragons.",
  "Iran, Islamic Rep.": "An Islamic republic on the Persian Gulf with historical sites dating to the Persian Empire.",
  "Iraq": "A country in Western Asia, bordered by Turkey, Iran, Kuwait, Saudi Arabia, Jordan, and Syria, often called the 'cradle of civilization'.",
  "Ireland": "An island nation in northwestern Europe known for its lush, green landscapes and Celtic historical sites.",
  "Israel": "A Middle Eastern country on the Mediterranean Sea regarded by Jews, Christians, and Muslims as the biblical Holy Land.",
  "Italy": "A European country with a long Mediterranean coastline, deeply influencing Western culture and cuisine.",
  "Jamaica": "A Caribbean island nation with a lush topography of mountains, rainforests, and reef-lined beaches, famed as the birthplace of reggae music.",
  "Japan": "An island country in East Asia consisting of a stratovolcanic archipelago extending along the Pacific coast.",
  "Jordan": "An Arab nation on the east bank of the Jordan River, defined by ancient monuments, nature reserves, and seaside resorts.",
  "Kazakhstan": "A Central Asian country and former Soviet republic, extending from the Caspian Sea in the west to the Altai Mountains at its eastern border with China.",
  "Kenya": "An East African country with a coastline on the Indian Ocean, encompassing savannah, lakelands, the dramatic Great Rift Valley, and mountain highlands.",
  "Kiribati": "An island republic in the Central Pacific, comprising 33 coral atolls and isles stretching along the equator.",
  "Korea, Rep.": "An East Asian nation on the southern half of the Korean Peninsula, known for its high-tech cities, sub-tropical islands, and advanced economy.",
  "Kuwait": "An Arab country on the Persian Gulf with a cultural heritage dating back to antiquity and significant oil reserves.",
  "Kyrgyz Republic": "A rugged Central Asian country along the Silk Road, the ancient trade route between China and the Mediterranean.",
  "Lao PDR": "A landlocked Southeast Asian country traversed by the Mekong River and known for mountainous terrain, French colonial architecture, and hill tribe settlements.",
  "Latvia": "A country on the Baltic Sea between Lithuania and Estonia, featuring wide beaches and dense, sprawling forests.",
  "Lesotho": "A high-altitude, landlocked kingdom encircled by South Africa, known for a network of rivers and mountain ranges.",
  "Liberia": "A country on the West African coast, historically notable as a settlement for freed African-American slaves.",
  "Libya": "A country in the Maghreb region in North Africa bordered by the Mediterranean Sea to the north.",
  "Lithuania": "A country and the southernmost of Europe's Baltic states, known for its flat landscape and medieval history.",
  "Luxembourg": "A small European country surrounded by Belgium, France, and Germany, largely featuring dense Ardennes forest and nature parks.",
  "Macao SAR, China": "A special administrative region of China across the Pearl River Delta from Hong Kong, known as the 'Las Vegas of Asia' for its massive casinos.",
  "Madagascar": "An enormous island nation off the southeast coast of Africa, home to thousands of animal species, such as lemurs, found nowhere else.",
  "Malawi": "A landlocked country in southeastern Africa characterized by its topography of highlands split by the Great Rift Valley and massive Lake Malawi.",
  "Malaysia": "A Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo, known for its beaches, rainforests, and mix of cultures.",
  "Maldives": "A tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands.",
  "Mali": "A landlocked country in West Africa, historically home to the wealthy Malian Empire and the ancient city of Timbuktu.",
  "Malta": "An archipelago in the central Mediterranean between Sicily and the North African coast, known for historic sites related to a succession of rulers.",
  "Marshall Islands": "A sprawling chain of volcanic islands and coral atolls in the central Pacific Ocean, between Hawaii and the Philippines.",
  "Mauritania": "A country in Northwest Africa largely covered by the Sahara Desert, bridging the Maghreb and western Sub-Saharan Africa.",
  "Mauritius": "An Indian Ocean island nation known for its beaches, lagoons, and reefs, as well as a mountainous interior.",
  "Mexico": "A country in the southern portion of North America featuring diverse landscapes from mountains and deserts to tropical jungles.",
  "Micronesia, Fed. Sts.": "A country spread across the western Pacific Ocean comprising more than 600 islands split into four states.",
  "Moldova": "An Eastern European country and former Soviet republic featuring varied terrain including forests, rocky hills, and vineyards.",
  "Monaco": "A sovereign city-state and microstate on the French Riviera, known for its upscale casinos, yacht-lined harbor, and prestigious Grand Prix motor race.",
  "Mongolia": "A vast, landlocked nation bordered by China and Russia, known for its expansive, rugged expanses and nomadic culture.",
  "Montenegro": "A Balkan country with rugged mountains, medieval villages, and a narrow strip of beaches along its Adriatic coastline.",
  "Morocco": "A North African country bordering the Atlantic Ocean and Mediterranean Sea, distinguished by its Berber, Arabian, and European cultural influences.",
  "Mozambique": "A southern African nation with a long Indian Ocean coastline dotted with popular beaches and offshore marine parks.",
  "Myanmar": "A Southeast Asian nation bordering India, Bangladesh, China, Laos, and Thailand, encompassing over 100 ethnic groups.",
  "Namibia": "A country in southwest Africa distinguished by the Namib Desert along its Atlantic Ocean coast.",
  "Nauru": "A tiny island country in Micronesia, northeast of Australia, featuring a coral reef and palm-fringed beaches.",
  "Nepal": "A landlocked nation in South Asia nestled in the Himalayas, home to Mount Everest and historic temples.",
  "Netherlands": "A country in northwestern Europe known for a flat landscape of canals, tulip fields, windmills, and cycling routes.",
  "New Caledonia": "A French territory comprising dozens of islands in the South Pacific, known for its massive barrier reef and biodiversity.",
  "New Zealand": "A country in the southwestern Pacific Ocean consisting of two main landmasses and numerous smaller islands, famous for its dramatic scenery.",
  "Nicaragua": "Set between the Pacific Ocean and the Caribbean Sea, it is a Central American nation known for its dramatic terrain of lakes, volcanoes, and beaches.",
  "Niger": "A landlocked country in West Africa named after the Niger River, largely covered by the Sahara Desert.",
  "Nigeria": "An African country on the Gulf of Guinea with many natural landmarks and wildlife reserves, and the largest population in Africa.",
  "North Macedonia": "A landlocked country in the Balkan Peninsula of Southeast Europe, known for its lakes, mountains, and ancient towns.",
  "Norway": "A Scandinavian country encompassing mountains, glaciers, and deep coastal fjords.",
  "Oman": "A nation on the Arabian Peninsula with terrain encompassing desert, riverbed oases, and long coastlines on the Persian Gulf, Arabian Sea, and Gulf of Oman.",
  "Pakistan": "A country in South Asia known for its diverse geography ranging from southern coastlines to the towering peaks of the Karakoram mountains.",
  "Panama": "A country on the isthmus linking Central and South America, famous for the Panama Canal, an essential shipping route.",
  "Papua New Guinea": "A country in the southwestern Pacific encompassing the eastern half of New Guinea and its offshore islands, known for vast cultural and biological diversity.",
  "Paraguay": "A landlocked country between Argentina, Brazil, and Bolivia, home to large swaths of swampland, subtropical forest, and chaco.",
  "Peru": "A country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains.",
  "Philippines": "A Southeast Asian country in the Western Pacific comprising more than 7,000 islands.",
  "Poland": "An Eastern European country on the Baltic Sea known for its medieval architecture, Jewish heritage, and hearty cuisine.",
  "Portugal": "A southern European country on the Iberian Peninsula, bordering Spain, highly influenced by its Atlantic Ocean coastline.",
  "Puerto Rico (US)": "A Caribbean island and unincorporated U.S. territory with a landscape of mountains, waterfalls, and the El Yunque tropical rainforest.",
  "Qatar": "A peninsular Arab country whose terrain comprises arid desert and a long Persian Gulf shoreline of beaches and dunes.",
  "Romania": "A southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains.",
  "Russian Federation": "The world's largest nation, bordering European and Asian countries as well as the Pacific and Arctic oceans.",
  "Rwanda": "A landlocked East African country with a green, mountainous landscape, renowned for its Volcanoes National Park and mountain gorillas.",
  "Samoa": "A country comprising the westernmost group of the Samoan Islands in Polynesia, known for its reef-bordered beaches and rugged, rainforest-covered interiors.",
  "Sao Tome and Principe": "An African island nation close to the equator, consisting of two main islands renowned for their striking rock formations and rainforests.",
  "Saudi Arabia": "A desert country encompassing most of the Arabian Peninsula, home to Islam's two holiest mosques in Mecca and Medina.",
  "Senegal": "A country on Africa's west coast known for its French colonial heritage and natural attractions.",
  "Serbia": "A landlocked country in the Balkans characterized by its northern plateaus and mountains with ski resorts in the south.",
  "Seychelles": "An archipelago of 115 islands in the Indian Ocean, off East Africa, known for its beaches, coral reefs, and nature reserves.",
  "Sierra Leone": "A West African country on the Atlantic Ocean known for the white-sand beaches lining the Freetown Peninsula.",
  "Singapore": "An island city-state off southern Malaysia, serving as a global financial center with a tropical climate and multicultural population.",
  "Sint Maarten (Dutch part)": "A constituent country of the Kingdom of the Netherlands, taking up the southern half of a Caribbean island shared with France.",
  "Slovak Republic": "A landlocked country in Central Europe known for its dramatic natural landscape and numerous castles.",
  "Slovenia": "A Central European country known for its mountains, ski resorts, and lakes, including the glacial Lake Bled.",
  "Solomon Islands": "A sovereign state consisting of six major islands and over 900 smaller islands in Oceania, to the east of Papua New Guinea.",
  "Somalia, Fed. Rep.": "A country located in the Horn of Africa, holding the longest coastline on Africa's mainland.",
  "South Africa": "A country on the southernmost tip of the African continent, marked by several distinct ecosystems and a diverse population.",
  "Spain": "A country on Europe's Iberian Peninsula, including 17 autonomous regions with diverse geography and cultures.",
  "Sri Lanka": "An island nation south of India in the Indian Ocean, featuring diverse landscapes from rainforest and arid plains to highlands and sandy beaches.",
  "St. Kitts and Nevis": "A dual-island nation situated between the Atlantic Ocean and Caribbean Sea, known for cloud-fringed mountains and beaches.",
  "St. Lucia": "An Eastern Caribbean island nation featuring a pair of dramatically tapered mountains, the Pitons, on its west coast.",
  "St. Vincent and the Grenadines": "A southern Caribbean nation comprising a main island and a chain of smaller islands, known for major sailing destinations.",
  "Sudan": "A country in Northeast Africa bordered by the Red Sea, falling within both the Sahel and North African regions.",
  "Suriname": "A small country on the northeastern coast of South America, defined by vast swaths of tropical rainforest and Dutch colonial architecture.",
  "Sweden": "A Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains.",
  "Switzerland": "A mountainous Central European country, home to numerous lakes, villages, and the high peaks of the Alps.",
  "Tajikistan": "A highly mountainous, landlocked country in Central Asia, bordered by Afghanistan, Uzbekistan, Kyrgyzstan, and China.",
  "Tanzania": "An East African country known for its vast wilderness areas, including the plains of Serengeti National Park and Kilimanjaro National Park.",
  "Thailand": "A Southeast Asian country known for tropical beaches, opulent royal palaces, ancient ruins, and ornate temples.",
  "Timor-Leste": "Also known as East Timor, an island country in Southeast Asia occupying half the island of Timor.",
  "Togo": "A West African nation on the Gulf of Guinea known for its palm-lined beaches and hilltop villages.",
  "Trinidad and Tobago": "A dual-island Caribbean nation near Venezuela, known for its distinctive Creole traditions and cuisines.",
  "Tunisia": "A North African country bordering the Mediterranean Sea and Sahara Desert, featuring ancient ruins like those of Carthage.",
  "Turkiye": "A transcontinental country straddling Eastern Europe and Western Asia, holding a unique position intersecting various ancient cultures.",
  "Turkmenistan": "A country in Central Asia bordered by the Caspian Sea, largely covered by the Karakum Desert.",
  "Turks and Caicos Islands": "A British Overseas Territory southeast of the Bahamas consisting of low-lying coral islands known for luxury tourism.",
  "Uganda": "A landlocked country in East Africa whose diverse landscape encompasses the snow-capped Rwenzori Mountains and immense Lake Victoria.",
  "Ukraine": "A large country in Eastern Europe known for its Orthodox churches, Black Sea coastline, and forested mountains.",
  "United Arab Emirates": "A nation on the Arabian Peninsula consisting of seven emirates, known for its modern architecture and luxury shopping.",
  "United Kingdom": "An island nation in northwestern Europe made up of England, Scotland, Wales, and Northern Ireland.",
  "United States": "A country composed of 50 states, primarily located in central North America, with significant global cultural and economic influence.",
  "Uruguay": "A South American country known for its verdant interior and beach-lined coast.",
  "Uzbekistan": "A Central Asian nation and former Soviet republic, known for its mosques, mausoleums, and other sites linked to the Silk Road.",
  "Vanuatu": "A South Pacific Ocean nation made up of roughly 80 islands that stretch across 1,300 kilometers.",
  "Venezuela, RB": "A country on the northern coast of South America with diverse natural attractions ranging from Andean peaks to Caribbean coastline.",
  "Viet Nam": "A Southeast Asian country on the South China Sea known for its beaches, rivers, Buddhist pagodas, and bustling cities.",
  "West Bank and Gaza": "The Palestinian territories comprising two distinct land areas in the Middle East, rich with religious and historical significance.",
  "Zambia": "A landlocked country in southern Africa known for its rugged terrain, diverse wildlife, and sharing the Victoria Falls with Zimbabwe.",
  "Zimbabwe": "A landlocked southern African country known for its dramatic landscape and diverse wildlife, sharing the Victoria Falls with Zambia."
};

const Details = () => {
    // 1. Extract state safely
    const location = useLocation();
    const country = location?.state;
    console.log(country.name)

    // 2. Safety fallback if user refreshes the page
    if (!country) {
        return (
            <div className="details-error">
                <h2>No data found.</h2>
                <Link to="/" className="back-link">← Return to Dashboard</Link>
            </div>
        );
    }

    return (
        <div className="details-container">
            <header className="details-header">
                <Link to="/" className="back-link">← Back to Dashboard</Link>
                <h1 className="app-title">Macroeconomics Detective</h1>
            </header>

            <main className="details-content">
                <h2 className="country-title">{country.name}</h2>
                
                {/* Wrap the numerical cards in our existing grid layout */}
                <div className="stats-container">
                    <Card 
                        text={"GDP Per Capita"} 
                        prop={`$${Math.round(country.gdp).toLocaleString()}`}
                    />
                    <Card 
                        text={"Electricity Access"} 
                        prop={`${country.elec.toFixed(2)}%`}
                    />
                    <Card 
                        text={"Population"} 
                        prop={country.pop.toLocaleString()}
                    />
                </div>

                {/* A dedicated, wider box for the text description */}
                <div className="description-box">
                    <h3>About {country.name}</h3>
                    <p>
                        {/* Assuming your descriptions object maps like: descriptions["Brazil"].description */}
                        {descriptions[country.name] || "No description available."}
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Details;