export const people = {
    name: 'people',
    title: 'Personer',
    type: 'document',
    fields: [
        {name:'Fullname', title:'Fullt navn', type: 'string'},
        {name: "image", title: "Bilde", type: "image"}
    ]
}

export default people
//alle må ha name for at sanity skal kunne lese filen, filen skal være skrevt i små bokstaver og ha underscore 
//fields/fleter er en array av hvilke objekter man skal bruke