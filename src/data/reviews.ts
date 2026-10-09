// Real Google reviews for Wayco Construction, Inc. (verbatim; sourced from the public Google Business Profile listing).
// Rating shown on site: 4.8 from 23 Google reviews (see site.ts). Refresh with `npm run reviews` once a Places API key is set, or edit by hand.
export type Review = {
  id: string;
  author: string;
  badge?: string;          // e.g. "Local Guide"
  when: string;            // relative time as shown on Google when captured (Oct 2026)
  text: string;
  excerpt: string;         // exact sentence(s) from `text`
  tags: ('kitchen' | 'bathroom' | 'remodel' | 'commercial' | 'rebuild' | 'property' | 'exterior' | 'gc')[];
  featured?: boolean;
  response?: string;       // owner response
};

export const reviews: Review[] = [
  {
    id: 'hampton',
    author: 'Danielle Hampton',
    when: '5 months ago',
    text: 'We recently completed a major remodel with Wayco Construction that included fully gutting and remodeling two bathrooms as well as updating our hallway, and we truly could not be happier with the outcome.\n\nFrom start to finish, the entire team was knowledgeable, communicative, and incredibly easy to work with. As with any large renovation project, there were changes and adjustments along the way, and they handled every pivot with professionalism and patience. They really helped bring our vision to life.\n\nWhat stood out most throughout this entire process was the professionalism and respect shown by every contractor and subcontractor involved. These men were essentially part of our home for five months — November through April — and every single person who came through our doors was kind, respectful, hardworking, and considerate of our family and children.\n\nWe are so grateful for the care and craftsmanship that went into this project and would absolutely recommend Wayco Construction to anyone looking for a team they can trust with their home.',
    excerpt: 'The entire team was knowledgeable, communicative, and incredibly easy to work with. As with any large renovation project, there were changes and adjustments along the way, and they handled every pivot with professionalism and patience.',
    tags: ['bathroom', 'remodel'],
    featured: true,
  },
  {
    id: 'olveda',
    author: 'Brian Olveda',
    badge: 'Local Guide',
    when: '3 years ago',
    text: "We just finished a kitchen renovation and are extremely happy with the results. Josh, Rob, Billie, and the rest of the Team were responsive, helpful, and professional right from day one. Wayco came in and gave us a bid with some great options. Once we got started they provided design assistance and recommendations and made sure all our questions were answered. As with any project on a 70+ year old home we ran into a few surprises along the way but Wayco kept us informed and worked with us to keep on track. Now that the kitchen is done I honestly don't know we made it so long in our old kitchen, we ended up with something that exceeded our expectations. We have a couple more projects planned for the future and will absolutely be reaching out to Wayco again.",
    excerpt: 'Josh, Rob, Billie, and the rest of the Team were responsive, helpful, and professional right from day one. As with any project on a 70+ year old home we ran into a few surprises along the way but Wayco kept us informed and worked with us to keep on track.',
    tags: ['kitchen'],
    featured: true,
  },
  {
    id: 'todd',
    author: 'Timothy Todd',
    when: '10 months ago',
    text: 'We just completed a full kitchen remodel with Wayco Construction and we couldn’t possibly be more pleased with the outcome! Right from the start, the first time Josh Coit came out and looked at our project, we felt like we were in great hands. Josh, along with his team, were there during every step of the process, keeping us updated with the schedule and helping us make the important choices and decision along the way. They gave us a schedule for how long the project would take, and they really nailed it. They set the expectations all along and followed through on every detail as they said they would. We would definitely recommend Wayco Construction to our friends and family, and are, in fact, planning to work with Josh and his team in the very near future on a bathroom remodel.',
    excerpt: 'They gave us a schedule for how long the project would take, and they really nailed it. They set the expectations all along and followed through on every detail as they said they would.',
    tags: ['kitchen'],
    featured: true,
  },
  {
    id: 'muldoon',
    author: 'Michael Muldoon',
    when: '2 years ago',
    text: 'Wayco was amazing. They were way more than just a contractor and team, they truly cared about us.\nWe lost our home to a fire in December of 2022 and we were devastated by the loss of everything.\nJosh Coit was who came to our rescue and helped us navigate all the many trials, and there were a multitude of them.\nOur home was finished and we moved in on April 10th 2024. It is beyond beautiful and I want to thank Josh and Billie for holding my hand through it all. I want to thank Chad, Rob and Andy for all the time and care they put in to making our home so beautiful.\nYes we would use them again.',
    excerpt: 'They were way more than just a contractor and team, they truly cared about us. Our home was finished and we moved in on April 10th 2024. It is beyond beautiful.',
    tags: ['rebuild'],
    featured: true,
  },
  {
    id: 'barron',
    author: 'Joanne Barron',
    badge: 'Local Guide',
    when: 'a year ago',
    text: 'Wayco Construction performed an extensive interior and exterior remodel for us back in 2022. It involved 3 bathrooms, two bedrooms, a kitchen, family room/media center and wrap-around front deck. The craftsmanship has held up and their warranty response was always superior. We recently called them back to add a large pergola to our back deck and, again, the craftsmanship was top quality. The Wayco staff is very professional.',
    excerpt: 'The craftsmanship has held up and their warranty response was always superior. We recently called them back to add a large pergola to our back deck and, again, the craftsmanship was top quality.',
    tags: ['remodel', 'exterior'],
    featured: true,
  },
  {
    id: 'denue',
    author: 'Brittany Denue',
    badge: 'Local Guide',
    when: '3 years ago',
    text: 'I had the absolute pleasure of working with Josh, Rob and Billie during the build out of our new Dermatology and Plastic Surgery medical office in La Jolla and I couldn’t be happier with the results! From the beginning to the final walkthrough, the professionalism and dedication of the team were truly impressive. The attention to detail was outstanding, ensuring that every aspect of our office was constructed to the highest standards.\n\nNot only did they deliver an aesthetically pleasing space, but their communication throughout the project was impeccable. They kept us informed at every step, addressing any questions or concerns promptly. This level of transparency and collaboration made the process smooth.\n\nI want to extend my heartfelt appreciation to Josh and the entire team for their dedication and commitment to excellence. Our new office is a testament to their skill and hard work. I wholeheartedly recommend Josh and his team to anyone in need of construction services. Thank you for a job well done!',
    excerpt: 'Their communication throughout the project was impeccable. They kept us informed at every step, addressing any questions or concerns promptly.',
    tags: ['commercial'],
    featured: true,
  },
  {
    id: 'marengo',
    author: 'Claude Anthony Marengo',
    badge: 'Marengo Morton Architects Inc.',
    when: '2 months ago',
    text: 'Reasonable price\nWayco construction comes with a lot of integrity and experience. Every commercial job we have done with them has been a collaborative effort with respect and communication. What they bring to the table is always professional and keeps the budget and the job in mind to deliver a favorable product ... we always look to put Wayco on our team ....C.A. Marengo Marengo Morton Architects Inc.',
    excerpt: 'Every commercial job we have done with them has been a collaborative effort with respect and communication. What they bring to the table is always professional and keeps the budget and the job in mind.',
    tags: ['commercial', 'gc'],
    featured: true,
  },
  {
    id: 'pinard',
    author: 'Kiersten Pinard',
    when: '2 months ago',
    text: "We had a damaged tub/shower at one of our rentals that needed to be replaced, and Wayco was great to work with. They removed the old tub and shower, installed a new tub and surround, repaired the drywall and painted everything. The whole project was completed quickly and the work looks great.\n\nCommunication was easy, they worked around our renters' schedule, and we were really happy with the price. Great quality work at a very fair price, which can be hard to find with home projects!\n\nWe'll definitely be using them going forward for projects at our rental and anything that comes up at our own house.",
    excerpt: "Communication was easy, they worked around our renters' schedule, and we were really happy with the price. Great quality work at a very fair price, which can be hard to find with home projects!",
    tags: ['bathroom', 'property'],
    featured: true,
  },
  {
    id: 'rinehart',
    author: 'Jim Rinehart',
    when: 'a year ago',
    text: 'These guys are awesome as a GC! We used them on a medium sized job and just hired them for a huge project and they were honest, on time, trustworthy, and found savings for us. They are my go to GC recomendation!',
    excerpt: 'They were honest, on time, trustworthy, and found savings for us. They are my go to GC recomendation!',
    tags: ['gc'],
  },
  {
    id: 'elliott',
    author: 'Eric Elliott',
    when: '2 years ago',
    text: 'Josh Coit, and all of the team at Wayco Construction, were very professional and helpful. We had a major remodeling project and Josh and his team kept us informed at every turn and went above and beyond to make sure we knew what was happening every step of the way. Their suggestions were reasonable, and they made every attempt to keep costs within our budget without compromising the integrity of the project. They welcomed us into their showroom and helped us make decisions regarding color, texture, and design.',
    excerpt: 'They made every attempt to keep costs within our budget without compromising the integrity of the project. They welcomed us into their showroom and helped us make decisions regarding color, texture, and design.',
    tags: ['remodel'],
  },
  {
    id: 'podgurski',
    author: 'Emily Podgurski',
    badge: 'Local Guide',
    when: '3 years ago',
    text: 'As a property manager I am always looking for great vendors and was very happy to find Wayco. Their workmanship is always A plus. The prices are fair and they have a strong level of professionalism at all times! I highly recommend!',
    excerpt: 'As a property manager I am always looking for great vendors and was very happy to find Wayco. Their workmanship is always A plus. The prices are fair.',
    tags: ['property'],
  },
  {
    id: 'marx',
    author: 'Jessica Marx',
    when: '2 years ago',
    text: 'As a subcontractor we are very selective in which builders we will partner with. Wayco\'s attention to detail, communication and loyalty their clients is top notch. They are industry experts who walk through every detail of the process with their clients which is hard to find. They have built a solid team and you are in great hands when they lead your project. Highly recommend',
    excerpt: 'As a subcontractor we are very selective in which builders we will partner with. Wayco\'s attention to detail, communication and loyalty their clients is top notch.',
    tags: ['gc'],
  },
  {
    id: 'finch',
    author: 'Dan Finch',
    badge: 'WEG Engineering',
    when: '2 years ago',
    text: 'Wayco is very organized, schedule driven and a pleasure to work with. WEG Engineering looks forward to a long lasting relationship with this highly motivated firm.',
    excerpt: 'Wayco is very organized, schedule driven and a pleasure to work with.',
    tags: ['commercial', 'gc'],
  },
  {
    id: 'walker',
    author: 'Ken Walker',
    when: '2 years ago',
    text: 'I found all the people involved in my remodel project, to be very knowledgeable of all aspects of what I needed done. the communication between myself and Wayco was spot on, and they were always helpful, I would like to give a big shout out to Josh, Billie, and Chad for all the expertise that they put into this project.',
    excerpt: 'The communication between myself and Wayco was spot on, and they were always helpful.',
    tags: ['remodel'],
  },
  {
    id: 'stewart',
    author: 'Mickie Stewart',
    when: '3 years ago',
    text: 'Very pleased with Wayco Construction. The team was great and we loved Rob. Would definitely recommend them. Love love love the bathroom shower. Floors are beautiful and my kitchen feels updated and very usable drawers. Thanks Josh for making this happen.',
    excerpt: 'Love love love the bathroom shower. Floors are beautiful and my kitchen feels updated and very usable drawers.',
    tags: ['kitchen', 'bathroom'],
  },
  {
    id: 'johnson',
    author: 'Adrienne Johnson',
    when: '4 years ago',
    text: 'We have used Wayco Construction for two (so far) projects. One was a whole kitchen re-design and remodel, the other was a bathroom remodel. The professionalism and quality of Wayco is unsurpassed. Constant and clear communication between the house owner and their employees. Courteous and budget friendly. Thank you Wayco!',
    excerpt: 'Constant and clear communication between the house owner and their employees. Courteous and budget friendly.',
    tags: ['kitchen', 'bathroom'],
  },
  {
    id: 'mcneill',
    author: 'Karen McNeill',
    when: '4 years ago',
    text: 'I am so happy with my new kitchen. Everyone involved in this project was very helpful and extremely professional. No detail was left undone and the finished project was more than I could have hoped for. I would highly recommend Wayco to anyone looking for a contractor. You will not be disappointed',
    excerpt: 'No detail was left undone and the finished project was more than I could have hoped for.',
    tags: ['kitchen'],
  },
  {
    id: 'ertz',
    author: 'Chris Ertz',
    badge: 'Local Guide',
    when: '4 years ago',
    text: 'These guys do phenomenal work. Josh and team have excellent communication along each step of the process & produce high quality work.',
    excerpt: 'Josh and team have excellent communication along each step of the process & produce high quality work.',
    tags: ['gc'],
  },
  {
    id: 'ng',
    author: 'Katherine Ng',
    when: '3 years ago',
    text: 'Excellent and responsive service. High level of professionalism and quality control. Highly recommend.',
    excerpt: 'Excellent and responsive service. High level of professionalism and quality control.',
    tags: ['gc'],
  },
  {
    id: 'rossini',
    author: 'Eric Rossini',
    when: '4 years ago',
    text: 'Great to work with. They followed through with everything they said they would do and even beyond.',
    excerpt: 'They followed through with everything they said they would do and even beyond.',
    tags: ['gc'],
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
