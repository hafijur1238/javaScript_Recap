var biriyaniFullPrice = 250;
var biriyaniHalfPrice = 130;
var borhaniPrice = 100;
var cockPrice = 25;
var myBudgetAmount = 280;
var biriyaniTestBhalo = false;

// if (biriyaniFullPrice < myBudgetAmount) {
//     console.log('Tahole full Biriyani Khabo')
// }
// else if (biriyaniHalfPrice < myBudgetAmount) {
//     console.log('Tahole Half Biriyani Khabo')
// }
// else if (borhaniPrice < myBudgetAmount) {
//     console.log('Tahole sudu Borhani Khamu')
// }
// else {
//     console.log('Sudu Cock Khamu')
// }

if (biriyaniFullPrice < myBudgetAmount) {
    if (biriyaniTestBhalo == true) {
        console.log('Full Biriyani Khabo')
    }
    else {
        console.log('Tahole Half Biriyaani Khabo')
    }
}