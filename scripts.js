console.log("from js");

/*DOM variables */ 
const $d = document;
const $spanNumberUnreads = $d.getElementById("number-unreads");
const $aMarkAsRead = $d.getElementById("mark-as-read");


const foundClasses = (className) => {
    const $classesFounded = $d.querySelectorAll('.' + className);       
    return $classesFounded
}

const updateNotificationsNumber = () => {
    let $nodeClasses = foundClasses("unread");
    let unreadNotificationsQuantity = $nodeClasses.length;
    $spanNumberUnreads.innerHTML = "";
    $spanNumberUnreads.innerHTML = unreadNotificationsQuantity; 
}

updateNotificationsNumber();

$aMarkAsRead.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click on the Mark all as read button');
    let $unreadNotifications = foundClasses("unread");
    $unreadNotifications.forEach(($notification) => {
        console.log($notification);
        $notification.classList.remove('unread');
        $notification.classList.add('read');
        updateNotificationsNumber();
    });
});
