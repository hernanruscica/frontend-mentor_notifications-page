console.log("from js");

/*DOM variables */
const $d = document;
const $spanNumberUnreads = $d.getElementById("number-unreads");
const $aMarkAsRead = $d.getElementById("mark-as-read");


const foundClasses = (className) => {
    const $classesFounded = $d.querySelectorAll('.' + className);       
    return $classesFounded
}
let nodeClasses = foundClasses("notifications__container__item");
console.log(nodeClasses.length);


const getNumberUnreads = () => {
    let counterUnreads = 0;
    nodeClasses.forEach((element)=> {
        if (element.classList.contains('unread')){
            counterUnreads += 1;
        }
    })
    return counterUnreads;
}
let unreadNotifications = getNumberUnreads();
console.log(unreadNotifications);

const updateNotificationsNumber = () => {
    $spanNumberUnreads.innerHTML = "";
    $spanNumberUnreads.innerHTML = getNumberUnreads();
}

/*

$aMarkAsRead.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click on the Mark all as read button');
    const $classesFounded = $d.querySelectorAll('notifications__container__item');
});
*/