const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:5432/wmfo');

console.log("Hello World!");
/*
interface dj {
  firstName: string;
  lastName: string;
  tuftsID: number;
}
*/


/* DJ TABLE */
/* Takes a first name string of a dj and returns the id of the dj */

/*
function getUserID(firstName: string): Promise<number> {
    return db.one('SELECT tuftsid FROM dj WHERE firstName = $1', firstName);
}

function getDj(tuftsID: number): Promise<string> {
    return db.one('SELECT firstName FROM dj WHERE tuftsID = $1', tuftsID);
}

function insertDj(firstName: string, lastName: string, djName: string, tuftsID: number, volunteerHours: number, active: boolean) {
    return db.none('INSERT INTO dj(firstName, lastName, djName, tuftsID, volunteerHours, active) VALUES($1, $2, $3, $4, $5, $6)', [firstName, lastName, djName, tuftsID, volunteerHours, active])
    .then(() => {console.log("//////WE INSERTED NEW DJ")});
}
*/

/* INSERTING DATA TO SHOW TABLE */
/* Takes the name of the show and the id of the show and returns nothing */
/*
function insertShow(name:string, showID: number, day: number, hour: number, length: number, alternating: boolean) {
    return db.none('INSERT INTO show(name, showid, day, hour, length, alternating) VALUES($1, $2, $3, $4, $5, $6)', [name, showID, day, hour, length, alternating])
    .then(() => {console.log("//////////inserted show")});

}
*/
function getShow(id: number) {
    return db.one('SELECT name FROM show WHERE showID = $1', id);
}
export async function printing() {
  try {
  //  await insertShow('WhoIsGoingToWinThePineapple', 1, 1, 1, 1, true);
    const name: string = await getShow(1);
    console.log(name);
  } catch(e){
    console.log("'exception: ' e");
  }
}

/*
export async function printing() {
  try {
    const x: number = await getUserID('Mac');
    console.log(x);
    const name: string = await getDj(12345);
    console.log(name);
  } catch(e){
    console.log("'exception: ' e");
  }
 // insertDj('Nick', 'Metzger', 'NickyMetz', 69, 9, true);
 // await insertShow('Annie', 618);
}
*/

