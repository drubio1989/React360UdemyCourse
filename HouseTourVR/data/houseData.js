export default house = {
  House: {
    roomName: 'House',
    info: `
      * 4 bedroom
      * 3 bath
      * Priced at $180,000`,
    adjacentRooms: ['Foyer'],
  },
  Foyer: {
    roomName: 'Foyer' ,
    info: `
      * Wrought iron front door.
      * Elegant etched glass inserts for privacy.
      * Beautiful acrylic chandelier with LED lights.
      * Hall closet for guest's coats and purses or for media storage.
      * Classic non-skid ceramic tile floor.`,
    img: 'foyer.jpg',
    adjacentRooms: ['Dining_Room', 'Living_Room']
  },
  Dining_Room: {
    roomName: 'Dining_Room',
    info:`
      * Elegant chandelier with LED lights.
      * Tiered high ceilings.
      * Wrought iron window for added security.
      * Direct acces to kitchen for convenience.
      * Beautiful tile floor.`,
    img: 'dining_room.jpg',
    adjacentRooms: ['Kitchen', 'Foyer']
  },
  Kitchen: {
    roomName: 'Kitchen',
    info: `
      * Granite counter tops and backsplash (3/4 inch-thick Brazilian Giallo Fiesta).
      * Custom-made island with end drawers and wine bottle storage.
      * Samsung stainless steel appliances.
      * Birchwood custom cabinets and pantry with elegant crown molding.
      * Stainless steel 9" extra deep double sinks with pullout faucet and soap dispenser.
      * Under cabinet and top of cabinet LED lights.`,
    img: 'kitchen.jpg',
    adjacentRooms: ['Living_Room','Breakfast_Nook']
  },
  Breakfast_Nook: {
    roomName: 'Breakfast_Nook',
    info: `
      * Granite top custom-made cabinet
      * Custom wine rack display and storage.
      * Modern chandelier with LED lights.
      * Easy access to backyard when entertaining.
      * Open and spacious.
    `,
    img: 'breakfast_nook.jpg',
    adjacentRooms: ['Backyard','Living_Room','Kitchen', 'Master_Bedroom', 'Laundry_Room']
  },
  Backyard: {
    roomName: 'Backyard',
    info: `
      * Extra large back yard for playground or future pool.
      * Sprinkler system.
      * Beautiful fencing.
      * Mature trees:
        shade: oak, pecan, fresno, acacia, royal poinciana, ficus, ceiba
        fruit: papaya, mango, limes.
      * Entertaining and eating area for backyard barbeques.
    `,
    img: 'backyard.jpg',
    adjacentRooms: ['Breakfast_Nook','Bedroom_One']
  },
  Master_Bedroom: {
    roomName: 'Master_Bedroom',
    info: `
    * Extra large bedroom, allows for sitting area.
    * Tiered cieling or architecture.
    * Quiet ceiling fan and light fixture.
    * Plush neutral taupe carpet.
    * Sliding door for easy access to backyard.`,
    img: 'master_bedroom.jpg',
    adjacentRooms: ['Master_Bathroom','Breakfast_Nook']
  },
  Master_Bathroom:  {
    roomName: 'Master_Bathroom',
    info: `
      * Custom glass shower enclosure.
      * Porcelain bath tiles and travertine molding.
      * Privacy glass block window.
      * Relaxing garden tub with jets.
      * Seperate toilet room for privacy with storage.
      * Double extractor lighted vents.`,
    img: 'master_bathroom.jpg',
    adjacentRooms: ['Master_Bedroom', 'Master_Bathroom_Two']
  },
  Master_Bathroom_Two: {
    roomName: 'Master_Bathroom_Two',
    info: `
      * Custom glass shower enclosure.
      * Porcelain bath tiles and travertine molding.
      * Privacy glass block window.
      * Relaxing garden tub with jets.
      * Seperate toilet room for privacy with storage.
      * Double extractor lighted vents.`,
    img: 'master_bathroom_two.jpg',
    adjacentRooms: ['Master_Bathroom']
  },
  Living_Room: {
    roomName: 'Living_Room',
    info: `
      * Informal sunken family room.
      * Chimney with mantle.
      * Remote controlled ceiling fans.
      * Tiered ceiling.
      * T.V. wall mount/media closet.`,
    img: 'living_room.jpg',
    adjacentRooms: ['Foyer', 'Breakfast_Nook', 'Bedroom_One', 'Bedroom_Two', 'Bedroom_Three','Bathroom_Two']
  },
  Bedroom_One: {
    roomName: 'Bedroom_One',
    info: `
      * Spacious bright and airy room.
      * Perect for guests or mother-in-law.
      * Private bathroom.
      * Built-in bookshelf with elegant crown molding.
      * Large space and wood flooring.
      * Decorative wainscott and chair rail modlings.
    `,
    img: 'bedroom_one.jpg',
    adjacentRooms:['Bathroom_One','Backyard','Living_Room']
  },
  Bathroom_One: {
    roomName: 'Bathroom_One',
    info: `
      * Granite vanity and custom beveled edge mirror.
      * Vanity-Kohler sink and bath fixtures.
      * Elongated Kohler water saver toilet.
      * Kohler glass shower enclosure.
      * Custom ceramic tile and decorative metallic borders.
      * Large custom storage closet.`,
    img: 'bathroom_one.jpg',
    adjacentRooms: ['Bedroom_One']
  },
  Bathroom_Two: {
    roomName: 'Bathroom_Two',
    info: `
      * Marble vanity top with custom beveled-edge mirror.
      * Elegant Kohler sink and bath fixtures.
      * Elongated Kohler water-saver toilet.
      * Custom large storage closet with extra deep shelves.
      * Beautiful ceramic tile shower surround.
      * Kohler glass shower enclosure.`,
    img: 'bathroom_two.jpg',
    adjacentRooms: ['Living_Room', 'Bedroom_Two', 'Bedroom_Three']
  },
  Bedroom_Two: {
    roomName: 'Bedroom_Two',
    info: `
      * Large spacious room for 2-twin or 1-queen bedroom.
      * Neutral taupe plush carpet.
      * Wrought iron window for added security.
      * Two closets.
      * Custom shelving and cabinet.
    `,
    img: 'bedroom_two.jpg',
    adjacentRooms: ['Bedroom_Three','Bathroom_Two']
  },
  Bedroom_Three: {
    roomName: 'Bedroom_Three',
    info: `
      * Large spacious room enough for 2 twin or 1 queen size bed.
      * Lighted ceiling fan fixture.
      * Two closets.
      * Plush neutral taupe carpet.`,
    img: 'bedroom_three.jpg',
    adjacentRooms: ['Bedroom_Two','Bathroom_Two']
  },
  Laundry_Room: {
    roomName: 'Laundry_Room',
    info: `
      * Inside laundry room (washer and dryer negotiable).
      * Extra overhead storage cabinets.
      * Large storage closet.
      * Linen closet with extra deep shelves.`,
    img: 'laundry_room.jpg',
    adjacentRooms: ['Master_Bedroom','Breakfast_Nook', 'Garage']
  },
  Garage: {
    roomName: 'Garage',
    info: `
      * Garage room windows for daylight convenience.
      * Double car garage with anti-slip surface floor.`,
    img: 'garage.jpg',
    adjacentRooms: ['Laundry_Room']
  }
}
